import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip, Avatar } from '@mui/material';
import { School, CalendarToday, LocationOn, Grade } from '@mui/icons-material';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Master of Science in Data Science',
      institution: 'University of Alabama at Birmingham',
      location: 'Birmingham, Alabama, US',
      duration: 'Jan 2024 – Dec 2025',
      gpa: '3.6/4.0',
      description: 'Advanced Algorithms, Database Systems, Machine Learning, Deep Learning, Data Science Foundation, Data Mining.',
      courses: ['Machine Learning', 'Deep Learning', 'Data Mining', 'Database Systems'],
      logo: null,
      featured: true,
    },
    {
      id: 2,
      degree: 'Bachelor of Engineering',
      institution: 'Visvesvaraya Technological University',
      location: 'Mysuru, Karnataka, India',
      duration: 'Aug 2016 - Sep 2020',
      gpa: 'N/A',
      description: '',
      courses: [],
      logo: null,
      featured: false,
    }
  ];

  const certifications = [
    {
      name: 'Associate Integration Developer',
      issuer: 'Dell Boomi',
      year: '',
      credential: 'Integration Development',
    },
    {
      name: 'Power BI',
      issuer: 'Microsoft',
      year: '',
      credential: 'Data Visualization',
    },
  ];

  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--bg-primary)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontFamily: 'var(--font-display)',
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              Education & Certifications
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              A strong academic foundation in data science and engineering, complemented by industry-recognized credentials that validate hands-on expertise.
            </Typography>
          </Box>
        </motion.div>

        {/* Education Cards */}
        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }} alignItems="stretch">
          {educationData.map((education, index) => (
            <Grid item xs={12} lg={6} key={education.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={education.featured ? 8 : 2}
                  sx={{
                    p: 4,
                    height: 'auto',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    background: education.featured
                      ? 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                      : 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-xl)',
                    },
                    ...(education.featured && {
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
                      },
                    }),
                  }}
                >
                  {/* Institution Logo */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      src={education.logo}
                      alt={education.institution}
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        border: '2px solid var(--border)',
                      }}
                    >
                      <School />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          mb: 0.5,
                        }}
                      >
                        {education.institution}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {education.degree}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Duration and Location */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {education.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {education.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Grade sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        GPA: {education.gpa}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'var(--text-secondary)',
                      mb: 3,
                      lineHeight: 1.6,
                      textAlign: 'left',
                    }}
                  >
                    {education.description}
                  </Typography>

                  {/* Courses */}
                  {/* <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        mb: 2,
                      }}
                    >
                      Key Courses:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {education.courses.map((course) => (
                        <Chip
                          key={course}
                          label={course}
                          size="small"
                          sx={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border)',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box> */}

                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                mb: 2,
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              Professional Certifications
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-secondary)',
                maxWidth: '500px',
                mx: 'auto',
              }}
            >
              Industry certifications that demonstrate practical knowledge and commitment to professional growth.
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {certifications.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={cert.name} style={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ flex: 1, display: 'flex' }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      height: 180,
                      minHeight: 180,
                      maxHeight: 180,
                      display: 'flex',
                      flex: 1,
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'var(--border-radius)',
                      border: '1px solid var(--border)',
                      transition: 'var(--transition)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 'var(--shadow-lg)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        mb: 1,
                      }}
                    >
                      {cert.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'var(--primary)',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {cert.issuer}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'var(--text-secondary)',
                        mb: 2,
                      }}
                    >
                      {cert.year} • {cert.credential}
                    </Typography>
                    <Chip
                      label="Verified"
                      size="small"
                      sx={{
                        backgroundColor: 'var(--accent)',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education; 