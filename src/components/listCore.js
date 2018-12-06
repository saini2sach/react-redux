import React, { Component } from 'react';
import store from '../store/indexCore';

class List extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleAllBtnClick = this.handleAllBtnClick.bind(this);
    }
    handleChange(e) {
        // console.log("Value entered");
        store.dispatch({type: 'CHANGE_AMOUNT', data: e.target.value});
    }
    handleAllBtnClick(e) {
        // console.log(e.target.value);
        switch(e.target.value) {
            case '-1': 
                store.dispatch({type: 'DECREMENT_1'});
                break;
            case '-5': 
                store.dispatch({type: 'DECREMENT_5'});
                break;
            case '+1': 
                store.dispatch({type: 'INCREMENT_1'});
                break;
            case '+5': 
                store.dispatch({type: 'INCREMENT_5'});
                break;
            default: 
                return false;
        }
    }
    render() {
        return (
            <div style={{marginTop: '20px'}}>
                <input type="text" onChange={this.handleChange} className="button inputT"/>
                <button className="button">{this.props.amount}</button>
                <div style={{marginTop: '30px'}} className="button-wrapper" onClick={this.handleAllBtnClick}>
                    <button value="-5" className="button">-5</button>
                    <button value="-1" className="button">-1</button>
                    <button className="button inputT">{this.props.value}</button>
                    <button value="+1" className="button">+1</button>
                    <button value="+5" className="button">+5</button>
                </div>
            </div>
        )
    }
}

export default List;