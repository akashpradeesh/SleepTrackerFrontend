import Introduction from './Introducttion';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SleepTrack from './SleepTrack';


function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route path ="/"
      element={<Introduction/>}/>
      <Route path ="/Login"
      element={<SleepTrack/>}/>
    </Routes>
</Router>
</div>
  );
}

export default App;
