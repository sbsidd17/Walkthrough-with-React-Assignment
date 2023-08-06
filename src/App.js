import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";
import Person from "./components/Person";

function App() {
  const name = "Shuaib Siddiqui";
  const age = "25";
  const text = "Click Here";
  const onClick = () => {
    alert("Button Clicked");
  };
  const title = "PW Skills";
  const listItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <div className="App">
      <Header title={title} />
      <br />
      <br />
      <h3>Person Component Example</h3>
      <Person name={name} age={age} />
      <br />
      <br />
      <h3>Button Component Example</h3>
      <Button text={text} onClick={onClick} />
      <br />
      <br />
      <h3>List Component Example</h3>
      <List items={listItems} />
    </div>
  );
}

export default App;
