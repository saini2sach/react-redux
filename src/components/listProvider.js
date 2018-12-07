import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../action/action'
import debounce from 'lodash.debounce';
import ACTIONS from '../constants';

const fetchActivityApi = (dispatch) => {
    fetch('https://www.boredapi.com/api/activity')
                .then( response => response.json())
                .then( respD => {
                    dispatch(actions.updateActivity(respD.type, respD.activity));
                });
}

const fetchActivityApi_debounced = debounce(fetchActivityApi, 350);

class List extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleAllBtnClick = this.handleAllBtnClick.bind(this);
    }
    handleChange(e) {
        // console.log("Value entered");
        this.props.dispatch(actions.changeOriginAmount(e.target.value));

        this.props.dispatch( (dispatch) => {
            dispatch({type: ACTIONS.SOME_ACTION, data: "Hello"});
            
            fetchActivityApi_debounced(dispatch);
            // setTimeout( () => {
            //     dispatch({type: 'CHANGE_AMOUNT', data: '400'})
            // }, 3000)
        })
    }


    handleAllBtnClick(e) {
        // console.log(e.target.value);
        switch(e.target.value) {
            case '-1': 
                this.props.dispatch({type: ACTIONS.DECREMENT_1});
                break;
            case '-5': 
                this.props.dispatch({type: ACTIONS.DECREMENT_5});
                break;
            case '+1': 
                this.props.dispatch({type: ACTIONS.INCREMENT_1});
                break;
            case '+5': 
                this.props.dispatch({type: ACTIONS.INCREMENT_5});
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
                <div style={{marginTop: '30px'}}>
                    <button className="button">{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</button>
                    <button className="button">{this.props.activity}</button>
                </div>
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

export default connect((state, props) => {
    // console.log("States are : ", state);
    // console.log("Props are : ", props); 
    return {
        amount: state.amountReducer.amount,
        value: state.amountReducer.value,
        category: state.amountReducer.category,
        activity: state.amountReducer.activity
    }
})(List);