const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// Click
// clearBtn.addEventListener('click', runEvent);

// Double click - Hide the button
/* clearBtn.addEventListener('dblclick', (e) => {
    clearBtn.style.display="none";
});
*/


// MouseDown - click and hold event
/* clearBtn.addEventListener('mousedown', (e) => {
    console.log(`EVENT TYPE: ${e}`);
});
*/


// MouseUp - click and hold event
// clearBtn.addEventListener('mouseup', runEvent);


// Mouse enter - same as mouseleave, mouseout
// card.addEventListener('mouseenter', runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);

// Event handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    // Change 'Tasks' heading into XY coordinates
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    // Change background color
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}