// getting red elements
const searchWrapper = document.querySelector(".wrapper");
const inputBox = searchWrapper.querySelector(".content");
const suggestionBox = searchWrapper.querySelector(".autocom-box");

// if user presses any key and releases
inputBox.onkeyup = (e) => {
    // console.log(e.target.value)  logs the TOTAL value in search box
    let userData = e.target.value; // user entered data
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user char to lowercase and return only those sugg
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        // console.log(emptyArray);
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray);
        suggestionBox.classList.add("active"); // show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggestionBox.querySelectorAll("li");
        for (let i = 0; i < Array.length - 1; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)")
        }
    } else {
        suggestionBox.classList.remove("active"); // hide autocomplete box
    }
}
function select(element) {
    let selectUserData = element.textContent;
    //console.log(selectUserData);
    inputBox.value = selectUserData; // pass user selection data 
    suggestionBox.classList.remove("active");
}


function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '<li>';
    } else {
        listData = list.join('');
    }
    suggestionBox.innerHTML = listData;
}