let theBook = "Salmos";
let theChapter = 1;
let theNewBook = "";
let newBook;
let theNewChapter = "";
let STATE = 1; // 1 => it shows the book and version
               // 2 => it shows back btn and search bar
               // 3 => it shows back btn and chapter list


document.addEventListener('click',(event) => {
    let target = event.target;
    let input = target.classList.value;
    console.log("=====");
    console.log(input);
    switch (input) {
    case "book":
        STATE = 2;
        console.log("go to state 2");
        changeToStateTwo(target);
        break;

    case "version":
        console.log("user clicked version");
        break;

    case "back":
        goToPreviewsState();
        break;
    case "icon ion-android-arrow-back":
        goToPreviewsState();
        break;

    case "search_bar":
        break;
    case "book_option":
        STATE = 3;
        console.log("go to state 3");
        changeToStateThree(target);
        break;
    case "chapter_option":
        changeToStateOne(target);
        break;
    default:
        console.log("user clicked elsewhere");
        resetState();
    }
    console.log("=====");
});
