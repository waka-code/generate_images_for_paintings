import "./App.css";
import { HashRouter } from "react-router-dom";
import NavRoutes from "./components/navigation/navroutes/nav.routes";
import RoutesPages from "./components/navigation/routes/routes";
import Footer from "./components/pages/footer/Footer";
function App() {
  return (
    <div className="app_box">
      <>
        <HashRouter>
          <NavRoutes />
          <RoutesPages />
        </HashRouter>{/* */}
      </>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
