describe('Sol Aware Data Display page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy=zip-input]').type('96740')
        
        
        cy.get('[data-cy=go-button]').click()
        cy.intercept('GET', `https://s3.amazonaws.com/dmap-api-cache-ncc-production/${getTodayDate()}/hourly/zip/96740.json`, {stateCode: 200, fixture: 'uvData.json'})
            
        
    })

    it('should have a Header component', () => {
        cy.get('[data-cy=header]')
            .should('exist')
    })

    it('should have a Data Display component', () => {
        cy.get('[data-cy=data-section]')
            .should('exist')     
    })

    it('should display all the correct element in the Data Display page', () => {
        cy.get('[data-cy=city-state]')
            .should('exist')
            .contains('KAILUA KONA, HI')

        cy.get('[data-cy=date]')
            .should('exist')
            
        cy.get('[data-cy=max-heading]')
            .should('exist')
            .contains('UV Max')

        cy.get('[data-cy=max-number]')
            .should('exist')
            .contains('7')
    })

    it('should have a safe sun exposure form', () => {
        cy.get('[data-cy=safe-exposure]')
            .should('exist')
    })

    it('should have all the components in the safe sun exposure form', () => {
        cy.get('[data-cy=safe-exposure-heading]')
            .should('exist')
            .contains('Safe Exposure for Skin Type')

        cy.get('[data-cy=skin-type-input]')
            .should('exist')
            .should('have.attr', 'placeholder', 'skin type')
    })

    it('should have the correct options in the skin type datalist', () => {
        cy.get('#skin-type option')
            .should('have.length', 6)

        cy.get('#skin-type option').eq(0)
            .should('have.value', 'Type I')

        cy.get('#skin-type option').eq(1)
            .should('have.value', 'Type II')

        cy.get('#skin-type option').eq(2)
            .should('have.value', 'Type III')

        cy.get('#skin-type option').eq(3)
            .should('have.value', 'Type IV')

        cy.get('#skin-type option').eq(4)
            .should('have.value', 'Type V')

        cy.get('#skin-type option').eq(5)
            .should('have.value', 'Type VI')
    })

    it.only('should allow user to enter their skin type and display the recommended max time of direct sun exposure for that day', () => {
        cy.get('[data-cy=skin-type-input]')
            .wait(2000)
            .type('Type V')
            
        cy.get('[data-cy=exposure-minutes]')
            .contains('Your maximum safe exposure time is 76 minutes.')
    })

    it('should display a chart with current hourly values of uv indices', () => {
        cy.get('[data-cy=hourly-chart-container]')
            .should('exist')
            .should('have.class', 'hourly-chart-container')
    })





})