let x = 0;

function showContent(){
    if (x === 0) {
        document.getElementById("dropdown-content").style.display= "block";
        x = 1;
    }
    else {
        document.getElementById("dropdown-content").style.display= "none";
        x = 0;
    }

}
