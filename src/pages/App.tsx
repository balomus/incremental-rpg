import "../styles/App.css";
import PlayerContextProvider from "../context/PlayerContextProvider";
import MainPage from "./MainPage";

function App() {
  return (
    <PlayerContextProvider>
      <MainPage />
    </PlayerContextProvider>
  );
}

export default App;
