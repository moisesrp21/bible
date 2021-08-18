let x = 0; // 0 -> the search is off | 1 -> search is on

document.addEventListener('click',checkDropdown);

function checkDropdown(event) {
    let target = event.target;
    let e = document.getElementById("dropbtn");
    if (!e.isSameNode(target)) {
        document.getElementById("dropdown-content").style.display= "none";
        e.className = "dropbtnClass";
        e.type = "Button";
        e.value = "Genesis";
        x = 0;
    }
    console.log(target);
}

function showContent(){
    if (x === 0) {
        document.getElementById("dropdown-content").style.display= "block";
        let e = document.getElementById("dropbtn");
        e.className = "dropbtnClickedClass";
        e.type = "text";
        e.value = "";
        e.placeholder = "Search: ...";
        x = 1;
    }
    else {
        document.getElementById("dropdown-content").style.display= "none";
        let e = document.getElementById("dropbtn");
        e.className = "dropbtnClass";
        e.type = "Button";
        e.value = "Genesis";
        x = 0;
    }

}
