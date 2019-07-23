import React from 'react';
import Number from './Number';
import { NumberContext } from "../../context/NumberContext";
class ChosenNumberList extends React.Component{
  
    render(){
        return(
            <NumberContext.Consumer>
            {({chosenNumberList ,removeNumberFromChosenList})=>{
                return <div className="numberChosenList">
                {chosenNumberList.map((number)=>{
                    return <Number key= {number.id} number={number}  changeStateNumber ={removeNumberFromChosenList(number)}   />
                })}
            </div>
            }}
            
            </NumberContext.Consumer>
        )
    }
   
}
export default ChosenNumberList;