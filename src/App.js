import './App.css';
import Header from './components/Header';
import About from './components/About';
import Technologies from './components/Technologies';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div class="box-border p-0 m-0 flex flex-col lg:flex-row">
      <div class="w-full h-72 lg:w-1/3 lg:h-screen ">
        <Header />
      </div>
      <div class="w-full pt-10 px-5 lg:w-2/3 lg:px-16">
        <About />
        <hr class="my-3" />
        <Technologies />
        <hr class="my-3" />
        <Work />
        <hr class="my-3" />
        <Contact />
        <hr class="my-3" />
        <Footer />
      </div>
    </div>
  );
};

export default App;
