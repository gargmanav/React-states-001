import react,{ useState } from 'react';
import './App.css';
import Header from './Components/Header';


function App() {
   const [darkbg,setbackground] = useState({backgroundColor:"white" ,color:"black"});
  return (
    <div className="App" style={darkbg}>
      <Header darktheme ={darkbg} setbgcolor ={setbackground}/>
    </div>
  );
}

export default App;
