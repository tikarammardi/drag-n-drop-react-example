import { useRef } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const [fruits, setFruits] = useState([
    {
      name: "🍎",
      id: 1,
    },
    {
      name: "🍍",
      id: 2,
    },
    {
      name: "🍒",
      id: 3,
    },
    {
      name: "🍌",
      id: 4,
    },
    {
      name: "🍉",
      id: 5,
    },
  ]);

  const dragStart = (event, position) => {
    dragItem.current = position;
  };

  const dragEnter = (event, position) => {
    dragOverItem.current = position;
  };

  const handleDragEnd = () => {
    const tempFruits = [...fruits];

    const dragItemContent = tempFruits[dragItem.current];

    tempFruits.splice(dragItem.current, 1);

    tempFruits.splice(dragOverItem.current, 0, dragItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setFruits(tempFruits);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!!fruits.length &&
          fruits.map((fruitItem, index) => (
            <div
              style={{
                margin: "10px",
                fontSize: "80px",
                border: "2px solid green",
                width: "80%",
              }}
              key={fruitItem.id}
              onDragStart={(event) => dragStart(event, index)}
              onDragEnter={(event) => dragEnter(event, index)}
              onDragEnd={handleDragEnd}
              draggable
            >
              {fruitItem.name}
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
