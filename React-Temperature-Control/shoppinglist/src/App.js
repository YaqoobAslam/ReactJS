import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { itemName: "item 1", quantity: 1, isSelected: false },
    { itemName: "item 2", quantity: 3, isSelected: true },
    { itemName: "item 3", quantity: 2, isSelected: false },
  ]);
  return (
    <div className='item-list'>
      {items.map((item, index) => (
        <div className='item-container'>
          <div className='item-name'>
            {item.isSelected ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span className='completed'>{item.itemName}</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faCircle} />
                <span>{item.itemName}</span>
              </>
            )}
          </div>
          <div className='quantity'>
            <button>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span> {item.quantity} </span>
            <button>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
