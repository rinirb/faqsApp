// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {show: false}

  showHideAnswer = () => {
    this.setState(previousState => ({show: !previousState.show}))
  }

  render() {
    const {faqData} = this.props
    const {show} = this.state
    const {questionText, answerText} = faqData

    return (
      <li className="list-container">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            type="button"
            className="icon-container"
            onClick={this.showHideAnswer}
          >
            {show ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {show ? (
          <div>
            <hr className="horizontal-line" />
            <p className="answer-text">{answerText}</p>
          </div>
        ) : null}
      </li>
    )
  }
}

export default FaqItem
