import { c as defineEventHandler, e as setResponseStatus } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const _slug__get = defineEventHandler((event) => {
  var _a;
  const slug = (_a = event.context.params) == null ? void 0 : _a.slug;
  const db = [{ "id": 1, "slug": "projektiranje-vrtova", "title": "Projektiranje vrtova", "excerpt": "Planiranje i oblikovanje prostora prema va\u0161im \u017Eeljama i potrebama.", "date": "2025-08-20", "content": "Projektiranje uklju\u010Duje analizu terena, biljni izbor i funkcionalni raspored." }, { "id": 2, "slug": "kosnja-travnjak", "title": "Ko\u0161nja i odr\u017Eavanje travnjaka", "excerpt": "Redovita ko\u0161nja, uklanjanje korova i op\u0107e odr\u017Eavanje.", "date": "2025-08-18", "content": "Za zdrav travnjak va\u017Eni su ritam ko\u0161nje i pravilno zalijevanje." }, { "id": 3, "slug": "rad-u-maslinicima", "title": "Rad u maslinicima", "excerpt": "Obrezivanje, gnojidba, navodnjavanje i priprema za berbu.", "date": "2025-08-15", "content": "Maslinici tra\u017Ee sezonske radove i prilagodbu klimatskim uvjetima." }];
  const post = db.find((p) => p.slug === slug);
  if (!post) {
    setResponseStatus(event, 404);
    return { error: "Not found" };
  }
  return { data: post };
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
