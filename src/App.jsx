import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

import './styles/components/app.sass';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Carousel/>
      </main>
    </div>
  );
}

export default App
