export const formatDate = (date: string) => 
    new Date(date).toLocaleDateString()

export const formatCurrency = (value: number) => {
    const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    return currency.format(value) 
}

export const formatPercentage = (value: number) => (value * 100).toFixed(2)