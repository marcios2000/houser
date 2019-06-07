import React, {Component} from "react"
import {Link} from "react-router-dom"


class Dashboard extends Component {
    render () {
        return (
            <div>
                <nav>
                    <div>Dashboard</div>
                    <Link to='/wizard'><button>Add New Property</button></Link>
                </nav>
            </div>
        )
    }
}

export default Dashboard