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

    render() {

        const { post } = this.state;

        const FullPost = post ? (

            <div className="center">
                <h4>{post.title}</h4>
                <span>{post.body}</span>
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