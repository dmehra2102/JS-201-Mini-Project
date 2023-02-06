const left_btn = document.getElementById('left_btn');
const right_btn = document.getElementById("right_btn");
const top_btn = document.getElementById("top_btn");
const bottom_btn = document.getElementById("bottom_btn");
const all_divs = document.querySelectorAll("#grid-div > div > div");


// Adding functionality to Left button
left_btn.addEventListener('click',()=>{
    const curr_ele = document.getElementById("curr_index");
    const ind = +(curr_ele.dataset.index);
    if((ind-1)>0){
        // Removing curr_index id attribute from the element. 
        curr_ele.removeAttribute('id');

        // Adding curr_index id attribute to the new element.
        document.querySelector(`[data-index~='${ind-1}']`).setAttribute('id','curr_index');
    }
})

// Adding functionality to Right button
right_btn.addEventListener("click",()=>{
    const curr_ele = document.getElementById("curr_index");
    const ind = +(curr_ele.dataset.index);
    if((ind+1)<=9){
        // Removing curr_index id attribute from the element.
        curr_ele.removeAttribute('id');

        // Removing curr_index id attribute from the element.
        document.querySelector(`[data-index~='${ind+1}']`).setAttribute('id','curr_index');
    }
})

// Adding functionality to Top button
top_btn.addEventListener("click",()=>{
    const curr_ele = document.getElementById("curr_index");
    const ind = +(curr_ele.dataset.index);
    if((ind-3)>0){

        // Removing curr_index id attribute from the element.
        curr_ele.removeAttribute('id');

        // Removing curr_index id attribute from the element.
        document.querySelector(`[data-index~='${ind-3}']`).setAttribute('id','curr_index');
    }
})


// Adding functionality to Bottom button
bottom_btn.addEventListener('click',()=>{
    const curr_ele = document.getElementById("curr_index");
    const ind = +(curr_ele.dataset.index);
    if((ind+3)<=9){
        // Removing curr_index id attribute from the element.
        curr_ele.removeAttribute('id');

        // Removing curr_index id attribute from the element.
        document.querySelector(`[data-index~='${ind+3}']`).setAttribute('id','curr_index');
    }
})