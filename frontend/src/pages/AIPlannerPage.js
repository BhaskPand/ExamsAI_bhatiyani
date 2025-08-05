import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Box,
  Paper,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';

// Top 30 competitive exams in India
const TOP_EXAMS = [
  'UPSC', 'NEET', 'SSC', 'JEE', 'Banking', 'IBPS', 'Railway', 'CAT', 'GATE',
  'IAS', 'IPS', 'NDA', 'CLAT', 'CMAT', 'NIFT', 'JPSC', 'HSSC', 'BPSC', 'MPSC',
  'RPSC', 'TNPSC', 'WBPSC', 'SBI PO', 'SSC CGL', 'SSC CHSL', 'IB ACIO', 'NIMCET',
  'AIIMS', 'IIT JAM', 'CA', 'CS'
];

const AIPlannerPage = () => {
  const [exam, setExam] = useState('');
  const [days, setDays] = useState('');
  const [plan, setPlan] = useState('');

  const handleGenerate = () => {
    if (!exam) {
      alert('Please choose an exam from the dropdown');
      return;
    }
    const mockPlan = `📚 Study Plan for ${exam}:\n\n- Daily 4 hrs study\n- Focus on weak areas\n- Weekly mock tests\n- Revise daily notes`;
    setPlan(mockPlan);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'flex-start',
        py: { xs: 4, sm: 6 },
      }}
    >
      {/* Top Centered Recommendations */}
      <Box sx={{ mb: 3, width: '100%', textAlign: 'center' }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ letterSpacing: 1.2 }}
        >
          Top 30 Competitive Exams
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            overflowX: 'auto',
            px: 1,
            py: 1,
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          {TOP_EXAMS.map((examName) => (
            <Chip
              key={examName}
              label={examName}
              clickable
              color={examName === exam ? 'primary' : 'default'}
              onClick={() => setExam(examName)}
              sx={{ flexShrink: 0 }}
            />
          ))}
        </Stack>
      </Box>

      {/* Centered Top Image (no label below) */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Box
          component="img"
          src="/images/study-ai-centerpiece.jpg"
          alt="Study Planner AI"
          sx={{
            width: { xs: 120, sm: 180 },
            height: 'auto',
            borderRadius: 2,
            boxShadow: 3,
            border: '4px solid #f1f6fc',
            background: 'white',
            userSelect: 'none',
          }}
          draggable={false}
        />
      </Box>

      <Card
        elevation={6}
        sx={{
          borderRadius: 4,
          background: 'linear-gradient(135deg, #1e3c72 30%, #fccb90 100%)',
          color: '#32324b',
          p: 2,
          width: '100%',
        }}
      >
        <CardContent>
          <Box
            component="form"
            autoComplete="off"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mx: 'auto',
              maxWidth: 350,
            }}
          >
            <TextField
              label="Choose Exam"
              select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              fullWidth
              sx={{
                bgcolor: 'white',
                borderRadius: 2,
              }}
            >
              {TOP_EXAMS.map((examName) => (
                <MenuItem key={examName} value={examName}>
                  {examName}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Days left until exam"
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              fullWidth
              sx={{
                bgcolor: 'white',
                borderRadius: 2,
              }}
              inputProps={{ min: 1 }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 1,
                bgcolor: '#1e3c72',
                fontWeight: 'bold',
                boxShadow: 2,
                borderRadius: 2,
                '&:hover': { bgcolor: '#2566be' }
              }}
              onClick={handleGenerate}
            >
              Generate Plan
            </Button>
          </Box>
        </CardContent>
      </Card>

      {plan && (
        <Paper
          elevation={4}
          sx={{
            mt: 4,
            p: 3,
            borderRadius: 3,
            background: 'linear-gradient(90deg, #fff, #e3f1fa 80%)',
            boxShadow: 3,
            width: '100%',
            maxWidth: 480,
            whiteSpace: 'pre-line',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Your AI-Generated Plan:
          </Typography>
          <Typography sx={{ fontFamily: 'monospace', color: '#0e315a' }}>
            {plan}
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default AIPlannerPage;