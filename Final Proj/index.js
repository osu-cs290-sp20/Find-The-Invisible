var count = 0; flipped = 0;
var draggables = document.getElementsByClassName("drag");
var greens = document.getElementsByClassName("green");
var blues = document.getElementsByClassName("blue");
var reds = document.getElementsByClassName("red");
var yellows = document.getElementsByClassName("yellow");

for (var i = 0; i < draggables.length; i++){
	dragElement(draggables[i]);

}



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; 

  elmnt.onmousedown = dragMouseDown;
    

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    
    window.addEventListener('contextmenu', function (e) {
  		e.preventDefault();
	}, false);


  }
  
}

function rotate(e){
    		e.classList.remove("green");
            e.classList.remove("blue");
            e.classList.remove("red");
            e.classList.remove("yellow");
            if (count == 0){
        		e.style.transform  = 'rotate(90deg)';
                count ++;
            }
            else if (count == 1){
            	e.style.transform  = 'rotate(180deg)';
                count ++;
            }
            else if (count == 2){
            	e.style.transform  = 'rotate(270deg)';
                count ++;
            }
            else if (count == 3){
            	e.style.transform  = 'rotate(360deg)';
                count = 0;
            }
            
            
}

function flip(e){
    e.classList.remove("green");
    e.classList.remove("blue");
    e.classList.remove("red");
    e.classList.remove("yellow");
	if(flipped == 0){
    	e.style.transform = 'scaleX(-1)';
        flipped = 1;
        
    }
    else{
    	e.style.transform = null;
        flipped = 0;
    }
}

function save(){

}