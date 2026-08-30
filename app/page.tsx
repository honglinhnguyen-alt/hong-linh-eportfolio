import {
  ArrowDownRight,
  Award,
  CircuitBoard,
  Code2,
  Download,
  ExternalLink,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Users,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const criteria = [
  {
    code: "3.1",
    title:
      "A commitment to ethical conduct and the highest standards of professional accountability",
    body: "At 3D Bro, I was responsible for diagnosing faults in customer-owned machines. I avoided assumptions based on the first symptom and instead isolated the malfunction from the complete system down to individual sensors, electronic boards, mechanical parts, or software. This evidence-led approach supported accurate repairs, protected customer equipment, and made me accountable for the quality of every recommendation.",
    evidence: "3D Bro internship",
  },
  {
    code: "3.2",
    title:
      "Demonstrated ability to effectively communicate with engineers and stakeholders from different fields",
    body: "At Dat Vinh Tien Factory, I discussed the design and production of electrical control cabinets with technical staff and translated schematics into manufactured assemblies. At 3D Bro, I listened to customers across Australia, clarified fault symptoms and explained practical solutions. These experiences taught me to adjust technical detail to the audience while keeping information clear and accurate.",
    evidence: "Control cabinets + customer support",
  },
  {
    code: "3.3",
    title:
      "The ability to engage with a creative, innovative and proactive environment",
    body: "As Hardware Leader for an STM32 fire alarm and evacuation guidance system, I helped transform a safety problem into an integrated embedded solution using a CO gas sensor, ranging sensor and C-based control logic. I contributed to concept development and sensor programming. The project won first prize in UTS's 2025 embedded design competition and the subject was completed with High Distinction.",
    evidence: "First-prize STM32 project",
  },
  {
    code: "3.4",
    title: "Demonstrated ability to use and manage information",
    body: "Troubleshooting 3D printers required me to combine customer descriptions, machine behaviour, component knowledge and test results. I organised this information from general symptoms to subsystems and then to individual components, allowing me to distinguish root causes from secondary effects. I used the resulting evidence to resolve hardware and software issues and improve future machine reliability.",
    evidence: "Structured fault diagnosis",
  },
  {
    code: "3.5",
    title:
      "The ability to manage your own performance in a professional environment",
    body: "During my 3D Bro internship, I took responsibility for developing a detailed understanding of printer mechanics, electronics and software while completing customer work. I applied continuous learning to assembly, parts replacement, fault diagnosis and custom model production. The placement strengthened my ability to assess my own knowledge, investigate unfamiliar issues and deliver work that met professional requirements.",
    evidence: "Professional internship practice",
  },
  {
    code: "3.6",
    title:
      "A demonstrated ability to work as part of a team and to show leadership when required",
    body: "I have held leadership roles in technical projects and as Instrument Team Leader for the Bachkhoa OISP Music Band. I organised meetings and training, allocated people to events and helped deliver events for more than 500 attendees with a 20% profit. In engineering teams, I have served as Hardware, Software and Embedded Leader, taking ownership while keeping my work aligned with the wider system.",
    evidence: "Project and instrument-team leadership",
  },
];

const projects = [
  {
    number: "P-01",
    period: "Feb 2025 — May 2025",
    role: "Hardware Leader",
    title: "Fire Detection & Evacuation System",
    description:
      "STM32-based embedded system using CO gas and ranging sensors to detect a fire hazard and guide an evacuation path in real time.",
    result: "1st Prize · High Distinction",
    tools: ["STM32", "C", "Sensors", "Real-time control"],
    icon: CircuitBoard,
  },
  {
    number: "P-02",
    period: "Aug 2025 — Nov 2025",
    role: "Software Leader",
    title: "Human-Following Robot",
    description:
      "Robot perception and control system using a USB camera and LiDAR to detect and follow a person through a ROS2 software stack.",
    result: ">80% Project Mark · Distinction",
    tools: ["ROS2", "CMake", "LiDAR", "Computer vision"],
    icon: Code2,
  },
  {
    number: "P-03",
    period: "Feb 2026 — Present",
    role: "Embedded Leader",
    title: "Step-Tracker Device",
    description:
      "Portable step tracker using an ESP32 and ADXL335 accelerometer, with dedicated sensor driving, self-test circuitry and a C-based calibration routine.",
    result: "Active development",
    tools: ["ESP32", "ADXL335", "C", "Circuit design"],
    icon: Gauge,
  },
];

const experience = [
  {
    date: "May — Aug 2026",
    role: "3D Printer Technician Intern",
    organisation: "3D Bro Pty Ltd",
    summary:
      "Investigated printer components and operating principles, assembled machines, replaced parts, diagnosed hardware and software issues for customers across Australia, and produced custom 3D models and prints.",
    skills: ["Fault isolation", "Additive manufacturing", "Customer support"],
  },
  {
    date: "Jun — Aug 2024",
    role: "Electrical Engineering Intern",
    organisation: "Dat Vinh Tien Factory",
    summary:
      "Supported electrical control-cabinet projects for a Coca-Cola factory by interpreting and creating schematics, simulating operating principles, wiring assemblies, and completing testing and troubleshooting.",
    skills: ["Electrical schematics", "Cabinet wiring", "Testing"],
  },
  {
    date: "Dec 2022 — Sep 2024",
    role: "Instrument Team Leader",
    organisation: "Bachkhoa OISP Music Band",
    summary:
      "Managed team personnel, organised meetings and training, allocated members to events, and helped deliver events attracting more than 500 attendees and achieving a 20% profit.",
    skills: ["Team leadership", "Training", "Event coordination"],
  },
];

const skillGroups = [
  {
    icon: Code2,
    label: "Programming",
    skills: ["Python", "C", "C++", "MATLAB", "ROS2", "CMake"],
  },
  {
    icon: CircuitBoard,
    label: "Hardware",
    skills: ["MCU", "FPGA", "Sensors", "PCB testing", "Industrial robot arms"],
  },
  {
    icon: Wrench,
    label: "Design & fabrication",
    skills: ["Fusion 360", "AutoCAD", "Altium", "3D printing", "Laser engraving"],
  },
  {
    icon: Users,
    label: "Professional",
    skills: ["Leadership", "Customer support", "Troubleshooting", "Technical communication"],
  },
];

function SectionHeader({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note: string;
}) {
  return (
    <div className="section-header">
      <span className="section-index">{index}</span>
      <h2>{title}</h2>
      <span className="section-note">{note}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Return to top">
          <span className="brand-mark">HL</span>
          <span className="brand-copy">
            <b>Hong Linh Nguyen</b>
            <small>Mechatronics portfolio</small>
          </span>
        </a>
        <nav aria-label="Portfolio sections">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#criteria">Criteria</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="drawing-meta">
            <span>Portfolio / 2026</span>
            <span>UTS Mechatronics</span>
            <span>Rev. 01</span>
          </div>
          <p className="eyebrow">Engineering intelligent systems across hardware + software</p>
          <h1>
            Hong Linh
            <span>“Tony” Nguyen</span>
          </h1>
          <p className="hero-lede">
            Final-year Mechatronics Engineering student combining embedded systems,
            robotics, automation and hands-on manufacturing to build reliable solutions
            for complex real-world problems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore selected work <ArrowDownRight size={17} />
            </a>
            <a
              className="button button-secondary"
              href="/hong-linh-nguyen-resume.pdf"
              download
            >
              Download resume <Download size={16} />
            </a>
          </div>
          <div className="hero-contact" aria-label="Contact information">
            <a href="mailto:tonylinh231104@gmail.com">
              <Mail size={15} /> tonylinh231104@gmail.com
            </a>
            <a href="tel:0402722461">
              <Phone size={15} /> 0402 722 461
            </a>
            <span>
              <MapPin size={15} /> Sydney, NSW
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            <Image
              src="/profile-internship.jpg"
              alt="Hong Linh Nguyen performing maintenance on a 3D printer"
              width={960}
              height={1280}
              priority
            />
            <div className="photo-label photo-label-top">FIELD / ADDITIVE MFG.</div>
            <div className="photo-label photo-label-bottom">3D BRO · 2026</div>
          </div>
          <div className="signal-card">
            <span className="signal-dot" />
            <div>
              <small>Current direction</small>
              <b>Automation & Control</b>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <b>78</b>
            <span>WAM / 100</span>
          </div>
          <div>
            <b>1st</b>
            <span>UTS embedded design</span>
          </div>
          <div>
            <b>3×</b>
            <span>Technical project leader</span>
          </div>
          <div>
            <b>2026</b>
            <span>Expected graduation</span>
          </div>
        </div>
      </section>

      <section className="section section-light" id="about">
        <div className="container">
          <SectionHeader index="01" title="About me" note="Profile / direction" />
          <div className="about-layout">
            <div className="about-intro">
              <p className="large-copy">
                I am fascinated by the point where mechanics, electronics and software
                become one dependable machine.
              </p>
              <p>
                That curiosity led me to Mechatronics Engineering at UTS and continues to
                shape the work I choose: embedded control, mobile robotics, automation and
                technical troubleshooting. I enjoy moving between circuit-level detail and
                the behaviour of the complete system.
              </p>
              <p>
                My internships have given me practical experience with 3D printers,
                electrical control cabinets, equipment maintenance, rapid prototyping and
                customer-facing engineering support. These settings strengthened the method
                I use when a system fails: understand the operating principle, isolate the
                malfunctioning area, then work methodically towards the root cause.
              </p>
            </div>
            <aside className="about-panel">
              <div className="panel-heading">Engineering trajectory</div>
              <dl>
                <div>
                  <dt>Now</dt>
                  <dd>Final-year BE (Hons), Mechatronic, UTS</dd>
                </div>
                <div>
                  <dt>Next</dt>
                  <dd>Automation & Control Engineer</dd>
                </div>
                <div>
                  <dt>Long term</dt>
                  <dd>Technical Specialist in modern rail systems</dd>
                </div>
                <div>
                  <dt>Purpose</dt>
                  <dd>Safer, smarter and more sustainable infrastructure</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="experience">
        <div className="container">
          <SectionHeader index="02" title="Experience" note="Professional practice" />
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-row" key={item.role}>
                <div className="experience-number">0{index + 1}</div>
                <div className="experience-date">{item.date}</div>
                <div className="experience-content">
                  <p className="role-label">{item.organisation}</p>
                  <h3>{item.role}</h3>
                  <p>{item.summary}</p>
                  <div className="tag-row">
                    {item.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper" id="projects">
        <div className="container">
          <SectionHeader index="03" title="Selected projects" note="Systems / outcomes" />
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-topline">
                    <span>{project.number}</span>
                    <Icon size={23} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <p className="project-period">{project.period}</p>
                  <p className="project-role">{project.role}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-result">
                    <Award size={17} /> {project.result}
                  </div>
                  <div className="tag-row tag-row-dark">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-light" id="criteria">
        <div className="container">
          <SectionHeader
            index="04"
            title="Selection criteria"
            note="Industrus Engineering"
          />
          <p className="section-intro">
            Evidence-based responses aligned with Industrus Engineering&apos;s Graduate
            Program, drawn from my internships, technical projects and leadership work.
          </p>
          <div className="criteria-list">
            {criteria.map((criterion) => (
              <article className="criterion" key={criterion.code}>
                <div className="criterion-code">{criterion.code}</div>
                <div>
                  <h3>{criterion.title}</h3>
                  <p>{criterion.body}</p>
                  <span className="evidence-label">
                    Evidence <ArrowDownRight size={14} /> {criterion.evidence}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="skills">
        <div className="container">
          <SectionHeader index="05" title="Technical toolkit" note="Skills / methods" />
          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.label}>
                  <Icon size={24} strokeWidth={1.5} />
                  <h3>{group.label}</h3>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <div className="education-strip">
            <div>
              <span>Education</span>
              <b>Bachelor of Engineering (Honours), Mechatronic</b>
            </div>
            <div>
              <span>Institution</span>
              <b>University of Technology Sydney</b>
            </div>
            <div>
              <span>Academic record</span>
              <b>WAM 78 · GPA 5.4/7</b>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container footer-grid">
          <div>
            <p className="eyebrow">Available for engineering opportunities</p>
            <h2>Let&apos;s build systems that move the world forward.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:tonylinh231104@gmail.com">
              <Mail size={18} />
              <span>
                <small>Email</small>
                tonylinh231104@gmail.com
              </span>
            </a>
            <a href="tel:0402722461">
              <Phone size={18} />
              <span>
                <small>Phone</small>
                0402 722 461
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/hong-linh-nguyen-860471280"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} />
              <span>
                <small>LinkedIn</small>
                Hong Linh Nguyen
              </span>
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Hong Linh Nguyen</span>
          <span>Mechatronics · Robotics · Automation</span>
        </div>
      </footer>
    </main>
  );
}
