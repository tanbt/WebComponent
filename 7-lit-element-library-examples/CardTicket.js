import { LitElement, html } from 'lit-element';

class CardTicket extends LitElement {
  static get properties() {
    return {
      color: String, content: String, isSelected: Boolean
    };
  }

  constructor() {
    super();
    this.color = "black";
    this.content = "(No content)";
    this.isSelected = false;
    this.addEventListener('click', () => this._selected());
  }

  _selected() {
    this.isSelected = !this.isSelected;
    this.connectedCallback();
  }

  render() {
    return html`<style>
    :host {
      display: inline-grid; border-radius: .3rem;
      min-width: 8rem; min-height: 8rem;
      text-align: center; margin: .5rem;
      border: 1px solid #AAA; cursor: pointer;
      ${this.isSelected ? `box-shadow: 0px 0px .3rem .3rem rgba(100,100,100,0.25);` : ``}
    }
    * { color: ${this.color} }
    h1 { font-size: 1.2rem; text-transform: uppercase;}
    p {font-size: .9rem; }
  </style>
  <h1>${this.color}</h1><p>${this.content}</p>`;
  }
}
export {CardTicket};
