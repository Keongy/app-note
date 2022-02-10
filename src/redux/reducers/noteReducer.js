const INITIAL_STATE = {

}


export default function noteReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADDITEM":
            return {
            }
        case "UPDATEITEM":
            return {
            }
        default: return state
    }
}