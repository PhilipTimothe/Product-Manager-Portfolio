'use client';

import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Navbar } from '@/components/navbar';
import { BackButton } from "@/components/back-button";
import { Footer } from '@/components/footer';
import { Badge } from '@/components/badge';
import { Parallax } from '@/components/parallax';
import { skills, timeline } from '@/lib/content';
import { motion } from 'framer-motion';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiCss3,
  SiReact,
  SiFramer,
  SiTailwindcss,
  SiJira,
  SiTrello,
  SiConfluence,
  SiAsana,
  SiMicrosoftproject,
  SiSlack,
  SiGoogledrive,
  SiTableau,
  SiMysql,
  SiJupyter,
  SiGit,
  SiAmazonaws,
  SiAdobe,          // fallback generic Adobe
} from 'react-icons/si';

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <BackButton />
      
      <main className="pt-32">
        <Container>
          <div className="text-left mb-16">
            <SectionHeading level={1} className="mb-6 text-black font-sans font-normal tracking-[0.01em]">
              Philip Timothe®
            </SectionHeading>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-md text-black text-balance font-sans font-light text-left"
            >
              I am a product manager and engineer who is all about doing the thing others would run from. Trained in data and computer science and shaped by a love of film and photography. I can get dialed in and go deep when it counts. I care about the journey, the small wins, and the big shifts. My hope is to use my talents in a way that breeds more positivity.
            </motion.p>
          </div>

          {/* Roles Section */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 text-left text-black font-sans font-normal text-base md:text-lg lg:text-xl">
                Roles
              </h2>
            </motion.div>
          
            <div className="divide-y divide-border/10">
              {[
                {
                  title: 'Product Manager',
                  company: 'WhiteCoatLab',
                  years: '2023 to Present',
                  detail:
                    'Owned discovery to launch for whitecoatlab.co. Built a mobile first React site with GitHub Actions and Cloudflare, and packaged services into clear offerings. Delivered film and photography projects end to end for clients, coordinating across creative and business teams to ensure quality and consistency.',
                },
                {
                  title: 'Software Engineer · Apprentice',
                  company: 'Splash',
                  years: '2021 to 2022',
                  detail:
                    'Partnered with product and engineering in Agile sprints to deliver user-facing features. Built React components, integrated APIs, and improved onboarding and documentation to speed up team ramp time. Contributed to code reviews and QA cycles to raise quality and collaboration standards.',
                },
                {
                  title: 'Client Sales Associate',
                  company: 'Gerber Group',
                  years: '2016 to 2020',
                  detail:
                    'Built strong client relationships and improved processes through structured feedback loops. Collaborated across multi-level operations and service teams to streamline workflows and improve client satisfaction across the board.',
                },
                {
                  title: 'Product Allocation Specialist',
                  company: 'C&S Wholesale Grocers Inc.',
                  years: '2006 to 2013',
                  detail:
                    'Re-engineered distribution workflows to boost daily output and save hours per shift, while maintaining quality standards. Partnered with warehousing, transportation, and planning to implement scalable improvements that improved efficiency and reliability across the supply chain.',
                },
              ].map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="py-2"
                >
                  {/* Two column on md+, stacked on mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1">
                    {/* Left column: title/company/years */}
                    <div>
                      <h3 className="text-sm sm:text-base font-sans font-normal text-black">
                        {role.title} <span className="text-black/70">@ {role.company}</span>
                      </h3>
                      <p className="mt-1 text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                        {role.years}
                      </p>
                    </div>
          
                    {/* Right column: description with vertical divider on md+ */}
                    <div className="mt-3 md:mt-0 md:border-l md:border-border/10 md:pl-4">
                      <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                        {role.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {(() => {
                const hardSkillsCol1 = [
                  'SQL',
                  'Tableau',
                  'Exploratory Data Analysis (EDA)',
                  'Statistical Analysis',
                  'Predictive Modeling',
                  'Data Storytelling',
                  'Dashboard Design',
                  'Data Visualization',
                  'Business Intelligence'
                ];

                const hardSkillsCol2 = [
                  'Python (Pandas, NumPy, SciPy)',
                  'JavaScript',
                  'React.js',
                  'Next.js',
                  'Tailwind CSS',
                  'Git',
                  'AWS Fundamentals',
                  'Jupyter Lab',
                  'AI-Assisted Analysis'
                ];

                const hardSkillsCol3 = [
                  'Prompt Engineering',
                  'Information Architecture',
                  'Wireframing & Prototyping',
                  'A/B Testing',
                  'Responsive Web Design',
                  'Project Lifecycle Management',
                  'Agile/Scrum',
                  'Sprint Planning',
                  'Workflow Optimization',
                ];

                const softSkillsCol1 = [
                  'Communication & Collaboration',
                  'Stakeholder Management',
                  'Cross-Functional Team Leadership',
                  'Adaptability & Problem-Solving'
                ];

                const softSkillsCol2 = [
                  'Empathy & User Advocacy',
                  'Presentation & Storytelling',
                  'Strategic Thinking & Decision-Making'
                ];

                // Build a list once
                const tools = [
                  { name: 'React', icon: SiReact, color: '#61DAFB' },
                  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
                  { name: 'Tableau', icon: SiTableau, color: '#E97627' },
                  { name: 'Git', icon: SiGit, color: '#F05032' },
                  { name: 'Adobe Photoshop', icon: SiAdobephotoshop || SiAdobe, color: '#31A8FF' },
                  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
                  { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
                  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
                  { name: 'Jira', icon: SiJira, color: '#0052CC' },
                  { name: 'Slack', icon: SiSlack, color: '#4A154B' },
                  { name: 'Framer', icon: SiFramer, color: '#0055FF' },
                  { name: 'Trello', icon: SiTrello, color: '#0079BF' },
                  { name: 'Confluence', icon: SiConfluence, color: '#172B4D' },
                  { name: 'Asana', icon: SiAsana, color: '#273347' },
                ];

                // console check (remove after)
                console.log('icon exists?', {
                  SiAdobeillustrator: !!SiAdobeillustrator,
                  SiAdobephotoshop: !!SiAdobephotoshop,
                  SiFigma: !!SiFigma,
                });

                return (
                  <>
                    {/* Hard Skills - 3 columns */}
                    <div className="mb-8">
                      <h3 className="text-lg font-sans font-normal text-black mb-4">Hard Skills</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                          {hardSkillsCol1.map((skill, index) => (
                            <p key={index}>{skill}</p>
                          ))}
                        </div>
                        <div className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                          {hardSkillsCol2.map((skill, index) => (
                            <p key={index}>{skill}</p>
                          ))}
                        </div>
                        <div className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                          {hardSkillsCol3.map((skill, index) => (
                            <p key={index}>{skill}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Soft Skills - 2 columns */}
                    <div className="mb-8">
                      <h3 className="text-lg font-sans font-normal text-black mb-4">Soft Skills</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                          {softSkillsCol1.map((skill, index) => (
                            <p key={index}>{skill}</p>
                          ))}
                        </div>
                        <div className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                          {softSkillsCol2.map((skill, index) => (
                            <p key={index}>{skill}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tools - 1 column */}
                    <div>
                      <h3 className="text-lg font-sans font-normal text-black mb-4">Tools</h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
                        {tools.map(({ name, icon: Icon, color }) => (
                          <div key={name} className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-gray-900 rounded-lg shadow-sm flex items-center justify-center border border-gray-800">
                              {Icon ? <Icon className="w-8 h-8" style={{ color }} /> : <div className="w-8 h-8 bg-gray-200 rounded" />}
                            </div>
                            <span className="text-[10px] sm:text-[11px] md:text-[12px] text-black/70 text-center font-light leading-tight">
                              {name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </section>

          {/* Interests Section */}
          <section className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 text-left text-black font-sans font-normal text-base md:text-lg lg:text-xl">
                Interests & Things
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Storytelling */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Storytelling
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    At the heart of everything I do is story. Whether I'm coding a project, cutting film, or analyzing data, I'm always chasing the thread that makes something resonate. A good story builds trust, sparks curiosity, and creates impact.
                  </p>
                </div>

                {/* Film & Photography */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Film & Photography
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    I see film and photography as ways to freeze meaning in motion. From construction sites to city streets, I love turning ordinary moments into visual narratives. Tools like my Sony FX3 and DaVinci Resolve feel like extensions of how I process the world.
                  </p>
                </div>

                {/* Curated Simplicity */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Curated Simplicity
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    Less noise, more signal. I value clarity, in design, code, and life. My work and my choices aim to strip away the unnecessary so what matters most comes forward.
                  </p>
                </div>

                {/* Music & Flow */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Music & Flow
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    Music is everything to me. It has been the foundation to my life emotionally and spiritually. To this day I create it and use it as a means to escape. There's so much of my history woven in the depths of it.
                  </p>
                </div>

                {/* Learning & Growth */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Learning & Growth
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    I'm energized by the process of learning, from coding new frameworks to studying financial markets. Curiosity drives me forward, and I see each project as a chance to stretch, adapt, and grow.
                  </p>
                </div>

                {/* Community & Impact */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Community & Impact
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    What matters most to me is creating work that connects. Whether through storytelling, design, or data, I aim to build things that add value, spark conversation, and leave people better than before.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

        </Container>
      </main>

      <Footer />
    </div>
  );
}