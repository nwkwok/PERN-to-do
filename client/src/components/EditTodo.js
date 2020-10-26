import React, {Fragment, useState} from 'react';

const EditTodo = (props) => {

    const [description, setDescription] = useState(props.todo.description)

    //edit description function
    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = { description };


            const response = await fetch(`/todos/${props.todo.todo_id}`, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            window.location = "/";

        } catch (err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${props.todo.todo_id}`}>
            Edit
            </button>

            <div class="modal" onClick={() => setDescription(props.todo.description)} id={`id${props.todo.todo_id}`}>
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Edit</h4>
                    <button type="button" class="close" data-dismiss="modal" onClick={() => setDescription(props.todo.description)}>&times;</button>
                </div>

                <div class="modal-body">
                    <input className='form-control' type='text' value={description} onChange={e => setDescription(e.target.value)}/>
                </div>

                <div class="modal-footer">
                    <button type="button" onClick={e => updateDescription(e)} class="btn btn-warning" data-dismiss="modal">Edit</button>
                    <button type="button" class="btn btn-danger" onClick={() => setDescription(props.todo.description)} data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>

                    </Fragment>
                    
                )
            }

export default EditTodo;