import React, { Component } from "react";


class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    //lagt till button som omsluter click-eventet
    createTasks(item) {
        //let symbol = "\U+1F5D1";
        return <li key={item.key}><input type="checkbox" onClick={this.props.markedItems}/>{item.text}<button onClick={() => this.delete(item.key)}>
            &#128465;</button></li>
    }

    delete(key){
        this.props.delete(key);
    }



    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <div>
           <ul className="theList">
                {listItems}
            </ul>
                <button id="remove" className={'remove'} onClick={() => this.props.deleteDone()}> Remove all done </button>
            </div>
        );
    }
}

export default TodoItems;