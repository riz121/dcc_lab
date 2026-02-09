// ============================================================
// DCC Lab – Distributed & Cloud Computing Laboratory Data
// Hanyang University, Seoul, South Korea
// Prof. Choonhwa Lee (이춘화)
// ============================================================

export const labInfo = {
  name: "Distributed & Cloud Computing Laboratory",
  shortName: "DCC Lab",
  university: "Hanyang University",
  department: "Division of Computer Science and Engineering, College of Engineering",
  address: "Hanyang University, 222 Wangsimni-ro, Seongdong-gu, Seoul 04763, South Korea",
  email: "lee@hanyang.ac.kr",
  phone: "+82-2-2220-1268",
  established: 2005,
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.456!2d127.044!3d37.5575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb43100c07%3A0x82e623c3421e2b68!2sHanyang%20University!5e0!3m2!1sen!2skr!4v1700000000000",
};

// ─── Professor ───────────────────────────────────────────────
export const professor = {
  name: "Prof. Choonhwa Lee",
  nameKorean: "이춘화",
  title: "Professor",
  photo: null, // replace with actual photo path
  department: labInfo.department,
  university: labInfo.university,
  email: "lee@hanyang.ac.kr",
  phone: "+82-2-2220-1268",
  office: "IT/BT Building (H305), Room 721",
  bio: `Professor Choonhwa Lee leads the Distributed & Cloud Computing Laboratory (DCC Lab) at the Division of Computer Science and Engineering, Hanyang University, Seoul. His research spans distributed computing, computer networking, and services computing technology. He has published extensively in top international journals and conferences including IEEE Access, Applied Sciences (MDPI), PLoS ONE, IEICE Transactions, and various IEEE/ACM conference proceedings. His current research focuses on cloud orchestration, blockchain consensus protocols, distributed stream processing, software-defined networking, and microservices architecture.`,
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "University of Florida, USA",
    },
    {
      degree: "M.S. in Computer Science",
      institution: "University of Florida, USA",
    },
    {
      degree: "B.S. in Computer Science & Engineering",
      institution: "Hanyang University, Seoul, South Korea",
    },
  ],
  interests: [
    "Distributed & Cloud Computing",
    "Computer Networking",
    "Services Computing Technology",
    "Blockchain & Consensus Protocols",
    "Distributed Stream Processing",
    "Container Orchestration (Kubernetes)",
    "Software-Defined Networking (SDN)",
    "IoT & Edge Computing",
    "Microservices Architecture",
  ],
  career: [
    "Professor, Division of Computer Science & Engineering, Hanyang University (Present)",
    "Director, Distributed & Cloud Computing Laboratory, Hanyang University",
    "Division of Computer Science and Engineering, College of Engineering, Hanyang University",
  ],
};

// ─── Research Areas ──────────────────────────────────────────
export const researchAreas = [
  {
    id: 1,
    title: "Cloud Computing & Orchestration",
    icon: "cloud",
    description:
      "Designing cost-aware orchestration frameworks for heterogeneous cloud platforms, including TOSCA-based federation-aware orchestration for Kubernetes container platforms and role-based cloud application management.",
    tags: ["Cloud Orchestration", "Kubernetes", "TOSCA", "Multi-Cloud", "Cost Optimization"],
  },
  {
    id: 2,
    title: "Distributed Stream Processing",
    icon: "data",
    description:
      "Developing adaptive and SLA-based schemes for modern distributed stream processing engines, including backpressure mitigation, predictive topology refinements, and benchmarking tools for frameworks like Flink, Storm, and Spark.",
    tags: ["Apache Flink", "Storm", "Spark", "SLA", "Stream Processing", "Backpressure"],
  },
  {
    id: 3,
    title: "Blockchain & Consensus Protocols",
    icon: "distributed",
    description:
      "Researching streamlined Byzantine fault-tolerant consensus protocols for blockchain networks, including Concordia and Flexico dual-mode protocols using threshold BLS signatures and gossip communication patterns.",
    tags: ["BFT Consensus", "Concordia", "Flexico", "Smart Contracts", "Sharding"],
  },
  {
    id: 4,
    title: "Software-Defined Networking (SDN)",
    icon: "edge",
    description:
      "Building SDN-based frameworks for network management including load balancing, flight control in UAV networks, and machine learning-based anomaly prediction services for software-defined networks.",
    tags: ["SDN", "Network Security", "UAV Networks", "Anomaly Detection", "ML-Based"],
  },
  {
    id: 5,
    title: "IoT & Smart Systems",
    icon: "iot",
    description:
      "Developing middleware and platforms for Internet of Things applications including smart homes, smart cities, and healthcare IoT systems with context-aware service composition.",
    tags: ["IoT Middleware", "Smart Home", "Smart City", "Healthcare IoT", "Context-Aware"],
  },
  {
    id: 6,
    title: "Service-Oriented Architecture",
    icon: "ai",
    description:
      "Pioneering research in service composition technologies including OSGi-based cross-domain service composition, blueprint flow declarative frameworks, and peer-to-peer service discovery mechanisms.",
    tags: ["OSGi", "Web Services", "Service Composition", "P2P", "Microservices"],
  },
];

// ─── Publications ────────────────────────────────────────────
export const publications = [
  {
    id: 1,
    type: "journal",
    year: 2024,
    title: "Smart Flow: A Provenance-Supported Smart Contract Workflow Architecture",
    authors: "C. Lee et al.",
    venue: "Cluster Computing, Springer",
  },
  {
    id: 2,
    type: "journal",
    year: 2023,
    title: "An SDN-Based Framework for Load Balancing and Flight Control in UAV Networks",
    authors: "Z. Latif, C. Lee, K. Sharif, F. Li, S. P. Mohanty",
    venue: "IEEE Conference Proceedings",
  },
  {
    id: 3,
    type: "journal",
    year: 2022,
    title: "Flexico: An Efficient Dual-Mode Consensus Protocol for Blockchain Networks",
    authors: "C. Lee et al.",
    venue: "PLoS ONE, PMC 9632903",
  },
  {
    id: 4,
    type: "journal",
    year: 2022,
    title: "A Machine Learning-Based Anomaly Prediction Service for Software-Defined Networks",
    authors: "Z. Latif, Q. Umer, C. Lee, K. Sharif, F. Li, S. Biswas",
    venue: "Sensors, Vol. 22, No. 21, 8434",
  },
  {
    id: 5,
    type: "journal",
    year: 2021,
    title: "MIND: A Multi-Source Data Fusion Scheme for Intrusion Detection in Networks",
    authors: "Z. Latif, C. Lee et al.",
    venue: "Sensors, Vol. 21, No. 14, 4941",
  },
  {
    id: 6,
    type: "journal",
    year: 2021,
    title: "Enabling Role-Based Orchestration for Cloud Applications",
    authors: "C. Lee et al.",
    venue: "Applied Sciences, Vol. 11, No. 14, 6656",
  },
  {
    id: 7,
    type: "journal",
    year: 2021,
    title: "Concordia: A Streamlined Consensus Protocol for Blockchain Networks",
    authors: "C. Lee et al.",
    venue: "ResearchGate / Preprint",
  },
  {
    id: 8,
    type: "journal",
    year: 2020,
    title: "Cost-Aware Orchestration of Applications over Heterogeneous Clouds",
    authors: "K. Alexander, M. Hanif, C. Lee, E. Kim, S. Helal",
    venue: "PLoS ONE, Vol. 15, No. 2, e0228086",
  },
  {
    id: 9,
    type: "journal",
    year: 2020,
    title: "Predictive Topology Refinements in Distributed Stream Processing Systems",
    authors: "C. Lee et al.",
    venue: "PubMed, PMID: 33151974",
  },
  {
    id: 10,
    type: "conference",
    year: 2020,
    title: "A Backpressure Mitigation Scheme in Distributed Stream Processing Engines",
    authors: "M. Hanif, H. Yoon, C. Lee",
    venue: "Proc. 34th International Conference on Information Networking (ICOIN), IEEE",
  },
  {
    id: 11,
    type: "conference",
    year: 2019,
    title: "Predictive Container Auto-Scaling for Cloud-Native Applications",
    authors: "H. Zhao, H. Lim, M. Hanif, C. Lee",
    venue: "Proc. ICTC 2019",
  },
  {
    id: 12,
    type: "journal",
    year: 2019,
    title: "SLA-Based Adaptation Schemes in Distributed Stream Processing Engines",
    authors: "C. Lee et al.",
    venue: "Applied Sciences, Vol. 9, No. 6, 1045",
  },
  {
    id: 13,
    type: "conference",
    year: 2019,
    title: "Benchmarking Tool for Modern Distributed Stream Processing Engines",
    authors: "C. Lee et al.",
    venue: "Proc. 33rd International Conference on Information Networking (ICOIN), IEEE",
  },
  {
    id: 14,
    type: "journal",
    year: 2019,
    title: "TOSCA-Based and Federation-Aware Cloud Orchestration for Kubernetes Container Platform",
    authors: "D. Kim, M. Hanif, E. Kim, S. Helal, C. Lee",
    venue: "Applied Sciences, Vol. 9, No. 1, 191",
  },
  {
    id: 15,
    type: "journal",
    year: 2017,
    title: "Blueprint Flow: A Declarative Service Composition Framework for Cloud Applications",
    authors: "C. Lee, C. Wang, E. Kim, S. Helal",
    venue: "IEEE Access, Vol. 5, pp. 17634–17643",
  },
  {
    id: 16,
    type: "journal",
    year: 2016,
    title: "VM Capacity-Aware Scheduling within Budget Constraints in IaaS Clouds",
    authors: "C. Lee et al.",
    venue: "PLoS ONE, Vol. 11",
  },
  {
    id: 17,
    type: "journal",
    year: 2009,
    title: "Enriching OSGi Service Composition with Web Services",
    authors: "C. Lee, S. Ko, E. Kim, W. Lee",
    venue: "IEICE Transactions on Information and Systems, Vol. E92-D, No. 5, pp. 1177",
  },
  {
    id: 18,
    type: "journal",
    year: 2009,
    title: "Cross-Domain Service Composition in OSGi Environments",
    authors: "C. Lee et al.",
    venue: "IEICE Transactions on Information and Systems, Vol. E92-D, No. 6, pp. 1316",
  },
];

// ─── Members ─────────────────────────────────────────────────
export const members = {
  postdoc: [
    { name: "Dr. Zohaib Latif", topic: "SDN, Network Security, UAV Networks", year: "Postdoc Research Associate" },
  ],
  phd: [
    { name: "Muhammad Hanif", topic: "Cloud Orchestration, Stream Processing, Hadoop MapReduce", year: "Ph.D. (completed Fall 2019)" },
  ],
  ms: [
    { name: "Hyeongdeok Yoon", topic: "Distributed Stream Processing", year: "M.S." },
    { name: "Hanqing Zhao", topic: "Predictive Container Auto-Scaling", year: "M.S. (completed Fall 2019)" },
    { name: "Hyunwoo Lim", topic: "Cloud-Native Applications", year: "M.S. (completed Spring 2019)" },
  ],
  alumni: [
    { name: "Dr. Muhammad Hanif", topic: "Cloud Orchestration, Inter-Cloud Portability", year: "Ph.D.", current: "Researcher" },
    { name: "Kena Alexander", topic: "Cost-Aware Cloud Orchestration", year: "M.S.", current: "Industry" },
    { name: "Hanqing Zhao", topic: "Container Auto-Scaling", year: "M.S. Fall 2019", current: "" },
    { name: "Hyunwoo Lim", topic: "Cloud-Native Applications", year: "M.S. Spring 2019", current: "" },
    { name: "Hyeongdeok Yoon", topic: "Stream Processing Engines", year: "M.S.", current: "" },
    { name: "Dongmin Kim", topic: "Kubernetes Federation & TOSCA", year: "M.S.", current: "" },
  ],
};

// ─── Projects ────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Blockchain Consensus Protocols for Scalable Networks",
    period: "2021 – Present",
    funding: "National Research Foundation of Korea (NRF)",
    status: "active",
    description:
      "Designing efficient Byzantine fault-tolerant consensus protocols (Concordia, Flexico) for sharded blockchain networks using threshold signatures and gossip communication.",
  },
  {
    id: 2,
    title: "SDN-Based Intelligent Network Management",
    period: "2021 – Present",
    funding: "National Research Foundation of Korea (NRF)",
    status: "active",
    description:
      "Developing machine learning-based anomaly prediction services and load balancing frameworks for software-defined networks and UAV network environments.",
  },
  {
    id: 3,
    title: "Cost-Aware Cloud Application Orchestration",
    period: "2017 – 2020",
    funding: "National Research Foundation of Korea (NRF)",
    status: "completed",
    description:
      "Developed cost-aware orchestration mechanisms for deploying applications across heterogeneous cloud platforms, with TOSCA-based federation-aware Kubernetes orchestration.",
  },
  {
    id: 4,
    title: "Adaptive Distributed Stream Processing Systems",
    period: "2018 – 2020",
    funding: "Hanyang University Research Fund",
    status: "completed",
    description:
      "Built SLA-based adaptation schemes, backpressure mitigation mechanisms, and benchmarking tools for modern distributed stream processing engines including Flink, Storm, and Spark.",
  },
  {
    id: 5,
    title: "Smart Healthcare Stream Processing",
    period: "2019 – 2021",
    funding: "Ministry of Science and ICT (MSIT)",
    status: "completed",
    description:
      "Adapted distributed stream processing technologies for the automation of modern healthcare systems, enabling real-time patient data analysis.",
  },
  {
    id: 6,
    title: "Role-Based Cloud Orchestration Platform",
    period: "2020 – 2021",
    funding: "Industry Collaboration",
    status: "completed",
    description:
      "Enabled role-based orchestration for cloud applications, addressing challenges in managing complex multi-component applications across heterogeneous cloud platforms.",
  },
];

// ─── News / Notices ──────────────────────────────────────────
export const news = [
  {
    id: 1,
    date: "2024-06-01",
    category: "Publication",
    title: "Smart Flow Paper Published in Cluster Computing",
    content:
      "Our paper on provenance-supported smart contract workflow architecture has been published in Cluster Computing (Springer).",
  },
  {
    id: 2,
    date: "2023-09-15",
    category: "Publication",
    title: "SDN-Based UAV Network Framework Published",
    content:
      "Dr. Zohaib Latif and Prof. Lee published a paper on SDN-based load balancing and flight control frameworks for UAV networks.",
  },
  {
    id: 3,
    date: "2022-11-01",
    category: "Publication",
    title: "Flexico Consensus Protocol Published in PLoS ONE",
    content:
      "Our paper on Flexico, an efficient dual-mode consensus protocol for blockchain networks, has been published in PLoS ONE.",
  },
  {
    id: 4,
    date: "2022-10-28",
    category: "Publication",
    title: "ML-Based Anomaly Prediction for SDN Published",
    content:
      "Paper on machine learning-based anomaly prediction service for software-defined networks published in Sensors journal.",
  },
  {
    id: 5,
    date: "2021-07-20",
    category: "Publication",
    title: "MIND Intrusion Detection Paper Published",
    content:
      "Our multi-source data fusion scheme for network intrusion detection (MIND) has been published in Sensors journal.",
  },
  {
    id: 6,
    date: "2020-02-18",
    category: "Publication",
    title: "Cost-Aware Cloud Orchestration Paper in PLoS ONE",
    content:
      "Paper on cost-aware orchestration of applications over heterogeneous clouds published in PLoS ONE, co-authored with Lancaster University.",
  },
  {
    id: 7,
    date: "2020-01-10",
    category: "Conference",
    title: "DCC Lab Presents at ICOIN 2020",
    content:
      "Muhammad Hanif presented our backpressure mitigation scheme for distributed stream processing engines at the 34th ICOIN conference.",
  },
  {
    id: 8,
    date: "2019-01-15",
    category: "Publication",
    title: "Kubernetes Federation Paper Published in Applied Sciences",
    content:
      "Our TOSCA-based federation-aware cloud orchestration paper for Kubernetes container platform has been published in Applied Sciences (MDPI).",
  },
];

// ─── Gallery ─────────────────────────────────────────────────
export const gallery = [
  { id: 1, title: "Lab Group Photo 2024", category: "Lab Life" },
  { id: 2, title: "ICOIN 2020 Conference", category: "Conference" },
  { id: 3, title: "Lab Seminar", category: "Seminar" },
  { id: 4, title: "Research Meeting", category: "Research" },
  { id: 5, title: "Lab Dinner", category: "Lab Life" },
  { id: 6, title: "Collaboration with Lancaster University", category: "Research" },
  { id: 7, title: "New Student Welcome", category: "Lab Life" },
  { id: 8, title: "Hanyang University Campus", category: "Lab Life" },
  { id: 9, title: "Workshop on Cloud Computing", category: "Seminar" },
];
