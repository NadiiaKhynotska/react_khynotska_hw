import {Component} from "react";

import {commentsServices} from "../../services";
import {Comment} from "./Comment/Comment";
import css from './Comments.module.css'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: []}
    }

    componentDidMount() {
        commentsServices.getAll().then(({data}) => this.setState({comments: [...data]}))
    }

    render() {
        return (
            <div className={css.wrapper}>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {Comments}