import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Socials from './Components/Socials';
import Socialsmob from './Components/Socials-mob';
import Technologies from './Components/Technologies';
import Work from './Components/Work';

function App() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Home />
        <Socialsmob/>
        <About/>
        <Work/>
        <Technologies/>
        <Contact/>

        <Socials/>
      </div>
    </>
  );
}

export default App;
