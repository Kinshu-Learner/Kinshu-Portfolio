import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Socials from './Components/Socials';

function App() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Home />

        <Socials/>
      </div>
    </>
  );
}

export default App;
