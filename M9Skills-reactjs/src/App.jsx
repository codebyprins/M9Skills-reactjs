import './App.css';
import Card from './components/Card';
import Time from './components/Time';
import Catabase from './components/catabase.jsx';

function App() {

  return (
    <div className='body-container'>
      <Card name="Wild Boar (Sus scrofa)"/>
      <Time />
      <Catabase />
    </div>
  )
}

export default App
