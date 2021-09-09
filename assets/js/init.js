
let searchOn = false; // searchOn = true if search-var is on display otherwise is false
let theBook = "Salmos";
let theChapter = "1";

// let icon_text = " <i id=\"search-icon\" class=\"fa fa-search\" ></i>";
document.addEventListener('click',(event) => {
    let target = event.target;
    console.log(target);
    // console.log(target.classList.contains("book"));
    if (target.classList.contains("book")) {
        //change book btn =>  back button
        target.className = "back";
        target.innerHTML = " <i id=\"search-icon\" class=\"icon ion-android-arrow-back\" ></i>";
        //change version btn => search_bar
        let right = document.getElementById("Right");
        right.className = "search_bar";
        right.type = "search";
        right.value = "Search.."
        //add books to drop down
        let dropdown = document.getElementById("theDropdown");
        dropdown.style.display = "block";
        let book;
        for (let i = 0; i<books.name.length; i++){
            book = document.createElement('a');
            book.className = "book_option";
            book.textContent =  books.name[i];
            dropdown.appendChild(book);
        }
    }
    else if (target.classList.contains("back")){
        let right = document.getElementById("Right");
        if (right.classList.contains("search_bar")) {
            console.log("go to 1");
            // hide dropdown
            let dropdown = document.getElementById("theDropdown");
            dropdown.innerHTML = "";
            dropdown.style.padding = "0px 0px 0px 0px";
            dropdown.style.display = "none";
            // left btn => book
            let left = document.getElementById("Left");
            left.className = "book";
            left.innerHTML = theBook + " " + theChapter;
            // right btn => version
            let right = document.getElementById("Right");
            right.className = "version";
            right.type = "button";
            right.value = "RV1960";
        }
        else if (right.classList.contains("chapters")) {
            console.log("go to 2");
        }
        else {
            console.log("fix right side");
        }
    }
    else if (target.classList.contains("book_option")) {
        // dropdown showing books => dropdown showing chapters
        let book_name = target.innerHTML;
        console.log("book = " + book_name);
        console.log("number of chapters = " + books[book_name] );
        let dropdown = document.getElementById("theDropdown");
        dropdown.style.display = "block";
        dropdown.style.padding = "12px 14px 12px 14px";
        dropdown.innerHTML = "";
        let number;
        for (let i = 1; i<=books[book_name]; i++){
            number  = document.createElement('button');
            number.className = "chapter_option";
            number.textContent =  i;
            dropdown.appendChild(number);
        }
        // change search_bar => chapters
        let right = document.getElementById("Right");
        right.className = "chapters";
        right.type = "button";
        right.value = "Choose Chapter:";
    }
    else {
        // hide dropdown
        let dropdown = document.getElementById("theDropdown");
        dropdown.innerHTML = "";
        dropdown.style.padding = "0px 0px 0px 0px";
        dropdown.style.display = "none";
        // left btn => book
        let left = document.getElementById("Left");
        left.className = "book";
        left.innerHTML = theBook + " " + theChapter;
        // right btn => version
        let right = document.getElementById("Right");
        right.className = "version";
        right.type = "button";
        right.value = "RV1960";
    }
    // let Book = document.getElementById("Book");
    // let Version = document.getElementById("Version");
    // let search_nav = document.getElementById("search-nav");
    // console.log(Book.className);
    // if (searchOn === true) {
    //     searchOn = false;
    //     search_nav.style.display = "none";
    //     Book.style.display = "block";
    //     Version.style.display = "block";
    // }
    // else {
    //     searchOn = true;
    //     search_nav.style.display ="flex";
    //     Book.style.display = "none";
    //     Version.style.display = "none";
    // }
});

// function change() {
//     if (searchOn === false) {
//         let left = document.getElementById("Left");
//         let right = document.getElementById("Right");
//         let dropdown = document.getElementById("theDropdown");
//         dropdown.style.display = "block";
//         left.className = "searchOn_left";
//         left.type = "search";
//         left.value = "Search ...";
//         //adding the books
//         for (let i = 0; i<books.name.length; i++){
//             let book = document.createElement('a');
//             book.textContent =  books.name[i];
//             dropdown.appendChild(book);
//         }

//         right.className = "searchOn_right";
//         right.innerHTML = " <i id=\"search-icon\" class=\"icon ion-android-arrow-back\" ></i>";
//         searchOn = true;
//     }
//     else {
//         let left = document.getElementById("Left");
//         let right = document.getElementById("Right");
//         let dropdown = document.getElementById("theDropdown");
//         dropdown.style.display = "none";
//         left.className = "searchOff_left";
//         left.type = "button";
//         left.value = "Salmos 1";

//         right.className = "searchOff_right";
//         right.innerHTML = "RV1960";

//         searchOn = false;

//     }
// }

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
