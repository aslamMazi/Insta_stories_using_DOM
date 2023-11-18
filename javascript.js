var arr = [
    {dp:"https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xhc3NpYyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1587715363857-65fcecee8fa1?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsYXNzaWMlMjBtZW58ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1644621596488-25d519a1a8ed?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzaWMlMjBtZW58ZW58MHx8MHx8fDA%3D",story:"https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://plus.unsplash.com/premium_photo-1661720137713-a85a195e0b1e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNsYXNzaWMlMjBtZW58ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1633655442164-da26330e85b4?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsYXNzaWMlMjBtZW58ZW58MHx8MHx8fDA%3D"},
    {dp:"https://images.unsplash.com/photo-1643155571370-373edc90ba68?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNsYXNzaWMlMjBtZW58ZW58MHx8MHx8fDA%3D",story:"https://images.pexels.com/photos/19041099/pexels-photo-19041099/free-photo-of-cute-duckling-on-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
    {dp:"https://images.unsplash.com/photo-1667375565651-b660b574d1a9?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNsYXNzaWMlMjBtZW58ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1620700117730-40f7e8a6555c?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNsYXNzaWMlMjBtZW58ZW58MHx8MHx8fDA%3D"},
]

var clutter = "";
var storyiyan = document.querySelector("#storiyan");

arr.forEach(function(elem,indx){
    clutter+=`<div id="story">
    <img id="${indx}" src="${elem.dp}" alt="">
</div>`
})

storyiyan.innerHTML = clutter

storyiyan.addEventListener("click",function(dets){
document.querySelector("#fullScreen").style.display = "block"
document.querySelector("#fullScreen").style.backgroundImage =`url(${arr[dets.target.id].story})`

setTimeout(function(){
    document.querySelector("#fullScreen").style.display = "none"
},2000)
})