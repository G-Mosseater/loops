"use strict";
{
    fetch("https://rickandmortyapi.com/api/character")
        .then((r) => r.json())
        .then((json) => {
        for (let i = 0; i < json.results.length; i++) {
            console.log(json.results[i].name + " is in ");
            console.log(json.results[i].episode.length + " episodes");
            console.log("Character specie is " + json.results[i].species);
            console.log("Origin " + json.results[i].origin.name);
            console.log("Gender " + json.results[i].gender);
        }
    });
}
