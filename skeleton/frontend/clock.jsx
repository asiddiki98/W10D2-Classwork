import React from 'react'

class Clock extends React.Component{
    constructor(prop){
        super(prop);

        this.state = {date : new Date()};
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({date: new Date()} )
    }

    componentDidMount(){
        this.handle = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.handle)
    }

    render(){
        
        return (
            <div>
            <h1 className="clock-header">Clock</h1>
                <div className="clock">
                    <div className="time">
                    <p>Time: </p>
                    <p>{this.state.date.getHours() % 12} : {this.state.date.getMinutes()} : {this.state.date.getSeconds()}</p>
                    </div>
                    <div className="date">
                    <p>Date: </p>
                    <p>{this.state.date.toDateString()}</p>
                    </div>
                </div>
            </div>
        )
    }
}



export default Clock