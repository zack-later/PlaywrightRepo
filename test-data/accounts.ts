export function newAccount() {
    return {
        name: `Acme Test Account ${Date.now()}`,
        officePhone: '555-123-4567',
        website: 'https://www.acmetestaccount.com',
        fax: '555-123-4568',
        emailAddress: 'contact@acmetestaccount.com',
        billingAddress: {
            street: '123 Main Street',
            city: 'Springfield',
            state: 'IL',
            postalCode: '62701',
            country: 'USA'
        },
        shippingAddress: {
            street: '456 Industrial Parkway',
            city: 'Springfield',
            state: 'IL',
            postalCode: '62702',
            country: 'USA'
        },
        description: 'Account created by automated Playwright test.',
        accountType: 'Customer',
        industry: 'Technology',
        annualRevenue: '1000000',
        employees: '50',
        memberOf: '',
        campaign: ''
    } as const
}
