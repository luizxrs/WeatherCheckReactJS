import { GlobalStyle } from './GlobalStyles.js';
import {
  Container,
  Header,
  SearchInput,
  SearchButton,
  ContentField,
  WeatherInfoWindow,
  HeaderCityInfo,
  CityTitle,
  TempInfo,
  ActualTemp,
  SubTemperatures,
  MinimalTemp,
  MaximumTemp,
  WeatherInfo,
  WeatherIconWrapper,
  WeatherText,
  WeatherSubText,
  MoreInfo,
  WindSection,
  WindText,
  WindInfo,
  RainSection,
  RainText,
  RainInfo,
  ActualTempElements,
  WeatherSubInfo,
  CloseButton,
  SearchBox,
  ClearAll,
  SaveItems,
  ErrorMessage,
  CloseButtonIcon,
  SearchButtonIcon,
  ClearMessage
} from './AppStyles.js';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { WeatherTranslate } from './hooks/weatherTranslate.js';
import { GetWeatherIcon } from './hooks/getWeatherIcon.js';
import { ThemeProvider } from 'styled-components';
import blue from './styles/themes/blue';

function App() {
  const [data, setData] = useState([])
  const [cityName, setCityName] = useState('')
  const [response, setResponse] = useState(true)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [showClearMessage, setShowClearMessage] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [weatherIcon, setWeatherIcon] = useState('')

  const saveTabs = () => {
    localStorage.setItem('tabs', JSON.stringify(data))
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_BR&appid=c2b2ebb773ffc213cf4235c8a208f775`

  const handleKeyPress = (e) => {
    setWeatherIcon('BsFillSunFill')
    if (e.key === 'Enter') {
      searchCity()
      console.log(data)
    }
  }

  useEffect(() => {
    if (cityName.length > 0) setShowErrorMessage(false);
  }, [cityName]);

  
  useEffect(() => {
    //Verificar local storage e setar no set data
    //const itensSalvos = JSON.parse(localStorage.getItem("tabs"))
    //setData()
    // const savedData = JSON.parse(localStorage.getItem("tabs"));
    // setData(savedData)
  }, []);


  const searchCity = () => {
    if (!cityName) {
      setShowErrorMessage(true);
      setErrorText('Preencha o campo!')
      return
    }
    axios.get(url).then((response) => {
      setData(prevData => [...prevData, response.data])
    }).catch((e) => {
      setShowErrorMessage(true);
      setErrorText('Lugar inválido!')
      setResponse(false)
    })
    setCityName('')
  }

  const removeCard = (item) => {
    setData(prevData => prevData.filter((_, index) => index !== item))
  }

  const clearData = () => {
    setShowClearMessage(true)
    setData([])
    setTimeout(() => {
      setShowClearMessage(false)
    }, 2000)
  }

  return (
    // <ThemeProvider theme={blue}>
      <Container>
        <GlobalStyle />
        <Header>
          <SaveItems
            onClick={() => saveTabs()}
          >Salvar</SaveItems>
          <ErrorMessage
            show={showErrorMessage}
          >{errorText}</ErrorMessage>
          <SearchBox>
            <SearchInput placeholder='Digite uma cidade!'
              value={cityName}
              onChange={event => setCityName(event.target.value)}
              onKeyPress={handleKeyPress}
            />
            <SearchButton
              onClick={() => searchCity()}
            >
              <SearchButtonIcon />
            </SearchButton>
          </SearchBox>

          <ClearAll onClick={() => clearData()}>
            Limpar
            <ClearMessage show={showClearMessage}>Limpo!</ClearMessage></ClearAll>
        </Header>
        <ContentField>
          {data.length > 0 ? (data.map((info, index) => {
            return (
                <WeatherInfoWindow>
                  <CloseButton
                    onClick={() => { removeCard(index) }}><CloseButtonIcon />
                  </CloseButton>
                  <HeaderCityInfo>
                    <CityTitle>{info.main ? info.name : "Carregando"}</CityTitle>
                  </HeaderCityInfo>
                  <TempInfo>
                    <ActualTemp>
                      {info.main ? ((info.main.temp)).toFixed(1) : "00"}
                      <ActualTempElements>°C</ActualTempElements>
                    </ActualTemp>
                    <SubTemperatures>
                      <MaximumTemp>Máxima: {info.main ? ((info.main.temp_max)).toFixed(1) : "00"}º C</MaximumTemp>
                      <MinimalTemp>Mínima: {info.main ? ((info.main.temp_min)).toFixed(1) : "00"}º C</MinimalTemp>
                    </SubTemperatures>
                  </TempInfo>
                  <WeatherInfo>
                    <WeatherIconWrapper>{GetWeatherIcon(info?.weather[0]?.icon)}</WeatherIconWrapper>
                    <WeatherSubInfo>
                      <WeatherText>{info.main ? WeatherTranslate(info.weather[0].main) : "00"}</WeatherText>
                      <WeatherSubText>{info.main ? info.weather[0].description : "00"}</WeatherSubText>
                    </WeatherSubInfo>
                  </WeatherInfo>
                  <MoreInfo>
                    <WindSection>
                      <WindText>Vento</WindText>
                      <WindInfo>{info.main ? `${info.wind.speed} km/h` : '00'}</WindInfo>
                    </WindSection>
                    <RainSection>
                      <RainText>Chuva</RainText>
                      <RainInfo>{info.rain ? `${info.rain['1h']}mm/h` : 'S/ Chuva'}</RainInfo>
                    </RainSection>
                  </MoreInfo>
                </WeatherInfoWindow>
            )
          })) : (<></>)}
        </ContentField>
      </Container>
    // </ThemeProvider>
  );
}

export default App;
