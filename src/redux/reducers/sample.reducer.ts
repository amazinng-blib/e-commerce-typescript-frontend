import {
  SAMPLE_FAIL,
  SAMPLE_REQUEST,
  SAMPLE_SUCCESS,
} from '../constants/sample.constants';

// type InstitutionType = {
//     name: string,
//     city: string
// }

// // let name: string = "Bona"
//  type Person = {
//     name: string;
//     age: number;
//     institution: Array<InstitutionType>;
//     hungry: boolean;
//     temperament?: "happy" | "sad"
//  }

//  const Bona: Person = {
// name: "Chujwudi",
// age: 140,
// hungry: false,
// institution: [
//     {
//         city: "Uyo",
//         name: "Uniuyo"
//     }
// ],

//  }

type StateType = {
  loading: boolean;
  success: boolean;
  serverResponse: any;
  error: string;
};

const initialState: StateType = {
  loading: false,
  error: '',
  success: false,
  serverResponse: {},
};

export const addSampleReducer = (
  state: StateType = initialState,
  action: any
) => {
  switch (action.type) {
    case SAMPLE_REQUEST:
      return { loading: true };
    case SAMPLE_SUCCESS:
      return { loading: false, serverResponse: action.payload, success: true };
    case SAMPLE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
