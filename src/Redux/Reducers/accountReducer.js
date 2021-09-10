import { CREDENTIAL } from "../../util/setting";

let accSignin = null;

if (localStorage.getItem(CREDENTIAL)) {
  accSignin = JSON.parse(localStorage.getItem(CREDENTIAL));
}

const stateDefault = {
  userSignin: accSignin,
};

export const accountReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SIGNIN": {
      state.userSignin = action.userSignin;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
