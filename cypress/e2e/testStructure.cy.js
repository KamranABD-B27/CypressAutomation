/// <reference types="cypress" />

describe('Context: My First Tests', () => {
    before(() => {
        //runs once before all test cases in this describe block, like beforeClass in TestNG    
    })
    beforeEach(() => {
        //runs before each test like beforeMethod in TestNG
        cy.clearCookies();
    })
    after(() => {
        //runs once after all tests finished similiar afterClass in TestNG
    })
    afterEach(() => {
        //similar to afterMethod in TestNG
    })
    it('Openinga web application', () => {
        cy.visit('/registration_form');
    })
})