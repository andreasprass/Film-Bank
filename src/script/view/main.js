import '../component/film-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const FilmListElement = document.querySelector('film-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchFilm(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult =  results => {
    FilmListElement.films = results;
  };

  const fallbackResult = message => {
    FilmListElement.renderError(message);
  };

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};

export default main;