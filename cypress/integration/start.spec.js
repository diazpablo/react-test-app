describe("user interaction", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("have correct page title", () => {
    cy.contains("Hello! I'm Root").should("exist");
  });

  it("must be connected to redux store", () => {
    cy.contains("App is connected to Redux store.").should("exist");
  });
});