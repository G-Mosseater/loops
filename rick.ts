{
  type Info = {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  type Character = {
    created: string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: {
      name: string;
      url: string;
    };
    name: string;
    origin: {
      name: string;
      url: string;
    };
    species: string;
    status: string;
    type: string;
    url: string;
  };
  fetch("https://rickandmortyapi.com/api/character")
    .then((r) => r.json())
    .then((json: { info: Info; results: Character[] }) => {
      for (let i = 0; i < json.results.length; i++) {    //loops through the whole length of #results
        console.log(json.results[i].name + " is in ");  //logs all names + ' is in ' string
        console.log(json.results[i].episode.length + " episodes");  // same as above
        console.log("Character specie is " + json.results[i].species); // loops through species
        console.log("Origin " + json.results[i].origin.name);  // loops through origin
        console.log("Gender " + json.results[i].gender);  // loops through gender
      }
    });
}
