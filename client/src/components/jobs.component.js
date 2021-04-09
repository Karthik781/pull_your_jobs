import React, { Component } from 'react'
import Job from './job.components'

import { Typography } from '@material-ui/core';

export default class Jobs extends Component {
    // constructor(props){
    //     super(props)

    // }
    render() {
        const {jobs} = this.props
        return (
            <div className = "jobs">
                <Typography variant = "h4">
                jobs list
                </Typography>
                {
                    jobs.map(job => <Job job={job}/>)
                }
            </div>
        )
    }
}
