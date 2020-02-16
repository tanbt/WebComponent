var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
let CardTicket = class CardTicket extends LitElement {
    constructor() {
        super();
        this.color = 'black';
        this.content = '(No content)';
        this.isSelected = false;
        this.addEventListener('click', () => this._selected());
    }
    _selected() {
        this.isSelected = !this.isSelected;
        this.connectedCallback();
    }
    render() {
        return html `<style>
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
};
__decorate([
    property({ type: String })
], CardTicket.prototype, "color", void 0);
__decorate([
    property({ type: String })
], CardTicket.prototype, "content", void 0);
__decorate([
    property({ type: Boolean })
], CardTicket.prototype, "isSelected", void 0);
CardTicket = __decorate([
    customElement('card-ticket')
], CardTicket);
export { CardTicket };
