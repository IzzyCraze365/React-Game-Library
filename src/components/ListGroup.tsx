import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  items = [];
  if (items.length === 0) 
    return(
  <>
    <h1>List</h1>
    <p>No item found</p>
  </>);

  return (
    <Fragment>
      {/* Remember you need to wrap eveything in a div / Fragment / <> for each component. */}
      <h1>List Group</h1>{" "}
      {/* Converting to JS reads it as React.creatElement('h1') */}
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
