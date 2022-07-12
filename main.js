// QUERY SELECTORS //
let crossOff = document.querySelectorAll('#ol-crossoff li'); // ref to each li in ol
let fadeAway = document.querySelectorAll('#ul-fade li');
let images = document.querySelectorAll('#row img');
let resetButton = document.querySelector('#destroy-all')

// FUNCTIONS //

//////// W FOR LOOP: ////////
// for(let i = 0; i < crossOff.length; i++){
//     crossOff[i].addEventListener('click', function(){
//         console.log(crossOff[i].innerText);
//         let click = crossOff[i]
//         click.style.textDecoration = "line-through"
//     })
// };

crossOff.forEach(item => {
    item.addEventListener('click', function(){
    item.style.textDecoration = 'line-through'
    })
});

//////// W FOR LOOP: ////////
// for(let i = 0; i < fadeAway.length; i++){
//     fadeAway[i].addEventListener('click', function(){
//         console.log(fadeAway[i].innerText)
//         let click = fadeAway[i];
//         click.style.opacity = '0'
//     })
// };

fadeAway.forEach(item => {
    item.addEventListener('click', function(){
        item.style.opacity = '0'
    })
});

//////// W FOR LOOP: ////////
// for(let i = 0; i < images.length; i++){
//     images[i].addEventListener('click', function(){
//         console.log(images[i])
//         let click = images[i];
//         click.style.width = '0'
//     })
// };

images.forEach(img => {
    img.addEventListener('click', function(){
        img.style.width = '0'
    })
});

//////// W FOR LOOP: ////////
// function meteorMe(){
//     for(let i = 0; i < crossOff.length; i++){
//         let click = crossOff[i];
//         click.style.textDecoration = "none";
//     }
//     for(let i = 0; i < fadeAway.length; i++){
//         let click2 = fadeAway[i];
//         click2.style.opacity = "100%";
//     }
//     for(let i = 0; i < images.length; i++){
//         let click3 = images[i];
//         click3.style.width = "162px";
//     }
// };

function meteorMe(){
    crossOff.forEach(item => {
        item.style.textDecoration = "line-through"
    })
    fadeAway.forEach(item => {
        item.style.opacity = "0%"
    })
    images.forEach(item => {
        item.style.width = "0px"
    })
};

resetButton.addEventListener('click', meteorMe);

// HELPER FUNCTION //

function helper(cross, opac, size){

}