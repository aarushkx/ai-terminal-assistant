export async function convertCurrency({ amount, fromCurrency, toCurrency }) {
    try {
        fromCurrency = fromCurrency.toLowerCase();
        toCurrency = toCurrency.toLowerCase();

        if (fromCurrency === toCurrency) {
            return amount;
        }

        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Failed to fetch exchange rates: ${response.status} ${response.statusText}`
            );
        }

        const data = await response.json();

        if (!data[fromCurrency] || !data[fromCurrency][toCurrency]) {
            return null;
        }

        const exchangeRate = data[fromCurrency][toCurrency];
        const convertedAmount = amount * exchangeRate;

        return convertedAmount;
    } catch (error) {
        return null;
    }
}
