// the button start 
function rotatey (){
    $(".back").css("transform" , "rotateY(180deg)")
    
}

// the welcoming function 
document.querySelector(".control-buttons span").onclick = function (){
    var yourName = prompt("Chnowa esmk ?"); 
    if (yourName==null||yourName==''){
        document.querySelector('.name span').innerHTML='Majhoul'
    
    } else {
        document.querySelector('.name span').innerHTML=yourName
    }
    document.querySelector(".control-buttons").remove()
} 


// Main variables
var duration = 1000; 
// select blocks container
var blocksContainer = document.querySelector(".memory-game-blocks");
// Create new array (from game blocks)
var blocks = Array.from(blocksContainer.children) ; 
//create Range of keys 
var orderRange = Array.from(Array(blocks.length).keys())
//console.log(orderRange) to see my new array 
 // we need to add an order css to our new array
  
//  console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);
// i want to see with console if shuffle work or not

 blocks.forEach((block , index) => {
    block.style.order=orderRange[index]
  

//  add cclick Event
 block.addEventListener('click' , function(){
    flipBlock(block);
});

}) ;
//  Flip block function
function flipBlock (selectedBlock){
    // aad class 'is-flipped'
    selectedBlock.classList.add('is-flipped');
   // collect all flipped cards
   var allflippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'))
   // if there is two selected blocks
if (allflippedBlocks.length === 2 ){
     // stop clicking function 
     stopClicking()
    //check Matched Blocks
    checkMatchedBlocks(allflippedBlocks[0] , allflippedBlocks[1])

}}

// stop clicking function
function stopClicking(){
    // add class no clicking on the main container
    blocksContainer.classList.add('no-clicking');

  // Wait Duration
  setTimeout(() => {

    // Remove Class No Clicking After The Duration
    blocksContainer.classList.remove('no-clicking');

  }, duration);
      }
      // check matched blocks 
  function checkMatchedBlocks(FirstBlock,secondBlock){
    var triesElement = document.querySelector('.nav-br span')

    if (FirstBlock.dataset.game === secondBlock.dataset.game){
        FirstBlock.classList.remove('is-flipped')
        secondBlock.classList.remove('is-flipped')

        FirstBlock.classList.add('has-match')
        secondBlock.classList.add('has-match')
    } else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        setTimeout(() => {
        FirstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
        },duration)
  
   

    }

  }    



  // shuffle function 
  function shuffle (array) {
    // setting vars 
    var current = array.length
     var  temp,
    random ;

    while (current>0){
// get random num
   random = Math.floor(Math.random()*current)
   current -- ;
console.log(random)

// 1 save current Element in the current array 
temp = array[current] ;
//2 current element = random element
array[current] = array[random] ;
//3 random element = get element from the array 
array[random]=temp ;
    }
    return array;
}



  

