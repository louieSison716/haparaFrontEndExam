import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
 body {
    background-color: #6C7988;
  }

  @media screen
  and (max-device-width: 768px)
  {
    body {
      margin: 0;
    }

    .navbar-mobile-open {
      display: block !important;
    }
  }
 
`

export const NavigationMobile = styled.div`

  margin-left: 30px;

  & > a {
    font-size: 40px;
    color: #A1A9B5;
    text-decoration: none;
    font-family: "Open Sans";
  }

  & > .fa {
    color: #ffffff;
    font-size: 40px;
    margin-right: 10px;
  }

  @media screen
  and (min-device-width: 769px)
  {
    display: none;
    background: yellow;
    height: 50px;
    width: 50px;
  }

`;
export const NavigationHolderList = styled.ul`

  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: "Open Sans";
  font-size: 12px;

  & > li {
    display: inline-block;
    color: #A1A9B5;
    margin-right: 12px;

    :hover {
      color: #EBECF5;
    }
  }

  & .Selected {
    color: #ffffff;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }

  @media screen
  and (max-device-width: 768px)
  {
    width: 100%;
    font-size: 30px;
    padding: 30px;

    & > li {
      display: block;
      color: #242D38;
    }
  }

`;

export const NavigationHolder = styled.nav`

  display: flex;
  float: right;
  margin-left: 25px;

  & > img {
    position: relative;
    left: -9px;
    top: -3px;
    margin-right: 5px;
  }
    
  @media screen
  and (max-device-width: 768px)
  {

    position: fixed;
    display: none;
    top: 92px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #A1A9B5;
    overflow-y: scroll;
    box-shadow: inset 0 10px 9px -7px #00000029;
    margin: 0;

  }
`;

export const OptionListTitle = styled.span`

  height: 20px;
  width: 112px;
  color: #A1A9B5;
  font-family: "Open Sans";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 20px;
 
  & > .fa-angle-down {
    font-size: 20px;
    color: #6C7988;
    position: relative;
    right: -11px;
    top: 3px;
  }

  & > .fa-angle-up {
    font-size: 20px;
    color: #6C7988;
    position: relative;
    right: -11px;
    top: 2px;
  }

  @media screen
  and (max-device-width: 768px)
  {
    font-size: 25px;

    & > .fa-angle-down {
      font-size: 35px;
    }

    & > .fa-angle-up {
      font-size: 35px;
    }
  }

`;

export const OptionList = styled.ul`

  position: absolute;
  padding: 10px 0 5px 0;
  border-radius: 3px;
  background-color: #FFFFFF;
  margin: 0;
  right: 0px;
  top: 28px;
  width: 160px;
  min-height: 100px;
 
  & > li {
    color: #6C7988;
    font-family: "Open Sans";
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 20px;
    list-style-type: none;
    margin-left: 9px;
    line-height: 30px;
    height: 32px;
    width: 144px;

    :hover {
      height: 32px;
      width: 144px;
      border-radius: 3px;
      background-color: #EEEEEE;
      color: #242D38;
    }
  }

  & span {
    position: absolute;
    margin-top: 0;
    margin-left: 8px;
    pointer-events: none;
  }

  @media screen
  and (max-device-width: 768px)
  {
    width: 252px;
    top: 41px;

    & > li {
      font-size: 20px;
    }
  }

`;

export const SelectOpener = styled.div`

  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 16px;
  max-width: 250px;
  cursor: pointer;
  position: relative;

  i {
    color:white;
    font-size: 40px;
  }

  span {
    text-transform: capitalize;
  }

  @media screen
  and (max-device-width: 768px)
  {
    max-width: 300px;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1066px; 
  height: 60px;
  margin: 0 auto;
  background-color: #242D38;

  @media screen
  and (max-device-width: 768px)
  {
    height: 90px;
  }
`;

export const HeaderNavigationContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
    height: 100%;

`;

export const HeaderDropDownContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding-right: 40px;
`;



















