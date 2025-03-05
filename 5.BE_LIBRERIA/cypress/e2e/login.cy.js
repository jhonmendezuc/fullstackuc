describe("formulario de inicio de sesion", () => {
  it("ingresar las credenciales y acceder", () => {
    cy.visit("http://localhost:5173");
    cy.get('input[name="email"]').type("gabriel@gmail.com");
    cy.get('input[name="password"]').type("123");
    cy.get("button[type=submit]").click();
    cy.url().should("include", "/books");
  });
});
