import { c as defineEventHandler, r as readMultipartFormData, e as createError, u as useRuntimeConfig } from '../../_/nitro.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const contact_post = defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event);
  if (!form) throw createError({ statusCode: 400, statusMessage: "Bad Request" });
  const getText = (key) => {
    var _a;
    return (_a = form.find((f) => f.name === key && typeof f.data === "string")) == null ? void 0 : _a.data;
  };
  const name = (getText("name") || "").trim();
  const email = (getText("email") || "").trim();
  const message = (getText("message") || "").trim();
  const files = form.filter(
    (f) => f.name === "files" && f.filename && f.type && Buffer.isBuffer(f.data)
  );
  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: "Nedostaju polja." });
  }
  const cfg = useRuntimeConfig();
  const host = cfg.smtpHost || process.env.NUXT_SMTP_HOST;
  const port = Number(cfg.smtpPort || process.env.NUXT_SMTP_PORT || 465);
  const user = cfg.smtpUser || process.env.NUXT_SMTP_USER;
  const pass = cfg.smtpPass || process.env.NUXT_SMTP_PASS;
  const to = cfg.contactTo || process.env.NUXT_CONTACT_TO;
  if (!host || !port || !user || !pass || !to) {
    throw createError({ statusCode: 500, statusMessage: "SMTP nije konfiguriran." });
  }
  const transporter = nodemailer.createTransport({
    host,
    port,
    // 465 -> SSL/TLS
    secure: true,
    // OBAVEZNO za 465
    auth: { user, pass }
    // Ako bi provider imao čudan cert, kao krajnju mjeru:
    // tls: { rejectUnauthorized: false }
  });
  await transporter.verify();
  const attachments = files.map((f) => ({
    filename: f.filename,
    content: f.data,
    contentType: f.type
  }));
  const subject = `Novi upit s weba \u2013 ${name}`;
  const html = `
    <p><strong>Ime:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Poruka:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;
  const text = `Ime: ${name}
Email: ${email}

Poruka:
${message}`;
  const info = await transporter.sendMail({
    from: `"RAST web upit" <${user}>`,
    to,
    replyTo: email,
    subject,
    html,
    text,
    attachments
  });
  return { ok: true, messageId: info.messageId };
});
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
