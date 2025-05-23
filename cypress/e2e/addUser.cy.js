import { loginSequence } from "./login.js";

describe("The Add User Form", () => {
  it("lets us add a user", () => {
    const testdata = {
      name: "Ken Kubiak",
      job: "Professor"
    };

    loginSequence(cy, "ken", "123");

    cy.get('nav a[href="/add"]').click();

    cy.get("form")
      .contains("label", "Name")
      .invoke("attr", "for")
      .then((id) => cy.get(`#${id}`))
      .type(testdata.name);

    cy.get("form")
      .contains("label", "Job")
      .next()
      .type(testdata.job);

    cy.get('input[value="Submit"]').click();

    cy.get('nav a[href="/users"]').click();

    cy.get("tbody > tr:last-child > td:first-of-type").should(
      "contain",
      testdata.name
    );
  });
});
