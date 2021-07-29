import './App.scss';
import Login from './containers/Login/Login.js';
import Home from './containers/Home/Home.js';
import Item from './containers/Item/Item.js';
import Create from './containers/Create/Create.js';
import Edit from './containers/Edit/Edit.js';
import Register from './containers/Register/Register';
import { Route, Switch} from "react-router-dom";

const App = () => {

  return (
      <Switch>
        {/* LOGIN */}
        <Route path="/login" exact component={ Login } />
        {/* REGISTER */}
        <Route path="/register" exact component={ Register } />
        {/* HOME */}
        <Route path="/" exact component={ Home } />
        {/* ITEM */}
        <Route path="/item/:id" exact component={ Item } />
        {/* CREATE ITEM */}
        <Route path="/create" exact component={ Create } />
        {/* EDIT ITEM */}
        <Route path="/item/edit/:id" exact component={ Edit } />
      </Switch>
  );
  
}

export default App;
