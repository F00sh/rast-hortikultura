// smtp-test.mjs
import 'dotenv/config'
import nodemailer from 'nodemailer'

const host = process.env.SMTP_HOST
const port = Number(process.env.SMTP_PORT || 465)
const secure = String(process.env.SMTP_SECURE || 'true') === 'true'
const user = process.env.SMTP_USER
const pass = process.env.SMTP_PASS
const to = process.env.CONTACT_TO || user

if (!host || !user || !pass) {
    console.error('❌ Nedostaju ENV varijable: SMTP_HOST / SMTP_USER / SMTP_PASS')
    process.exit(1)
}

const transporter = nodemailer.createTransport({
    host,
    port,
    secure, // 465=true (SSL/TLS), 587/25=false (STARTTLS)
    auth: { user, pass },
    tls: {
        servername: host,        // pomaže kod SNI/certifikata
        // rejectUnauthorized: false // OTKOMENTIRAJ SAMO ZA KRATKI TEST ako cert radi probleme
    }
})

const run = async () => {
    try {
        console.log(`🔎 Verifying SMTP @ ${host}:${port} (secure=${secure}) kao ${user}…`)
        await transporter.verify()
        console.log('✅ SMTP verify OK (auth + TLS)')

        const info = await transporter.sendMail({
            from: `"RAST web test" <${user}>`, // na shared hostingu FROM mora biti isti kao user
            to,
            replyTo: user,
            subject: 'SMTP test – RAST',
            text: 'Pozdrav! Ovo je test poruka sa servera.',
        })
        console.log('📨 Poslano! messageId =', info.messageId)
    } catch (err) {
        console.error('❌ SMTP error:')
        console.error({
            name: err?.name,
            code: err?.code,
            command: err?.command,
            response: err?.response,
            message: err?.message
        })
        process.exit(1)
    }
}

run()
