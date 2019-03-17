// use for no npm 
import { LitElement, html } from 'https://unpkg.com/lit-element@2.0.0-rc.5/lit-element.js?module';

// use for with npm
// import { LitElement, html } from 'lit-element';


export class LitCompMicroApp extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      value: { type: Number }
    }
  }

  constructor() {
    super();
    this.value = 0;
    this.title = 'Lit Element Input, Label and Button Example ';
  }

  render() {
    return html`
    <h1>${this.title}</h1>
    </br>
    <input type="number" .value="${this.value}" @change="${this.changeValue}"></input>
    </br></br>
    <span>Value = ${this.value}</span>
    </br></br>
    <button @click="${this.increment}"> + </button>
    <button @click="${() => this.decrement()}"> - </button>
    `;
  }

  decrement() {
    this.value--;
    this._valueChanged();
  }

  increment() {
    this.value++;
    this._valueChanged();
  }

  changeValue(e) {
    if(e && e.target && e.target.value){
      this.value = e.target.value;
      this._valueChanged();
    } else{
      this.value = 0;
    }
  }

  _valueChanged() {
    this.dispatchEvent(new CustomEvent('value-changed', { detail: this.value }));
  }
}

// Register the element with the browser
customElements.define('lit-comp-micro-app', LitCompMicroApp);

