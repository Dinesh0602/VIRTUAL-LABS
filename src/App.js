import './App.css';
import logo from './logo.png'

function App() {
  return (
    <div className="App">

<div id='nav'>
    <img src={logo} id="logo"  />
    <span>IIT(ISM) Dhanbad</span>
    <br/>
    <span>Virtual Labs</span>

 <nav>   
   <ul class="nav">
      <li><a href="personaltraining.html">HOME</a></li>
      <li><a href="indexdesktop.html">ABOUT US</a></li>
      <li><a href="apps.html">LABS</a></li>
      <li><a href="contact.html">CONTACT</a></li>
   </ul>
</nav>
  <div class="clear"></div>
  </div>
    </div>
  );
}

export default App;
