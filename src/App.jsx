import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

import './styles/components/app.sass';


function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Carousel/>
      </main>
    </>
  );
}

export default App
