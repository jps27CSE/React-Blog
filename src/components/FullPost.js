import React, { Component } from 'react'
import axios from 'axios'

class FullPost extends Component {

    state = {

        post: ''
    }

    componentDidMount() {
        const post_id = this.props.match.params.full_post;

        axios.get('http://localhost:3001/data/' + post_id)
            .then((response) => {
                this.setState({
                    post: response.data
                })
            })
    }
    DeletePost = (e) => {
        const id = this.props.match.params.full_post;
        const url = `http://localhost:3001/data/`;
        e.preventDefault();
        axios.delete(url + id)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        this.props.history.push('/')
    }

    render() {

        const { post } = this.state;

        const FullPost = post ? (

            <div className="center">
                <h4>{post.title}</h4>
                <span>{post.body}</span>
                <br />
                <button className="btn grey" onClick={this.DeletePost}>Delete Post</button>
            </div>


        ) : (
            <div>Loading....</div>
        )

        return (
            <div>{FullPost}</div>
        )
    }
}

export default FullPost;