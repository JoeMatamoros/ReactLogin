import logo from './logo.svg';
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Cards from './components/Cards/Cards';
import CardHolder from './components/Cards/CardHolder';
import Login from './components/Login/Login';

function App() {
  return (
    <section>
      <BrandHeader></BrandHeader>
      <section className="Login">
        <Login></Login>
      </section>
    </section>
  );
}

export default App;
