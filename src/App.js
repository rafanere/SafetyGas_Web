import './App.css'
import "./index.css"
import MainContent from "./componentes/MainContent"
import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import Desktop from "./componentes/NotOnDesktop"
import Login from "./componentes/Login"
import "./login.css"

function App() {
  return (
    <div>
        <div id="mainwrapper"></div>
        <Header/>
        <Login/>
        <div id="content">
          <Desktop/>
          <MainContent />
          <Footer />
        </div>
        <div id="footerbar">
        </div>

    </div>
  );
}

export default App;
