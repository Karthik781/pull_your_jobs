import React, { Component } from 'react'
import Job from './job.components'
import JobModal from './modal.component'

import { Typography } from '@material-ui/core';

export default function Jobs({jobs}) {
    console.log(jobs);
    const [open, setOpen] = React.useState(false);
    const [selectedJob, selectJob] = React.useState({});
    function handleClickOpen() {
      setOpen(true);
    }  
    function handleClose() {
      setOpen(false);
    }
 
        return (
            <div className = "jobs">
                 <JobModal open={open} job={selectedJob} handleClose={handleClose} />
                <Typography variant = "h4">
                jobs list
                </Typography>
                {
                jobs.map(
                    (job, i) => <Job key={i} job={job} onClick={() => {
                        console.log('clicked')
                        handleClickOpen();
                        selectJob(job)
                    }} />
                )
            }
            </div>
        )
    
}
