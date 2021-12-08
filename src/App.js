//import logo from './logo.svg';
import './App.css';
import { Footer } from './component/footer';
import { Header } from './component/header';
//import { Register } from './component/register';
import { Login } from './component/login';
import { Home } from './component/home';

function App() {
  return (
    <div className="App">
      <Home />
      <Login></Login>
      <Footer />
      <Header/>
      



      {/* 
     /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this's snehal's code
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
