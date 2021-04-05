import { useState } from 'react';
import { addArticle } from '../actions/index';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

const ConnectedForm = (props) => {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addArticle({ title });
        setTitle('');
    }


    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="title">To-Do</label>
                <input type="text" id="title" value={title} onChange={handleChange} />
            </div>
            <button type="SUBMIT">Save</button>
        </form>
    )
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;