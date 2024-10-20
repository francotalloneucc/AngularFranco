describe('editEmployeeTest', () => {
    it('Carga correctamente la página de ejemplo', () => {
      cy.visit('http://localhost:4200/') // Colocar la url local o de Azure de nuestro front
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(16) > :nth-child(4) > a > .fa').click();
      cy.get('.form-control').clear('p');
      cy.get('.form-control').type('pedro picapiedras');
      cy.get('.btn').click();
      cy.get(':nth-child(14) > :nth-child(5) > a > .fa').click();
      cy.get(':nth-child(16) > :nth-child(5) > a > .fa').click();
      cy.get(':nth-child(16) > :nth-child(5) > a > .fa').click();
      cy.get(':nth-child(16) > :nth-child(5) > a > .fa').click();
      cy.get(':nth-child(11) > :nth-child(4) > a > .fa').click();
      cy.get('.form-control').clear('p');
      cy.get('.form-control').type('pezzella');
      cy.get('.btn').click();
      /* ==== End Cypress Studio ==== */
    })
  })