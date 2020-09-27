const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UConn";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("addRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UConn");
  expect(e.addRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UConn";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.addSchool()).toBe(testValue);
});
