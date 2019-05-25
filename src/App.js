import React from 'react';
import Form from './components/Form'
import Bg from './components/Bg'
import Test from './components/Test'
import Demo from './components/Demo'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatsHot from '@material-ui/icons/Whatshot';
import Search from '@material-ui/icons/Search'
import SearchPage from './components/Search'
import AccountCircle from '@material-ui/icons/AccountCircleRounded'
import Home from '@material-ui/icons/Home'
import { BrowserRouter as Router,Route,Link} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#ddd',
  },
});

function Main() {
  return (
    <React.Fragment>
      <Demo />
      <Menu />
    </React.Fragment>
  )
}
function Find(){
  return (
    <React.Fragment>
      <SearchPage />
      <Menu />
    </React.Fragment>
  )
}
function Trend(){
  return <h1>Trending</h1>
}
function Menu(){
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Link to="/">
          <BottomNavigationAction label="Home" value="recents" icon={<Home />} />
        </Link>
        <Link to="/Search">
          <BottomNavigationAction label="Browse" value="favorites" icon={<Search />} />
        </Link>
        <Link to="/Trending">
          <BottomNavigationAction label="Hot" value="nearby" icon={<WhatsHot />} />
        </Link>
        <Link to="Profile">
          <BottomNavigationAction label="Profile" value="account" icon={<AccountCircle />} />
        </Link>
      </BottomNavigation>
  )
}
function App() {
  

  return (
    <Router>
      <Menu />
      <Route path="/" exact component={Main} />
      <Route path="/Search" component={Find} />
      <Route path="/Trending" component={Trend}/>
    </Router>
    
  );
  
}

export default App;
