import React,{Component} from 'react';

const Task = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <div style={{fontsize:'1em'}}>
                Task {props.name}
            </div>
            {/* <button onClick={props.onClickFun}>+1</button> */}
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <button>Done</button>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default Task;