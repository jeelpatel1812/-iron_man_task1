import React, { useMemo }  from 'react'
import { connect } from 'react-redux'
import {userChange, userAddToList, userReset} from "../actions/userAction"

export const SetContainer = (props) => {


    const handleSubmit=()=>{
        props.userAddToList(props.user.name);
        props.userReset();
    }
    
    return (
        <>
            <h2>Set Container</h2>
            <label for="username">Username : </label>
            <input 
                name="username" 
                id="username" 
                type="text"
                value={props.user.name}
                onChange={(e)=>props.userChange(e.target.value)}
                placeholder='Enter name...'>
                
            </input>
            {" "}
            <button onClick={()=>handleSubmit()}> Add</button>
        </>
    )
}

const mapStateToProps = (state) => ({
    user:state.user
})

const mapDispatchToProps = {
    userChange,
    userAddToList,
    userReset
}

export default connect(mapStateToProps, mapDispatchToProps)(SetContainer)