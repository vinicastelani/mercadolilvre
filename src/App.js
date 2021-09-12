
import { Route, Switch, useHistory } from "react-router-dom";


import Navigation from "./components/NavigationBar/NavigationBar"
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs"
import Search from "./views/Search/Search"
import Item from "./views/Item/Item"
import "./utils/main.scss"


function App() {
  const history = useHistory();

  const handleSearchClick = (e) =>{
    if(!e.length) return
    history.push(`/items/search/${e}`)
  }
  
  return (
    <div>
    <Navigation onSearchClick={handleSearchClick}/>
    <Breadcrumbs/>
    <Switch>
      <Route path="/items/search/:query">
        <Search></Search>
      </Route>
      <Route path="/items/:id">
        <Item></Item>
      </Route>
    </Switch>
    {/* <Home/> */}
    </div>
  );
}

export default App;
