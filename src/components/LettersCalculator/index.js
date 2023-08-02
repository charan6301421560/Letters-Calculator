import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="bg-container">
        <div className="cal-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label className="description" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            id="phraseText"
            value={inputPhrase}
            onChange={this.onChangeInputPhrase}
          />
          <p className="letters-container">
            No.of letters: {inputPhrase.length}
          </p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator