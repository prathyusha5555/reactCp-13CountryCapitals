import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    return activeCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry()
    return (
      <div className="app-container">
        <div className="content-box">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              value={activeCapitalId}
              onChange={this.onChangeCapital}
              className="drop-down"
            >
              {countryAndCapitalsList.map(each => (
                <option className="option" value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>

            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
