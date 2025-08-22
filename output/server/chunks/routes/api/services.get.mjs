import { c as defineEventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const services_get = defineEventHandler(() => ({ data: [{ "title": "Projektiranje", "desc": "Idejno rje\u0161enje i izvedbeni plan.", "img": "https://images.unsplash.com/photo-1466593604430-3130e1bdf9d0?q=80&w=800&auto=format&fit=crop" }, { "title": "Travni tepisi", "desc": "Brza ugradnja i savr\u0161en travnjak.", "img": "https://images.unsplash.com/photo-1605027990121-cbae9f4c1c7a?q=80&w=800&auto=format&fit=crop" }, { "title": "Navodnjavanje", "desc": "Automatizirani sustavi i u\u0161teda vode.", "img": "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=800&auto=format&fit=crop" }, { "title": "Odr\u017Eavanje", "desc": "Ko\u0161nja, rezidba, gnojidba, sezonski radovi.", "img": "https://images.unsplash.com/photo-1618148100331-9b2b9093cfd8?q=80&w=800&auto=format&fit=crop" }, { "title": "Sadnja", "desc": "Biljke i stabla \u2013 od nabave do sadnje.", "img": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop" }, { "title": "Maslinici", "desc": "Radovi u maslinicima i \u010Di\u0161\u0107enje terena.", "img": "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=800&auto=format&fit=crop" }, { "title": "Uklanjanje stabala", "desc": "Sigurno uklanjanje i sanacija.", "img": "https://images.unsplash.com/photo-1459715545708-4a9fa2a1f61a?q=80&w=800&auto=format&fit=crop" }, { "title": "Dekorativno ure\u0111enje", "desc": "Lapilo, batud, usitnjena kora.", "img": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop" }] }));

export { services_get as default };
//# sourceMappingURL=services.get.mjs.map
