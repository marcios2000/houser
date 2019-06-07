import React, {Component} from "react"
import {Link} from "react-router-dom"


class Wizard extends Component {
    constructor(){
        super();
        this.state ={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleChange(val) {
        this.setState({
          input: val
        });console.log(this.handleChange)
      }
    render () {
        return (
            <div>
            Add New Listing<Link to='./'><button>Cancel</button></Link>
            <div><input onChange={e => this.handleChange(e.target.value)} placeholder='Property Name'/></div>
            <div><input placeholder='Address'/></div>
            <div>
            <input placeholder='City'/>
            <input placeholder='State'/>
            <input placeholder='Zip'/>
            </div>
            
            </div>
        )
    }
}

export default Wizard