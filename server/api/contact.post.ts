import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event)
  const name = form?.find(f => f.name === 'name')?.data?.toString('utf-8') || ''
  const email = form?.find(f => f.name === 'email')?.data?.toString('utf-8') || ''
  const message = form?.find(f => f.name === 'message')?.data?.toString('utf-8') || ''

  const files = (form || []).filter(f => f.name === 'files' && f.filename).map(f => ({
    filename: f.filename!,
    content: f.data,
    contentType: f.type
  }))

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  })

  await transporter.sendMail({
    from: `RAST Web <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO || 'fooshmoola@gmail.com',
    subject: `Kontakt poruka – ${name || 'Bez imena'}`,
    text: `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`,
    attachments: files
  })

  return { ok: true }
})
