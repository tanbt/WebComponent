import "./CardTicket.js";

class MyApp extends HTMLElement {

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.root.innerHTML = `
      <card-ticket></card-ticket>
      <card-ticket color="blue" content="Ticket 1"></card-ticket>
      <card-ticket color="green" content="Ticket 2"></card-ticket>
    `;
  }

}

window.customElements.define('my-app', MyApp);
