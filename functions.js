let x = 0;

function showContent(){
    if (x === 0) {
        document.getElementById("dropdown-content").style.display= "block";
        let e = document.getElementById("dropbtn");
        e.className = "dropbtnClickedClass";
        e.innerText = "Search: ";
        x = 1;
    }
    else {
        document.getElementById("dropdown-content").style.display= "none";
        let e = document.getElementById("dropbtn");
        e.className = "dropbtnClass";
        e.innerText = "Genesis";
        x = 0;
    }

}
