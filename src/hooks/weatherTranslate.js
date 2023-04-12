export const WeatherTranslate = (weather) => {
    switch (weather) {
        case 'Rain':
            return 'Chuva'
            break;
        case 'Clouds':
            return 'Nublado'
            break;
        case 'Clear':
            return 'Limpo'
            break;
        case 'Snow':
            return 'Nevando'
            break;
        case 'Drizzle':
            return 'Garoando'
            break;
        case 'Thunderstorm':
            return 'Trovejando'
            break;
        case 'Mist':
            return 'Névoa'
            break;
        case 'Smoke':
            return 'Fumaça'
            break;
        case 'Dust':
            return 'Poeira'
            break;
        case 'Fog':
            return 'Névoa'
            break;
        case 'Tornado':
            return 'Tornado'
            break;
        default:
            return weather;
    }
}