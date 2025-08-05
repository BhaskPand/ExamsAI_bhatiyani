import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box
} from '@mui/material';

const newsData = [
  {
    title: 'UPSC Prelims Results 2025 Declared',
    date: 'Aug 1, 2025',
    desc: 'Candidates can check results at upsc.gov.in. Mains to be held in Oct 2025.',
  },
  {
    title: 'JEE Advanced 2025 Dates Announced',
    date: 'July 30, 2025',
    desc: 'Exam will be conducted on May 18, 2025. Application starts Jan 15.',
  },
  {
    title: 'NEET 2025 Application Window Opens',
    date: 'July 20, 2025',
    desc: 'Applicants can now fill the NEET form online till August 31, 2025.',
  },
  {
    title: 'SSC CGL Tier 1 Exam Schedule Released',
    date: 'July 15, 2025',
    desc: 'Tier 1 exams to be held from Nov 10 to Nov 20, 2025.',
  },
  {
    title: 'GATE 2026 Exam Pattern Changed',
    date: 'June 28, 2025',
    desc: 'New pattern includes more numerical answer-type questions and less MCQs.',
  },
  {
    title: 'CAT 2025 Registration Starts',
    date: 'June 10, 2025',
    desc: 'Registration open till September 15, 2025. Exam date announced for Nov 29.',
  },
  {
    title: 'Banking Exams 2025: Important Tips',
    date: 'May 25, 2025',
    desc: 'Experts share valuable tips to crack SBI PO and IBPS PO exams this year.',
  },
];

const NewsPage = () => {
  return (
    <Container sx={{ mt: 6, mb: 10, maxWidth: 'md' }}>
      {/* Page Header */}
      <Box sx={{
        background: 'linear-gradient(90deg, #2196f3, #21cbf3)',
        py: 4,
        borderRadius: 3,
        mb: 5,
        boxShadow: '0 8px 30px #21cbf340',
        color: 'white',
        textAlign: 'center',
      }}>
        <Typography variant="h4" fontWeight="bold" letterSpacing={1}>
          Exam News & Updates 📰
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 500, opacity: 0.9 }}>
          Stay tuned for the latest announcements and exam alerts
        </Typography>
      </Box>

      {/* News Cards */}
      <Grid container spacing={4}>
        {newsData.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              elevation={5}
              sx={{
                height: '100%',
                borderRadius: 3,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(33, 203, 243, 0.3)',
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic' }}>
                  {item.date}
                </Typography>
                <Typography sx={{ fontSize: 16, lineHeight: 1.5 }}>
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsPage;