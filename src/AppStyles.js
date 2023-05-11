import styled, { css } from "styled-components/macro";
import { RiCloseLine } from 'react-icons/ri'
import { MdSearch } from 'react-icons/md'
import { lighten, darken, modularScale } from 'polished'
import blue from "./styles/themes/blue";


export const Container = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  position: relative;
`

export const ChangeTheme = styled.div`
  min-width: 6rem;
  min-height: 6rem;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.fifth};
  position: fixed;
  bottom: 4rem;
  left: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  z-index: 9999;
  box-shadow: .5rem .5rem 1.5rem -.1rem rgba(0, 0, 0, .3) ;
  cursor: pointer;
  transition: all 1s cubic-bezier(.175,.885,.32,1);
  :hover{
    transform: scale(1.1);
    background-color: white;
    color: ${props => props.theme.colors.secondary};
    box-shadow: .7rem .7rem 2rem -.4rem rgba(0, 0, 0, .5);
  }
  .close-icon {
    transition: all .5s cubic-bezier(.175,.885,.32,1);
    opacity: ${props => props.isOpen ? '100%' : '0'};
    transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
    position: absolute;
  }
  
  .paint-icon {
    transition: all .5s cubic-bezier(.175,.885,.32,1);
    opacity: ${props => props.isOpen ? '0' : '100%'};
    transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
    position: absolute;
  }
  
  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const StyledMenu = styled.div`
  background: ${props => props.theme.colors.fifth};
  position: fixed;
  bottom: 4rem;
  left: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  z-index: 9999;
  transition: all 1s cubic-bezier(.175,.885,.32,1);
  border-radius: 3rem;
  box-shadow: ${props => props.isOpen ? '0 0 4rem rgba(0, 0, 0, .4)' : 'none'};
  width: 6rem;
  height: ${props => props.isOpen ? '40rem' : '6rem'};
  overflow: hidden;
`

export const MenuItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 3rem;
  min-height: 70%;
  position: absolute;
  top: 4rem;
`
export const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  margin-top: 2rem;
  gap: 1rem;
  padding: 1rem;

  max-width: 100%;
`

export const CloseMenuButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  box-shadow: .2rem .2rem .6rem -.1rem rgba(0, 0, 0, .6) ;
  border: ${props => `.2rem solid ${darken(.1, props.Color.toString())}`};

  transition: all 1s cubic-bezier(.175,.885,.32,1);
  box-shadow: .1rem .1rem .5rem rgba(0 ,0 ,0, .1 );

  cursor: pointer;

  background-color: ${props => props.Color}; 
  
  &:hover {
    background-color: ${props => `${lighten(.2, props.Color.toString())}`};
    transform: scale(1.1);
  }
`



export const ClearAll = styled.div`
  color: ${props => props.theme.colors.primary};
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
  background-color: ${props => props.theme.colors.fourth};
  border-radius: 3rem;
  min-height: 6rem;
  margin: 5rem 3vw 8rem 0;
  cursor: pointer;
  transition: all 1s cubic-bezier(.175,.885,.32,1);order: 3;
  :hover {
    transform: scale(1.1);
    letter-spacing: .3rem;
    box-shadow: .7rem .7rem 2rem -.4rem rgba(0, 0, 0, .5) ;
    background-color: ${props => props.theme.colors.fifth};
  }

  @media (max-width: 1080px) {
    order: 2;
    margin: 0;
  }
  
`

export const ClearMessage = styled.div`
  position: absolute;
  color: ${props => props.theme.colors.fifth};
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: .2rem;
  transition: all 2s cubic-bezier(.175,.885,.32,1);
  margin-top: ${(props) => props.show ? "-9rem" : "-4rem"};
  opacity: ${(props) => props.show ? "100" : "0"};
  
  @media (max-width: 1080px) {
      margin-top: ${(props) => props.show ? "9rem" : "4rem"}; 
  }

  @media (max-width: 610px) {
    margin-top: ${(props) => props.show ? "9rem" : "4rem"}; 
  }

`

export const SaveMessage = styled.div`
  position: absolute;
  color: ${props => props.theme.colors.fifth};
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: .2rem;
  transition: all 2s cubic-bezier(.175,.885,.32,1);
  margin-top: ${(props) => props.show ? "-9rem" : "-4rem"};
  opacity: ${(props) => props.show ? "100" : "0"};

  @media (max-width: 1080px) {
      margin-top: ${(props) => props.show ? "9rem" : "4rem"}; 
  }

  @media (max-width: 610px) {
    margin-top: ${(props) => props.show ? "9rem" : "4rem"}; 
  }


`

export const SaveItems = styled.div`
color: ${props => props.theme.colors.primary};
letter-spacing: .1rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
font-weight: 600;
width: 100%;
max-width: 15rem;
box-shadow: .5rem .5rem 1.5rem -.1rem rgba(0, 0, 0, .3) ;
background-color: ${props => props.theme.colors.fourth};
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
  background-color: ${props => props.theme.colors.fifth};
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
    justify-content: center;
    gap: 1rem;
    max-width: 60vw;
    flex-wrap: wrap;
  }

`
export const ErrorMessage = styled.div`
  position: absolute;
  color: ${props => props.theme.colors.fourth};
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
  color: ${props => props.theme.colors.primary};
`

export const SearchBox = styled.div`
    z-index: 2;
    width: 100%;
    max-width: 55vw;
    min-width: 55vw;
    margin-top: 5rem;
    box-shadow: .5rem .5rem 1.5rem -.1rem rgba(0, 0, 0, .3) ;
    background-color: ${props => props.theme.colors.fourth};
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
      background-color: ${props => props.theme.colors.fifth};
      min-width: 60vw;
      letter-spacing: .3rem;
    }

    
    @media (max-width: 1080px) {
      order: 1;
      margin-bottom: 0;
    }

    
    @media (max-width: 610px) {
      min-width: 30rem;
      margin-bottom: 2rem;
      :hover {
        min-width: 35rem;
      }

    }
      
  `

export const SearchButton = styled.button`
  background: ${props => props.theme.colors.primary};
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
    background: ${props => props.theme.colors.secondary}; 
  }
`

export const SearchButtonIcon = styled(MdSearch)`
  color: ${props => props.theme.colors.fifth};
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
  color: ${props => props.theme.colors.primary};
  flex: 1 1 25rem;
  gap: 2rem;
`
export const CloseButtonIcon = styled(RiCloseLine)`
  color: ${props => props.theme.colors.primary};
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
  color: ${props => props.theme.colors.primary};
  transition: all 2s cubic-bezier(.175,.885,.32,1);
  `

export const WeatherInfoWindow = styled.div`
    background-color: ${props => props.theme.colors.fourth};
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
      background-color: ${props => props.theme.colors.fifth};
      border-radius: 0 4rem 4rem 4rem;
    } &:hover ${CloseButtonIcon}{
      transform: scale(1.2);
    }

`;

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
    color: ${props => props.theme.colors.primary};
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
  color: ${props => props.theme.colors.fifth};
  height: 100%;
  max-height: 5rem;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0 2.5rem 0;
`

export const WindSection = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 6rem;
  width: 11rem;
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 2s cubic-bezier(.175,.885,.32,1);
  :hover {
    transform: scale(1.02);
    background-color: ${props => props.theme.colors.secondary};
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
  background-color: ${props => props.theme.colors.primary};
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
    background-color: ${props => props.theme.colors.secondary};
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