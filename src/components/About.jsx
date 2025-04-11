import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiLayers } from "react-icons/fi";

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: -200px;
  right: -200px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  opacity: 0.03;
  filter: blur(120px);
  z-index: 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  z-index: 1;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AboutTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  
  span {
    color: ${({ theme }) => theme.accent};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 5px;
      height: 6px;
      width: 100%;
      background-color: ${({ theme }) => theme.accent};
      opacity: 0.2;
      z-index: -1;
    }
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 1rem;
`;

const SkillCards = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadowLight};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  svg {
    color: ${({ theme }) => theme.accent};
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textMuted};
    margin: 0;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  height: 450px;
  
  @media (max-width: 768px) {
    height: 350px;
    order: -1;
  }
`;

const AboutImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadowMedium};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid ${({ theme }) => theme.accent};
    border-radius: 12px;
    z-index: 1;
    opacity: 0.3;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.accent};
  opacity: 0.1;
  z-index: -1;
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
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    } 
  })
};

const floatingAnimation = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, 10, -5, 0],
    y: [0, -10, 5, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const skills = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks."
    },
    {
      icon: <FiLayout />,
      title: "UI/UX Design",
      description: "Designing intuitive and aesthetically pleasing user experiences."
    },
    {
      icon: <FiServer />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs."
    },
    {
      icon: <FiLayers />,
      title: "Full Stack Solutions",
      description: "Integrating frontend and backend technologies for complete applications."
    }
  ];

  return (
    <AboutSection id="about" ref={ref}>
      <BackgroundGradient />
      <Container>
        <ContentWrapper as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AboutContent>
            <AboutTitle variants={itemVariants}>
              Passionate about creating <span>digital experiences</span>
            </AboutTitle>
            
            <AboutText variants={itemVariants}>
              I'm a full-stack developer with a strong focus on creating clean, user-friendly interfaces. With expertise in modern web technologies, I build responsive applications that provide exceptional user experiences across all devices.
            </AboutText>
            
            <AboutText variants={itemVariants}>
              My approach combines technical expertise with creative problem-solving to develop solutions that not only meet but exceed client expectations. I'm always exploring new technologies and methodologies to enhance my skill set.
            </AboutText>
            
            <SkillCards variants={containerVariants}>
              {skills.map((skill, i) => (
                <SkillCard 
                  key={skill.title}
                  custom={i}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {skill.icon}
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </SkillCard>
              ))}
            </SkillCards>
          </AboutContent>
          
          <ImageContainer variants={itemVariants}>
            <AboutImage
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://via.placeholder.com/500x650/1a1a1a/999999?text=Developer" 
                alt="Developer" 
              />
            </AboutImage>
            
            <FloatingShape 
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              style={{ top: "10%", right: "-20px" }}
            />
            
            <FloatingShape 
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              style={{ bottom: "10%", left: "-20px" }}
            />
          </ImageContainer>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;