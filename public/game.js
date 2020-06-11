
    window.onload = playGame;
    
    function playGame() {
            
            var sound = document.getElementById("sound");
            var imageX;
            var imageY;
            var interval = setInterval(function () {sound.play();}, 700);

        document.getElementById('image').addEventListener('click', function() {
            console.log("clicked");
            document.getElementById('image').style.opacity = "100";
            document.body.style.backgroundColor = "rgb(0, 174, 255)";
            clearInterval(interval);
            document.getElementsByClassName('gameOverScreen')[0].style.visibility = "visible";
         });
         
         window.addEventListener('mousemove', function (e) {
            console.log(e);
                    if(e.x < imageX-650 || e.x > imageX+700 || e.y < imageY-650 || e.y > imageY+700){
                		sound.volume = 0.1;
               	 	}

                    else if (e.x < imageX-450 || e.x > imageX+500 || e.y < imageY-450 || e.y > imageY+500) {
                        sound.volume = 0.2;
                    }
                    else if (e.x < imageX-250 || e.x > imageX+300 || e.y < imageY-250 || e.y > imageY+300) {
                        sound.volume = 0.4;
                    }
                    else if (e.x < imageX || e.x > imageX+50 || e.y < imageY || e.y > imageY+50) {
                        sound.volume = 0.6;
                    }
                    else{
                    	sound.volume = 1;
                    }
         });
                window_Height = window.innerHeight;
                window_Width = window.innerWidth;
                
                image_Element = document.getElementById("image");
                image_Height = image_Element.clientHeight;
                image_Width = image_Element.clientWidth;
                
                availSpace_V = window_Height - image_Height;
                availSpace_H = window_Width - image_Width;
            
                imageY = Math.round(Math.random() * availSpace_V);
                imageX = Math.round(Math.random() * availSpace_H);
                
                image_Element.style.top = imageY + "px";
                image_Element.style.left = imageX + "px";
            }