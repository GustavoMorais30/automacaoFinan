describe ('Formulário de Copacabana', () =>{
  beforeEach (() =>{
      cy.visit('http://beta.finanzero.com.br/')
      cy.get('.content-wrapper > .def-sf-clickable').click()
      cy.get('.form--input').type('parati')
      cy.get('.btn').click()
  })

  it('Validar textos na página do inicial',() =>{
    cy.get('.def-sf-secondary').click()
 
})
})