import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu, Close, LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext.jsx';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled
            ? 'rgba(var(--bg-primary-rgb), 0.95)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled
            ? '1px solid var(--border)'
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg" disableGutters sx={{ px: 0 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: isScrolled ? 1 : 2,
              px: 2,
              transition: 'padding 0.3s ease',
            }}
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                onClick={() => scrollToSection('home')}
              >
                Adithya Reddy
              </Typography>
            </motion.div>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      color: activeSection === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                      fontWeight: activeSection === item.id ? 600 : 500,
                      textTransform: 'none',
                      fontSize: '1rem',
                      px: 2,
                      py: 1,
                      borderRadius: 'var(--border-radius-sm)',
                      transition: 'var(--transition)',
                      '&:hover': {
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--primary)',
                      },
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: activeSection === item.id ? '100%' : '0%',
                        height: '2px',
                        background: 'var(--primary)',
                        transform: 'translateX(-50%)',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}

              {/* Theme Toggle Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  onClick={toggleTheme}
                  sx={{
                    color: 'var(--text-secondary)',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--border-radius-sm)',
                    p: 1,
                    ml: 1,
                    transition: 'var(--transition)',
                    '&:hover': {
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      transform: 'rotate(180deg)',
                    },
                  }}
                >
                  {isDark ? <LightMode /> : <DarkMode />}
                </IconButton>
              </motion.div>
            </Box>

            {/* Mobile Navigation */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              {/* Theme Toggle Button for Mobile */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  onClick={toggleTheme}
                  sx={{
                    color: 'var(--text-secondary)',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--border-radius-sm)',
                    p: 1,
                    transition: 'var(--transition)',
                    '&:hover': {
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      transform: 'rotate(180deg)',
                    },
                  }}
                >
                  {isDark ? <LightMode /> : <DarkMode />}
                </IconButton>
              </motion.div>

              {/* Mobile Menu Button */}
              <IconButton
                onClick={toggleMobileMenu}
                sx={{
                  color: 'var(--text-primary)',
                  p: 1,
                }}
              >
                <Menu />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu}
            PaperProps={{
              sx: {
                width: 280,
                background: 'var(--bg-primary)',
                borderLeft: '1px solid var(--border)',
              },
            }}
          >
            <Box sx={{ p: 3 }}>
              {/* Close Button */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                <IconButton
                  onClick={toggleMobileMenu}
                  sx={{ color: 'var(--text-primary)' }}
                >
                  <Close />
                </IconButton>
              </Box>

              {/* Mobile Navigation Items */}
              <List>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ListItem
                      button
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        py: 2,
                        borderRadius: 'var(--border-radius-sm)',
                        mb: 1,
                        backgroundColor: activeSection === item.id ? 'var(--bg-secondary)' : 'transparent',
                        '&:hover': {
                          backgroundColor: 'var(--bg-secondary)',
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{
                          '& .MuiListItemText-primary': {
                            color: activeSection === item.id ? 'var(--primary)' : 'var(--text-primary)',
                            fontWeight: activeSection === item.id ? 600 : 500,
                            fontSize: '1.1rem',
                          },
                        }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>



              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    mt: 3,
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                    borderRadius: 'var(--border-radius-sm)',
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: 'var(--shadow-md)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: 'var(--shadow-lg)',
                    },
                    transition: 'var(--transition)',
                  }}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </Box>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 