import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue(null);
  return (
    //BEM naming convention
    <div className="App">
      {!user ? (
        <Login></Login>
      ) : (
        <div className="app__body">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />}></Route>
              <Route path="/" element={<Chat />}>
                {/* <h1>Home Screen</h1> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}

      {/* <h1>Lets build a Whatsapp Clone!</h1> */}
    </div>
  );
}

// function Main() {
//   return (
//     <>
//       <Chat></Chat>
//     </>
//   );
// }

export default App;
