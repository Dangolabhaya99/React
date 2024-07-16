import React, { Component } from "react";

class Watch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
        this.intervalId = null;
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState(prevState => ({
                    time: prevState.time + 1
                }));
            }, 1000);
        }
    }

    stopTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    render() {
        return (
            <div>
                <h1>Time: {this.state.time}</h1>
                <button onClick={this.startTimer}>Start Timer</button>
                <button onClick={this.stopTimer}>Stop Timer</button>
            </div>
        );
    }
}

export default Watch;
