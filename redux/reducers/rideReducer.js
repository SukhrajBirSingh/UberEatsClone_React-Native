let defaultState = {
  origin: {},
  //destination: {},
  //travelTimeInfo: {},
};

let rideReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ORIGIN": {
      //let newState = { ...state };

      state.origin = action.payload;
      return state;
    }

    case "SET_DESTINATION": {
      // let newState = { ...state };

      state.destination = action.payload;
      return state;
    }

    // case "SET_TRAVEL_TIME_INFO": {
    //   //let newState = { ...state };

    //   state.travelTimeInfo = action.payload;
    //   return state;
    // }
    default: {
      return state;
    }
  }
};

export default rideReducer;
