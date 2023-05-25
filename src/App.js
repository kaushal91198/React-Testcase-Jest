import logo from './logo.svg';
import './App.css';

function App() {

  //The jest docs state it is an alias of test.so they are exactly the same.

  //JEST & Enzyme
  //1. Bothe jest and enzyme are specifically designed to test React applications
  //2. Jest fr
  //3. Enzyme only works with React.
  
  // Enzyme is a testing library to render the react component into DOM and query the dom tree.

  // Enzyme is a library that makes testing React components specifically  easier

  // In react testing library, we test using the DOM. so, there is no shallow or deep rendering.
  // Enzyme provides us with full rendering of the DOM elements too.

  //Types of test
  // Unit test
  // Focus is on testing the individual building blocks of an application such as a class or a function or a component
  // Each unit or building block is tested in isolation, indepedent of other units
  // Depedencies are mocked
  // Run in a short amount of time and make it very easy to pin point failures
  // Relatively easy to write and maintain
  
  // Integration test
  // Focus is on testing a combination of units and ensuring they work together
  // Take longer than unit tests

  // End to end test
  // Focus is not testing the entire application flow and ensuring it works as designed from start to finish
  // Involves in a real UI and a real database, real services too
  // Take the longest as they cover the most amount of code
  // Have a cost implication as you interact with real apis that may charge based on the number of requests

  // the more your tests resemble the way your software is used, the more confidence they can give you
  // React testing library strikes balance between unit and E2E tests which is what we will be learning in the rest of the series.

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
