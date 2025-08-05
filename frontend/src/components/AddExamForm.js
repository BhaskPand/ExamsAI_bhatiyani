import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Grid } from '@mui/material';

const AddExamForm = ({ onExamAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExam = {
      id: Date.now(), // Just a unique identifier
      name,
      description,
    };

    try {
      await axios.post(`${BASE_URL}/api/exams`, newExam);
      setName('');
      setDescription('');
      onExamAdded(); // Refresh the list
    } catch (error) {
      console.error('Error adding exam:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 800, mx: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <TextField
            label="Exam Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ height: '100%' }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddExamForm;

