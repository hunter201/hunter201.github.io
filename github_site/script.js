const searchTables = (keyWords) => {

    let searchResult = document.querySelectorAll(keyWords);
    if (searchResult != null) {
        searchResult[0].style.border = "3px double green";
        for (let i = 0; i < searchResult[0].rows.length; i++) {
           searchResult[0].rows[i+1].cells[i+1].style.backgroundColor = 'pink'; 
        }
        
    }
    else {
        alert("Таблиц в документе не найдено!");
    }
}

searchTables('table');
