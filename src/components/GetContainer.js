import React, { useMemo }  from 'react'
import { connect } from 'react-redux'
import {userRemoveFromList} from "../actions/userAction"
import Grid from '@mui/material/Grid';
import "./DashBoard.css"

export const GetContainer = (props) => {
  return (
    <>
        <h2>Get Container</h2>
        <div > <b> Current Change : </b> {props.user.name}</div> 
        <h4> Name List </h4>
        {props.user.List.map((name)=> 
            <Grid container className='inner-container'>
                <Grid item xl={8}>{name} </Grid>
                <Grid item xl={3}><button onClick={()=> props.userRemoveFromList(name)}> Remove </button> </Grid>
            </Grid>
        )}
    </>
  )
}

const mapStateToProps = (state) => ({
    user:state.user,
    List:state.List
})

const mapDispatchToProps = {
    userRemoveFromList
}

export default connect(mapStateToProps, mapDispatchToProps)(GetContainer)