import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import AnimatedEditorSVG from "./AnimatedEditorSVG";

const About = () => {
  const skills = [
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
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: "var(--bg-primary)",
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
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 }, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontFamily: "var(--font-display)",
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                mb: 2,
                color: "var(--text-primary)",
                textAlign: "center",
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              I build the infrastructure that powers data-driven decisions—designing pipelines, optimizing workflows, and ensuring data flows reliably from source to insight.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Image */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Background Pattern */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                    borderRadius: "var(--border-radius)",
                    opacity: 0.1,
                    zIndex: 0,
                  }}
                />

                {/* Animated Editor SVG */}
                <Box
                  sx={{
                    width: { xs: 280, sm: 340, md: 400 },
                    height: { xs: 280, sm: 340, md: 400 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 1,
                    mx: "auto",
                  }}
                >
                  <AnimatedEditorSVG size={360} />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column - Content */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "var(--font-display)",
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  fontWeight: 600,
                  mb: 3,
                  color: "var(--text-primary)",
                }}
              >
                Turning raw data into reliable infrastructure
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: 'left',
                }}
              >
                With over three years of enterprise experience, I specialize in designing and maintaining end-to-end data pipelines that serve analytics, reporting, and operational needs. My work spans ETL/ELT development, cloud data platforms, data modeling, and business intelligence—with a focus on building systems that are scalable, maintainable, and production-ready.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: 'left',
                }}
              >
                I bring strong technical depth in SQL and Python, paired with hands-on experience modernizing legacy integrations, enforcing data quality, and automating secure workflows. Currently completing a Master's in Data Science at UAB, where I've deepened my expertise in machine learning, analytics, and large-scale data systems.
              </Typography>

              {/* Skills */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: "var(--text-primary)",
                  }}
                >
                  Technical Skills:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {skills.map((skill, index) => (
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
                          backgroundColor: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          border: "1px solid var(--border)",
                          fontWeight: 500,
                          "&:hover": {
                            backgroundColor: "var(--primary)",
                            color: "white",
                          },
                          transition: "var(--transition)",
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default About;
