describe("Homepage", () => {
  it("can visit the homepage", () => {
    cy.visit("http://localhost:3000");
  });

  it("loads webcam feed", () => {
    cy.visit("http://localhost:3000");
    cy.get("video#Webcam").should("exist")
  } )
});


