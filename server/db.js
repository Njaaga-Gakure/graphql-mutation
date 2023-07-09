const users = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    age: 25,
    nationality: "USA",
    friends: [
      {
        id: 2,
        name: "Jane Smith",
        username: "janesmith",
        age: 30,
        nationality: "Canada",
      },
      {
        id: 3,
        name: "Michael Johnson",
        username: "michaelj",
        age: 35,
        nationality: "Australia",
      },
      {
        id: 4,
        name: "Emily Wilson",
        username: "emilyw",
        age: 28,
        nationality: "UK",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    age: 30,
    nationality: "Canada",
  },
  {
    id: 3,
    name: "Michael Johnson",
    username: "michaelj",
    age: 35,
    nationality: "Australia",
  },
  {
    id: 4,
    name: "Emily Wilson",
    username: "emilyw",
    age: 28,
    nationality: "UK",
  },
  {
    id: 5,
    name: "David Lee",
    username: "davidl",
    age: 32,
    nationality: "USA",
  },
  {
    id: 6,
    name: "Sophia Chen",
    username: "sophiac",
    age: 27,
    nationality: "China",
  },
  {
    id: 8,
    name: "Olivia Rodriguez",
    username: "oliviar",
    age: 31,
    nationality: "Mexico",
  },
  {
    id: 9,
    name: "Alexandre Dubois",
    username: "alexandred",
    age: 33,
    nationality: "France",
  },
  {
    id: 10,
    name: "Marta Oliveira",
    username: "martao",
    age: 26,
    nationality: "Portugal",
  },
];

const movieList = [
  {
    id: "1",
    name: "Inception",
    yearOfPublication: 2010,
    isInTheaters: true,
  },
  {
    id: "2",
    name: "The Shawshank Redemption",
    yearOfPublication: 1994,
    isInTheaters: false,
  },
  {
    id: "3",
    name: "Pulp Fiction",
    yearOfPublication: 1994,
    isInTheaters: false,
  },
  {
    id: "4",
    name: "The Dark Knight",
    yearOfPublication: 2008,
    isInTheaters: false,
  },
  {
    id: "5",
    name: "Fight Club",
    yearOfPublication: 1999,
    isInTheaters: false,
  },
  {
    id: "6",
    name: "Interstellar",
    yearOfPublication: 2014,
    isInTheaters: false,
  },
  {
    id: "7",
    name: "The Matrix",
    yearOfPublication: 1999,
    isInTheaters: false,
  },
  {
    id: "8",
    name: "The Lord of the Rings: The Fellowship of the Ring",
    yearOfPublication: 2001,
    isInTheaters: false,
  },
  {
    id: "9",
    name: "The Godfather",
    yearOfPublication: 1972,
    isInTheaters: false,
  },
  {
    id: "10",
    name: "Forrest Gump",
    yearOfPublication: 1994,
    isInTheaters: false,
  },
  {
    id: "11",
    name: "The Lion King",
    yearOfPublication: 1994,
    isInTheaters: false,
  },
  {
    id: "12",
    name: "The Avengers",
    yearOfPublication: 2012,
    isInTheaters: false,
  },
];

const userList = users.map((item) => {
  return { ...item, nationality: item.nationality.toUpperCase() };
});
module.exports = { userList, movieList };
