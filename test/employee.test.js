const Employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via addName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.addName()).toBe(testValue);
});

test("Can get id via addId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.addId()).toBe(testValue);
});

test("Can get email via addEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.addEmail()).toBe(testValue);
});

test("addRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.addRole()).toBe(testValue);
});
