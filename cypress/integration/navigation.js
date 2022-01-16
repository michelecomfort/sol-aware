describe('Navigation links', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    
    })

    it('should have a Header component', () => {
        cy.get('[data-cy=header]')
    })

    it('should have a navigation bar', () => {
        cy.get('[data-cy=nav-bar]').children().should('have.length', 3)

    })
    
    it('should take you to a page that shows information of the UV Guide and its contributing factors', () => {
        cy.get('[data-cy=nav-bar]').children('.uv').click()

        cy.get('[data-cy=uv-guide]')
            .should('exist')
            .should('have.class', 'uv-guide')

        cy.get('[data-cy=contributing-factors-heading]')
            .should('exist')
            .contains('Factors contributing to UV grades')

        cy.get('[data-cy=factors-list]').children()
            .should('exist')
            .should('have.length', 8)
    })

    it('should display the correct amount of contributing factors', () => {
        cy.get('[data-cy=nav-bar]').children('.uv').click()
        
        cy.get('#factors-list li').eq(0)
            .contains('Sun elevation')

        cy.get('#factors-list li').eq(1)
            .contains('Amount of ozone in atmosphere')

        cy.get('#factors-list li').eq(2)
            .contains('Altitude')

        cy.get('#factors-list li').eq(3)
            .contains('Cloud coverage | thickness')

        cy.get('#factors-list li').eq(4)
            .contains('Reflection of elements | snow or rain')

        cy.get('#factors-list li').eq(5)
            .contains('Reflection of varying earth surfaces such as sand')

        cy.get('#factors-list li').eq(6)
            .contains('Reflection of local pollution')

        cy.get('#factors-list li').eq(7)
            .contains('Sun\'s angle')
    })

    it('should take you to a page that displays information on determing your skin type', () => {
        cy.get('[data-cy=nav-bar]').children('.skin-type').click()

        cy.get('[data-cy=skin-type-section]')
            .should('exist')

        cy.get('[data-cy=determining-skin-type-heading]')
            .should('exist')
            .contains('Determining your Skin Type')
        
        cy.get('[data-cy=skin-type-image]')
            .should('exist')
            .should('have.class', 'skin-type-image')

            cy.get('[data-cy=smiling-woman-image]')
            .should('exist')
            .should('have.class', 'smiling-woman-image')
    })

    it('should take you back to the main page with the home link', () => {
        cy.get('[data-cy=nav-bar]').children('.skin-type').click()

        cy.get('[data-cy=nav-bar]').children('.home').click()

        cy.get('[data-cy=zipcode-form]')
            .should('exist')
    })
    
})