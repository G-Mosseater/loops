
// Random data page:
// Get the randomized data here and transform it into an array in a Javascript file
// Create a TypeScript file that, using console.log():
// Outputs how many children all people have, in total (Ex.: Bia has 2 kids, Paul has 3, so the total 5)
// Outputs one string per person formatted as such:
// name: Age





{
  type people = {
    // setting data types
    id: number;
    name: string;
    birthdate: string;
    children: number;
    country: string;
    can_program: boolean;
  };
  // creating array of objects
  let list = [
    {
      id: 1,
      name: "Amanda Mackleden",
      birthdate: "5/23/1960",
      children: 5,
      country: "Angola",
      can_program: true,
    },
    {
      id: 2,
      name: "Mamie Tandey",
      birthdate: "9/19/1976",
      children: 4,
      country: "Thailand",
      can_program: false,
    },
    {
      id: 3,
      name: "Amaleta Tocque",
      birthdate: "6/16/1971",
      children: 0,
      country: "China",
      can_program: true,
    },
    {
      id: 4,
      name: "Carissa Carff",
      birthdate: "8/8/1981",
      children: 1,
      country: "Canada",
      can_program: false,
    },
    {
      id: 5,
      name: "Moss Bytheway",
      birthdate: "12/2/1975",
      children: 5,
      country: "Mexico",
      can_program: true,
    },
    {
      id: 6,
      name: "Ezmeralda Balharry",
      birthdate: "12/1/1994",
      children: 1,
      country: "China",
      can_program: false,
    },
    {
      id: 7,
      name: "Juliet Luparti",
      birthdate: "7/29/1974",
      children: 3,
      country: "China",
      can_program: true,
    },
    {
      id: 8,
      name: "Brion Dawbury",
      birthdate: "10/24/1950",
      children: 4,
      country: "Peru",
      can_program: true,
    },
    {
      id: 9,
      name: "Giffie Kybird",
      birthdate: "7/29/1963",
      children: 4,
      country: "Indonesia",
      can_program: true,
    },
    {
      id: 10,
      name: "Brunhilda Ennever",
      birthdate: "11/8/1983",
      children: 3,
      country: "China",
      can_program: false,
    },
  ];

  for (let i = 0; i < list.length; i++) {
    // loop that starts at index 0, continues the cycle for the full's arrays length
    console.log(list[i].name + " has "); // logs i.name which is the loop with the whole length of the array we just specified
    console.log(list[i].children + " children"); // this loops through the same list, it returns the children property + the string 'children'

    let date = new Date(list[i].birthdate); // creates a variable that stores a new date element transformed from the birthdate string
    let currentDate = new Date(); //creates variable with the current date
    let age = currentDate.getFullYear() - date.getFullYear(); // this variable stores the year difference between current date and date(birthdate)
    console.log(list[i].name + " is " + age + " old"); // logs the name with some extra strings and the age I just calculated above
    console.log(list[i]); //logs the full details of a object
  }
}
