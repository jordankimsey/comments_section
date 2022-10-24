import { Box } from '@mui/material'
import React from 'react'
import Comment from './Comment'

export type CommentsType = {
  currentUser: { userName: string; image: { png: string } };
  comments: Comment;
};

const CommentWithReply = ({data, currentUser}: {data: any, currentUser: string}) => {
  console.log(data)
  return (
    <Box>
      {data.comments.map((comment, index) => (
        <Box key={comment.id}>
          <Comment
            content={comment}
            currentUser={currentUser}
          />
        </Box>
      ))}
    </Box>
  );
}

export default CommentWithReply