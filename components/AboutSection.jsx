'use client';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100 font-poppins">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl"
          >
            <StyledWrapper>
              <div className="card">
                <div className="card__border" />
                <div className="card_title__container">
                  <span className="card_title">Cloud & DevOps Engineer</span>
                  <p className="card_paragraph">
                    Passionate about building scalable and efficient cloud solutions
                  </p>
                </div>
                <hr className="line" />
                <div className="content-section">
                  <p className="content-text">
                    I am a passionate Computer Science student specializing in Cloud, DevOps, and Automation. 
                    With a strong foundation in modern infrastructure technologies, I focus on building 
                    scalable and efficient cloud solutions that leverage the power of automation.
                  </p>
                  
                  <p className="content-text">
                    My hands-on experience includes working with Docker for containerization, Jenkins for 
                    continuous integration and deployment, Kubernetes for orchestration, and AWS for cloud 
                    infrastructure. I'm also proficient with infrastructure as code using Terraform, allowing 
                    me to create reproducible and maintainable cloud environments.
                  </p>
                  
                  <p className="content-text">
                    I'm constantly exploring new technologies and methodologies in the DevOps space, 
                    with a particular interest in automating complex workflows and optimizing cloud resources 
                    for performance and cost-efficiency.
                  </p>
                </div>
              </div>
            </StyledWrapper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: hsl(266, 92%, 58%);

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    width: 100%;
    background-color: hsla(240, 15%, 9%, 1);
    background-image: radial-gradient(
        at 88% 40%,
        hsla(240, 15%, 9%, 1) 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);

    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  }

  .card .card__border {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(
      0deg,
      hsl(0, 0%, 100%) -50%,
      hsl(0, 0%, 40%) 100%
    );
    border-radius: 1rem;
  }

  .card .card__border::before {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 10rem;
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0%,
      hsl(277, 95%, 60%) 40%,
      hsl(277, 95%, 60%) 60%,
      hsla(0, 0%, 40%, 0) 100%
    );
    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .card .card_title__container .card_title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--white);
  }

  .card .card_title__container .card_paragraph {
    margin-top: 0.5rem;
    width: 100%;
    font-size: 0.875rem;
    color: var(--paragraph);
  }

  .card .line {
    width: 100%;
    height: 0.1rem;
    background-color: var(--line);
    border: none;
    margin: 0.5rem 0;
  }

  .content-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .content-text {
    color: var(--paragraph);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .card {
      padding: 1.5rem;
    }
    
    .card .card_title__container .card_title {
      font-size: 1.25rem;
    }
    
    .content-text {
      font-size: 0.875rem;
    }
  }
`;

export default AboutSection;
