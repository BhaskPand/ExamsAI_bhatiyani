import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent
} from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import BarChartIcon from '@mui/icons-material/BarChart';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import Footer from '../components/Footer';
import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const HomePage = () => {
  const pieData = {
    labels: ['UPSC', 'NEET', 'JEE', 'Banking'],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: ['#2196f3', '#4caf50', '#ff9800', '#f44336'],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Students',
        data: [1200, 1500, 1800, 2100],
        backgroundColor: '#673ab7',
      },
    ],
  };

  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 70%, #b4eefd 100%)',
          color: 'white',
          py: { xs: 8, sm: 10 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Abstract background bubbles */}
        <Box
          sx={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            background: `radial-gradient(circle at 20% 40%, #29b6f6cc 0, transparent 70%),
                         radial-gradient(circle at 80% 10%, #ffeb3bcc 0, transparent 60%)`
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom letterSpacing={2}>
            Welcome to ExamsAI <span role="img" aria-label="rocket">🚀</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 5,
              px: { xs: 2, sm: 10 },
              color: 'rgba(255,255,255,0.94)',
              fontSize: { xs: 18, sm: 22 },
              textShadow: '0 2px 16px #2228'
            }}
          >
            Your one-stop platform for mastering all competitive exams in India
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            component={Link}
            to="/exams"
            sx={{
              px: 5, fontSize: 18, borderRadius: 3, fontWeight: 700,
              boxShadow: '0 4px 32px #1e3c72bb'
            }}
          >
            Explore Exams
          </Button>
        </Container>
      </Box>

      {/* FEATURE CARDS */}
      <Container sx={{ py: 8, position: 'relative' }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
          letterSpacing={1}
          sx={{ mb: 3 }}
        >
          Why Choose ExamsAI?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              icon: <SchoolIcon fontSize="large" color="primary" />,
              title: 'Explore Exams',
              desc: 'Get detailed info about UPSC, NEET, SSC, JEE and more.',
              gradient: 'linear-gradient(120deg, #bbdffb 0%, #f3fafc 100%)'
            },
            {
              icon: <BarChartIcon fontSize="large" color="secondary" />,
              title: 'Visual Stats',
              desc: 'Charts showing exam trends and popularity.',
              gradient: 'linear-gradient(120deg, #ffe29d 0%, #fff8db 100%)'
            },
            {
              icon: <SmartToyIcon fontSize="large" sx={{ color: '#73c8a9' }} />,
              title: 'AI Assistant',
              desc: 'Generate revision plans and strategies with AI.',
              gradient: 'linear-gradient(120deg, #eafff5 0%, #e0f1f7 100%)'
            },
            {
              icon: <PersonIcon fontSize="large" color="action" />,
              title: 'Add Your Own',
              desc: 'Contribute and customize your own exam list.',
              gradient: 'linear-gradient(120deg, #ffebe6 0%, #fff8f3 100%)'
            },
          ].map((feature, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                elevation={5}
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  background: feature.gradient,
                  borderRadius: 4,
                  transition: "transform .15s, box-shadow .15s",
                  '&:hover': {
                    transform: "translateY(-7px) scale(1.04)",
                    boxShadow: "0 12px 36px #0002"
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CHARTS SECTION - centered */}
      <Container sx={{
        py: 6, textAlign: 'center', maxWidth: 'md',
        position: 'relative',
        background: 'linear-gradient(95deg, #f4fcff 70%, #eff2fd 100%)',
        borderRadius: 5,
        boxShadow: '0 0 60px #4ea7e511',
        mb: 7
      }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          letterSpacing={1}
          sx={{ pb: 2 }}
        >
          <span role="img" aria-label="chart">📊</span> Exam Trends
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Pie Chart Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 4,
                boxShadow: '0 6px 36px #58b2f440'
              }}
              elevation={4}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom textAlign="left" fontWeight={500}>
                  Exam Distribution
                </Typography>
                <Box sx={{ maxWidth: '100%', height: '300px' }}>
                  <Pie data={pieData} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Bar Chart Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 4,
                boxShadow: '0 6px 36px #b58af480'
              }}
              elevation={4}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom textAlign="left" fontWeight={500}>
                  Monthly Registrations
                </Typography>
                <Box sx={{ maxWidth: '100%', height: '300px' }}>
                  <Bar
                    data={barData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* TESTIMONIALS - Left and Right, WITHOUT bulb image */}
      <Box sx={{ backgroundColor: '#f9fbfd', py: 8, position: 'relative' }}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            letterSpacing={1}
          >
            What Students Say <span role="img" aria-label="comments">💬</span>
          </Typography>
          <Grid container spacing={4} sx={{ mt: 3 }}>
            {/* Left-aligned testimonial */}
            <Grid item xs={12} md={6} sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" }
            }}>
              <Card elevation={3} sx={{
                maxWidth: 500, width: '100%',
                borderRadius: 4,
                background: 'linear-gradient(110deg, #eaf6ff 0%, #ffe6f5 100%)',
                position: 'relative'
              }}>
                <CardContent>
                  <Typography variant="body1" fontStyle="italic" fontSize={20}>
                    “ExamsAI gave me all the info and stats I needed. The AI planner is a game-changer!”
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ mt: 2, color: '#7d6dcc' }}
                    align="right"
                  >
                    – Ravi (JEE Aspirant)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Right-aligned testimonial - bulb image removed */}
            <Grid item xs={12} md={6} sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" }
            }}>
              <Card elevation={3}
                sx={{
                  maxWidth: 500,
                  width: '100%',
                  borderRadius: 4,
                  background: 'linear-gradient(120deg, #ffffff 60%, #cdf6ff 100%)',
                  position: 'relative',
                  minHeight: 165,
                  display: 'flex', flexDirection: 'column', justifyContent: 'center'
                }}>
                <CardContent>
                  <Typography variant="body1" fontStyle="italic" fontSize={20}>
                    “The exam cards and visual charts helped me prioritize my study goals!”
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ mt: 2, color: '#1988e1' }}
                    align="right"
                  >
                    – Meena (UPSC Candidate)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default HomePage;