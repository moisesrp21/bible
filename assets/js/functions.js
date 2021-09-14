function changeToStateTwo(target) {
    if (target !== undefined) {
        //change book btn =>  back button
        target.className = "back";
        target.innerHTML = " <i id=\"search-icon\" class=\"icon ion-android-arrow-back\" ></i>";
    }
    //change version btn => search_bar
    let right = document.getElementById("Right");
    right.className = "search_bar";
    right.type = "search";
    right.value = "";
    right.placeholder = "Search ...";
    //add books to drop down
    let dropdown = document.getElementById("theDropdown");
    dropdown.innerHTML = "";
    dropdown.style.display = "block";
    let book;
    for (let i = 0; i<books.name.length; i++){
        book = document.createElement('a');
        book.className = "book_option";
        book.textContent =  books.name[i];
        dropdown.appendChild(book);
    }
}

function changeToStateThree(target) {
    // dropdown showing books => dropdown showing chapters
    theNewBook = target.innerHTML;
    let dropdown = document.getElementById("theDropdown");
    dropdown.innerHTML = "";
    dropdown.style.display = "block";
    dropdown.style.padding = "12px 14px 12px 14px";
    let number;
    for (let i = 1; i<=books[theNewBook]; i++){
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

function changeToStateOne(target) {
    //get the new book and new chapter
    //make a get request to api
    // go to STATE 1 with new information;
    theNewChapter = target.innerHTML;
    console.log("fetch = > (" + theNewBook + ", " + theNewChapter + ")");
}

function goToPreviewsState() {
    switch(STATE) {
    case 2:
        console.log("going from 2 to 1");
        STATE = 1;
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
        break;
    case 3:
            console.log("going from 3 to 2");
            STATE = 2;
            changeToStateTwo();
            break;
    default:
        console.log("WARNING: STATE:" + STATE);
    }
}

