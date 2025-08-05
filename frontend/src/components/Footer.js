import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#0f2027', color: 'white', py: 3, textAlign: 'center' }}>
      <Typography variant="body2">
        ©️ {new Date().getFullYear()} ExamsAI | Made by Bhaskar
      </Typography>
    </Box>
  );
};

export default Footer;