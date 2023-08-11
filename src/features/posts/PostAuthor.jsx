import { useSelector } from 'react-redux'

const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((u) => u.id === userId)
  )

  return <span>by {author !== undefined ? author.name : 'Unknown author'}</span>
}

export default PostAuthor
