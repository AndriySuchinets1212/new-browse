import {GET_DATA_BROWSE, GET_DATA_BY_ID } from '../ActionTypesBrowse/index';

export const getDataBrowse = () =>{
    
    return dispatch => {
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=10&api_key=VudKrXmaLX2ztiT8Ul6b1we68sEckfnsYe3mswvq`)
        .then(res => res.json())
        .then(result =>
            {
                dispatch({type: GET_DATA_BROWSE, payload: result.near_earth_objects})
            }
        )
    }
}
export const getDataById = (id) =>{
    return dispatch => {
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=ScTzopAFIxDv5iRTSifCq7fKnm3vHzGpuH0yznOW`)
        .then(res => res.json())
        .then(result =>
            {
                dispatch({type: GET_DATA_BY_ID, payload: result})
            })
    }
}