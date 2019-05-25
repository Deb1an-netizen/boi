import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatsHot from '@material-ui/icons/Whatshot';
import Search from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircleRounded'
import Home from '@material-ui/icons/Home'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#ddd',
  },
});

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="recents" icon={<Home />} />
      <BottomNavigationAction label="Browse" value="favorites" icon={<Search />} />
      <BottomNavigationAction label="Hot" value="nearby" icon={<WhatsHot />} />
      <BottomNavigationAction label="Profile" value="account" icon={<AccountCircle />} />
    </BottomNavigation>
  );
}

export default Footer;