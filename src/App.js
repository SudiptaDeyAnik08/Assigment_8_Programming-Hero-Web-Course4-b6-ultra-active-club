import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Body from './component/Body/Body'
function App() {
  return (
    <div className="App background-Mother">
      {/* Header */}
      <Header></Header>
     
      {/* body */}
      <div>
        <Body></Body>
      </div>


    </div>
  );
}

export default App;
