import AddPerson from "./components/AddPerson";
import Retreive from "./components/Retreive";
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="Header"><p>Your Directory App</p></div>
      <div className="Main">
        <div className="nav">
          <Link to={"/"}><span>Add New Person</span></Link>
          <Link to={"/RetreiveInformation"}><span>Retreive Information</span></Link>
        </div>
      <Routes>
        <Route path="/" element ={<AddPerson/>}/>
        <Route path="/RetreiveInformation" element ={<Retreive/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;