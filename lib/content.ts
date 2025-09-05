export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  readTime: string;
  coverImage: string;
  tags: string[];      // topical tags such as "Data Viz", "SaaS"
  category: string;    // display category such as "Product Design"
  problem: string;
  approach: string;
  outcome: string;
  results: string[];
  client?: string;     // optional, used in meta row
  years?: string;      // optional, used in meta row e.g. "2023 - 2024"
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Analytics Dashboard',
    subtitle: 'Transforming complex financial data into actionable insights for investment professionals',
    readTime: '8 min read',
    coverImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['UX Design', 'Data Viz'],
    category: 'Product Design',
    client: 'Alpha Capital',
    years: '2023 - 2024',
    problem:
      'Investment professionals were struggling to make sense of vast amounts of financial data scattered across multiple platforms, leading to delayed decisions and missed opportunities.',
    approach:
      'Conducted user research with 15 plus portfolio managers, created an information architecture that emphasized data hierarchy, and designed a dashboard with real-time visualizations and clear alerting.',
    outcome:
      'Reduced decision making time by 40 percent and improved user satisfaction scores from 3.2 to 4.7 out of 5.',
    results: [
      '40 percent reduction in decision making time',
      '4.7 out of 5 user satisfaction score',
      '60 percent increase in daily active users',
      '25 percent improvement in portfolio performance tracking',
    ],
  },
  {
    id: 'healthcare-mobile',
    title: 'Healthcare Mobile App',
    subtitle: 'Connecting patients with care providers through an intuitive mobile experience',
    readTime: '6 min read',
    coverImage: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Mobile Design', 'Healthcare'],
    category: 'Mobile App',
    client: 'CareLink',
    years: '2022 - 2023',
    problem:
      'Patients faced barriers accessing healthcare services. Long wait times and complex booking flows reduced access to care.',
    approach:
      'Designed a mobile first solution with simplified appointment booking, integrated telemedicine, and accessible patterns for a wide range of users.',
    outcome:
      'Increased appointment bookings by 75 percent and reduced no show rates by 30 percent through a clearer flow and better guidance.',
    results: [
      '75 percent increase in appointment bookings',
      '30 percent reduction in no show rates',
      '4.8 out of 5 app store rating',
      '200k plus active monthly users',
    ],
  },
  {
    id: 'ecommerce-redesign',
    title: 'E-commerce Platform Redesign',
    subtitle: 'Modernizing an online marketplace to boost conversion and user engagement',
    readTime: '10 min read',
    coverImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['E-commerce', 'Conversion'],
    category: 'Web Design',
    client: 'MarketSquare',
    years: '2021 - 2022',
    problem:
      'An established marketplace showed declining conversion and high cart abandonment due to an outdated interface and a complex checkout.',
    approach:
      'Ran a full UX audit, simplified the checkout, added progressive disclosure, and redesigned discovery with better filtering and relevance.',
    outcome:
      'Achieved a 35 percent increase in conversion and a 50 percent drop in cart abandonment within three months.',
    results: [
      '35 percent increase in conversion rates',
      '50 percent reduction in cart abandonment',
      '2.5x improvement in search success rate',
      '$2.4M additional quarterly revenue',
    ],
  },
  {
    id: 'saas-onboarding',
    title: 'SaaS Onboarding Experience',
    subtitle: 'Designing a seamless first time experience for a B2B platform',
    readTime: '7 min read',
    coverImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['SaaS', 'Onboarding'],
    category: 'Product Design',
    client: 'FlowWorks',
    years: '2023',
    problem:
      'New users struggled to understand value during trials which led to churn and low feature adoption.',
    approach:
      'Redesigned onboarding with progressive steps, interactive tutorials, and contextual help. Built a first run that showcases the core value quickly.',
    outcome:
      'Reduced time to value from two weeks to three days and increased trial to paid conversion by 45 percent.',
    results: [
      '45 percent increase in trial to paid conversion',
      '85 percent reduction in time to first value',
      '3x increase in feature adoption',
      '60 percent decrease in support tickets',
    ],
  },
];

export const skills = [
  'Product Design',
  'User Experience',
  'Interface Design',
  'Design Systems',
  'User Research',
  'Prototyping',
  'Frontend Development',
  'Data Visualization',
];

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Senior Product Designer',
    company: 'TechCorp',
    description: 'Leading design for next generation fintech products.',
  },
  {
    year: '2022',
    title: 'Product Designer',
    company: 'StartupXYZ',
    description: 'Designed core experiences for a healthcare platform.',
  },
  {
    year: '2020',
    title: 'UX Designer',
    company: 'DesignAgency',
    description: 'Client work across e-commerce and SaaS projects.',
  },
  {
    year: '2019',
    title: 'Junior Designer',
    company: 'FirstJob Inc',
    description: 'Started career in product design and user research.',
  },
];