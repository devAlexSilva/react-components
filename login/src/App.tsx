import { Header } from "./components/header";
import { GlobalStyles } from "./styles/globalStyles";

import { ThemeProvider } from "styled-components";
import { light } from "./styles/themes/Light";
import { dark } from "./styles/themes/Dark";
import { useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState(light)

  const toogleTheme = () => {
    console.log("trocou")
    setCurrentTheme(currentTheme.title === "light" ? dark : light)  
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header toogleTheme={toogleTheme}/>
    </ThemeProvider>
  );
}

export default App;
