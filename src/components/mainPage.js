import React from "react";
import NavBar from './navBar';
import { LoginForm } from "./loginForm";


function MainPage() {
  const styles = {
    backgroundImage: 'url(/vegasSkyline.jpg)',
    backgroundSize: 'cover',
    height: '100vh'
}; 
    return (
      <div style={styles}>
        <NavBar />
        <LoginForm />
      </div>
    );
  }
  
  export default MainPage;
