describe('Sol Aware Data Display page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy=zip-input]').type('96740')

        cy.get('[data-cy=go-button]').click()
            .wait(2000)

        cy.intercept('GET', `https://s3.amazonaws.com/dmap-api-cache-ncc-production/20220115/hourly/zip/96740.json`, {
            "uv-data": [
                {
                    "ORDER": 1,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 01 AM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 2,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 02 AM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 3,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 03 AM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 4,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 04 AM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 5,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 05 AM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 6,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 06 AM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 7,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 07 AM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 8,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 08 AM",
                    "UV_VALUE": 1
                    },
                    {
                    "ORDER": 9,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 09 AM",
                    "UV_VALUE": 2
                    },
                    {
                    "ORDER": 10,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 10 AM",
                    "UV_VALUE": 4
                    },
                    {
                    "ORDER": 11,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 11 AM",
                    "UV_VALUE": 6
                    },
                    {
                    "ORDER": 12,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 12 PM",
                    "UV_VALUE": 7
                    },
                    {
                    "ORDER": 13,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/16/2022 01 PM",
                    "UV_VALUE": 7
                    },
                    {
                    "ORDER": 14,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/15/2022 02 PM",
                    "UV_VALUE": 6
                    },
                    {
                    "ORDER": 15,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/15/2022 03 PM",
                    "UV_VALUE": 3
                    },
                    {
                    "ORDER": 16,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/15/2022 04 PM",
                    "UV_VALUE": 1
                    },
                    {
                    "ORDER": 17,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/15/2022 05 PM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 18,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/15/2022 06 PM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 19,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/15/2022 07 PM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 20,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/15/2022 08 PM",
                    "UV_VALUE": 0
                    },
                    {
                    "ORDER": 21,
                    "ZIP": "96740",
                    "DATE_TIME": "JAN/15/2022 09 PM",
                    "UV_VALUE": 0
                    }]
        })
        
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

        cy.get('[data-cy=city-state]')
            .should('exist')
            .contains('JAN 15')
            
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

    it('should allow user to enter their skin type and display the recommended max time of direct sun exposure for that day', () => {
        cy.get('[data-cy=skin-type-input]')
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