import { Header } from "./components/header/header";
import { NavSideBar } from "./components/navsidebar/navSideBar";
import React, { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  useEffect(() => {
    const socket = io("wss://your-socket-server-url.com");

    socket.on("activeSessions", (data) => {
      console.log("Active sessions:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <Header />
      <NavSideBar />
    </>
  );
}

export default App;
