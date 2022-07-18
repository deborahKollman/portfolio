export const CHANGE_LIGHT_MODE = "CHANGE_LIGHT_MODE";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const changeLight = ()=> {
    return (dispatch) => {
        dispatch({
            type: CHANGE_LIGHT_MODE
        })
    }
}

export const changeLanguaje = (lang)=> {
    return (dispatch) => {
        dispatch({
            type: CHANGE_LANGUAGE,
            payload: lang
        })
    }
}