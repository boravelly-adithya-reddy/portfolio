import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, LinearProgress, Chip } from '@mui/material';
import { Code, Brush, Cloud, Smartphone, Storage, Settings } from '@mui/icons-material';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: <Code />,
      description: 'Programming languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 90 },
        { name: 'Groovy', level: 80 },
        { name: 'Java', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'PHP', level: 75 },
      ],
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: <Storage />,
      description: 'Database management systems',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL Server', level: 85 },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      icon: <Cloud />,
      description: 'Cloud infrastructure and services',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Microsoft Azure', level: 80 },
      ],
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      icon: <Settings />,
      description: 'ETL/ELT and Big Data',
      skills: [
        { name: 'Dell Boomi', level: 85 },
        { name: 'Actian Data Connect', level: 80 },
        { name: 'Apache Spark', level: 75 },
        { name: 'Databricks', level: 75 },
      ],
    },
    {
      id: 'analytics',
      title: 'Analytics & BI',
      icon: <Brush />,
      description: 'Business Intelligence tools',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Tableau', level: 80 },
        { name: 'Advanced Excel', level: 90 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Methods',
      icon: <Settings />,
      description: 'Development and Management',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Bitbucket', level: 85 },
        { name: 'Agile/Scrum', level: 85 },
      ],
    },
  ];

  const topSkills = [
    "Python", "SQL", "Groovy", "EZScript", "Java", "JavaScript", "PHP",
    "MYSQL", "SQL server",
    "AWS", "Microsoft Azure",
    "Dell Boomi", "Actian Data Connect",
    "Apache Spark", "Databricks",
    "Power BI", "Tableau", "Advanced Excel",
    "Git", "Bitbucket", "Agile/Scrum"
  ];

  return (
    <Box
      component="section"
      id="skills"
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
              Skills & Expertise
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
              A focused toolkit built through hands-on enterprise work—spanning data engineering, cloud platforms, analytics, and the tools that make data systems run reliably at scale.
            </Typography>
          </Box>
        </motion.div>

        {/* Top Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: { xs: 6, md: 8 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                mb: 3,
                textAlign: 'center',
                color: 'var(--text-primary)',
              }}
            >
              Core Technologies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
              {topSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Chip
                    label={skill}
                    sx={{
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1rem',
                      px: 2,
                      py: 1,
                      '&:hover': {
                        backgroundColor: 'var(--primary-dark)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'var(--transition)',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Skill Categories */}
        <Grid container spacing={4} alignItems="stretch">
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} lg={4} key={category.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={hoveredCategory === category.id ? 8 : 2}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  sx={{
                    p: 4,
                    height: '100%',
                    minHeight: 340,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    background: hoveredCategory === category.id
                      ? 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                      : 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-xl)',
                    },
                    ...(hoveredCategory === category.id && {
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        minWidth: 54,
                        minHeight: 54,
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        mr: 2,
                        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                        border: '3px solid var(--bg-primary)',
                        fontSize: 30,
                        transition: 'box-shadow 0.2s',
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          mb: 0.5,
                        }}
                      >
                        {category.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.875rem',
                        }}
                      >
                        {category.description}
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skill.name} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                            }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              color: 'var(--primary)',
                            }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'var(--bg-secondary)',
                            '& .MuiLinearProgress-bar': {
                              background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
                              borderRadius: 4,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 10 } }}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 'var(--border-radius)',
                border: '1px solid var(--border)',
                background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  mb: 2,
                  color: 'var(--text-primary)',
                  textAlign: 'center',
                }}
              >
                Always Learning
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-secondary)',
                  mb: 3,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                The data landscape evolves quickly, and I stay current through continuous learning—exploring new tools, refining best practices, and applying emerging techniques to real-world challenges.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {['Continuous Learning', 'Problem Solving', 'Team Collaboration', 'Agile Development'].map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    sx={{
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border)',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 