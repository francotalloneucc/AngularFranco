describe('Mi primera prueba', () => {
    it('Carga correctamente la página de ejemplo', () => {
      cy.visit('http://localhost:4200/') // Colocar la url local o de Azure de nuestro front
      cy.get('h1').should('contain', 'EmployeeCrudAngular') // Verifica que el título contenga "EmployeeCrudAngular"
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.btn').click();
      cy.get('.form-control').clear('ma');
      cy.get('.form-control').type('marcelo barovero');
      cy.get('.btn').click();
      cy.get(':nth-child(15) > :nth-child(2)').click();
      cy.get('tr:last-child > :nth-child(2)').should('have.text', ' marcelo barovero ');
      /* ==== End Cypress Studio ==== */
    })
  })