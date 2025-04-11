// Navbar.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background-color: ${({ theme, scrolled }) => 
    scrolled 
      ? theme.headerBg 
      : 'transparent'};
  box-shadow: ${({ theme, scrolled }) => 
    scrolled 
      ? theme.shadowLight 
      : 'none'};
  transition: background-color var(--transition-standard), 
    box-shadow var(--transition-standard);
  padding: ${({ scrolled }) => scrolled ? '0.75rem 2rem' : '1.5rem 2rem'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.h1)`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  position: relative;
  color: ${({ theme }) => theme.text};
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 3px;
    width: 1.5rem;
    background-color: ${({ theme }) => theme.accent};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 0;
    background-color: ${({ theme }) => theme.accent};
    transition: width var(--transition-standard);
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.accent};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  outline: none;
  transition: background-color var(--transition-standard);
  
  &:hover {
    background-color: ${({ theme }) => theme.accentSoft};
  }
`;

const MobileMenuButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  outline: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.8rem;
  outline: none;
`;

const MobileNavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color var(--transition-standard);
  
  &:hover {
    background-color: ${({ theme }) => theme.accentSoft};
  }
`;

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const menuVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'tween', duration: 0.4 } },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({ 
    opacity: 1, 
    x: 0, 
    transition: { 
      delay: i * 0.1, 
      duration: 0.4 
    } 
  }),
};

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <NavContainer 
        variants={navVariants} 
        initial="hidden" 
        animate="visible"
        scrolled={scrolled}
      >
        <NavContent>
          <Logo
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Portfolio
          </Logo>
          
          <NavLinks>
            {links.map((link, i) => (
              <NavLink 
                key={link.name}
                href={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </NavLink>
            ))}
          </NavLinks>
          
          <ButtonGroup>
            <ThemeToggle 
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </ThemeToggle>
            
            <MobileMenuButton
              onClick={() => setMenuOpen(true)}
              whileTap={{ scale: 0.95 }}
            >
              <FiMenu />
            </MobileMenuButton>
          </ButtonGroup>
        </NavContent>
      </NavContainer>
      
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <CloseButton 
              onClick={() => setMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
            >
              <FiX />
            </CloseButton>
            
            {links.map((link, i) => (
              <MobileNavLink
                key={link.name}
                href={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </MobileNavLink>
            ))}
            
            <ThemeToggle 
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginTop: '2rem' }}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </ThemeToggle>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;