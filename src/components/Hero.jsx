// Hero.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 60px;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  
  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -5%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    opacity: 0.05;
    filter: blur(100px);
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    opacity: 0.05;
    filter: blur(80px);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const GreetingText = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.accent};
  font-weight: 500;
  margin-bottom: 1rem;
  
  &::before {
    content: "";
    width: 2rem;
    height: 2px;
    background-color: ${({ theme }) => theme.accent};
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 1.5rem;
  max-width: 800px;
`;

const HeroText = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  max-width: 600px;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 2rem;
`;

const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.accent};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  margin-top: 1rem;
  box-shadow: 0 4px 12px rgba(157, 0, 255, 0.3);
  
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.accent};
    box-shadow: 0 6px 14px rgba(157, 0, 255, 0.4);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: all var(--transition-standard);
  
  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textMuted};
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scrollVariants = {
  initial: { y: -5 },
  animate: { 
    y: 5, 
    transition: { 
      repeat: Infinity, 
      repeatType: "reverse", 
      duration: 1.5
    }
  }
};

const Hero = () => (
  <HeroSection id="home">
    <HeroBackground />
    <Container as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
      <GreetingText variants={itemVariants}>Hello, I am a Developer</GreetingText>
      
      <HeroTitle variants={itemVariants}>
        Creating digital experiences with code and design
      </HeroTitle>
      
      <HeroText variants={itemVariants}>
        I build modern, responsive websites and applications 
        with a focus on clean design and smooth user experiences.
      </HeroText>
      
      <ActionButton 
        href="#projects" 
        variants={itemVariants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        View my work <FiArrowDown style={{ marginLeft: '0.5rem' }} />
      </ActionButton>
      
      <SocialLinks variants={itemVariants}>
        <SocialLink 
          href="https://github.com" 
          target="_blank" 
          whileHover={{ y: -3 }}
        >
          <FiGithub />
        </SocialLink>
        <SocialLink 
          href="https://linkedin.com" 
          target="_blank" 
          whileHover={{ y: -3 }}
        >
          <FiLinkedin />
        </SocialLink>
        <SocialLink 
          href="https://twitter.com" 
          target="_blank" 
          whileHover={{ y: -3 }}
        >
          <FiTwitter />
        </SocialLink>
      </SocialLinks>
    </Container>
    
    <ScrollIndicator 
      initial="initial" 
      animate="animate"
      variants={scrollVariants}
    >
      <span>Scroll Down</span>
      <FiArrowDown />
    </ScrollIndicator>
  </HeroSection>
);

export default Hero;