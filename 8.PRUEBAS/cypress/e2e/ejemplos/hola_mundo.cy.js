describe("Prueba de la página Hola Mundo", () => {
  it("Carga la página correctamente", () => {
    cy.visit("http://127.0.0.1:5500/2.pruebaE2ECypress/index.html");
    cy.contains("Hola Mundo"); // Verifica que el texto está presente
  });

  it("Cambia el texto al hacer clic en el botón", () => {
    cy.visit("http://127.0.0.1:5500/2.pruebaE2ECypress/index.html");
    cy.get("#cambiar-texto").click(); // Simula un clic en el botón
    cy.get("#mensaje").should("have.text", "Nuevo texto"); // Verifica el cambio de texto
  });
});
