import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios";


class Wizard extends Component {
    constructor(){
        super();
        this.state ={
            name: "",
            address: "",
            city: "",
            state: "",
            zipcode: ""
        }
    }
    componentDidMount(){
        axios
        .get("http://localhost:4444/api/houses")
        .then(results => {
            this.setState({})
        })
    }

    handleChangeName(val) {
        this.setState({
          name: val
        });
      }

      handleChangeAddress(val) {
        this.setState({
          address: val
        });
      }  

      handleChangeCity(val) {
        this.setState({
          city: val
        });
      } 
      
      handleChangeState(val) {
        this.setState({
          state: val
        });
      } 

      handleChangeZipcode(val) {
        this.setState({
          zipcode: val
        });
      }
    render () {
        return (
            <div>
            Add New Listing<Link to='./'><button>Cancel</button></Link>
            
            <div><input onChange={e => this.handleChangeName(e.target.value)} placeholder='Property Name'/></div>
            <div><input onChange={e => this.handleChangeAddress(e.target.value)} placeholder='Address'/></div>
            <div>
            <input onChange={e => this.handleChangeCity(e.target.value)} placeholder='City'/>
            <input onChange={e => this.handleChangeState(e.target.value)} placeholder='State'/>
            <input onChange={e => this.handleChangeZipcode(e.target.value)} placeholder='Zip'/>
            </div>
            
            </div>
        )
    }
}

export default Wizard