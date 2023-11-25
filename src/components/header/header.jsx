import Container from "../constainer/constainer"
import styled from "styled-components"
import { Shield, Clock } from "../svg&image/svg/svgExport"
import { SerchBar } from "./searchBar"
import   { useState , useEffect } from 'react'
import { ActiveSession } from "./activeSession"


const BlockHeader = styled.header`
position: sticky;
z-index: 100;
top: 0px;
left: 0px;
width: 100%;
padding-top: 20px;
padding-bottom: 20px;
background: ${(props) => props.isColor || "#ffffff"};
box-shadow: 0px 2px 3px -3px #000000;
`
const MainHeader = styled.div`
display: flex;
align-items: center;
    `

const LinkHeader = styled.a`
color:green;
display: flex;
align-items: center;
font-weight: 500;
font-size: 12px;
line-height: 1.14;
border: none;
cursor: pointer;

`
const TeaxHeader = styled.p`
color:green;
margin-left: 15px;

`

const BlockCurretnTime = styled.div`

`
const BlockCurrentWeek = styled.div`
display: flex;
margin-top: 5px;
`
const CurrentTimeText = styled.p`
display: flex;

&:last-child {
    margin-left: 20px;
 }
`
const ClockSvg = styled.span`
display: flex;
margin-right: 10px;
color:green;

 `



export const Header = () => {
    const [CurrentWeek, setCurrentWeek] = useState('')
    const [CurrentDate, setCurrentDate] = useState('')
    const [CurrentTime, setCurrentTime] = useState('')


    useEffect(() => {
        const date = new Date();
        const ruWeek = new Intl.DateTimeFormat("ru", {weekday:"long"}).format(date).replace(/(\s?\.?)/, "") 
        const ruDate = new Intl.DateTimeFormat("ru", {day: "numeric", month: "short", year: "numeric", time:'numeric'}).format(date).replace(/(\s?\.?)/, "") 
        const hourTime = new Intl.DateTimeFormat("ru", {hour:"numeric", minute:"numeric"}).format(date).replace(/(\s?\.?)/, "")
        setCurrentDate(ruDate)
        setCurrentTime(hourTime)
        setCurrentWeek(ruWeek)
    },[])



    return(
        <BlockHeader>
        <Container>
            <MainHeader>
            <LinkHeader><Shield  style={{
            height: "25px",
            width: "25px",
          }}/><TeaxHeader>INVENTORY</TeaxHeader></LinkHeader>
          <SerchBar/>
            <BlockCurretnTime>
                <CurrentTimeText>{CurrentWeek}</CurrentTimeText>
                <BlockCurrentWeek>
                <CurrentTimeText>{CurrentDate}</CurrentTimeText>
                <CurrentTimeText> 
                    <ClockSvg><Clock style={{
            height: "25px",
            width: "25px",
          }}/>
          </ClockSvg>
          {CurrentTime}</CurrentTimeText>
         
                </BlockCurrentWeek>
            </BlockCurretnTime>
            <ActiveSession/>
</MainHeader>
        </Container>
        </BlockHeader>
    )
}