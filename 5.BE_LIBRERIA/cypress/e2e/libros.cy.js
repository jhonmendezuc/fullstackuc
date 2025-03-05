describe("carga de datos desde API", () => {
  it("muestra la lista de libros desde la API-BACKEND", () => {
    cy.intercept("GET", "api/v1/book", {
      fixture: "libros.json",
    }).as("getLibros");
    cy.visit("http://localhost:5173/books");
    //cy.get(".MuiListItem-root").should("have.length", 2);

    //validar que los datos sean correctos
    cy.contains("Cien años de soledad");
    cy.contains("satanas");
  });
});
