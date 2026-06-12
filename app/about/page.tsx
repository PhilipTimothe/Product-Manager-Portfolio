"use client";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { BackButton } from "@/components/back-button";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/badge";
import { motion } from "framer-motion";
import {
  SiAdobephotoshop,
  SiFigma,
  SiCss3,
  SiReact,
  SiFramer,
  SiJira,
  SiTrello,
  SiConfluence,
  SiAsana,
  SiSlack,
  SiTableau,
  SiMysql,
  SiJupyter,
  SiGit,
  SiAdobe, // fallback generic Adobe
} from "react-icons/si";

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <BackButton />

      <main className="pt-32">
        <Container>
          <div className="text-left mb-16">
            <SectionHeading
              level={1}
              className="mb-6 text-black font-sans font-normal tracking-[0.01em]"
            >
              Philip Timothe®
            </SectionHeading>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-md text-black text-balance font-sans font-light text-left"
            >
              I'm a technical project manager who leans into the messy,
              cross-functional problems most people would rather route around.
              My approach comes out of a collision of software engineering and
              data science, grounded by a creative perspective shaped by film
              and photography. I'm at my best going deep into the details to
              build the frameworks and workflows that turn friction into clarity
              and momentum. I value the discipline of the small wins, because
              that's how you get the big, systemic shifts. In the end, I want to
              use these tools to build systems that solve real problems and
              leave something better behind.
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
                  title: "Product and Content Lead",
                  company: "WhiteCoatLab",
                  years: "2023 to Present",
                  detail:
                    "I founded WhiteCoatLab and run it as the single point of accountability for client delivery, from the first scope conversation to final handoff. Across 60+ projects for 8 to 10 clients, I've defined scope, timelines, and acceptance criteria, and coordinated design, engineering, and content teams to ship work that holds up. I built the review gates and clear up-front scope that keep revisions to 2 or 3 rounds without giving up quality, led the whitecoatlab.co re-architecture from scope to launch as a mobile-first React build with CI/CD on GitHub Actions and Cloudflare, and earned enough trust along the way that one client came back for 29 separate projects over two years.",
                },
                {
                  title: "Software Engineer · Apprentice",
                  company: "Splash",
                  years: "2021 to 2022",
                  detail:
                    "I joined as an engineering apprentice and shipped real user-facing work alongside the product and engineering teams. I built React components, integrated APIs, and tightened onboarding and documentation to speed up team ramp time, while staying active in code reviews and QA cycles to keep quality and collaboration standards high.",
                },
                {
                  title: "Client Sales Associate",
                  company: "Gerber Group",
                  years: "2016 to 2020",
                  detail:
                    "I owned client relationships and used structured feedback loops to improve how the operation ran. Working across multi-level operations and service teams, I streamlined workflows and lifted client satisfaction across the board.",
                },
                {
                  title: "Product Allocation Specialist",
                  company: "C&S Wholesale Grocers Inc.",
                  years: "2006 to 2013",
                  detail:
                    "This is where I learned to find the friction in a system and re-engineer it. I redesigned distribution workflows to boost daily output by 40% and save hours per shift, partnering with warehousing, transportation, and planning to roll out scalable improvements that made the whole supply chain more efficient and reliable.",
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
                        {role.title}{" "}
                        <span className="text-black/70">@ {role.company}</span>
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
                const hardSkillsCol1 = {
                  label: "Project & Program",
                  skills: [
                    "Project Lifecycle Management",
                    "Agile/Scrum",
                    "Sprint Planning",
                    "Workflow Optimization",
                    "Information Architecture",
                    "Wireframing & Prototyping",
                    "A/B Testing",
                  ],
                };

                const hardSkillsCol2 = {
                  label: "Engineering & Web",
                  skills: [
                    "JavaScript",
                    "React.js",
                    "Next.js",
                    "Tailwind CSS",
                    "Git",
                    "AWS Fundamentals",
                    "Responsive Web Design",
                    "Prompt Engineering",
                    "AI-Assisted Analysis",
                  ],
                };

                const hardSkillsCol3 = {
                  label: "Data & Analytics",
                  skills: [
                    "SQL",
                    "Python (Pandas, NumPy, SciPy)",
                    "Exploratory Data Analysis",
                    "Statistical Analysis",
                    "Predictive Modeling",
                    "Data Visualization",
                    "Tableau",
                    "Dashboard Design",
                    "Business Intelligence",
                    "Data Storytelling",
                    "Jupyter Lab",
                  ],
                };

                const softSkillsCol1 = [
                  "Communication & Collaboration",
                  "Stakeholder Management",
                  "Cross-Functional Team Leadership",
                  "Adaptability & Problem-Solving",
                ];

                const softSkillsCol2 = [
                  "Empathy & User Advocacy",
                  "Presentation & Storytelling",
                  "Strategic Thinking & Decision-Making",
                ];

                // Build a list once
                const tools = [
                  { name: "React", icon: SiReact, color: "#61DAFB" },
                  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
                  { name: "Tableau", icon: SiTableau, color: "#E97627" },
                  { name: "Git", icon: SiGit, color: "#F05032" },
                  {
                    name: "Adobe Photoshop",
                    icon: SiAdobephotoshop || SiAdobe,
                    color: "#31A8FF",
                  },
                  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
                  { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
                  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
                  { name: "Jira", icon: SiJira, color: "#0052CC" },
                  { name: "Slack", icon: SiSlack, color: "#4A154B" },
                  { name: "Framer", icon: SiFramer, color: "#0055FF" },
                  { name: "Trello", icon: SiTrello, color: "#0079BF" },
                  { name: "Confluence", icon: SiConfluence, color: "#172B4D" },
                  { name: "Asana", icon: SiAsana, color: "#273347" },
                ];

                // console check (remove after)
                console.log("icon exists?", {
                  SiAdobephotoshop: !!SiAdobephotoshop,
                  SiFigma: !!SiFigma,
                });

                return (
                  <>
                    {/* Hard Skills - 3 columns */}
                    <div className="mb-8">
                      <h3 className="text-lg font-sans font-normal text-black mb-4">
                        Hard Skills
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[hardSkillsCol1, hardSkillsCol2, hardSkillsCol3].map((col) => (
                          <div key={col.label}>
                            <p className="text-[11px] text-black/40 uppercase tracking-widest font-sans mb-2">
                              {col.label}
                            </p>
                            <div className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                              {col.skills.map((skill, index) => (
                                <p key={index}>{skill}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Soft Skills - 2 columns */}
                    <div className="mb-8">
                      <h3 className="text-lg font-sans font-normal text-black mb-4">
                        Soft Skills
                      </h3>
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
                      <h3 className="text-lg font-sans font-normal text-black mb-4">
                        Tools
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
                        {tools.map(({ name, icon: Icon, color }) => (
                          <div
                            key={name}
                            className="flex flex-col items-center gap-2"
                          >
                            <div className="w-12 h-12 bg-gray-900 rounded-lg shadow-sm flex items-center justify-center border border-gray-800">
                              {Icon ? (
                                <Icon className="w-8 h-8" style={{ color }} />
                              ) : (
                                <div className="w-8 h-8 bg-gray-200 rounded" />
                              )}
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
                    At the heart of everything I do is story. Whether I'm coding
                    a project, cutting film, or analyzing data, I'm always
                    chasing the thread that makes something resonate. A good
                    story builds trust, sparks curiosity, and creates impact.
                  </p>
                </div>

                {/* Film & Photography */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Film & Photography
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    I see film and photography as ways to freeze meaning in
                    motion. From construction sites to city streets, I love
                    turning ordinary moments into visual narratives. Tools like
                    my Sony FX3 and DaVinci Resolve feel like extensions of how
                    I process the world.
                  </p>
                </div>

                {/* Curated Simplicity */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Curated Simplicity
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    Less noise, more signal. I value clarity, in design, code,
                    and life. My work and my choices aim to strip away the
                    unnecessary so what matters most comes forward.
                  </p>
                </div>

                {/* Music & Flow */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Music & Flow
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    Music is everything to me. It has been the foundation to my
                    life emotionally and spiritually. To this day I create it
                    and use it as a means to escape. There's so much of my
                    history woven in the depths of it.
                  </p>
                </div>

                {/* Learning & Growth */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Learning & Growth
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    I'm energized by the process of learning, from coding new
                    frameworks to studying financial markets. Curiosity drives
                    me forward, and I see each project as a chance to stretch,
                    adapt, and grow.
                  </p>
                </div>

                {/* Community & Impact */}
                <div>
                  <h3 className="text-base font-sans font-normal text-black mb-3">
                    Community & Impact
                  </h3>
                  <p className="text-[12px] sm:text-[13px] md:text-[14px] text-black/70 leading-relaxed font-light">
                    What matters most to me is creating work that connects.
                    Whether through storytelling, design, or data, I aim to
                    build things that add value, spark conversation, and leave
                    people better than before.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Resume Download Section */}
          {/* <section className="mb-24">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <a
                  href="/Philip_Timothe_CV.pdf"
                  download="Philip_Timothe_Resume.pdf"
                  className="inline-flex items-center gap-2 bg-surface hover:bg-surface/80 text-black border border-border/20 rounded-full px-6 py-3 shadow-sm text-sm font-medium transition-all duration-200 hover:shadow-md"
                >
                  Download resume (PDF)
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                  </svg>
                </a>
              </motion.div>
            </Container>
          </section> */}
        </Container>
      </main>

      <Footer />
    </div>
  );
}
