// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    console.log(searchInput.length)

    return (
      <div className="container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label className="label-heading" htmlFor="phraseText">
              Enter the Phrase
            </label>
            <input
              type="text"
              id="phraseText"
              className="input-element"
              placeholder="Enter the Phrase"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <div>
            <p className="count">No of Letters:{searchInput.length}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="calculator-image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
