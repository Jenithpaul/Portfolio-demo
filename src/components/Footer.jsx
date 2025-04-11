import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.headerBg};
  position: relative;
  overflow: hidden;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Logo = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 2rem;
    background-color: ${({ theme }) => theme.accent};
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.textMuted};
  line-height: 1.6;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(motion.a)`
  color: ${({ theme }) => theme.textMuted};
  transition: color var(--transition-standard);
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.cardBg};
  transition: all var(--transition-standard);
  
  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: translateY(-3px);
  }
`;

const BottomBar = styled.div`
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.borderColor || 'rgba(255, 255, 255, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.9rem;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accent};
  opacity: 0.03;
  top: -100px;
  left: -50px;
  filter: blur(80px);
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <BackgroundDecoration />
      <FooterContent as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FooterColumn variants={itemVariants}>
          <Logo>Portfolio</Logo>
          <FooterText>
            Creating modern and responsive web applications with focus on both design and functionality.
          </FooterText>
          <SocialLinks>
            <SocialLink 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub />
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin />
            </SocialLink>
            <SocialLink 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiTwitter />
            </SocialLink>
            <SocialLink 
              href="mailto:hello@example.com" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn variants={itemVariants}>
          <h4>Navigation</h4>
          <FooterLinks>
            <FooterLink 
              href="#about" 
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              About
            </FooterLink>
            <FooterLink 
              href="#skills" 
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Skills
            </FooterLink>
            <FooterLink 
              href="#projects" 
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Projects
            </FooterLink>
            <FooterLink 
              href="#contact" 
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn variants={itemVariants}>
          <h4>Contact</h4>
          <FooterText>
            Feel free to reach out if you have any questions or want to work together on a project.
          </FooterText>
          <FooterLink 
            href="mailto:hello@example.com"
            whileHover={{ color: theme => theme.accent }}
          >
            hello@example.com
          </FooterLink>
        </FooterColumn>
      </FooterContent>
      
      <BottomBar as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <span>© {currentYear} Portfolio. All rights reserved.</span>
        <motion.span 
          whileHover={{ scale: 1.1 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
        >
          Made with <FiHeart style={{ color: 'var(--color-accent)' }} />
        </motion.span>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;