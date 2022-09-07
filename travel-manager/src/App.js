import TravelCard from "./components/TravelCard";
import Navbar from "./components/Navbar";
import './styles/App.css';
import travelLog from './travelLog'


const travelComponents = travelLog.map(item => <TravelCard {...item}/>)


function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <TravelCard /> */}
      {travelComponents}
    </div>
  );
}

export default App;
