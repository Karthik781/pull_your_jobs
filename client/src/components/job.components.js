import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

export default class Job extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        const {job} = this.props
        return (
            <Paper className='job'>
            <div className="flex-align-mid">
                <div className="job-title-location">
                    <Typography variant='h6'>{job.title}</Typography>
                    <Typography variant='h5'>{job.company}</Typography>
                    <Typography>{job.location}</Typography>
                </div>
            </div>
            {/* <div className="flex-align-mid">
                <Typography>{makeDate(job.created_at)}</Typography>
            </div> */}
        </Paper>
        )
    }
}
