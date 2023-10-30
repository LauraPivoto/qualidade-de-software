/// <reference types = "cypress"/>

describe('Criando cenário de teste para o site globalsqa', () => {

    it('Caso de teste: Registrando um usuário da forma correta', () => {
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')

      // primeira opção de teste é essa
      cy.get('.btn-link').click()
      cy.get('#firstName').type("Laura")
      cy.get('#Text1').type("Pivoto")
      cy.get('#username').type("LauraP")
      cy.get('#password').type('123')
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should("contain.text", "Registration successful")
    })
    

    it('Caso de teste: Logando um usuário da forma incorreta', () => {
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('#username').type("LauraP")
      cy.get('#password').type('12')
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should("contain.text", "Username or password is incorrect")
    })

    it('Caso de teste: Registrando um usuário da forma correta através de uma função', () => {
      let createUser = criarUser()
    })
    
})


function criarUser(){

  let hours = new Date().getHours().toString()
  let minutes = new Date().getMinutes().toString()
  let seconds = new Date().getSeconds().toString()

  let user = 'User' + hours + minutes + seconds
  let password = 'password' + hours + minutes + seconds

  let userInfo = [user, password]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type(user)
    cy.get('#Text1').type(user)
    cy.get('#username').type(user)
    cy.get('#password').type(user)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")


    return userInfo
}