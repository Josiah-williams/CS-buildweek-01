export const gridDisplay = gridSize => {
    if (gridSize === 15) {
      return {
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 20px)`,
        gridTemplateRows: `repeat(${gridSize}, 20px)`
      };
    }
    if (gridSize === 30) {
      return {
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 10px)`,
        gridTemplateRows: `repeat(${gridSize}, 10px)`
      };
    }
    if (gridSize === 50) {
      return {
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 6px)`,
        gridTemplateRows: `repeat(${gridSize}, 6px)`
      };
    }
  };

  const cellSize = gridSize => {
      if (gridSize === 15) {
          return '20px'
      }
      if (gridSize === 30) {
          return '10px'
      }
      if (gridSize === 50) {
          return '6px'
      }
  }

  export const cellDisplay = (alive, gridSize) => {
      const ranColorNum1 = Math.floor(Math.random() * Math.floor(255))
      const ranColorNum2 = Math.floor(Math.random() * Math.floor(255))
      const ranColorNum3 = Math.floor(Math.random() * Math.floor(255))

    if (alive) {
      return {
        width: `${cellSize(gridSize)}`,
        height: `${cellSize(gridSize)}`,
        background: `rgb(${ranColorNum1}, ${ranColorNum2}, ${ranColorNum3})`,

      };
    } else {
      return {
          width: `${cellSize(gridSize)}`,
          height: `${cellSize(gridSize)}`,
          background: "linear-gradient(#333 1px, transparent 1px),    linear-gradient(90deg, #333 1px, transparent 1px)",
          background: "#000 ",
          border: '0.1px solid gray'

          // cellSize will return the width and height of an individual cell based on the gridSize. cellDisplay create 3
          //random colors, and then checks to see if the cell passed in is alive or dead. If it’s alive it dynamically sets the
          // size of the cell and then gives it a random color, if it’s dead then it dynamically sets the size of the cell and
          //sets the background to black.
        };
    }
  };
