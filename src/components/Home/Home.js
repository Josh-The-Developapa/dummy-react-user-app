import React, { useContext } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

import AuthContext from '../store/auth-context';
const Home = (props) => {
  const authCTX = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Good to see you!!</h1>
      <Button onClick={authCTX.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
