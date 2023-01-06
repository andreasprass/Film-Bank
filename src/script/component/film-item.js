class FilmItem extends HTMLElement {
    set film(film) {
        this._film = film;
        this.render();
    }
    
    render() {
    this.innerHTML = `
        <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }
      .fan-art-film {
        width: 100%;
        max-height: 400px;
        object-fit: contain;
        object-position: center;
      }
      .film-info {
        padding: 24px;
        text-align:center;
      }
      .film-info > h2 {
        font-weight: lighter;
      }
      .film-info > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
            }
        </style>


        <img class="fan-art-film" src="${this._film.Poster}" alt="Fan Art">
        <div class="film-info">
            <h2>${this._film.Title}</h2>
            <p>${this._film.Year}</p>
        </div>
    `;
    }
}

customElements.define('film-item', FilmItem);