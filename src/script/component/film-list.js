import './film-item.js';

class FilmList extends HTMLElement {
    set films(films) {
        this._films = films;
        this.render();
    }

    // render() {
    //     this.innerHTML = '';
    //     this._clubs.forEach(club => {
    //       const clubItemElement = document.createElement('club-item');
    //       clubItemElement.club = club;
    //       this.appendChild(clubItemElement);
    //     });
    //   }

    render() {
        this.innerHTML = '';
        this._films.forEach(Search => {
          const filmItemElement = document.createElement('film-item');
          filmItemElement.film = Search;

          this.appendChild(filmItemElement);
        });

        // this.innerHTML = '';
        // this._clubs.forEach(club => {
            // const clubItemElement = document.createElement('club-item');
            // clubItemElement.club = club;
        
            // this.appendChild(clubItemElement);
        // });
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}
customElements.define('film-list', FilmList);