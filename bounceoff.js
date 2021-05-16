function bounceoff(x1 , x2){
    if (x1.x - x2.x < x2.width/2 + x1.width/2
       && x2.x - x1.x < x2.width/2 + x1.width/2){
         x1.velocityX = (-1)*x1.velocityX;
       }
       else if ( x1.y - x2.y < x2.height/2 + x1.height/2
       && x2.y - x1.y < x2.height/2 + x1.height/2) {
         x1.velocityY = (-1)*x1.velocityY;
 
     }
 
 }