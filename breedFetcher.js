const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  //Print the error if one occurred
  if (error) {
    console.log('An error occured, check the domain!:', error);
  }

  const data = JSON.parse(body);

  if (data === []) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found');
  }
  console.log(typeof data);
});