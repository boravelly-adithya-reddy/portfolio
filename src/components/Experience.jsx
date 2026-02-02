import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip, Avatar } from '@mui/material';
import { Work, CalendarToday, LocationOn, Business } from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Automatic Data Processing (ADP)",
      position: "Data Integration Engineer",
      duration: "Feb 2021 - Dec 2023",
      location: "Hyderabad, Telangana, India",
      description: "Led the design and maintenance of enterprise ETL/ELT pipelines, transforming HRIS data for external partners with high reliability. Modernized 8+ legacy integrations by migrating to Dell Boomi, improving scalability and deployment efficiency. Built data quality frameworks with schema validation, reconciliation checks, and automated error handling.",
      technologies: ["ETL/ELT", "Dell Boomi", "Actian Data Connect", "SQL", "SFTP/FTPS"],
      logo: null,
      featured: true
    }
  ];

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--bg-secondary)',
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
              Work Experience
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
              A track record of delivering production-grade data solutions, from building enterprise pipelines to modernizing legacy systems in high-stakes environments.
            </Typography>
          </Box>
        </motion.div>

        {/* Experience Cards */}
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {experiences.map((experience, index) => (
            <Grid item xs={12} md={8} lg={6} key={experience.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={experience.featured ? 8 : 2}
                  sx={{
                    p: 4,
                    height: 'auto',
                    minHeight: 180,
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    background: experience.featured
                      ? 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                      : 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-xl)',
                    },
                    ...(experience.featured && {
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
                  {/* Company Logo, Title, etc. */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      src={experience.logo}
                      alt={experience.company}
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        border: '2px solid var(--border)',
                      }}
                    >
                      <Business />
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
                        {experience.company}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {experience.position}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Duration and Location */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500, whiteSpace: 'nowrap' }}
                      >
                        {experience.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {experience.location}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  {/* <Typography
                    variant="body1"
                    sx={{
                      color: 'var(--text-secondary)',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {experience.description}
                  </Typography> */}

                  {/* Technologies */}
                  {/* <Box sx={{ mt: 'auto' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        mb: 2,
                      }}
                    >
                      Technologies used:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {experience.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
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
      </Container>
    </Box>
  );
};

export default Experience; 