import { Box, Button, Card, Typography, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Image from 'next/image'
import Plus from '../public/images/icon-plus.svg'
import Minus from '../public/images/icon-minus.svg'
import Reply from '../public/images/icon-reply.svg'
import React from 'react'

const Comment = () => {
    const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 'sm', mx: 2, my: 4, px: 2, py: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* image */}
        <Image
          src={'/images/avatars/image-juliusomo.png'}
          alt='avatar'
          width={40}
          height={40}
        />
        {/* name */}
        <Typography variant='h6' sx={{ pl: 2 }}>
          amyrobson
        </Typography>
        {/* time */}
        <Typography variant='body1' sx={{ pl: 2 }}>
          1 month ago
        </Typography>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography variant='body2'>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </Typography>
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
            sx={{ color: theme.palette.primary.light, fontWeight: 'bold' }}
          >
            12
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
          <Button
            aria-label='reply'
            onClick={(e) => console.log('Reply button clicked')}
          >
            <Image src={Reply} alt='reply' />
            <Typography
              sx={{
                pl: 1,
                color: theme.palette.primary.light,
                fontWeight: 'bold',
              }}
            >
              Reply
            </Typography>
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default Comment