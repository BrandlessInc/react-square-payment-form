import * as React from 'react'
import { ContextConsumer } from './Context'

export interface CreditCardNumberInputProps {
  /** Input field label */
  label?: string;
}
/**
 * Renders a placeholder element for the card. The SqPaymentForm JS library will replace this
 * element with a secure `<iframe>` tag that will render an `<input>` field for the card number, expiration date, zip,
 * and cvv.
 */
class CreditCardInput extends React.Component<CreditCardNumberInputProps> {

  static defaultProps = {
    label: 'Credit Card'
  }

  render(): React.ReactElement {
    return (
      <ContextConsumer>
        {context =>
          <div>
            {this.props.label && <span className="sq-label">{this.props.label}</span>}
            <div id={`${context.formId}-sq-card`}></div>
          </div>
        }
      </ContextConsumer>
    )
  }
}

export default CreditCardInput
