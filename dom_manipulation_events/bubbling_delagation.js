// EVENT BUBBLING

/* document.querySelector('.card-title').addEventListener('click', 
function(){
    console.log('CARD TITLE');
}
);


document.querySelector('.card-content').addEventListener('click', 
function(){
    console.log('CARD content');
}
);

document.querySelector('.card').addEventListener('click', 
function(){
    console.log('CARD');
}
);

document.querySelector('.col').addEventListener('click', 
function(){
    console.log('col');
}
);
*/



// EVENT DELAGATION - PUT THE EVENT LISTENER ON THE PARENT YOU'RE LOOKING FOR
// THIS WILL WORK ONLY FOR THE FIRST ELEMENT
/* const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);
*/ 


document.body.addEventListener('click', deleteItem);


function deleteItem(e){
    
    /* NOT THE IDEAL WAY OF TARGETING ALL X BUTTONS IN THE LIST
    if(e.target.parentElement.className === 'delete-item secondary-content'){
        console.log('DELETE ITEM');
    }
    */

    
    // BEST WAY TO TARGET THESE X LINKS
    if(e.target.parentElement.classList.contains('delete-item') ){
        console.log('DELETE ITEM');

        // e.target = i tag, parentElement = a tag, parentElement = listItem .remove()
        e.target.parentElement.parentElement.remove();

    }

}