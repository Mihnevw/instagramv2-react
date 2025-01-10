import './App.css';

import LeftSide from './components/LeftSide';
import MiddleSide from './components/MiddleSide';
import RightSide from './components/RightSide';


function App() {
  return (
    <div className="App">
      <div className="leftsidehome">
        <LeftSide />
      </div>
      <div className="middleside">
        <MiddleSide />
        
      </div>
      <div className="rightside">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
