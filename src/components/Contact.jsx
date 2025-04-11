import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiPhone, FiCheck } from "react-icons/fi";

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 60%;
  background-color: ${({ theme }) => theme.sectionBg};
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
  z-index: 0;
  
  @media (max-width: 768px) {
    left: 0;
    top: 0;
    right: 0;
    bottom: 70%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.accent};
  }
`;

const ContactDescription = styled(motion.p)`
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textMuted};
  font-size: 1.1rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.accentSoft};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    color: ${({ theme }) => theme.accent};
    font-size: 1.5rem;
  }
`;

const InfoContent = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  p, a {
    color: ${({ theme }) => theme.textMuted};
    font-size: 1rem;
    line-height: 1.6;
    display: block;
  }
  
  a:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.cardBg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadowLight};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: white;
    transform: translateY(-3px);
  }
`;

const FormContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadowMedium};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textMuted};
`;

const Input = styled(motion.input)`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accentSoft};
  }
`;

const Textarea = styled(motion.textarea)`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accentSoft};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.accent};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(157, 0, 255, 0.3);
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.accent};
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  
  svg {
    font-size: 1.2rem;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
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
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const infoItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({ 
    opacity: 1, 
    x: 0, 
    transition: { 
      delay: i * 0.1 + 0.3,
      duration: 0.5,
      ease: "easeOut"
    } 
  })
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <BackgroundDecoration />
      <Container>
        <ContactHeader>
          <ContactTitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </ContactTitle>
          <ContactDescription
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out through any of the channels below.
          </ContactDescription>
        </ContactHeader>
        
        <ContentWrapper>
          <ContactInfo
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <InfoItem custom={0} variants={infoItemVariants}>
              <IconBox>
                <FiMail />
              </IconBox>
              <InfoContent>
                <h3>Email Address</h3>
                <a href="mailto:hello@example.com">hello@example.com</a>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </InfoContent>
            </InfoItem>
            
            <InfoItem custom={1} variants={infoItemVariants}>
              <IconBox>
                <FiMapPin />
              </IconBox>
              <InfoContent>
                <h3>Location</h3>
                <p>123 Web Developer Street</p>
                <p>Digital City, Internet 10110</p>
              </InfoContent>
            </InfoItem>
            
            <InfoItem custom={2} variants={infoItemVariants}>
              <IconBox>
                <FiPhone />
              </IconBox>
              <InfoContent>
                <h3>Phone Number</h3>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
                <p>Monday - Friday, 9AM - 6PM</p>
              </InfoContent>
            </InfoItem>
            
            <SocialLinks
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <SocialLink 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-twitter"></i>
              </SocialLink>
              <SocialLink 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </SocialLink>
              <SocialLink 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-dribbble"></i>
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <FormContainer
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.01 }}
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.01 }}
                />
              </FormGroup>
              
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FiSend />
              </SubmitButton>
              
              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <FiCheck />
                  <span>Your message has been sent successfully!</span>
                </SuccessMessage>
              )}
            </Form>
          </FormContainer>
        </ContentWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;