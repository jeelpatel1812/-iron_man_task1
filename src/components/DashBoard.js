import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import GetContainer from './GetContainer'
import SetContainer from './SetContainer'
import Grid from '@mui/material/Grid';
import "./DashBoard.css"

export const DashBoard = (props) => {
  return (
    <>
        <h2>DASHBOARD</h2>

        <Grid container className='container'   >
            <Grid item className='child-container' xl={5}> 
                <SetContainer/>
            </Grid>
            <Grid item className='child-container' xl={5}>
                <GetContainer/> 
            </Grid>
        </Grid>

        
    </>
    
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)