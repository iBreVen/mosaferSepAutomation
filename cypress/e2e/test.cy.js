/// <reference types = "Cypress"/>

cy.on("uncaught:exception", (e) => {
  return false;
});

describe("template spec", () => {
  it("passes", () => {
    let websites = [
      "https://www.almosafer.com/en",
      "https://www.almosafer.com/ar",
    ];

    let randomSite = Math.floor(Math.random() * websites.length);

    cy.visit(websites[randomSite]);

    cy.get(".cta__saudi").click();

    cy.get("#uncontrolled-tab-example-tab-hotels").click();

    if (randomSite == 0) {
      cy.get('[data-testid="AutoCompleteInput"]').type("Dubai");
    } else if (randomSite == 1) {
      cy.get('[data-testid="AutoCompleteInput"]').type("دبي");
    }
    cy.wait(1000)
    cy.get("select").select(1).click();
  });
});
