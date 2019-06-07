import React, {Component} from "react"
import {Link} from "react-router-dom"


class Dashboard extends Component {
    constructor() {
        super ();
        this.state = {
            houseslist: []
        }
    }
    render () {
        const houseslist = this.state.houseslist.map((houselist, i) => {
            return <li key={i}>{houselist}</li>;
          });
        
        return (
            <div>
                <nav>
                    <div>Dashboard</div>
                    <Link to='/wizard'><button>Add New Property</button></Link>
                </nav>
                <div>Home Listings</div>
                <ol>{houseslist}</ol>
                    
                
                
            </div>
        )
    }
}

export default Dashboard