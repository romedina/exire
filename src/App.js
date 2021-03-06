import { LanguageProvider } from "./contexts/language";
import Slider from "./components/Slider";
import Us from "./components/Us";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/customTheme";
import EventGrid from "./components/EventsGrid/EventGrid";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <Navbar />
          <Slider />
          <Us />
          <EventGrid />
          <Contact />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
