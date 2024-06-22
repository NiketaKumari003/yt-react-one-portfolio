import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavLinks from "./components/NavLinks";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";



function App() {
  return (
<div>
<Navbar/>
<Home/>
<SocialLinks/>
<About/>
<Portfolio/>
<Experience/>
<Contact/>
<NavLinks/>
</div>
  );
}

export default App;
