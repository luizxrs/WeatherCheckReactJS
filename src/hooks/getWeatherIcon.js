import { BsFillSunFill } from 'react-icons/bs' // 01d ou 01n
import { BsFillCloudSunFill } from 'react-icons/bs' // 02d ou 02n
import { BsFillCloudyFill } from 'react-icons/bs' // 03d ou 03n
import { BsFillCloudsFill } from 'react-icons/bs' // 04d ou 04n
import { BsFillCloudRainFill } from 'react-icons/bs' // 09d ou 09n
import { FaCloudSunRain } from 'react-icons/fa' // 10d ou 10n
import { BsFillCloudLightningRainFill } from 'react-icons/bs'; // 11d ou 11n
import { BsSnow2 } from 'react-icons/bs'; // 13d ou 13n
import { RiMistFill } from 'react-icons/ri'; // 50d ou 50n

export const GetWeatherIcon = (id) => {
    switch (id) {
        case '01d':
        case '01n':
            return <BsFillSunFill />;
        case '02d':
        case '02n':
            return <BsFillCloudSunFill />;
        case '03d':
        case '03n':
            return <BsFillCloudyFill />;
        case '04d':
        case '04n':
            return <BsFillCloudsFill />;
        case '09d':
        case '09n':
            return <BsFillCloudRainFill />;
        case '10d':
        case '10n':
            return <FaCloudSunRain />;
        case '11d':
        case '11n':
            return <BsFillCloudLightningRainFill />;
        case '13d':
        case '13n':
            return <BsSnow2 />;
        case '50d':
        case '50n':
            return <RiMistFill />;
        default:
            return null;
    }
}