/* for offset to work appropriately with left and right 
offset needs to match with margin lef in CSS file except for the offsets with
single digits. This is important if you change the box's 
default starting position on the screen  */
let newSpeed;
function BtnContext(id) {
    let box= document.getElementById("boxKun");
        switch (id) {
            case "rightMove":
                var Offset1 =  550;
                box.style.left= (box.offsetLeft + newSpeed - Offset1) + 'px';
                Check(box);
                break;
            case "leftMove":
                var Offset1 =  550;
                box.style.left= (box.offsetLeft - newSpeed - Offset1) + 'px';
                Check(box);
                break;
            case "upMove":
                box.style.top= (box.offsetTop - newSpeed ) + 'px';
                Check(box);                
                break;
            case "downMove":
                var Offset1 =  1;
                box.style.top= (box.offsetTop + newSpeed + Offset1) + 'px';
                Check(box);                
                break;
            case "uprightMove":
                var Offset2 =  550;
                box.style.top= (box.offsetTop - newSpeed ) + 'px';
                box.style.left= (box.offsetLeft + newSpeed - Offset2) + 'px';
                Check(box);                                
                break;
            case "downrightMove":
                var Offset1 =  1;
                var Offset2 =  550;
                box.style.top= (box.offsetTop + newSpeed + Offset1) + 'px';
                box.style.left= (box.offsetLeft + newSpeed - Offset2) + 'px';
                Check(box);                                
                break;
            case "upleftMove":
                var Offset2 =  550;
                box.style.top= (box.offsetTop - newSpeed ) + 'px';
                box.style.left= (box.offsetLeft - newSpeed - Offset2) + 'px';
                Check(box);                                
                break;
            case "downleftMove":
                var Offset1 =  1;
                var Offset2 =  550;
                box.style.top= (box.offsetTop + newSpeed + Offset1) + 'px';
                box.style.left= (box.offsetLeft - newSpeed - Offset2) + 'px';
                Check(box);                                
                break;
                
                default:
                let text=document.getElementById("Teext");
                text.innerHTML="This did not work";
                break;
                } 
             }

function realSpeed(Val) {
    newSpeed = Number(Val);
    return newSpeed;
}

function Reset(params) {
    var box= document.getElementById("boxKun");
    box.style.top= "103px";
    box.style.left= "0px";
    box.style.backgroundImage="url(Images/DefaultFace.png)";

}

function Check(Boxy) {
    let boxSide= Boxy.offsetLeft + Boxy.offsetWidth;
    let boxSide2= Boxy.offsetTop + Boxy.offsetHeight;
    let btnContainer= document.getElementById("buttonContainer");
    // let btnwLocation= btnContainer.offsetHeight + btnContainer.offsetTop;
    if (boxSide >= (document.body.offsetWidth-100)) {
        Boxy.style.backgroundImage="url(Images/OcrapRight.png)";
    } else if (boxSide<= 195) {
        Boxy.style.backgroundImage="url(Images/OcrapLeft.png)";
        
    } else if(boxSide2 > 904){
        Boxy.style.backgroundImage="url(Images/OcrapDown.png)";
        
    } else if (boxSide2< 250){
        Boxy.style.backgroundImage="url(Images/OcrapUp.png)";
    }
      else if (boxSide <= 529 && boxSide2 >=853) {
        Boxy.style.backgroundImage="url(Images/Derpface.png)";
      }  
   
     else{
        Boxy.style.backgroundImage="url(Images/DefaultFace.png)";
        
    }

}

function disappear(params) {
     document.getElementById("Teext").style.display="none";
     Reset();
    
}