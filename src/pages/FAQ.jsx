import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";
import FaqBookKeep from "../components/servicesComp/bookKeeping/FaqSer1";
import FaqSer2 from "../components/servicesComp/dataEntry/FaqSer2";
import FaqSer3 from "../components/servicesComp/financialController/FaqSer3";
import FaqSer4 from "../components/servicesComp/taxPlanning/FaqSer4";
import FaqSer5 from "../components/servicesComp/virtualAssitance/FaqSer5";
import WaveDivider from "../components/homeComp/WaveDivider";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <FaqBookKeep/>
        <FaqSer2/>
        <FaqSer3/>
        <FaqSer4/>
        <FaqSer5/>
      </main>
      
    </ThemeProvider>
  );
}

export default App;
