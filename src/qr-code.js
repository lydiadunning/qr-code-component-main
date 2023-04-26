import { LitElement, css, html } from 'lit';
import qrCode from './assets/image-qr-code.png';

export class QRCode extends LitElement {
  static get properties() {
    return {
      /*
       * qr code image url
       */
      qrUrl: {},
      /*
       * Copy for heading text
       */
      heading: {},
        /*
       * Copy for user instructions
       */
      instructions: {},
      
    }
  }

  constructor() {
    super()
    this.qrUrl = qrCode;
    this.heading = 'Improve your front-end skills by building projects';
    this.instructions = 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level';
  }

  render() {
    return html`
      <div class = 'app'>
        <img class='qr' src=${ this.qrUrl } alt='frontendmentor.io'/>
        <div class='text'> 
          <h1>${ this.heading }</h1>
          <p>${ this.instructions }</p>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://lydiadunning.github.io/Portfolio/">Lydia Dunning</a>.
      </div>
    `
  }


  static get styles() {
    return css`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

      // CSS here only applies to this element, so global settings 
      // are appropriate. 
      // Where a property set here repeats in a more specific selector,
      // the property didn't apply for unclear reasons. It may have come 
      // from a default value for a pseudo-element or pseudo-class.
      * {
        font-family: 'Outfit', sans-serif;
        box-sizing: border-box;
        font-size: inherit;
        color: inherit;
        padding: 0;
        margin: 0;
      }

      :host {
        height: 100%;
        width: 100%;
        display: grid;
        place-content: center;
        --white: hsl(0, 0%, 100%);
        --light-gray: hsl(212, 45%, 89%);
        --grayish-blue: hsl(220, 15%, 55%);
        --dark-blue: hsl(218, 44%, 22%);
        background-color: var(--light-blue);
      }

      :root {
        font-size: 15px;
      }

      .app {
        text-align: center;
        background-color: var(--white);
        border-radius: 20px;
        width: 20rem;
        box-sizing: border-box;
      }

      .qr {
        border-radius: 10px;
        width: 90%;
        margin: 5%;
      }

      .text {
        padding: 0.15rem 1.5rem 2.25rem;
        display: flex;
        flex-direction: column;
        gap: .85rem;
        margin: 0;
      }

      h1 {
        font-size: 1.38rem;
        color: var(--dark-blue);
        padding: 0;
        margin: 0;
        line-height: 1.3;
      }

      p {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        color: var(--grayish-blue);
        letter-spacing: -0.015rem;
      }
      
    `
  }
}

window.customElements.define('qr-code', QRCode)
