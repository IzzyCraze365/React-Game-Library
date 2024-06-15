/* import Message from "./Message"; // We don't need this line, we are not using it */
import { useState } from "react";
import Alert from "./components/Alert";
import ButtonAlert from "./components/ButtonAlert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";

function App() {
  //Following will be props passed
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [buttonAlertVisible, setbuttonAlertVisible] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log("handleSelectItem", item);
  };
  /* return <div><Message></Message></div> */ //Removed so we can use ListGroup
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        {" "}
        Hello <span>World</span>
      </Alert>
      {buttonAlertVisible && (
        <ButtonAlert onClose={() => setbuttonAlertVisible(false)}>
          Alert Button Pushed
        </ButtonAlert>
      )}
      <Buttons
        color="primary"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        My Button
      </Buttons>
      <Buttons
        color="secondary"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Second Button
      </Buttons>
      <Buttons
        color="danger"
        onClick={() => {
          setbuttonAlertVisible(true);
        }}
      >
        Danger!!!
      </Buttons>
      <Buttons
        color="pants"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Danger!!!
      </Buttons>
    </div>
  );
}
// if you have 2 listgroups to show that they work individually (try mounting the component twise)
export default App;
