// server/api/contact.post.ts
import nodemailer from 'nodemailer'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const form = await readMultipartFormData(event)
  if (!form) throw createError({ statusCode: 400, statusMessage: 'Bad Request' })

  // Helper to coerce any field data to string across adapters (Node/Edge)
  const dataToString = (data: unknown): string => {
    if (typeof data === 'string') return data
    // h3 can yield Buffer or Uint8Array depending on adapter
    if (data instanceof Uint8Array) return Buffer.from(data).toString('utf8')
    if (Buffer.isBuffer(data)) return (data as Buffer).toString('utf8')
    return ''
  }

  const getText = (key: string) => {
    const f = form.find(f => f.name === key)
    return f ? dataToString(f.data) : undefined
  }

  const name = (getText('name') || '').trim()
  const email = (getText('email') || '').trim()
  const message = (getText('message') || '').trim()

  // Normalize files: accept Buffer or Uint8Array
  const files = form.filter(
    f => f.name === 'files' && f.filename && f.type && (Buffer.isBuffer(f.data) || ((f.data as any) instanceof Uint8Array))
  )

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Nedostaju polja.' })
  }

  // ENV / runtime
  const cfg = useRuntimeConfig()
  const host = cfg.smtpHost || process.env.NUXT_SMTP_HOST
  const port = Number(cfg.smtpPort || process.env.NUXT_SMTP_PORT || 465)
  const user = cfg.smtpUser || process.env.NUXT_SMTP_USER
  const pass = cfg.smtpPass || process.env.NUXT_SMTP_PASS
  const to = cfg.contactTo || process.env.NUXT_CONTACT_TO

  if (!host || !port || !user || !pass || !to) {
    throw createError({ statusCode: 500, statusMessage: 'SMTP nije konfiguriran.' })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,                 // 465 -> SSL/TLS
    secure: true,         // OBAVEZNO za 465
    auth: { user, pass }
    // Ako bi provider imao čudan cert, kao krajnju mjeru:
    // tls: { rejectUnauthorized: false }

  })

  await transporter.verify()

  const attachments = files.map(f => ({
    filename: f.filename!,
    content: Buffer.isBuffer(f.data) ? (f.data as Buffer) : Buffer.from(f.data as Uint8Array),
    contentType: f.type
  }))

  const subject = `Novi upit s weba – ${name}`
  const html = `
    <p><strong>Ime:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Poruka:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
  `
  const text = `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`

  // FROM = isti kao user (shared hosting zahtjev)
  const info = await transporter.sendMail({
    from: `"RAST web upit" <${user}>`,
    to,
    replyTo: email,
    subject,
    html,
    text,
    attachments
  })

  return { ok: true, messageId: info.messageId }
})

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
}
