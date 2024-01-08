import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentList: [],
  }

  onAddingName = event => {
    this.setState({nameInput: event.target.value})
  }

  onAddingComment = event => {
    this.setState({commentInput: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isliked: !each.isliked}
        }
        return each
      }),
    }))
  }

  deleting = id => {
    const {commentList} = this.state

    this.setState(prevState => ({
      commentList: prevState.commentList.filter(each => id !== each.id),
    }))
  }

  addingNewComment = event => {
    const {nameInput, commentInput, commentList} = this.state
    event.preventDefault()
    const backGroundColors = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      isliked: false,
      initial: backGroundColors,
      date: new Date(),
    }

    this.setState(prevState => ({
      commentList: [...commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  render() {
    const {nameInput, commentInput, commentList} = this.state
    return (
      <div>
        <div className="main_frame_rowing">
          <div>
            <h1>Comments</h1>
            <p>Say something about 4.0 technologies</p>
            <form onSubmit={this.addingNewComment}>
              <input
                value={nameInput}
                placeholder="Your Name"
                onChange={this.onAddingName}
              />
              <br />
              <br />
              <textarea
                value={commentInput}
                placeholder="Your Comment"
                onChange={this.onAddingComment}
                rows="9"
                cols="19"
              />
              <br />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
            />
          </div>
        </div>
        <div>
          <p>
            <span className="blueBack">{commentList.length}</span> comments
          </p>
        </div>
        <ul>
          {commentList.map(each => (
            <CommentItem
              key={each.id}
              eachContact={each}
              toggleIsLiked={this.toggleIsLiked}
              deleting={this.deleting}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
