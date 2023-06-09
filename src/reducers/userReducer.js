const initialState = {
    name:"",
    List:[]
 }
 const userReducer = (state = initialState, action) => { 
     switch (action.type) {
         case "SET_USER" :
            return {
                ...state,
                name: action.payload
            }


         case "SET_USER_LIST" :
            console.log("Redux : User Added ")
            const newList = [...state.List, action.payload];
            return {
                ...state,
                List: newList
            }


         case "RESET_USER" :
            return {
                ...state,
                name: ""
            }

         case "REMOVE_USER_FROM_LIST" :
            console.log("Redux : User Removed ")
            let Found = false;
            const newListAfterRemove= state.List.filter((e)=> { 
                if (e === action.payload && !Found) {
                    Found = true;
                    return false; 
                }
                return true;
            })

            return {
                ...state,
                List: newListAfterRemove
            }

         default:
            return state;
    }
 }
 export default userReducer;