import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';
import SkillsSphere from '../components/SkillsSphere';
import AnimatedBackground from '../components/AnimatedBackground';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import SkillsBarSection from '../components/SkillsBarSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pb-4" style={{ marginBottom: '-2rem' }}>
        <div className="text-center z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Sunil Kumar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in delay-200">
              Full Stack Developer & ML Enthusiast
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-400 animate-fade-in delay-400">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Bangalore, India
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                7829199874
              </span>
              <span className="flex items-center gap-2">
                <Mail href="mailto:sunilcodes2005@gmail.com" className="w-4 h-4" />
                sunilcodes2005@gmail.com
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/sunil-kumar-83a286317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Sunicreates"
              className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
              <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-10 px-4 pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm a Banglaore based Full Stack Developer and Machine Learning enthusiast with expertise in the MERN stack, 
            Python and Nlp.I aim to create scalable and robust solutions to problems.My strong commitment and determination
            towards work makes me a valuable asset.I am flexible and always eager to adapt to new challenges and technologies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
            Developer Skills
          </h2>
          <SkillsBarSection />
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="52 Projects in 52 Weeks"
              description="A website made for people who like to challenge themselves to build 52 projects in a year."
              link="https://project52-beta.vercel.app/"
              image={undefined}
              tech={["React", "JavaScript", "CSS3", "Vercel"]}
            />
            <ProjectCard
              title="Fashion City"
              description="A modern fashion blog application featuring elegant design, responsive layout, and engaging user experience."
              link="https://fashionindeploy.vercel.app/"
              image={undefined}
              tech={["MERN Stack", "MongoDB", "Express", "Node.js"]}
            />
            <ProjectCard
              title="Redditor"
              description="A application made for developers and redditors for web scraping "
              link="https://www.linkedin.com/in/sunil-kumar-83a286317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              tech={["React", "Praw", "Tessaract", "Hugging Face"]}
            />

           
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
