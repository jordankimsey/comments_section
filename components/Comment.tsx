import { Box, Button, Card, Typography, IconButton, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Plus from '../public/images/icon-plus.svg';
import Minus from '../public/images/icon-minus.svg';
import Reply from '../public/images/icon-reply.svg';
import Edit from '../public/images/icon-edit.svg';
import Delete from '../public/images/icon-delete.svg';
import React from 'react';
import CommentReply from './CommentWithReply';

export type Comment = {
  id: number
  content: String
  createdAt: string
  score: number
  user: {username: string, image: {png: string, webp: string}}
  replies: ReplyType[]
}

export type ReplyType = {
  id: number;
  content: String;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: { username: string; image: { png: string; webp: string } };
};

const Comment = ({content, currentUser} : {content: Comment, currentUser: string}) => {
  const theme = useTheme();
  return (
    <Box>
      <Card sx={{ maxWidth: 'sm', mx: 2, my: 2, mt: 2, px: 2, py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* image */}
          <Image
            src={content.user.image.png}
            alt='avatar'
            width={35}
            height={35}
          />
          {/* name */}
          <Typography variant='h6' sx={{ pl: 1.3 }}>
            {content.user.username}
          </Typography>
          {currentUser === content.user.username && (
            <Box>
              <Typography
                sx={{
                  ml: 1,
                  px: 0.8,
                  borderRadius: 1,
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                }}
              >
                you
              </Typography>
            </Box>
          )}
          {/* time */}
          <Typography variant='body1' sx={{ pl: 2 }}>
            {content.createdAt}
          </Typography>
        </Box>
        <Box sx={{ pt: 1 }}>
          <Typography variant='body2'>{content.content}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              backgroundColor: theme.palette.secondary.main,
              alignItems: 'center',
              borderRadius: 1,
            }}
          >
            {/* increment votes */}
            <IconButton
              aria-label='increment'
              onClick={(e) => console.log('Increment button clicked')}
            >
              <Image src={Plus} alt='increment' />
            </IconButton>

            {/* vote # */}
            <Typography
              sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}
            >
              {content.score}
            </Typography>
            {/* decrement votes */}
            <IconButton
              aria-label='decrementt'
              onClick={(e) => console.log('Decrement button clicked')}
            >
              <Image src={Minus} alt='decrement' />
            </IconButton>
          </Box>
          {/* reply */}
          <Box>
            {currentUser === content.user.username ? (
              <>
                <Button
                  aria-label='delete'
                  sx={{ color: theme.palette.primary.dark }}
                  onClick={(e) => console.log('delete button clicked')}
                >
                  <Image src={Delete} alt='delete button' />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: theme.palette.primary.dark,
                      ml: 0.8,
                    }}
                  >
                    Delete
                  </Typography>
                </Button>
                <Button
                  aria-label='edit'
                  onClick={(e) => console.log('edit button clicked')}
                >
                  <Image src={Edit} alt='edit button' />
                  <Typography
                    sx={{
                      fontSize: '14px',
                      ml: 0.8,
                      color: theme.palette.primary.light,
                      // fontWeight: 'bold',
                    }}
                  >
                    Edit
                  </Typography>
                </Button>
              </>
            ) : (
              <Button
                aria-label='reply'
                onClick={(e) => console.log('Reply button clicked')}
              >
                <Image src={Reply} alt='reply' />
                <Typography
                  sx={{
                    ml: 0.8,
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                  }}
                >
                  Reply
                </Typography>
              </Button>
            )}
          </Box>
        </Box>
      </Card>
      {content.replies && (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', px: 2}}>
            <Box sx={{ borderLeft: '1px solid grey' }}>
            {content.replies.map((content) => (
              <CommentReply
                data={content}
                key={content.id}
                currentUser={currentUser}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Comment;
