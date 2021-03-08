import './App.css';
import logo from './logo.svg';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Login from './components/Login/Login';
import Home from './components/Pages/Home';
import Todo from './components/Pages/Todo/Todo';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import Cards from './components/Cards/Cards';
//import CardHolder from './components/Cards/CardHolder';


function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/todos" exact>
              <Todo />
            </Route>
            
            <Route path="/login" exact>
                <Login></Login>
            </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;

/*
<section>
        <img src={imgMeme} alt="Un meme" />
      </section>
      <CardHolder>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </CardHolder>
*/