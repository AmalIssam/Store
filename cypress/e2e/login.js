/// <reference types= "Cypress"/>
describe('visit the website', () => {
    it('', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()

        cy.get('#ContactUsFrm_first_name').type("Amal Issam")
        cy.get('#ContactUsFrm_email').type("rya.shms@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("Hello Im a new user")
        cy.get('button[class="btn btn-primary lock-on-click"]').click()
        //cy.get('هون ببحث عنها ').should('have.text',"هون بكتب النص ")
        
    });
});