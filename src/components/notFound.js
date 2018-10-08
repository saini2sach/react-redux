
import React, { Component } from "react";
import logo from '../logo.svg';

export default class NotFound extends Component {
    displayData() {
        var obj = document.querySelector('.div-container + .data-container');
        obj.style.display = (obj.style.display === 'block') ? 'none' : 'block';
    }
    render() {
        return (
            <div>
                <div className="div-container" onClick={this.displayData.bind(this)} >
                    This is NotFound page..!
                </div>
                <div className="data-container  div-container">
                <img src={logo} alt="404 pages groups" className="minion-pics"/>

                Cras a consequat erat. Praesent mi lectus, efficitur et lectus ac, scelerisque elementum mauris. Vestibulum scelerisque tortor at facilisis volutpat. Cras in lorem ultrices tellus sollicitudin vulputate eu in massa. Morbi eget blandit lorem, a sollicitudin lorem. Nullam dapibus, lectus quis tincidunt interdum, sem erat efficitur diam, sit amet pulvinar nunc ante in est. Nullam ut ornare mauris. Nunc nunc velit, ullamcorper congue euismod sed, vehicula id ipsum. Morbi vel magna ex. Cras mi libero, commodo non sapien at, vehicula rhoncus ligula. Pellentesque eget scelerisque ipsum.  
                </div>
            </div>
        )
    }
}