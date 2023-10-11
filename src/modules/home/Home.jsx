import React, { useContext } from "react";
import { Context, AppProvider } from '../../components/useContext/Context';


const Home = () => {
    const userData = useContext(Context)
  return <>
  <h1>Hlww React my name is {userData.name} and my age is {userData.age}</h1>
  
  </>;
};

export default Home;
