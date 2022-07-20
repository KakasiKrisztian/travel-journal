import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import dataArray from './data'

function App() {
  const info = dataArray.map(item => <Card key={item.id} item={item}/>)
  
  return (
    <div>
      <Navbar />
      {info}
    </div>
    
  );
}

export default App;
