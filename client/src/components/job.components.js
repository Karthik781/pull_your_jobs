import React, { Component } from 'react'

export default class Job extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        const {job} = this.props
        return (
            <div className= "job">
                {job.title}
                {job.company}
            </div>
        )
    }
}
