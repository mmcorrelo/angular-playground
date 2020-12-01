const faker = require('faker');
const images = [
  faker.image.nature(),
  faker.image.animals(),
  faker.image.business(),
  faker.image.cats(),
  faker.image.city(),
  faker.image.food(),
  faker.image.nightlife(),
  faker.image.fashion(),
  faker.image.people(),
  faker.image.nature(),
  faker.image.sports(),
  faker.image.technics(),
  faker.image.transport()
];

exports.images  = images;
