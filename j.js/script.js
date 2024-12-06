function convert() {
    const inputTemp = document.getElementById('inputTemp').value;
    const conversionType = document.getElementById('conversionType').value;
    const resultElement = document.getElementById('result');

    if (inputTemp === '') {
        resultElement.textContent = '❌ Prosím, zadej teplotu!';
        resultElement.style.color = 'red';
        return;
    }

    const temp = parseFloat(inputTemp);
    let result = '';
    let color = '';

    switch (conversionType) {
        case 'CtoF':
            result = `${temp} °C = ${(temp * 9 / 5 + 32).toFixed(2)} °F`;
            color = '#ff00ff';
            break;
        case 'FtoC':
            result = `${temp} °F = ${((temp - 32) * 5 / 9).toFixed(2)} °C`;
            color = '#00ffff';
            break;
        case 'CtoK':
            result = `${temp} °C = ${(temp + 273.15).toFixed(2)} K`;
            color = '#00ff00';
            break;
        case 'KtoC':
            result = `${temp} K = ${(temp - 273.15).toFixed(2)} °C`;
            color = '#ff9900';
            break;
        default:
            result = 'Neznámý typ převodu!';
            color = 'red';
    }

    resultElement.textContent = result;
    resultElement.style.color = color;
}
