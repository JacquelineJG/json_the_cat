const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    const data = JSON.parse(body);
  
    //Print the error if one occurred
    const breed = data[0];
    if (error) {
      return callback(error, null);
    }
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(null, null);
    }
  });
 
};

module.exports = { fetchBreedDescription };