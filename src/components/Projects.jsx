// Projects.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiPlus } from "react-icons/fi";

const ProjectsSection = styled.section`
  background-color: ${({ theme }) => theme.sectionBg};
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;

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

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadowMedium};
  transition: transform var(--transition-standard), box-shadow var(--transition-standard);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadowLarge};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.accentSoft};
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-smooth);

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.textMuted};
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.accentSoft};
  color: ${({ theme }) => theme.accent};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  max-width: 800px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  overflow-y: auto;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const CloseModalButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 10;
`;

const MoreProjectsButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  margin: 3rem auto 0;
  cursor: pointer;
  transition: background-color var(--transition-standard), color var(--transition-standard);

  &:hover {
    background-color: ${({ theme }) => theme.accent};
    color: white;
  }
`;

const projects = [
  {
    id: 1,
    title: "Minimalist Dashboard",
    description: "A clean dashboard UI with dark/light mode, data visualization, and responsive design.",
    fullDescription: "This dashboard provides a comprehensive overview of key metrics and insights through an intuitive interface. The design prioritizes clarity and accessibility while maintaining a modern aesthetic. Key features include customizable widgets, real-time data updates, and advanced filtering options.",
    tags: ["React", "Styled Components", "D3.js"],
    image: "https://via.placeholder.com/500x300",
    demoLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A fully functional e-commerce site with product filtering, cart, and checkout system.",
    fullDescription: "A comprehensive e-commerce solution built with scalability in mind. The platform offers product categorization, advanced filtering, a seamless shopping cart experience, and integration with popular payment gateways. The admin dashboard allows for easy management of products, orders, and customer data.",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    image: "https://via.placeholder.com/500x300",
    demoLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A Kanban-style task organizer with drag-and-drop functionality and task prioritization.",
    fullDescription: "This task management application helps teams organize work efficiently through a visual Kanban board. Users can create tasks, assign team members, set due dates, and track progress. The drag-and-drop interface makes it easy to move tasks between different stages of completion.",
    tags: ["React", "Redux", "Firebase"],
    image: "https://via.placeholder.com/500x300",
    demoLink: "https://example.com",
    githubLink: "https://github.com"
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "A showcase of my skills, projects, and experiences with a clean and modern design.",
    fullDescription: "This personal portfolio website serves as a central hub to highlight my technical skills, completed projects, and professional experiences. The design is focused on user experience and visual appeal, providing an easy way for visitors to learn more about my background and capabilities. It includes sections for showcasing projects, detailing work history, and providing contact information.",
    tags: ["React", "Framer Motion", "Styled Components"],
    image: "https://via.placeholder.com/500x300/abcdef",
    demoLink: "https://example.com/portfolio",
    githubLink: "https://github.com/myusername/portfolio"
  },
  {
    id: 5,
    title: "Blog Application",
    description: "A platform for creating and reading blog posts with categories and search functionality.",
    fullDescription: "This blog application allows users to create, edit, and publish articles. It features a user-friendly interface for writing and formatting content, as well as categorization and tagging systems to help readers find relevant information. The application also includes a search functionality for easy navigation through the blog posts.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://via.placeholder.com/500x300/fedcba",
    demoLink: "https://example.com/blog",
    githubLink: "https://github.com/myusername/blog-app"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "A simple application to get current weather information and a 5-day forecast for any city.",
    fullDescription: "This weather forecast application utilizes a weather API to fetch and display current weather conditions and a 5-day forecast for a specified city. Users can easily input a city name to get real-time temperature, humidity, wind speed, and other relevant weather data. The intuitive design provides a quick and easy way to stay informed about the weather.",
    tags: ["React", "API", "CSS"],
    image: "https://via.placeholder.com/500x300/aabbcc",
    demoLink: "https://example.com/weather",
    githubLink: "https://github.com/myusername/weather-app"
  }
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const displayedProjects = showMore ? projects : projects.slice(0, 3);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Check out some of my recent work. Click on a project to view more details.
          </SectionDescription>
        </SectionHeader>

        <ProjectGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              onClick={() => openModal(project)}
              style={{ cursor: 'pointer' }}
            >
              <ProjectImage>
                <Image src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.description}</ProjectDesc>
                <TagsContainer>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
                <ProjectLinks>
                  {project.demoLink && (
                    <ProjectLink
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink /> Demo
                    </ProjectLink>
                  )}
                  {project.githubLink && (
                    <ProjectLink
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub /> GitHub
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>

        {projects.length > 3 && (
          <MoreProjectsButton
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? "Show Less" : "Show More"} <FiPlus />
          </MoreProjectsButton>
        )}

        <AnimatePresence>
          {selectedProject && (
            <Modal
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
            >
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                  <img src={selectedProject.image} alt={selectedProject.title} />
                  <CloseModalButton onClick={closeModal} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    X
                  </CloseModalButton>
                </ModalHeader>
                <ModalBody>
                  <ModalTitle>{selectedProject.title}</ModalTitle>
                  <ModalDescription>{selectedProject.fullDescription}</ModalDescription>
                  <TagsContainer>
                    {selectedProject.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </TagsContainer>
                  <ProjectLinks>
                    {selectedProject.demoLink && (
                      <ProjectLink
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink /> View Demo
                      </ProjectLink>
                    )}
                    {selectedProject.githubLink && (
                      <ProjectLink
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub /> View Code
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;