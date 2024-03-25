import { faker } from "@faker-js/faker";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
function generateMockCategories(count) {
  const categories = [];
  const imageCategories = [
    "abstract",
    "animals",
    "business",
    "cats",
    "city",
    "food",
    "nature",
  ];

  for (let i = 0; i < count; i++) {
    const category = {
      id: faker.string.uuid(), // Generate unique IDs
      name: faker.commerce.department(), // Use commerce department for category names
      image: faker.image.url(),
    };
    categories.push(category);
  }

  return categories;
}
// Define mock responses for registration, login, and category list endpoints
mock.onPost("/api/register").reply(200, { success: true });
mock.onPost("/api/login").reply(200, { token: faker.string.uuid() });
mock.onGet("/api/categories").reply(200, {
  data: generateMockCategories(100), // Use faker.js to generate category data
});
export default mock;
