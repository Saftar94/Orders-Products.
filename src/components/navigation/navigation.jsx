import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SidebarData } from "./navigationList";
import { ResponsiveImage } from "../responsiveImag/responsiveImag";
import { Settingssvg } from "../svg&image/svg/svgExport";



const NavigationMenu = styled.div`
    font-weight: 500;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 4px 0 5px -2px #888;
    padding: 0 40px;
`;



const NavLinkHeader = styled(NavLink)`
position: relative;
font-weight: 500;
font-size: 10px;
line-height: 1.14;
border: none;
cursor: pointer;

&:hover,
{
  border-bottom: 2px solid green;
}

@media screen and (min-width: 768px) {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.14;
  border: none;
  cursor: pointer;
  transition: color 100ms cubic-bezier(0.4, 0, 0.2, 1);

  }


@media screen and (min-width: 1200px) {

`;


const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const NavLi = styled.li`
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const ImageStyled = styled.div`
position: relative;
margin-top: 50px;
margin-bottom: 50px;

`
const SettingsSpan = styled.span`
    position: absolute;
    left: 70%;
    top: 65%;
    color: grey;
    background-color: white;
    box-shadow: 1px 1px 7px -2px #000000;
    border-radius: 50%;
    @media screen and (min-width: 1200px) {
    }

`


export const Navigation = () => {


    return (
      <NavigationMenu>
        <ImageStyled>
          <ResponsiveImage/>
          <SettingsSpan style={{
                display: "flex",
                padding: "8px",
          }}>
          <Settingssvg/>
          </SettingsSpan>
        </ImageStyled>
        <NavUl>
          {SidebarData.map((item) => {
            return (
              <NavLi key={item.id}>
                <NavLinkHeader
                  to={item.path}
                  style={({ isActive }) =>
                  isActive ? {borderBottom: "2px solid green"} : undefined}>
                  {item.title}
                </NavLinkHeader>
              </NavLi>
            );
          })}
        </NavUl>
      </NavigationMenu>
    );
  };