/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */

// add the movies variables here ....

const movie1 = {
  id: 1,
  name: "COCO",
  image:
    "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
  rating: 6,
};

const movie2 = {
  id: 2,
  name: "don't look up",
  image:
    "https://m.media-amazon.com/images/M/MV5BNzk0OWQzMDQtODg1ZC00Yjg2LWJjYzAtNGRjMjE2M2FlYjZjXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg",
  rating: 4,
};

const movie3 = {
  id: 3,
  name: "Batman",
  image:
    "https://i.pinimg.com/originals/37/ec/34/37ec346f9cd8b1097f2cd821e208e72e.jpg",
  rating: 4,
};

console.log(movie1);
console.log(movie2);
console.log(movie3);

/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */

movies = [
  {
    id: 1,
    name: "COCO",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
    rating: 6,
  },

  {
    id: 2,
    name: "don't look up",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzk0OWQzMDQtODg1ZC00Yjg2LWJjYzAtNGRjMjE2M2FlYjZjXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg",
    rating: 4,
  },

  {
    id: 3,
    name: "Batman",
    image:
      "https://i.pinimg.com/originals/37/ec/34/37ec346f9cd8b1097f2cd821e208e72e.jpg",
    rating: 4,
  },
];

/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */
