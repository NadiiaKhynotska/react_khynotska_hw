import {Component} from "react";

import css from './Comment.module.css'
class Comment extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {id, name, email, body} = this.props.comment
        return (
            <div className={css.create}>
                <div>ID: {id}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
            </div>
        )
    }
}

export {Comment}