const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  const source = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
 
  request(source, (error, response, body) => {
    const data = JSON.parse(body);
   
    if (error) {
      callback(error, null);
    }

    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback("Can't find breed", null);
    }
  });
};
module.exports = { fetchBreedDescription };