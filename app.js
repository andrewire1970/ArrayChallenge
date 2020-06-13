
var movieList = ["Saving Private Ryan", "LoneSurvior", "Red", "Black Hawk Down", "The Longest Day"];
console.log(movieList);


reverseList = movieList.reverse();
console.log(reverseList);

console.log(movieList);

movieList.push('A Bridge Too Far');
console.log(movieList);

movieList.unshift('Taken');
console.log(movieList);

movieList.splice(0, 0, 'The Guns of Naverone');
console.log(movieList);




for (i = 0; i < movieList.length; i++) {
    var insert = document.getElementById('targetId');
    console.log(insert);

    var addList = document.createElement('p');
    addList.textContent = movieList[i];
    insert.appendChild(addList);



};

for (i = 0; i < movieList.length; i++) {
    movieList.sort();
    var insert = document.getElementById('targetId');
    console.log(insert);


    var addList = document.createElement('ol');
    addList.textContent = movieList[i];
    insert.appendChild(addList);



};



