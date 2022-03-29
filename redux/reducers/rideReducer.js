let defaultState = {
  origin: { lat: "", lng: "" },
  destination: { lat: "", lng: "" },
  travelInfo: {},
};

let rideReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ORIGIN": {
      let newState = { ...state };

      newState.origin = {
        lat: action.payload.lat,
        lng: action.payload.lng,
      };
      return newState;
    }

    case "SET_DESTINATION": {
      let newState = { ...state };

      newState.destination = {
        lat: action.payload.lat,
        lng: action.payload.lng,
      };
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
