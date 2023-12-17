//TODO:  DONEcreate contact using all actions


import {
  SET_CONTACT,
  SET_LOADING,
  CONTACT_TO_UPDATE,
  SET_SINGLE_CONTACT
} from "./action.types";

//TODO: DONE use switch case

export default (state, action) => {
  switch (action.type) {
	//to add contact
    case SET_CONTACT :
		return (
			action.payload === null ? ({...state,contacts : []}) : ({...state,contacts : action.payload})
		)

	// to check is loading
	case SET_LOADING:
		return {...state,isLoading : action.payload}

	// to update single contact
	case CONTACT_TO_UPDATE:
		return {
			...state,
			contactToUpdate : action.payload,
			contactToUpdateKey : action.key
		}

	// to view single contact
	case SET_SINGLE_CONTACT:
		return {
			...state,
			contact : action.payload
		}
  
    default:
		return state
     
  }
}
