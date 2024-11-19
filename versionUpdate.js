const show=document.getElementById("versionHistory");
const footer=document.getElementById("Version");
let isgone=true;

footer.addEventListener("click",Show);


function Show(params) {
    if (isgone===true){
        show.style.display="block";
        isgone=false;
    } else {
        show.style.display="none";
        isgone=true;
    }
}