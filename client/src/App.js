import './App.scss';
import Header from './components/header/Header.js';
import Items from './components/items/Items.js';
import Login from './components/auth/login/Login.js'
import { Redirect, Route, Switch, useLocation} from "react-router-dom";
import ItemDetails from './components/ItemDetails/ItemDetails';

const App = () => {

  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem('user'))?.userExist;

  return (
    <>
      { pathname !== '/auth/login' ? <Header /> : null }
      <Switch>
        {/* <Route path="/" exact component={() => <Redirect to="/items" />} /> */}
        {
          user === undefined 
          ? <Route path="/" exact component={() => <Redirect to="/auth/login" />} />
          : <Route path="/" exact component={() => <Redirect to="/items" />} />
        }
        {/* <Route path="/" exact component={() => <Redirect to="/items" />} /> */}
        <Route path="/auth/login" exact component={ Login } />
        <Route path="/items" exact component={ Items } />
        <Route path="/items/:id" exact component={ ItemDetails } />
      </Switch>
    </>
  );
  
}


export default App;
