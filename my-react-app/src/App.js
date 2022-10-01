import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage/HomePage"
// import {IndividualIntervalsExample} from '../src/Components/SlidingImage/SlidingImage'
import JobPage from './Pages/JobPage/JobPage';
import JobRightComponents from "../src/Components/JobComponents/JobRightComponents"
function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}

      <JobPage/>
      {/* <JobRightComponents/> */}
      {/* <IndividualIntervalsExample/> */}
    </div>
  );
}

export default App;
