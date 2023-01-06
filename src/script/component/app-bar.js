class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `<h2>Film Bank</h2>`;
    }
  }
   
  customElements.define('app-bar', AppBar);