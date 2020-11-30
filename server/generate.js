const faker = require('faker');
const database = {
  products: [],
  users: [],
};

for (let i = 1; i <= 10; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()
  });
}

for (let i = 1; i <= 10; i++) {
  database.users.push({
    id: i,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobArea: faker.name.jobArea(),
    jobType: faker.name.jobType(),
    address: faker.address.streetAddress()
  });
}

console.log(JSON.stringify(database));
