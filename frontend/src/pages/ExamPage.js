import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  IconButton,
  Divider,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SchoolIcon from '@mui/icons-material/School';
import AddExamForm from '../components/AddExamForm';
import ExamChart from '../charts/ExamChart';

const ExamPage = ({ searchTerm }) => {
  const [exams, setExams] = useState([]);

  const recommendedExams = [
    'UPSC CSE', 'SSC CGL', 'IBPS PO', 'SBI PO', 'RRB NTPC',
    'CDS', 'NDA', 'AFCAT', 'CAPF', 'IFS',
    'GATE', 'ISRO Scientist', 'DRDO CEPTAM', 'UGC NET', 'CSIR NET',
    'CAT', 'XAT', 'IIFT', 'MAT', 'CLAT',
    'AILET', 'NEET', 'JEE Main', 'JEE Advanced', 'AIIMS',
    'JIPMER', 'BITSAT', 'NIFT', 'NID', 'State PSCs'
  ];

  const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

  const fetchExams = () => {
    axios.get(`${BASE_URL}/exams`)
      .then(res => setExams(res.data))
      .catch(err => console.error(err));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/exams/${id}`);
      fetchExams();
    } catch (err) {
      console.error('Error deleting exam:', err);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  const filteredExams = exams.filter((exam) =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4, pb: 10 }}>
      <Box
        sx={{
          background: 'linear-gradient(100deg, #c4e2ff 0%, #effaff 90%)',
          borderRadius: 5,
          mb: 7,
          boxShadow: '0 6px 40px #4ea7e533',
          px: { xs: 2, sm: 7 },
          py: { xs: 4, sm: 7 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            letterSpacing: 2,
          }}
        >
          <SchoolIcon sx={{ mr: 2, fontSize: 48, color: "#2a5298" }} />
          Competitive Exams Hub
        </Typography>
        <Typography variant="h6" sx={{ color: '#314f69', mt: 2 }}>
          Master India's toughest competitive exams, discover trends, and build your own list.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <AddExamForm onExamAdded={fetchExams} />
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ letterSpacing: 1.2 }}>
          🎯 Top 30 Competitive Exams in India
        </Typography>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 3 },
            background: 'linear-gradient(95deg, #f4fcff 70%, #f0f4fd 100%)',
            borderRadius: 4,
            mb: 3,
            boxShadow: '0 8px 32px #83c3e830'
          }}
        >
          <Grid container spacing={2}>
            {recommendedExams.map((exam, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={1}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    background: 'linear-gradient(100deg,#eff8fa 60%,#f3eaff 130%)',
                    transition: 'transform .12s, box-shadow .12s',
                    '&:hover': {
                      transform: 'translateY(-3px) scale(1.03)',
                      background: 'linear-gradient(90deg, #c1e3fb 60%, #e3eaff 120%)',
                      boxShadow: "0 10px 24px #3b70e233"
                    }
                  }}
                >
                  <Typography variant="body1" fontWeight={500} sx={{ color: "#185386" }}>
                    {exam}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{ letterSpacing: 1, color: "#143573" }}
      >
        📝 Your Added Exams
      </Typography>
      <Grid container spacing={3}>
        {filteredExams.length > 0 ? (
          filteredExams.map((exam) => (
            <Grid item xs={12} sm={6} md={4} key={exam.id}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 4,
                  p: 0,
                  background: 'linear-gradient(110deg, #eaf6ff 0%, #ffe6f5 100%)',
                  boxShadow: '0 6px 16px #8eb0e055',
                  transition: "transform .12s, box-shadow .12s",
                  '&:hover': {
                    transform: 'translateY(-4px) scale(1.02)',
                    boxShadow: '0 12px 30px #e0ebfa'
                  }
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#072448' }}>
                        {exam.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {exam.description}
                      </Typography>
                    </Box>
                    <IconButton
                      color="error"
                      sx={{
                        ml: 1,
                        bgcolor: '#ffd3e0',
                        '&:hover': { bgcolor: '#ffb9c9' }
                      }}
                      onClick={() => handleDelete(exam.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', color: '#aab1cf', py: 4, fontSize: 18 }}>
              No exams added yet...
            </Box>
          </Grid>
        )}
      </Grid>

      <Box sx={{
        mt: 6,
        py: 5,
        px: { xs: 1, sm: 3 },
        background: 'linear-gradient(95deg, #f4fcff 70%, #e3f7fc 100%)',
        borderRadius: 5,
        boxShadow: '0 4px 48px #3fa7e022'
      }}>
        <ExamChart />
      </Box>
    </Container>
  );
};

export default ExamPage;
