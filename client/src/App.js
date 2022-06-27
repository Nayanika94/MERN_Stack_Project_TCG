
import Home from './pages/Home';
import { CardProvider } from './store/card-context';


function App() {
  return (
    <CardProvider>
      <section className='bg-gray-900'>
        <Home />
      </section>
    </CardProvider>
  );
};

export default App;