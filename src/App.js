import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import Header from './Components/Header/Header';
import Routing from "./Components/Routing";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
