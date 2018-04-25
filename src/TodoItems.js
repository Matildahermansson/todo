import React, { Component } from "react";


class TodoItems extends Component {

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map((item, index)=>{
            return (
                <li key={index}>
                    <input type='checkbox' checked={item.checked} onClick={() => this.props.marked(index)}/>
                    <span className={item.checked ? 'checkedItem' : 'nonCheckedItem'}>{item.text}</span>
                    <button id="complete" onClick={()=> this.props.delete(index)}>Completed!</button>
                </li>
            )
        });


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