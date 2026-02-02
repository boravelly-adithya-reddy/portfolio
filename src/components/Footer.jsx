import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email, KeyboardArrowUp } from '@mui/icons-material';
import { SiMedium } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHub />,
      url: 'https://github.com/torvalds',
      color: '#333',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/in/linustorvalds',
      color: '#0077b5',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, var(--primary) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, var(--secondary) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Adithya Reddy
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-secondary)',
                  mb: 3,
                  lineHeight: 1.7,
                }}
              >
                Data Engineer focused on building reliable data infrastructure and analytics solutions.
              </Typography>

              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <motion.a
                  href="https://www.linkedin.com/in/adithya-reddy-boravelly20"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      '&:hover': {
                        backgroundColor: '#0077b5',
                        borderColor: '#0077b5',
                        color: 'white',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'var(--transition)',
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                </motion.a>
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'var(--text-primary)',
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 500,
                      transition: 'var(--transition)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link}
                  </motion.a>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'var(--text-primary)',
                }}
              >
                Contact Info
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'var(--text-muted)',
                      mb: 0.5,
                    }}
                  >
                    Email
                  </Typography>
                  <a
                    href="mailto:boravellyadithyareddy@gmail.com"
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}
                  >
                    boravellyadithyareddy@gmail.com
                  </a>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'var(--text-muted)',
                      mb: 0.5,
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    Birmingham, Alabama, US
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'var(--text-muted)',
                      mb: 0.5,
                    }}
                  >
                    Available for
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                    }}
                  >
                    Data Engineering & Science Roles
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider
          sx={{
            my: 4,
            borderColor: 'var(--border)',
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'var(--text-muted)',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © {currentYear} Adithya Reddy Boravelly. All rights reserved.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                border: 'none',
                borderRadius: '50%',
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
                transition: 'var(--transition)',
              }}
            >
              <KeyboardArrowUp />
            </motion.button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 