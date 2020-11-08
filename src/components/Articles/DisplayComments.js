import React from 'react'


const DisplayComments = (props) => {
  const comments = props.comments
  const commentsArray = comments
  console.log(comments)
  return (
    <div>
    <ul>
    {comments.map((comment) =>
      <li>{comment}</li>
    )}
    </ul>
    </div>
  )
}

export default DisplayComments
