import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { FiDatabase, FiGlobe, FiLayout, FiLayers, FiSettings, FiSmartphone, FiTool, FiTrendingUp } from "react-icons/fi";

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
  background-color: ${({ theme }) => theme.sectionBg};
  overflow: hidden;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  opacity: 0.03;
  left: -200px;
  bottom: -200px;
  filter: blur(100px);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
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

const SectionDescription = styled(motion.p)`
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textMuted};
  font-size: 1.1rem;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadowLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadowMedium};
  }
`;

const IconWrapper = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 30%;
  background-color: ${({ theme }) => theme.accentSoft};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    color: ${({ theme }) => theme.accent};
    font-size: 1.8rem;
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 1rem;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  height: 8px;
  border-radius: 4px;
  margin-top: auto;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.accent};
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const iconVariants = {
  hidden: { scale: 0, rotate: -30 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};

const skills = [
  {
    icon: <FiGlobe />,
    name: "Web Development",
    description: "Building responsive and optimized websites using modern technologies.",
    proficiency: 95
  },
  {
    icon: <FiLayout />,
    name: "UI/UX Design",
    description: "Creating intuitive interfaces with a focus on user experience.",
    proficiency: 88
  },
  {
    icon: <FiLayers />,
    name: "React.js",
    description: "Developing interactive UIs with React and related ecosystems.",
    proficiency: 92
  },
  {
    icon: <FiSmartphone />,
    name: "Mobile Development",
    description: "Building cross-platform mobile applications with React Native.",
    proficiency: 85
  },
  {
    icon: <FiDatabase />,
    name: "Backend Development",
    description: "Developing robust server-side applications and APIs.",
    proficiency: 90
  },
  {
    icon: <FiTool />,
    name: "DevOps",
    description: "Setting up CI/CD pipelines and deployment infrastructures.",
    proficiency: 78
  },
  {
    icon: <FiSettings />,
    name: "System Design",
    description: "Designing scalable architectures for complex applications.",
    proficiency: 82
  },
  {
    icon: <FiTrendingUp />,
    name: "Performance Optimization",
    description: "Improving app performance through code and asset optimization.",
    proficiency: 87
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  return (
    <SkillsSection id="skills" ref={ref}>
      <BackgroundCircle />
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are the technologies and methodologies I specialize in, continuously refining my expertise to deliver exceptional digital solutions.
          </SectionDescription>
        </SectionHeader>
        
        <SkillsGrid
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <IconWrapper
                variants={iconVariants}
              >
                {skill.icon}
              </IconWrapper>
              <SkillName>{skill.name}</SkillName>
              <SkillDescription>{skill.description}</SkillDescription>
              <ProgressBarContainer>
                <ProgressBar
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                />
              </ProgressBarContainer>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;