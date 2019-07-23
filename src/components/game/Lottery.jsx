import React from "react";
import randomId from'random-id';
import axios from 'axios';

class Lottery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultList:[],
      viTriTrung:[]
    }
    this.checkResult =this.checkResult.bind(this);
  }

 
  checkResult(e) {
   e.preventDefault();
  
    const chosenNumberList = this.props.chosenNumberList;
    if(chosenNumberList.length <4 ){
      alert("Phải chọn đủ 4 số");
    }
    else{
      axios.post('/api/result/a', {chosenNumberList: chosenNumberList})
    .then(res => this.setState({
      resultList:res.data.resultList,
      viTriTrung:res.data.viTriTrung
    })); 
    }
    
    
  }
  render() {
    const {resultList,viTriTrung} = this.state; 
      
    return (
      <div>
    
        <input type="button" onClick={this.checkResult} value="Chect Tiket" className="btnCheck"/>
        <div className="resultList">
          {resultList.map((number,index) => {
            if(viTriTrung.indexOf(index) !== -1 ){
              return <div className = "numberInResult rightNumber" key={number+randomId(30,'aA0')}> {number}</div>;
            }
            return <div className="numberInResult"  key={number+randomId(30,'aA0')}> {number}</div>;
          })}
        </div>
      
        {resultList.length > 0 && <div className="resultTicket" style={{color:"white", fontSize:'20px'}}>Bạn đã trúng  {viTriTrung.length} số.</div> }
          

      </div>
    );
  }
}
export default Lottery;
