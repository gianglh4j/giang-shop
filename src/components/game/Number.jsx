import React from 'react';

class Number extends React.Component{
    render(){
        const {number} = this.props;
        let numberClassName = 'number';
        if(number.isChoose){
            numberClassName += ' number-choose'
        }
        return(
            <div className={numberClassName} onClick = {this.props.changeStateNumber}>
            {number.numberValue}
            </div>
        )
    }
   
}

export default Number;