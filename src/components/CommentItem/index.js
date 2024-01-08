import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachContact} = props
  const {name, comment, isliked, id, initial, date} = eachContact
  const postedTime = formatDistanceToNow(date)
  const imageliked = isliked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onChangeLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }
  const onDeletingTodo = () => {
    const {deleting} = props
    deleting(id)
  }
  return (
    <li>
      <div className="first">
        <div className={initial}>
          {' '}
          <span className="round">
            {' '}
            <p className="logo ">{name[0].toUpperCase()}</p>
          </span>
        </div>
        <p className="name ">{name}</p>
        <p>{postedTime}</p>
      </div>
      <div className="middle">
        <p>{comment}</p>
      </div>
      <div className="likingAndDelete">
        <div className="liking">
          <img src={imageliked} className="liking_image_size" alt="like" />
          <button className="like" onClick={onChangeLike} alt="comments">
            <p>Like</p>
          </button>
        </div>
        <div className="delete">
          <button
            type="button"
            data-testid="delete"
            className="delete-margin"
            onClick={onDeletingTodo}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              className="deleting"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
