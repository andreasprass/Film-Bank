// import clubs from './clubs.js';

class DataSource {
  static searchFilm(keyword) {
    //get data from internal json

    // return new Promise((resolve, reject) => {
    //   const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
      
    //   if (filteredClubs.length) {
    //     resolve(filteredClubs);
    //   } else {
    //     reject(`${keyword} is not found`);
    //   }
    // });


    //get data from Public Web API
    return fetch(`http://www.omdbapi.com/?apikey=beeeb51a&s=${keyword}`)
      .then(responsse => {
        return responsse.json();
      })
      .then(responseJson => {
        if (responseJson.Search) {
          return Promise.resolve(responseJson.Search);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;