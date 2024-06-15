import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // similar to onClick
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Initially no item is selected. We do not end up using this*/
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/* Remember you need to wrap eveything in a div / Fragment / <> for each component. */}
      <h1>List Group</h1> {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
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
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
