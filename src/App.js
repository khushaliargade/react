import './App.css';
import { Login } from './pages/login';
import { Register } from './pages/register';
function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="column">
          <Register />
        </div>
        <div class="column">
          <Login />
        </div>
      </div>
    </div>
  );
}
export default App;