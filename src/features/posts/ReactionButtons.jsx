import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()
  const onReactionClick = (postId, reaction) =>
    dispatch(reactionAdded({ postId, reaction }))

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="muted-button reaction-button"
      onClick={() => onReactionClick(post.id, name)}
    >
      {emoji} {post.reactions[name]}
    </button>
  ))
  return <div>{reactionButtons}</div>
}

export default ReactionButtons
