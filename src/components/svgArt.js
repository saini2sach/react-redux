
import React, { Component } from 'react';
import '../svgArt.css';

class SvgArt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            path2: ''
        };
    }

    getCoordPair() {
        let arr = [],
            count = 0;

        while(count < 50) {
            arr.push({
                x: Math.floor(Math.random()*150),
                y: Math.floor(Math.random()*150)
            });
            count++;
        }
        return arr.sort((a,b) => a.x - b.x);
    }

    makeSvgPath(arr) {
        let path = `M ${arr[0].x} ${arr[0].y}`;
        for(let i=0; i< arr.length-1; i++) {
            path += ` L ${arr[i++].x + Math.floor(Math.random()*100)} ${arr[i++].y}`;
        }
        path += ' Z';

        return path;
    }

    componentWillMount() {
        this.setState({
            path: this.makeSvgPath(this.getCoordPair()),
            path2: this.makeSvgPath(this.getCoordPair())
        })
    }

    render() {
        return (
            <div className="svg-element">
                <h3>A random SVG chart drawn below</h3>
                <svg>
                    <path d={this.state.path} className="linechart"/>
                </svg>
                <svg style={{width: '200px'}}>
                    <circle cx="50" cy="50" r="48" className="linechart" />
                    <circle cx="25" cy="35" r="6" className="linechart" />
                    <circle cx="75" cy="35" r="6" className="linechart" />
                    <path d="M 50 43 L 57 57 L 43 57 L 50 43 Z" className="linechart stoke-2"/>
                    {/* <circle cx="0" cy="45" r="4" className="linechart" />
                    <circle cx="100" cy="45" r="4" className="linechart" /> */}
                    <path d="M 30 70 q 20 25 40 0" className="linechart" />
                    <path d="M 50 100 L 50 150 Z" className="linechart"/>
                    <line x1="0" y1="150" x2="100" y2="150" className="linechart"/>                    
                </svg>
                <svg>
                    <path d={this.state.path2} className="linechart"/>
                </svg>
            </div>
        )
    }
}

export default SvgArt;