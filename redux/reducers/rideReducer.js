let defaultState = {
  origin: {},
  destination: {},
  travelInfo: {},
};

let rideReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ORIGIN": {
      let newState = { ...state };

      newState.origin = action.payload;
      return newState;
    }

    case "SET_DESTINATION": {
      let newState = { ...state };

      newState.destination = action.payload;
      return newState;
    }

    case "SET_TRAVEL_INFO": {
      let newState = { ...state };

      newState.travelInfo = action.payload;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default rideReducer;
