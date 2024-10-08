import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About/About";
import { HomePage } from "./pages/Home/Home";
import Header from "./layouts/Header";
import { useState } from "react";
import { MyProvider } from "./utils/contextProvider";
import { ContactPage } from "./pages/contact/Contact";
import { WorkPage } from "./pages/Work/Work";
// import { ContactPage } from "./pages/market/market";

function App() {
  const [myname,setmyname] = useState('wissall')
  return (
    <>
    <MyProvider>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage  />} />
        <Route path="/contact" element={<ContactPage  />} />
        <Route path="/work" element={<WorkPage  />} />
      </Routes>
    </MyProvider>
    </>
  );
}

export default App;
