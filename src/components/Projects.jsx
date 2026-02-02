import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import {
  Security,
  LocationOn,
  Code,
  ShoppingCart,
  Psychology,
  Storage,
  GitHub,
  Launch,
  Close,
  TrendingUp
} from '@mui/icons-material';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect theme from portfolio7-wrapper
  useEffect(() => {
    const checkTheme = () => {
      const wrapper = document.querySelector('.portfolio7-wrapper');
      if (wrapper) {
        const theme = wrapper.getAttribute('data-theme');
        setIsDark(theme === 'dark');

        // Update CSS variables for Dialog
        const root = document.documentElement;
        if (theme === 'dark') {
          root.style.setProperty('--portfolio7-bg-primary', '#0f172a');
          root.style.setProperty('--portfolio7-bg-secondary', '#1e293b');
          root.style.setProperty('--portfolio7-text-primary', '#f8fafc');
          root.style.setProperty('--portfolio7-text-secondary', '#cbd5e1');
          root.style.setProperty('--portfolio7-text-muted', '#94a3b8');
          root.style.setProperty('--portfolio7-border', '#334155');
        } else {
          root.style.setProperty('--portfolio7-bg-primary', '#fff');
          root.style.setProperty('--portfolio7-bg-secondary', '#f8fafc');
          root.style.setProperty('--portfolio7-text-primary', '#0f172a');
          root.style.setProperty('--portfolio7-text-secondary', '#475569');
          root.style.setProperty('--portfolio7-text-muted', '#64748b');
          root.style.setProperty('--portfolio7-border', '#e2e8f0');
        }
      }
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    const wrapper = document.querySelector('.portfolio7-wrapper');
    if (wrapper) {
      observer.observe(wrapper, { attributes: true, attributeFilter: ['data-theme'] });
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Stock Trend Prediction and Analysis",
      subtitle: "Using SVD and Logistic Regression",
      description: "Developed a predictive model for short-term stock trend forecasting using dimensionality reduction and classification techniques. Achieved 95%+ accuracy with near-perfect reconstruction (R² 0.9999).",
      fullDescription: `Built a machine learning pipeline to analyze high-dimensional stock price data and improve short-term trend prediction accuracy. Applied Singular Value Decomposition (SVD) to reduce feature complexity while preserving signal integrity, then trained a logistic regression classifier that achieved over 95% accuracy and a strong F1 score. The model demonstrated near-perfect data reconstruction with an R² of 0.9999—validating the dimensionality reduction approach.`,
      technologies: ["Python", "Machine Learning", "SVD", "Logistic Regression", "Data Analysis"],
      icon: <TrendingUp />,
      color: "#4CAF50",
      gradient: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
      features: [
        "High-dimensional data analysis",
        "SVD Dimensionality Reduction",
        "Logistic Regression Modeling",
        "95%+ Accuracy",
        "R² 0.9999"
      ],
      period: "Academic Project",
      institution: "UAB"
    },
    {
      id: 2,
      title: "Brain Tumor Detection and Classification",
      subtitle: "Using PSO and SVM",
      description: "Built a classification system for brain tumor MRI images using optimized machine learning techniques. Achieved 92.15% accuracy while managing high-dimensional data constraints.",
      fullDescription: `Designed a medical image classification system to identify brain tumors from MRI scans—a task complicated by limited data and high feature dimensionality. Used Particle Swarm Optimization (PSO) to fine-tune SVM parameters and applied advanced preprocessing to improve image quality. The final model achieved 92.15% classification accuracy with reduced feature complexity, demonstrating effective handling of constrained medical imaging datasets.`,
      technologies: ["Python", "Machine Learning", "SVM", "PSO", "Image Processing"],
      icon: <Psychology />,
      color: "#2196F3",
      gradient: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
      features: [
        "MRI Image Classification",
        "PSO Optimization",
        "SVM Classification",
        "92.15% Accuracy",
        "Feature Reduction"
      ],
      period: "Academic Project",
      institution: "UAB"
    },
    {
      id: 3,
      title: "E-Agromart",
      subtitle: "Agricultural E-Commerce Platform",
      description: "Designed an agricultural e-commerce platform to connect farmers with suppliers and simplify order management. Delivered a 30% improvement in order processing efficiency.",
      fullDescription: `Built E-Agromart, a full-stack web application that streamlines how farmers access and order agricultural products. Developed the platform using PHP and MySQL with secure user authentication and role-based access. Implemented automated database updates to maintain real-time inventory accuracy. The system reduced manual processing overhead and improved order fulfillment efficiency by approximately 30%.`,
      technologies: ["PHP", "MySQL", "Web Development", "Database Management", "E-Commerce"],
      icon: <ShoppingCart />,
      color: "#FF9800",
      gradient: "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)",
      features: [
        "Online Marketplace for Farmers",
        "Order Management System",
        "Secure User Management",
        "Automated Database Updates",
        "30% Efficiency Improvement"
      ],
      period: "Academic Project",
      institution: "VTU"
    },
    {
      id: 4,
      title: "Tennis Database",
      subtitle: "SQL Server Management System",
      description: "Architected a relational database system for managing tennis match and player data, with optimized queries and automated maintenance routines.",
      fullDescription: `Designed and implemented a SQL Server database to efficiently store, query, and manage structured tennis data. Built a normalized schema with optimized indexing, stored procedures, and triggers to ensure fast retrieval and data integrity. The system reduced manual maintenance overhead and improved query performance for common reporting tasks.`,
      technologies: ["SQL Server", "Database Design", "SQL", "Stored Procedures", "Triggers"],
      icon: <Storage />,
      color: "#9C27B0",
      gradient: "linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)",
      features: [
        "Relational Database Design",
        "Optimized SQL Queries",
        "Stored Procedures & Triggers",
        "Data Management",
        "Performance Optimization"
      ],
      period: "Academic Project",
      institution: "UAB"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <Box
      component="section"
      id="projects"
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
              Featured Projects
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
              Applied projects that demonstrate practical problem-solving across machine learning, data analysis, and system design—each focused on delivering measurable outcomes.
            </Typography>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4} alignItems="stretch">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    height: '100%',
                    minHeight: 340,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-lg)',
                      '& .project-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    },
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Header */}
                  <Box
                    sx={{
                      background: project.gradient,
                      p: 3,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      className="project-icon"
                      sx={{
                        color: 'white',
                        fontSize: '2.5rem',
                        mb: 2,
                        transition: 'var(--transition)',
                      }}
                    >
                      {project.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                      }}
                    >
                      {project.subtitle}
                    </Typography>
                  </Box>

                  {/* Project Content */}
                  <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'var(--text-secondary)',
                        mb: 3,
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--text-muted)',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                          mb: 1,
                          display: 'block',
                        }}
                      >
                        Technologies
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              border: '1px solid var(--border)',
                              fontSize: '0.7rem',
                            }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3}`}
                            size="small"
                            sx={{
                              backgroundColor: 'var(--primary)',
                              color: 'white',
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {/* Period & Institution */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                        }}
                      >
                        {project.period}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {project.institution}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            background: isDark ? '#0f172a' : '#fff',
            border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
            boxShadow: isDark
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)'
              : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                background: selectedProject.gradient,
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px',
                margin: 0,
                maxWidth: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ fontSize: '2rem' }}>
                  {selectedProject.icon}
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {selectedProject.subtitle}
                  </Typography>
                </Box>
              </Box>
              <IconButton
                onClick={handleCloseDialog}
                sx={{ color: 'white' }}
              >
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{
              p: 4,
              backgroundColor: isDark ? '#0f172a' : '#fff',
              color: isDark ? '#cbd5e1' : '#475569',
            }}>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? '#cbd5e1' : '#475569',
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: 'left',
                  maxWidth: '100%',
                }}
              >
                {selectedProject.fullDescription}
              </Typography>

              {/* Key Features */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: isDark ? '#f8fafc' : '#0f172a',
                  }}
                >
                  Key Features
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {selectedProject.features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: selectedProject.color,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark ? '#cbd5e1' : '#475569',
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Technologies */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: isDark ? '#f8fafc' : '#0f172a',
                  }}
                >
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: isDark ? '#1e293b' : '#f8fafc',
                        color: isDark ? '#cbd5e1' : '#0f172a',
                        border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Project Info */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pt: 2,
                  borderTop: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#94a3b8' : '#64748b',
                      mb: 0.5,
                    }}
                  >
                    Period
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: isDark ? '#f8fafc' : '#0f172a',
                    }}
                  >
                    {selectedProject.period}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#94a3b8' : '#64748b',
                      mb: 0.5,
                    }}
                  >
                    Institution
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: '#6366f1',
                    }}
                  >
                    {selectedProject.institution}
                  </Typography>
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects; 