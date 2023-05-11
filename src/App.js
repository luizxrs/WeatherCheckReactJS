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
  ClearMessage,
  SaveMessage,
  ChangeTheme,
  StyledMenu,
  CloseMenuButton,
  MenuItemsWrapper,
} from './AppStyles.js';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io'
import axios from 'axios'
import { WeatherTranslate } from './hooks/weatherTranslate.js';
import { GetWeatherIcon } from './hooks/getWeatherIcon.js';
import { RiPaintFill } from 'react-icons/ri'
import { ThemeProvider } from 'styled-components';
import Violet from './styles/themes/violet';
import Indigo from './styles/themes/indigo';
import Red from './styles/themes/red';
import Yellow from './styles/themes/yellow';
import Green from './styles/themes/green';
import Orange from './styles/themes/orange';
import Blue from './styles/themes/blue';

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('tabs')) || [])
  const [cityName, setCityName] = useState('')
  const [response, setResponse] = useState(true)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [showClearMessage, setShowClearMessage] = useState(false)
  const [showSaveMessage, setShowSaveMessage] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [weatherIcon, setWeatherIcon] = useState('')
  const [openTheme, setOpenTheme] = useState(false);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || Blue)

  const saveTabs = () => {
    setShowSaveMessage(true)
    localStorage.setItem('tabs', JSON.stringify(data))
    setTimeout(() => {
      setShowSaveMessage(false)
    }, 2000)
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
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        setOpenTheme(false);
      }
    };

    if (openTheme) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [openTheme]);



  useEffect(() => {
    if (cityName.length > 0) setShowErrorMessage(false);
  }, [cityName]);


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
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />

          <StyledMenu isOpen={openTheme}>
            <MenuItemsWrapper isOpen={openTheme}>
              <CloseMenuButton isOpen={openTheme} Color={'rgba(96, 50, 183, 1)'} onClick={() => setTheme(Violet)}></CloseMenuButton>
              <CloseMenuButton isOpen={openTheme} Color={'rgba(77, 0, 219, 1)'} onClick={() => setTheme(Indigo)}></CloseMenuButton>
              <CloseMenuButton isOpen={openTheme} Color={'rgba(114, 134, 211, 1)'} onClick={() => setTheme(Blue)}></CloseMenuButton>
              <CloseMenuButton isOpen={openTheme} Color={'rgba(48, 222, 0, 1)'} onClick={() => setTheme(Green)}></CloseMenuButton>
              <CloseMenuButton isOpen={openTheme} Color={'rgba(237, 206, 0, 1)'} onClick={() => setTheme(Yellow)}></CloseMenuButton>
              <CloseMenuButton isOpen={openTheme} Color={'rgba(219, 127, 13, 1)'} onClick={() => setTheme(Orange)}></CloseMenuButton>
              <CloseMenuButton isOpen={openTheme} Color={'rgba(163, 20, 20, 1)'} onClick={() => setTheme(Red)}></CloseMenuButton>
            </MenuItemsWrapper>
          </StyledMenu>

          <ChangeTheme isOpen={openTheme} onClick={() => setOpenTheme(!openTheme)} ><RiPaintFill className='paint-icon' /><IoMdClose className='close-icon' /></ChangeTheme>

          <Header>
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
            <SaveItems
              onClick={() => saveTabs()}
            >Salvar<SaveMessage show={showSaveMessage}>Salvo!</SaveMessage></SaveItems>
            <ErrorMessage
              show={showErrorMessage}
            >{errorText}</ErrorMessage>

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
      </ThemeProvider>
  );
}

export default App;
