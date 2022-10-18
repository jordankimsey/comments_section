import { Box } from '@mui/material'
import React from 'react'
import Comment from './Comment'

export type CommentsType = {
  currentUser: { userName: string; image: { png: string } };
  comments: Comment;
};

const CommentWithReply = ({data}: {data: CommentsType}) => {
  return (
    <Box>
      {data.comments.map((comment, index) => (
        <Box key={comment.id}>
          <Comment
            content={comment}
            currentUser={data.currentUser.userName}
          />
        </Box>
      ))}
    </Box>
  );
}

export default CommentWithReply