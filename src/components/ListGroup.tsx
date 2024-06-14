import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  items = [];

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
    items.length === 0 ? <p>No item found</p> : null;
    //here is a cleaner version of the code
    items.length === 0 && <p>No item found</p>;
  };

 */

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
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
