import axios from "axios";
import {R_SUCCESS,R_FAILURE} from "../constants/restaurantConstants";

export const RestuarantlistAction = () => async (dispatch) => {

   
    try{
        const result = await axios.get('/restaurants.json');//get is the method of axios
    console.log(result.data.restaurants); 
    dispatch({
        type:R_SUCCESS,
        payload:result.data.restaurants
    })
    }
    catch(error){
        dispatch({
            type:R_FAILURE,
            payload:error
        })

    }

}
