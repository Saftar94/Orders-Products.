import io from "socket.io-client"
import React, { useEffect, useState } from 'react';
import styled from "styled-components";


const BlockActive = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-left: 20px;
`
const TextActive = styled.p`
`

const NumberActive = styled.p`
    border-radius: 20%;
    margin-top: 5px;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.14;
    border: none;
    cursor: pointer;
    border: 2px solid black;
    padding: 3px;
`
export const  ActiveSession =()=>{

  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    const socket = io('http://localhost:3007');

    socket.on('activeSessions', (count) => {
      setActiveSessions(count);
    });
    return () => {
      socket.disconnect();
    };
  }, []);


  return(
    <BlockActive>
     <TextActive>
          Active Sessions:      
    </TextActive>
    <NumberActive>
    {activeSessions}
    </NumberActive>

    </BlockActive>

  )
}