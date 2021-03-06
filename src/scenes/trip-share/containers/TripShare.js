import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import actions from 'store/trips/actions';
import TripShare from '../../../styled_scenes/TripShare';

class TripShareContainer extends Component {
  constructor(props) {
    super(props);
    props.fetchTrip(props.match.params.id);
  }

  render() {
    return (
      <TripShare
        trip={this.props.trip}
        tripId={this.props.match.params.id}
        session={this.props.session}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    session: state.SessionsReducer.session,
    trip: state.trips.trip,
    error: state.trips.error,
    isLoading: state.trips.isLoading,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(TripShareContainer));
