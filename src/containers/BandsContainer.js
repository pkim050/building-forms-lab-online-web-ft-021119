import React, { Component } from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import BandInput from '../components/BandInput'
=======
>>>>>>> c73ba04149b71b8ee8f504e87d1bb4c237a1c7aa

class BandsContainer extends Component {
  listOfBands = () => {
    return this.props.bands.map(band => <li>{band.name}</li>)
  }

  render() {
    return(
      <div>
<<<<<<< HEAD
        <BandInput addBand={this.props.addBand} />
        <ul>{this.listOfBands()}</ul>
=======
        <BandInput />
>>>>>>> c73ba04149b71b8ee8f504e87d1bb4c237a1c7aa
      </div>
    )
  }
}

<<<<<<< HEAD
const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', band: formData})
})


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
=======
export default connect()(BandsContainer)
>>>>>>> c73ba04149b71b8ee8f504e87d1bb4c237a1c7aa
