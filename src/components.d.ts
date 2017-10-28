/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { StPayment as StPayment } from './components/st-payment/st-payment';

interface HTMLStPaymentElement extends StPayment, HTMLElement {
}
declare var HTMLStPaymentElement: {
  prototype: HTMLStPaymentElement;
  new (): HTMLStPaymentElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "st-payment": HTMLStPaymentElement;
  }
  interface ElementTagNameMap {
      "st-payment": HTMLStPaymentElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "st-payment": JSXElements.StPaymentAttributes;
      }
  }
  namespace JSXElements {
      export interface StPaymentAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          abort?: any,
          methodData?: any,
          details?: any,
          options?: any,
          callback?: any,
          buttonLabel?: string
      }
  }
}

