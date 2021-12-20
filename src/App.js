import logo from './logo.svg';
import './App.css';
import Content from './Components/Content/Content';
import ThemeContextProvider from './Components/Context/ThemeContext';
import ToggleButton from './Components/ToggleButton/ToggleButton';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ToggleButton />
      <Content />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
