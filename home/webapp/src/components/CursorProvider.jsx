import React, { useEffect } from "react";

const directions = {
  "ArrowLeft": [-1, 0],
  "ArrowUp": [0, -1],
  "ArrowRight": [1, 0],
  "ArrowDown": [0, 1]
}

export default function CursorProvider({children}) {

  useEffect(() => {
    document.getElementById("NewGameIcon").focus()

    document.addEventListener("keyup", detectKeyUp, true);
  }, [])


  function detectKeyUp(event) {
    let key = event.code

    if (key == "Enter" || key == "KeyA") {
      document.activeElement.click()
      return;
    }

    let directionVector = directions[key];

    let activeElement = document.activeElement;
    let activeElementCoords = getElementPosition(activeElement)

    let selectableObjects = document.querySelectorAll('[tabindex]')

    let minDistance = 1000;
    let closestElement;

    for (let i = 0; i < selectableObjects.length; i++) {
      let nElement = selectableObjects[i]
      if (nElement == activeElement) continue;

      let nElementCoords = getElementPosition(nElement);
      let coordsDiff = getVectorDifference(activeElementCoords, nElementCoords)

      if ((key == "ArrowUp" || key == "ArrowDown") && coordsDiff.y == 0) continue;
      if ((key == "ArrowLeft" || key == "ArrowRight") && coordsDiff.y != 0) continue; 


      let multiplied = {
        x: (coordsDiff.x) * directionVector[0],
        y: (coordsDiff.y) * directionVector[1],
      }

      if (multiplied.x < 0) continue;
      if (multiplied.y < 0) continue;

      let distance = Math.sqrt(coordsDiff.x**2 + coordsDiff.y**2)

      if (distance < minDistance) {
        minDistance = distance;
        closestElement = nElement;
      }
    }
      
    if (closestElement) {
      closestElement.focus()
    }
  }

  function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }

  function getCenterCoords(coords) {
    return {
      x: (coords.left + coords.right)/2,
      y: (coords.top + coords.bottom)/2
    };
  }

  function getElementPosition(elem) {
    return getCenterCoords(getCoords(elem));
  }

  function getVectorDifference(vector1, vector2) {
    return {
      x: vector2.x - vector1.x,
      y: vector2.y - vector1.y
    }
  }

  return (
    <div>
      {children}
    </div>
  )
}