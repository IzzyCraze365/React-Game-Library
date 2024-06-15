import { Fragment, useState } from "react";
import { MouseEvent } from "react"; // This is a paramenter event that will throw a TypeScript Error if it is missing

// {items: [], heading : string }
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // similar to onClick
}

/* 
//Original Function
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
 */

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //Hook Example
  const arr = useState(-1);
  arr[0]; // variable (selectedIndex)
  arr[1]; // updater function

  /* let selectedIndex = -1; // Initially no item is selected. We do not end up using this*/
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /*   items = []; */ // We can overwrite the array

  /* 
! CONDITIONAL RENDERING
  Here are different methods to make the list more dynamic...
  #1 Using an if statement that will change the return
 
  if (items.length === 0) 
    return(
  <>
    <h1>List</h1>
    <p>No item found</p>
  </>);

  #2 Creating a constant with a ternary operator:
  
  const message = items.length === 0 ? <p>No item found</p> : null;
 
  #3 Creating a function: this is the best if you need to have parameters passed into the function otherwise use method #2:

  const getMessage = () => {
    items.length === 0 ? <p>No item found</p> : null; // having a null is not clean and may lead to problems...
      
    items.length === 0 && <p>No item found</p>; // here is a cleaner version of the code, null is messs so since we have a true and a value it will display the value so long as the first part is true.
  };

 */

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log("Clicked", event);
  /* we are showing off how the paramenter 'item', index and event act when logged */

  return (
    <Fragment>
      {/* Remember you need to wrap eveything in a div / Fragment / <> for each component. */}
      <h1>List Group</h1>{" "}
      {/* Converting to JS reads it as React.creatElement('h1') */}
      {/* {message} */}
      {/* {getMessage} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* Originally pulled the Code form getBootstrap.com => Components => List group */}
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {/*
            HERE IS AN ALTERNATIVE where we show off how the paramenter 'item', index and event act when logged
      {items.map((item, index) => (
          <li
            key={item}
           onClick={(event) => console.log("Clicked", item, index, event)}
            className="list-group-item"
          > 
           */}

            {/* 
      HERE IS AN ALTERNATIVE Secondary way to do this that calls the above created function.
          {items.map((item, index) => (
          <li key={item} onClick={handleClick} className= {selectedIndex === index ? 'list-group-item active':'list-group-item' }>
 */}

            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
