import { c as defineEventHandler, r as readFormData, e as createError, u as useRuntimeConfig } from '../../_/nitro.mjs';
import nodemailer from 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const CONTACT_TO = "upiti@rast-hortikultura.hr";
const contact_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  try {
    const form = await readFormData(event);
    const name = String((_a = form.get("name")) != null ? _a : "").trim();
    const email = String((_b = form.get("email")) != null ? _b : "").trim();
    const message = String((_c = form.get("message")) != null ? _c : "").trim();
    const files = Array.from((_d = form.getAll("files")) != null ? _d : []);
    if (!name || !email || !message) {
      throw createError({ statusCode: 400, statusMessage: "Nedostaju obavezna polja." });
    }
    const attachments = await Promise.all(
      files.map(async (f, i) => ({
        filename: f.name || `prilog-${i + 1}`,
        content: Buffer.from(await f.arrayBuffer()),
        contentType: f.type || "application/octet-stream"
      }))
    );
    const config = useRuntimeConfig();
    const port = Number(config.smtpPort || 587);
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port,
      secure: port === 465,
      auth: config.smtpUser && config.smtpPass ? { user: config.smtpUser, pass: config.smtpPass } : void 0
    });
    await transporter.sendMail({
      from: `"RAST Web" <${config.smtpUser || "no-reply@rast-hortikultura.hr"}>`,
      to: CONTACT_TO,
      // ⇦ šalje se na upiti@rast-hortikultura.hr
      replyTo: email,
      // odgovor ide korisniku
      subject: `Kontakt forma \u2013 ${name}`,
      text: `Ime: ${name}
Email: ${email}

Poruka:
${message}`,
      attachments
    });
    return { ok: true };
  } catch (err) {
    throw createError({
      statusCode: (err == null ? void 0 : err.statusCode) || 500,
      statusMessage: (err == null ? void 0 : err.statusMessage) || "Gre\u0161ka pri slanju poruke."
    });
  }
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
