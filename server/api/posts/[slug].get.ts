export default defineEventHandler((event) => {
  const slug = event.context.params?.slug
  const db = [{"id": 1, "slug": "projektiranje-vrtova", "title": "Projektiranje vrtova", "excerpt": "Planiranje i oblikovanje prostora prema vašim željama i potrebama.", "date": "2025-08-20", "content": "Projektiranje uključuje analizu terena, biljni izbor i funkcionalni raspored."}, {"id": 2, "slug": "kosnja-travnjak", "title": "Košnja i održavanje travnjaka", "excerpt": "Redovita košnja, uklanjanje korova i opće održavanje.", "date": "2025-08-18", "content": "Za zdrav travnjak važni su ritam košnje i pravilno zalijevanje."}, {"id": 3, "slug": "rad-u-maslinicima", "title": "Rad u maslinicima", "excerpt": "Obrezivanje, gnojidba, navodnjavanje i priprema za berbu.", "date": "2025-08-15", "content": "Maslinici traže sezonske radove i prilagodbu klimatskim uvjetima."}]
  const post = db.find(p => p.slug === slug)
  if (!post) { setResponseStatus(event, 404); return { error: 'Not found' } }
  return { data: post }
})
