const initialState = {
    jobs:[],
    loader: false
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_JOBS":
            return {
                ...state,
                jobs: action.payload,
            }
      
        case "SET_LOADER":
            return {
                ...state,
                loader: action.payload
            }
        default:
          return state
    }
}

export default reducer