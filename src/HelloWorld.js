import React from 'react';

class CountApp extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    plus() {
        this.setState({ count: this.state.count + 1 })
    }

    minus() {
        this.setState({ count: this.state.count - 1 })
    }

    // setState関数というものを呼び出して、stateを更新

    render() {
        return (
            <>
                <h1>カウンターApp</h1>
                <p>{this.state.count}</p>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
            </>
        )
    }
}

export default CountApp;
