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
        if (this.state.count < 1 ) return;
        this.setState({ count: this.state.count - 1 })
    }

    // setState関数を呼び出して、stateを更新

    // stateを直接変更してはいけない。
    // this.state.count = this.state.count + 1  // これはアウト！！

    render() {
        return (
            <>
                <h1>カウンターApp</h1>
                <p>{this.state.count}</p>
                <div>
                    <button onClick={() => this.plus()}>+</button>
                    <button onClick={() => this.minus()}>-</button>
                </div>
            </>
        )
    }

    // render関数はpureな関数であるべきとされています。どういうことかというと、render関数内でstateを変更してはいけないということです。
    // なぜかというと、stateの変更が起こるとrender関数が呼ばれるようになっているので無限ループになってしまいます。
}

export default CountApp;
