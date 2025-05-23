import { loginSequence } from "./login.js";

describe("The home page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("lets us log in", () => {
    loginSequence(cy, "ken", "123");
    cy.get("tbody").should("not.be.empty");
  });
});
