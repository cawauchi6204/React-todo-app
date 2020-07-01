import React from 'react';

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            todoList: []
        }
    }

    onChange(e) {
        this.setState({ value: e.target.value })
    }

    add() {
        if (this.state.value === "") return
        this.setState({
            todoList: this.state.todoList.concat(this.state.value),
            value: ""
            // pushではなくconcatメソッドを使うことでイミュータブルにしている
            // concat() メソッドは、配列に他の配列や値をつないでできた新しい配列を返す
            // ここでは今まであったtodoListにvalueの値をつないで新しい配列を作っている

            // 解説
            // concat は、メソッドを呼び出した this オブジェクトの要素に、与えられた引数の要素 (引数が配列である場合) または引数そのもの (引数が配列でない場合) が順に続く、新しい配列オブジェクトを生成します。
            // pushではダメなのかと思う方もいるのではないでしょうか。実は、pushは破壊的メソッドのため、元のthis.state.todoListまで変更してしまいます。これでは、immutableでなくなってしまいます。一方、concatは非破壊的メソッドのため元のstate自体は変更されないのでreactの要件を満たします。
        })
        console.log(this.state.value);
    }
    // stateが更新されるとrender関数が呼ばれるのでtodoListNodeはrenderの中に入れてstateが更新されるたびにtodoListNodeも更新される

    render() {
        const todoListNode = this.state.todoList.map((content, index) => {
            return (
                <TodoElement
                    key={index}
                    content={content}
                />
            )
        })

        return (
            <>
                <h1>TODO App</h1>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={e => this.onChange(e)}
                />
                <button onClick={() => this.add()}>追加</button>
                <ul>
                    {todoListNode}
                </ul>
            </>
        )
    }
}



const TodoElement = props => {
    return (
        <li>
            {props.content}
            {/* {this.props.content} */}
            {/* 上記の文はclassコンポーネントの時の書き方  */}
        </li>
    )
}
// 関数コンポーネントはstateを保持することができない。
// propsで親から値をバケツリレーしている

class AddTodo extends React.Component {
    onChange(e) {
        this.props.onChange({
            value: e.target.value,
        })
    }

    add() {
        const todoElement = {
            content: this.props.value,
            id: this.props.todoList.length + 1,
        }
        this.props.add(todoElement)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={e => this.onChange(e)}
                />
                <button onClick={() => this.add()}>
                    追加
                </button>
            </div>
        )
    }
}

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
        if (this.state.count < 1) return;
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

export { TodoApp, CountApp };
