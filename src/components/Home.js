import React, { Component } from 'react'
import './Root.css'
import axios from 'axios'

class Home extends Component {

  state = {
    posts: []
  }


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        })
      })
  }

  render() {

    const { posts } = this.state;

    const Postlist = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card center" key={post.id}>
            <div className="card-content">
            <h6 className="card-title">{post.title}</h6>
            <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="loader"></div>
    )



    return (

      <div className="post card center Element">
        <div className="card-content">
          {Postlist}
        </div>
      </div>

    )
  }
}

export default Home