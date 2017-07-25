var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets". ++
*/

planets.forEach((item) =>{
    let printed = item + " ";
    document.getElementById('planets').innerHTML += printed;
});

var el = document.getElementById("planets");

// Use the map method to create a new array where the first letter of each planet is capitalized+++++

var up = planets.map(function(item){
    console.log("hi");
    return item.charAt(0).toUpperCase() + item.slice(1);
});
console.log(up);


// Use the filter method to create a new array that contains planets with the letter 'e'+++

var ret = planets.filter(function(item){
    if (item.indexOf('e') >= 0){
        return item
        }
});
console.log(ret);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(
    function(prev, curr, i){
        return prev + " " + curr;
    }
)
console.log(sentence);