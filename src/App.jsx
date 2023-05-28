import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Description from './components/Description';

import './styles/components/app.sass';


function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Carousel/>
        <Description />
      </main>
    </>
  );
}

export default App
