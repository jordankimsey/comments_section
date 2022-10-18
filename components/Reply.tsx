import React from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Box, Button, Card } from '@mui/material';
import Image from 'next/image';

const Reply = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{ mx: 2, mt: 2, px: 2, py: 2, backgroundColor: 'white', minWidth: '350px'}}
    >
      <TextField
        id=''
        label='Add a comment...'
        fullWidth
        multiline
        maxRows={3}
        minRows={3}
        //   value={}
        //   onChange={}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: 2,
        }}
      >
        {/* image */}
        <Image
          src={'/images/avatars/image-juliusomo.png'}
          alt='avatar'
          width={40}
          height={40}
        />
        <Button variant='contained' sx={{ py: 1.5, px: 3, fontWeight: 'bold', color: 'white' }}>
          SEND
        </Button>
      </Box>
    </Card>
  );
};

export default Reply;
