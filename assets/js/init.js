
let searchOn = false; // searchOn = true if search-var is on display otherwise is false
// let icon_text = " <i id=\"search-icon\" class=\"fa fa-search\" ></i>";
// document.addEventListener('click',(event) => {
//     // let target = event.target;
//     // console.log(target);
//     let Book = document.getElementById("Book");
//     let Version = document.getElementById("Version");
//     let search_nav = document.getElementById("search-nav");
//     console.log(Book.className);
//     if (searchOn === true) {
//         searchOn = false;
//         search_nav.style.display = "none";
//         Book.style.display = "block";
//         Version.style.display = "block";
//     }
//     else {
//         searchOn = true;
//         search_nav.style.display ="flex";
//         Book.style.display = "none";
//         Version.style.display = "none";
//     }
// });

function change() {
    if (searchOn === false) {
        let left = document.getElementById("Left");
        let right = document.getElementById("Right");
        let dropdown = document.getElementById("theDropdown");
        dropdown.style.display = "block";
        left.className = "searchOn_left";
        left.type = "search";
        left.value = "Search ...";
        //adding the books
        for (let i = 0; i<books.name.length; i++){
            let book = document.createElement('a');
            book.textContent =  books.name[i];
            dropdown.appendChild(book);
        }

        right.className = "searchOn_right";
        right.innerHTML = " <i id=\"search-icon\" class=\"fa fa-search\" ></i>";
        searchOn = true;
    }
    else {
        let left = document.getElementById("Left");
        let right = document.getElementById("Right");
        let dropdown = document.getElementById("theDropdown");
        dropdown.style.display = "none";
        left.className = "searchOff_left";
        left.type = "button";
        left.value = "Salmos 1";

        right.className = "searchOff_right";
        right.innerHTML = "RV1960";

        searchOn = false;

    }
}

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
