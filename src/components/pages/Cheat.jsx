import React, { Component } from "react";
import axios from 'axios';
import Header from "../layout/header/Header";

class Cheat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            so1: '',
            so2: '',
            so3: '',
            so4:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });

      }
    
      handleSubmit(event) {
          const {so1,so2,so3,so4} = this.state;
        let ListCheat = [parseInt(so1),parseInt(so2),parseInt(so3),parseInt(so4)];
        axios.post('/api/result/cheat', {ListCheat: ListCheat})
        .then(res => alert(res.data.status)); 
      }
    
      render() {
        return (
          <React.Fragment>
            <Header/>
            <div className="form-cheat">
          <form >
            <label className="number-input">
              Số thứ 1
              <input  type="text" value={this.state.so1} name="so1" onChange={this.handleChange} />
            </label>
            <label className="number-input">
              Số thứ 2
              <input  type="text" value={this.state.so2} name="so2" onChange={this.handleChange} />
            </label>
            <label className="number-input">
              Số thứ 3
              <input  type="text" value={this.state.so3} name="so3" onChange={this.handleChange} />
            </label>
            <label className="number-input">
              Số thứ 4
              <input  type="text" value={this.state.so4} name="so4" onChange={this.handleChange} />
            </label>
            <input type="button" value="Submit" onClick ={this.handleSubmit} />
          </form>
          </div>
          </React.Fragment>
            
        );
      }
}

export default Cheat;
