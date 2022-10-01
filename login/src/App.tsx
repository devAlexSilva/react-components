import { Header } from "./components/header";
import { GlobalStyles } from "./styles/globalStyles";

import { ThemeProvider } from "styled-components";
import { light } from "./styles/themes/Light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
