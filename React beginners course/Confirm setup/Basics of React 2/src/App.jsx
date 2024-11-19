import "./App.css";
import Footer from "./Component/Footer/Footer";
import Info from "./Component/Info/Info";
import Profilei from "./Component/Profile/Profilei";
import Vitals from "./Component/Vitals/Vitals";

function App() {
  return (
    <div className="app">
      <Profilei />
      <Vitals />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
