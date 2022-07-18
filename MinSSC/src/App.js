import logo from './logo.svg';
import './App.css';

// React Component
// Components are essentially any reusable code that displays an interface to the screen
// button, Page, or a table, etc.

function SmartContract() {
  const contract = () => {
    console.log("Smart Contract")
  }
  return (
    <button onClick={contract}>Submit Contract</button>
  )
}

// variable that holds a reference to a function
const ContractPage = () => {
  return (
    <div>
      <SmartContract />
    </div>
  )
}

// React functions must return a React component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Choice Coin Smart Contract
        </h1>
        <div>
          Factor 1
        </div>
        <div>
          Factor 2
        </div>
        <div>
          Factor 3
        </div>
        
        <div>
        <ContractPage />
        </div>

      </header>
    </div>
  );

}

export default App;