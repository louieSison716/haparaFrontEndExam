import React, { useState } from 'react';
import { Select } from '../../components/Select/Select';
import { NavigationMenu } from '../../components/NavigationMenu/NavigationMenu';
import {
  HeaderContainer,
  HeaderWrap,
  HeaderNavigationContainer,
  HeaderDropDownContainer,
  GlobalStyle,
  NavigationMobile
} from './HeaderElements';

// array of objects for drop down information
const dropDownData = [
  {
    id: 0,
    title: "student@school.org",
  },
  {
    id: 1,
    title: "Settings",
  },
  {
    id: 2,
    title: "Sign Out",
  },
];

// array of objects for navigation menu
let navigationData = [
  {
    id: 0,
    title: "Classes",
  },
  {
    id: 1,
    title: "Lessons",
  },
  {
    id: 2,
    title: "Libraries",
  },
];

const Header: React.FC = () => {

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isNavigationData, setIsnavigationData] = useState(navigationData);
  const [isDropDownData,  setisDropDownData] = useState(dropDownData);

  const selectedOption = (arg: string) => {

    if(arg === 'student@school.org'){
      setIsnavigationData([
        {
          id: 0,
          title: "Classes",
        },
        {
          id: 1,
          title: "Assignments",
        },
       
      ]);

      setisDropDownData(
        [
          {
            id: 0,
            title: "teacher@school.org",
          },
          {
            id: 1,
            title: "Settings",
          },
          {
            id: 2,
            title: "Sign Out",
          },
        ]
      )
    } else {
      setIsnavigationData(navigationData)
      setisDropDownData(dropDownData)
    }

  }

  return (
    <HeaderContainer>
      <GlobalStyle />
      <HeaderWrap>
        <HeaderNavigationContainer>
          <NavigationMobile className="navbar-mobile"
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          >
            {!isOpenMobileMenu && 
            <i className="fa fa-bars"></i>}
            {isOpenMobileMenu && 
            <i className="fa fa-close"></i>}
            
            <a href="#" className="mobile-btn">Menu</a>
          </NavigationMobile>
          <NavigationMenu options={isNavigationData} isSelected={0} selected={false} isMobileOpen={isOpenMobileMenu}/>
        </HeaderNavigationContainer>
        <HeaderDropDownContainer>
          <Select options={isDropDownData} selectedOption={selectedOption}/>
        </HeaderDropDownContainer>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
