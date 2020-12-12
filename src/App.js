import { LanguageProvider } from './contexts/language';
import Slider from './components/Slider';
import Us from './components/Us';


function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Slider />
        <Us/>
      </LanguageProvider>
      
    </div>
  );
}

export default App;
