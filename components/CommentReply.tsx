import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Box, Button, Card, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import Plus from '../public/images/icon-plus.svg';
import Minus from '../public/images/icon-minus.svg';
import Reply from '../public/images/icon-reply.svg';
import Edit from '../public/images/icon-edit.svg';
import Delete from '../public/images/icon-delete.svg';
import {ReplyType} from './Comment'

const CommentReply = ({data, currentUser} : {data: ReplyType, currentUser: string}) => {
    const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: '580px',
        backgroundColor: 'white',
        py: 2,
        mb: 2,
        px: 2,
        ml: 1.5
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          //   backgroundColor: 'red',
        }}
      >
        <Box sx={{}}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* image */}
            <Image
              src={data.user.image.png}
              alt='avatar'
              width={35}
              height={35}
            />
            {/* name */}
            <Typography variant='h6' sx={{ pl: 1.3 }}>
              {data.user.username}
            </Typography>
            {data.user.username === currentUser && (
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
              {data.createdAt}
            </Typography>
          </Box>
          <Box sx={{ pt: 1 }}>
            <Typography variant='body2'>
              <span style={{ color: 'blue' }}>@{data.replyingTo}</span>{' '}
              {data.content}
            </Typography>
          </Box>
        </Box>
        <Box>
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
                {data.score}
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
              {data.user.username === currentUser ? (
                <>
                  <Button
                    aria-label='delete'
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
        </Box>
      </Box>
    </Card>
  );
}

export default CommentReply