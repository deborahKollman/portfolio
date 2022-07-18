import { 
    CHANGE_LANGUAGE,
    CHANGE_LIGHT_MODE
} from '../actions/index.js'

const initialState = {
    light_mode: true,
    language: "ES"
}

const rootReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type){
        case (CHANGE_LANGUAGE):{
            if( payload === "ES" || payload === "EN"){
                return{
                    ...state, language: payload
                }
            }
            throw new Error("Language not valid");
        }
        case (CHANGE_LIGHT_MODE): {
            return{
                ...state, light_mode:!state.light_mode
            }
        }
        default: return state;
    }
}

export default rootReducer;