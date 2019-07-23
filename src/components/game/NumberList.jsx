import React from 'react';
import Number from './Number';

import { NumberContext } from "../../context/NumberContext";
class NumberList extends React.Component{
    render(){
        
        return(
            <NumberContext.Consumer>
            {({numbers,changeStateNumber})=>{
                return <div className="numberList">
                {numbers.map((number)=>{
                    return <Number key= {number.id} number={number} changeStateNumber = {changeStateNumber(number) }/>
                })}
            </div>
            }}
            
            </NumberContext.Consumer>
        )
    }
   
}
export default NumberList;
