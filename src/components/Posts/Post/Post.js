import {Component} from "react";

import css from './Post.module.css'
class Post extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {id, title, body} = this.props.post;

        return(
            <div className={css.create}>
                <div>ID: {id}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>

            </div>
        )
    }
}

export {Post}