import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import  Bands  from '../components/Bands';

class BandsContainer extends Component {
  render() {
    return(
      <ul>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} deleteBand={this.props.deleteBand }/>
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: band => dispatch({ type: "ADD_BAND", payload: band }),
    deleteBand: id => dispatch( {type: "DELETE_BAND", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

