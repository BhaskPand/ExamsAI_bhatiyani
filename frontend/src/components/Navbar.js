import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        mb: 2,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {/* Logo / Brand */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          ExamsAI 🚀
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/exams">Exams</Button>
          <Button color="inherit" component={Link} to="/planner">AI Planner</Button>
          <Button color="inherit" component={Link} to="/news">News</Button>

          {/* Conditional Search (only on /exams) */}
          {location.pathname === '/exams' && (
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search exams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
                input: { padding: '6px 10px' },
                width: { xs: '100%', sm: '200px' },
              }}
            />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;