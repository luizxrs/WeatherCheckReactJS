import styled from "styled-components/macro";
import { RiCloseLine } from 'react-icons/ri'
import { MdSearch } from 'react-icons/md'



const FirstColor = '#7286D3;'
const SecondColor = '#7999D9;'
const ThirdColor = '#8EA7E9;'
const FourthColor = 'rgb(215, 215, 255);'
const FifthColor = '#E5E0FF;'



export const Container = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%; 
  margin-bottom: 5vh;
`

export const ClearAll = styled.div`
  color: ${FirstColor};
  letter-spacing: .1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  max-width: 15rem;
  box-shadow: .5rem .5rem 1.5rem -.1rem rgba(0, 0, 0, .3) ;
  background-color: ${FourthColor};
  border-radius: 3rem;
  min-height: 6rem;
  margin: 5rem 3vw 8rem 0;
  cursor: pointer;
  transition: all 1s cubic-bezier(.175,.885,.32,1);order: 3;
  :hover {
    transform: scale(1.1);
    letter-spacing: .3rem;
    box-shadow: .7rem .7rem 2rem -.4rem rgba(0, 0, 0, .5) ;
    background-color: ${FifthColor};
  }

  @media (max-width: 1080px) {
    order: 2;
    margin: 0;
  }
  
`

export const ClearMessage = styled.div`
  position: absolute;
  color: ${FifthColor};
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: .2rem;
  transition: all 2s cubic-bezier(.175,.885,.32,1);
  margin-top: ${(props) => props.show ? "-9rem" : "-4rem"};
  opacity: ${(props) => props.show ? "100" : "0"};
`

export const SaveMessage = styled.div`
  position: absolute;
  color: ${FifthColor};
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: .2rem;
  transition: all 2s cubic-bezier(.175,.885,.32,1);
  margin-top: ${(props) => props.show ? "-9rem" : "-4rem"};
  opacity: ${(props) => props.show ? "100" : "0"};
`

export const SaveItems = styled.div`
color: ${FirstColor};
letter-spacing: .1rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
font-weight: 600;
width: 100%;
max-width: 15rem;
box-shadow: .5rem .5rem 1.5rem -.1rem rgba(0, 0, 0, .3) ;
background-color: ${FourthColor};
border-radius: 3rem;
min-height: 6rem;
margin: 5rem 0 8rem 3vw;
order: 1;
cursor: pointer;
    transition: all 1s cubic-bezier(.175,.885,.32,1);
:hover {
  transform: scale(1.1);
  letter-spacing: .3rem;
  box-shadow: .7rem .7rem 2rem -.4rem rgba(0, 0, 0, .5) ;
  background-color: ${FifthColor};
}


@media (max-width: 1080px) {
    order: 3;
    margin: 0;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1080px) {
    margin-bottom: 5rem;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    max-width: 60vw;
    flex-wrap: wrap;
  }
`

// export const Header = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   max-height: 10vh;
//   flex: 1 1 25rem;
//   gap: 15rem;
//   width: 100;
// `

export const ErrorMessage = styled.div`
  position: absolute;
  color: ${FourthColor};
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: .2rem;
  word-spacing: .2rem;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 2s cubic-bezier(.175,.885,.32,1);
  top: ${(props) => props.show ? "3.5rem" : "6rem"};
`

export const SearchInput = styled.input`
  all: unset;
  width: 1vw;
  flex: 1;
  margin: 0 0 0 3rem;
  justify-content: center;
  height: 3.5rem;
  font-size: 2rem;
  font-weight: 600;
  color: ${FirstColor};
`

export const SearchBox = styled.div`
    z-index: 2;
    width: 100%;
    max-width: 55vw;
    min-width: 55rem;
    margin-top: 5rem;
    box-shadow: .5rem .5rem 1.5rem -.1rem rgba(0, 0, 0, .3) ;
    background-color: ${FourthColor};
    border-radius: 3rem;
    min-height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8rem;
    transition: all 1s cubic-bezier(.175,.885,.32,1);
    order: 2;
    :hover {
      transform: scale(1.03);
      box-shadow: .7rem .7rem 2rem -.4rem rgba(0, 0, 0, .5) ;
      background-color: ${FifthColor};
      max-width: 60vw;
      letter-spacing: .3rem;
    }

    
    @media (max-width: 1080px) {
      order: 1;
      margin-bottom: -2rem;
    }

    
    @media (max-width: 500px) {
      min-width: 30rem;
      :hover {
        min-width: 35rem;
      }

    }
      
  `

export const SearchButton = styled.button`
  background: ${FirstColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: .8rem;
  height: 4.4rem;
  width: 4.4rem;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  transition: 200ms ease-in-out;
  :hover {
    background: ${SecondColor}; 
  }
`

export const SearchButtonIcon = styled(MdSearch)`
  color: ${FifthColor};
  height: 2.5rem;
  width: 2.5rem;
`

export const ContentField = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  max-width: 90vw;
  max-height: 10vh;
  color: ${FirstColor};
  flex: 1 1 25rem;
  gap: 2rem;
`
export const CloseButtonIcon = styled(RiCloseLine)`
  color: ${FirstColor};
  transform: scale(0);
  transition: all 1s cubic-bezier(.175,.885,.32,1);
`

export const CloseButton = styled.button`
  background: none;
  position: absolute;
  margin: .4rem;
  cursor: pointer;
  font-size: 1.8rem;
  border: 0;
  padding: 0;
  color: ${FirstColor};
  transition: all 2s cubic-bezier(.175,.885,.32,1);
  `

export const WeatherInfoWindow = styled.div`
    background-color: ${FourthColor};
    box-shadow: .5rem .5rem 1.5rem -.1rem rgba(0, 0, 0, .5) ;
    display: block;
    border-radius: 4rem;
    width: 100%;
    min-width: 25rem;
    max-width: 25rem;
    max-height: 29.5rem;
    transition: all 1s cubic-bezier(.175,.885,.32,1);
    :hover {
      transform: scale(1.05);
      background-color: ${FifthColor};
      border-radius: 0 4rem 4rem 4rem;
    } &:hover ${CloseButtonIcon}{
      transform: scale(1.2);
    }
`

export const HeaderCityInfo = styled.div`
  height: 100%;
  max-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

export const CityTitle = styled.h3`
  font-weight: 600;
`


export const TempInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  align-items: center;
  height: 100%;
  gap: 1rem;
  max-height: 5rem;
`

export const ActualTemp = styled.h1`
  font-weight: 600;
  display: flex;
  align-items: flex-start;
`

export const ActualTempElements = styled.h3`
  font-weight: 400;
`


export const SubTemperatures = styled.div`
  
`

export const MinimalTemp = styled.h5`
  display: flex;
  justify-content: flex-end;
  line-height: 100%;
`

export const MaximumTemp = styled.h5`
  line-height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: .9rem;
`

export const WeatherInfo = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
  height: 100%;
  max-height: 3rem;
  gap: 2rem;
`

export const WeatherIconWrapper = styled.div`
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  &:first-child {
    color: ${FirstColor};
    flex-shrink: 0;
  }
  svg {
    width: 5rem;
    height: 5rem;
  }
`

export const WeatherSubInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 20rem;
`

export const WeatherText = styled.h3`
  font-weight: 600;
`

export const WeatherSubText = styled.h5`
  margin-top: -.7rem;
  text-transform:capitalize;
`

export const MoreInfo = styled.div`
  color: ${FifthColor};
  height: 100%;
  max-height: 5rem;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0 2.5rem 0;
`

export const WindSection = styled.div`
  background-color: ${FirstColor};
  height: 6rem;
  width: 11rem;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 2s cubic-bezier(.175,.885,.32,1);
  :hover {
    transform: scale(1.02);
    background-color: ${SecondColor};
  }
`

export const WindText = styled.h4`
  display: flex;
  justify-content: center;
  font-weight: 600;
  margin-top: -.4rem;
`

export const WindInfo = styled.h5`
  margin-top: -.4rem;
  display: flex;
  justify-content: center;
`

export const RainSection = styled.div`
  background-color: ${FirstColor};
  height: 6rem;
  width: 11rem;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 2s cubic-bezier(.175,.885,.32,1);
  :hover {
    transform: scale(1.02);
    background-color: ${SecondColor};
  }
`

export const RainText = styled.h4`
  display: flex;
  justify-content: center;
  font-weight: 600;
  margin-top: -.4rem;
`

export const RainInfo = styled.h5`
  margin-top: -.4rem; 
  display: flex;
  justify-content: center;
`