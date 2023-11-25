// import Container from "../constainer/constainer"
import { Navigation } from "../navigation/navigation"
import styled from "styled-components"
import { RoutPage } from "../Route/Route";

const BlockSideBar = styled.div`
`
const BlockNavBar = styled.div`
display:flex;

`
export const NavSideBar = () => {
    return(
        <BlockSideBar>
            <BlockNavBar>
            <Navigation/>
            <RoutPage/>
   </BlockNavBar>
        </BlockSideBar>
    )
}