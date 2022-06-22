const { animal, dog, cat } = require("../src/animals");

describe("The eats method should return", () => {
  it("'Food' string in the dog class", () => {
    expect(dog.eats()).toEqual("Food");
  });
  it("'Food' string in the cat class", () => {
    expect(cat.eats()).toEqual("Food");
  });
});
describe("The sounds method should return", () => {
  it("'Bark' string in the dog class", () => {
    expect(dog.sounds()).toEqual("Bark");
  });
  it("'Meow' string in the cat class", () => {
    expect(cat.sounds()).toEqual("Meow");
  });
});
