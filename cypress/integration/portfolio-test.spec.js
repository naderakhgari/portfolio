describe("test the portfolio", () => {
  it("test the code", () => {
    cy.visit("/");
    cy.get("div[class=header-title]").children("p");

    cy.get("div[class=header-links]>:nth-child(1)")
      .should("have.attr", "href")
      .and("equal", "/");

    cy.get("div[class=header-links]>:nth-child(1) p").contains("Home");

    cy.get("div[class=header-links]>:nth-child(2)")
      .should("have.attr", "href")
      .and("equal", "/contact");

    cy.get("div[class=header-links]>:nth-child(2) p").contains("Contact");

    cy.get("a[id=github]")
      .should("have.attr", "href", "https://github.com/naderakhgari")
      .and("have.class", "nolink");

    cy.get("a[id=linkedin]")
      .should("have.attr", "href", "https://www.linkedin.com/in/nader-akhgari/")
      .and("have.class", "nolink");

    cy.get("a[id=twitter")
      .should("have.attr", "href", "https://twitter.com/AkhgariNader")
      .and("have.class", "nolink");

    // cy.get("a[class=nolink]").should("have.attr", "target", "_blank");
  });
});
