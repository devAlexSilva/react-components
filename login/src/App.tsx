import { Header } from "./components/header";
import { GlobalStyles } from "./styles/globalStyles";

import { ThemeProvider } from "styled-components";
import { light } from "./styles/themes/Light";
import { dark } from "./styles/themes/Dark";
import { useStorageTheme } from "./hooks/storageTheme";
import { Form } from "./components/form";

function App() {
  const [currentTheme, setCurrentTheme] = useStorageTheme("theme", light);

  const toogleTheme = () => {
    setCurrentTheme(currentTheme.title === "light" ? dark : light)  
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header toogleTheme={toogleTheme}/>
      <Form />
    </ThemeProvider>
  );
}

export default App;
