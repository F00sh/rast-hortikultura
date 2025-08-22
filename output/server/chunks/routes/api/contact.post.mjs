import { c as defineEventHandler, r as readMultipartFormData } from '../../_/nitro.mjs';
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
  var _a, _b, _c, _d, _e, _f;
  const form = await readMultipartFormData(event);
  const name = ((_b = (_a = form == null ? void 0 : form.find((f) => f.name === "name")) == null ? void 0 : _a.data) == null ? void 0 : _b.toString("utf-8")) || "";
  const email = ((_d = (_c = form == null ? void 0 : form.find((f) => f.name === "email")) == null ? void 0 : _c.data) == null ? void 0 : _d.toString("utf-8")) || "";
  const message = ((_f = (_e = form == null ? void 0 : form.find((f) => f.name === "message")) == null ? void 0 : _e.data) == null ? void 0 : _f.toString("utf-8")) || "";
  const files = (form || []).filter((f) => f.name === "files" && f.filename).map((f) => ({
    filename: f.filename,
    content: f.data,
    contentType: f.type
  }));
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
  await transporter.sendMail({
    from: `RAST Web <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO || "fooshmoola@gmail.com",
    subject: `Kontakt poruka \u2013 ${name || "Bez imena"}`,
    text: `Ime: ${name}
Email: ${email}

Poruka:
${message}`,
    attachments: files
  });
  return { ok: true };
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map
