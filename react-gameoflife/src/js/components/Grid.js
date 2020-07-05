// In order to visually display the grid & cells to the screen we create a Grid 
// component that maps over our grid array and generates an individual cell 
// for each object in the grid array.
import React from "react";
import { gridDisplay, cellDisplay } from '../components/helper-functions/display-function'


export default function Grid({ grid, toggleLife, clickable, gridSize }) {

  
  return (
    <div className="grid" style={gridDisplay(gridSize)}>
      {grid.map((cell, i) => {
        return (
          <div
            key={cell.id}
            className={cell.alive ? "alive" : "dead"}
            onClick={clickable ? toggleLife : null}
            data-id={cell.id}
            style={cellDisplay(cell.alive, gridSize)}
          />
        );
      })}
    </div>
  );
}
