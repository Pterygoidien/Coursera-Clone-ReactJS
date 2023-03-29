import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import ModalManager from "./components/modals/ModalManager";
import AppRoute from "./route";

import "./scripts/scss/main.scss";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <ModalManager />
        <AppRoute />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
