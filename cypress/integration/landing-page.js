describe('Sol Aware home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should have a Header component', () => {
        cy.get('[data-cy=header]')
            .should('exist')
    })

    it('should have a logo with site title', () => {
        cy.get('[data-cy=logo')
            .should('exist')
    })

    it('should have 3 navigation links', () => {
        cy.get('[data-cy=nav-bar]')
            .should('exist')
            .should('have.class', 'nav-bar')
    })

    it('should contain three navigation links', () => {
        cy.get('[data-cy=nav-link]')
            .should('have.length', 3)
                
    })
    
    it('should have a ZipInput component', () => {
        cy.get('[data-cy=zipcode-form]')
            .should('exist')
            .should('have.class', 'zipcode-form')
    })

    it('should have the correct elements', () => {

        cy.get('[data-cy=sub-heading]')
            .should('exist')
            .contains('skin health starts with sun knowledge')

        cy.get('[data-cy=zip-input]')
            .should('have.attr', 'placeholder', 'Zip Code')
        
        cy.get('[data-cy=go-button]')
            .should('have.class', 'go-button')
            .contains('Go')
    })

    it('should allow users to enter a zipcode in the field and click the button to navigate to the Data Display page', () => {
        cy.get('[data-cy=zip-input]').type('80207')

        cy.get('[data-cy=go-button]').click()

        cy.get('[data-cy=data-section]')

        cy.go('back')
    })

    it('should have a bottom section with images and text', () => {
        cy.get('[data-cy=small-grid]')
            .should('exist')
            
        cy.get('[data-cy=small-info-section]')
            .should('have.length', 3)

    })

  
})