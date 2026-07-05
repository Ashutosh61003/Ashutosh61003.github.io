import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import GlassBlogCard from '../components/ui/GlassBlogCard';
import './Projects.css';

const projectImages = [
    {
        src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=90',
        title: 'Parkinsons Detection',
        category: 'Biomedical ML',
        timeline: 'Apr 2026',
        description: 'Leakage-free, explainable voice-based Parkinsons detection framework.',
        role: 'Machine learning, validation design, explainability, and biomedical AI experimentation',
        links: [
            { label: 'Project report', href: '/files/parkinsons-disease-report.pdf' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Built a voice-based biomedical ML framework focused on preventing data leakage while improving transparency for clinical-style model interpretation.',
        approach: [
            'Used GroupKFold validation to reduce leakage risk across voice-based biomedical samples.',
            'Applied TVAE synthesis, Honest SMOTE, and L1-SVM feature selection to strengthen the modeling pipeline.',
            'Built XGBoost, LightGBM, and CatBoost ensemble workflows for classification experiments.',
            'Used SHAP explainability to make model behavior more transparent.'
        ],
        outcomes: [
            'Leakage-aware validation',
            'Explainable predictions',
            'Biomedical ML pipeline',
            'Clinical transparency focus'
        ],
        metrics: ['GroupKFold', 'SHAP', 'XGBoost', 'LightGBM', 'CatBoost'],
        nextSteps: [
            'Package the pipeline into a reproducible experiment notebook.',
            'Add model cards and validation summaries.',
            'Compare performance across additional voice datasets.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=90',
        title: 'Rainbow Coloring',
        category: 'Graph algorithms',
        timeline: 'Nov 2025',
        description: 'Fuzzy logic and rainbow coloring algorithm project across graph families.',
        role: 'Algorithm design, graph traversal, optimization, and implementation',
        links: [
            { label: 'Project report', href: '/files/fuzzy-rainbow-coloring.pdf' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Co-led a graph algorithm project combining fuzzy logic with rainbow coloring across multiple graph structures.',
        approach: [
            'Implemented alpha-cut graph construction for fuzzy graph analysis.',
            'Built BFS and DFS checks for graph traversal and validation.',
            'Developed spanning-tree coloring and greedy optimization logic.',
            'Tested across line, tree, star, cyclic, wheel, bipartite, and complete graphs.'
        ],
        outcomes: [
            'Fuzzy graph workflow',
            'Rainbow coloring logic',
            'Traversal validation',
            'Multi-graph testing'
        ],
        metrics: ['BFS', 'DFS', 'Alpha-cut graphs', 'Greedy optimization'],
        nextSteps: [
            'Add visual graph examples for each supported graph family.',
            'Benchmark coloring quality across larger graph sizes.',
            'Publish the implementation notes as a technical write-up.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=90',
        title: 'SCOPE',
        category: 'iOS solar estimator',
        timeline: 'Aug 2025',
        description: 'SwiftUI app estimating solar output from roof, location, and weather data.',
        role: 'iOS development, Core ML integration, data flows, and product experience design',
        links: [
            { label: 'GitHub', href: 'https://github.com/AshutoshSri123/SCOPE' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Developed a Solar Capacity Output Potential Estimator for predicting solar generation from user location, roof area, and weather inputs.',
        approach: [
            'Built the iOS experience in SwiftUI using MVVM architecture, maps, and onboarding.',
            'Used Core Location and WeatherKit with REST data to collect contextual inputs.',
            'Integrated Core ML regression for solar generation estimation.',
            'Designed the app around location, roof-area inputs, weather context, and prediction output.'
        ],
        outcomes: [
            'SwiftUI iOS app',
            'Core ML regression',
            'Weather-aware estimate',
            'Map-based experience'
        ],
        metrics: ['Less than 5% prediction error', 'Core ML', 'WeatherKit', 'REST data'],
        nextSteps: [
            'Add richer roof-shape and shadow inputs.',
            'Show monthly and annual generation estimates.',
            'Add exportable reports for homeowners.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
        title: 'E-commerce Analytics',
        category: 'Data analysis system',
        timeline: 'Sep 2025',
        description: 'Python and SQL analytics pipeline for revenue, segmentation, and visualization.',
        role: 'Data modeling, SQL analysis, ETL, visualization, and notebook reporting',
        links: [
            { label: 'GitHub', href: 'https://github.com/AshutoshSri123/SQL_Python_EcommerceProject' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Created an analytics system for e-commerce data covering ingestion, relational modeling, querying, segmentation, and revenue analysis.',
        approach: [
            'Built CSV ETL flows to move raw data into an analysis-ready structure.',
            'Designed relational schema and complex SQL queries for business analysis.',
            'Created segmentation, revenue analysis, and visualizations.',
            'Documented analysis workflows in Jupyter notebooks.'
        ],
        outcomes: [
            'Python SQL pipeline',
            'Revenue analysis',
            'Customer segmentation',
            'Notebook reporting'
        ],
        metrics: ['More than 99% successful execution', 'CSV ETL', 'SQL', 'Jupyter'],
        nextSteps: [
            'Add a lightweight dashboard layer.',
            'Automate recurring analysis runs.',
            'Expand segmentation with cohort and retention views.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=90',
        title: 'Dash Scorecard',
        category: 'iOS cricket app',
        timeline: 'Jul 2025',
        description: 'SwiftUI scorekeeping app with ball-by-ball tracking and final scorecards.',
        role: 'SwiftUI development, state management, OOP game logic, and sports product flow',
        links: [
            { label: 'GitHub', href: 'https://github.com/AshutoshSri123/DASH-Cricket-App' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Built a cricket scorekeeping app for dynamic teams, innings management, ball-by-ball tracking, and final scorecards.',
        approach: [
            'Implemented the app in Swift and SwiftUI.',
            'Designed ball-by-ball tracking, team setup, innings flow, and final scorecard states.',
            'Used OOP game logic and state management to keep score updates consistent.',
            'Focused on fast in-match scoring accuracy and clear score summaries.'
        ],
        outcomes: [
            'SwiftUI scorekeeper',
            'Dynamic teams',
            'Innings management',
            'Final scorecards'
        ],
        metrics: ['More than 95% score-tracking accuracy', 'Swift', 'SwiftUI', 'OOP logic'],
        nextSteps: [
            'Add match history and saved scorecards.',
            'Support more match formats and scoring rules.',
            'Add shareable match summaries.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=90',
        title: 'Infant Cry Classifier',
        category: 'Deep learning',
        timeline: 'Nov 2024',
        description: 'Deep learning system classifying infant cries into five categories.',
        role: 'Deep learning experimentation, audio preprocessing, model comparison, and reporting',
        links: [
            { label: 'GitHub', href: 'https://github.com/AshutoshSri123/CrySense' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Classified infant cries into five categories using audio preprocessing and multiple deep learning approaches.',
        approach: [
            'Used the Donate A Cry Corpus for infant cry classification experiments.',
            'Built ResNet-50 spectrogram workflows and YAMNet embedding experiments.',
            'Used MFCC neural networks with Librosa preprocessing.',
            'Trained with Adam optimization using TensorFlow and Keras.'
        ],
        outcomes: [
            'Audio classification',
            'Spectrogram modeling',
            'MFCC pipeline',
            'Deep learning report'
        ],
        metrics: ['More than 81% accuracy', 'ResNet-50', 'YAMNet', 'TensorFlow/Keras'],
        nextSteps: [
            'Improve dataset balance and validation reporting.',
            'Add model explainability for audio features.',
            'Package the experiments into a reproducible notebook.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90',
        title: 'LMS',
        category: 'Flurn learning platform',
        timeline: 'Flurn internship',
        description: 'Learning management system for classes, learners, content, and program operations.',
        role: 'Product discovery, PRD writing, workflow mapping, and cross-functional execution at Flurn',
        problem: 'Worked on a learning management system to help Flurn organize learning programs, content flows, learner progress, and teacher operations in one product surface.',
        approach: [
            'Mapped core LMS workflows across students, teachers, content teams, and program managers.',
            'Defined product requirements for class management, content access, and operational visibility.',
            'Translated teacher and operations needs into user flows and wireframe-level product decisions.',
            'Partnered across design and engineering to clarify scope, edge states, and release priorities.'
        ],
        outcomes: [
            'Class workflow clarity',
            'Centralized learning operations',
            'Teacher-facing flows',
            'Program visibility'
        ],
        metrics: ['Flurn', 'LMS', 'PRDs', 'User flows'],
        nextSteps: [
            'Add cohort-level dashboards and attendance signals.',
            'Improve content discovery for teachers and learners.',
            'Connect progress insights with parent and operations views.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
        title: 'Progress Tracker',
        category: 'Flurn analytics',
        timeline: 'Flurn internship',
        description: 'Progress tracking product for learner outcomes, completion, and engagement visibility.',
        role: 'Metrics definition, dashboard thinking, user flows, and product requirement writing at Flurn',
        problem: 'Created product thinking for tracking learner progress so teachers and operations teams could understand completion, engagement, and learning movement over time.',
        approach: [
            'Defined the key progress states teachers and program teams needed to monitor.',
            'Mapped how completion, attendance, engagement, and learner milestones could be surfaced.',
            'Created wireframe-level flows for reviewing individual and cohort-level progress.',
            'Connected progress visibility to retention, engagement, and intervention decisions.'
        ],
        outcomes: [
            'Learner progress visibility',
            'Teacher review flows',
            'Cohort-level signals',
            'Intervention support'
        ],
        metrics: ['Completion', 'Engagement', 'Retention', 'Progress states'],
        nextSteps: [
            'Add trend comparisons across learners and cohorts.',
            'Introduce alerts for stalled learner progress.',
            'Connect insights to teacher action recommendations.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=90',
        title: 'Post Login UX',
        category: 'Flurn activation',
        timeline: 'Flurn internship',
        description: 'Post-login experience redesign for clearer next steps and better user activation.',
        role: 'UX audit, activation flow design, wireframing, and product prioritization at Flurn',
        problem: 'Worked on the post-login experience to reduce ambiguity after sign-in and help users quickly understand the next best action inside the product.',
        approach: [
            'Audited the first moments after login across teacher and learner workflows.',
            'Identified missing context, unclear navigation, and friction in next-step discovery.',
            'Designed clearer post-login states around pending actions, classes, content, and progress.',
            'Prioritized UX improvements based on activation impact and implementation effort.'
        ],
        outcomes: [
            'Clearer first action',
            'Reduced navigation ambiguity',
            'Activation-focused UX',
            'Role-aware states'
        ],
        metrics: ['Activation', 'Onboarding', 'Role-based UX', 'Impact-effort'],
        nextSteps: [
            'Measure time to first meaningful action.',
            'Add personalized post-login modules.',
            'Test alternate layouts for teachers and learners.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=90',
        title: 'Teacher Trainer',
        category: 'Flurn teacher enablement',
        timeline: 'Flurn internship',
        description: 'Teacher training product to support onboarding, practice, and continuous enablement.',
        role: 'Product scoping, teacher workflow discovery, PRD writing, and enablement experience design at Flurn',
        problem: 'Designed product direction for a teacher trainer experience that could help teachers onboard, understand Flurn workflows, and improve delivery quality.',
        approach: [
            'Mapped teacher onboarding needs and recurring training moments.',
            'Structured training flows around tasks, content, practice, and feedback.',
            'Defined product requirements for teacher learning modules and completion signals.',
            'Considered how training progress could connect with teacher support and quality reviews.'
        ],
        outcomes: [
            'Teacher onboarding flow',
            'Training module structure',
            'Completion tracking',
            'Quality support loop'
        ],
        metrics: ['Teacher onboarding', 'Training progress', 'Completion', 'Enablement'],
        nextSteps: [
            'Add certification milestones for teacher readiness.',
            'Connect training outcomes to live classroom feedback.',
            'Build manager views for training completion.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=90',
        title: 'Music Learning Platform',
        category: 'Flurn interactive learning',
        timeline: 'Flurn internship',
        description: 'Interactive music learning concept for guided practice, engagement, and progress.',
        role: 'Learning experience design, interaction mapping, product discovery, and PRD support at Flurn',
        problem: 'Worked on an interactive music learning platform concept to make practice more engaging, structured, and measurable for learners and teachers.',
        approach: [
            'Mapped learner practice journeys across lesson discovery, guided practice, and feedback.',
            'Explored interaction patterns for making music learning feel active rather than passive.',
            'Defined progress and engagement signals for learners, teachers, and program teams.',
            'Framed product requirements around practice loops, content structure, and learner motivation.'
        ],
        outcomes: [
            'Interactive practice flow',
            'Learner engagement loop',
            'Teacher visibility',
            'Progress signals'
        ],
        metrics: ['Practice completion', 'Engagement', 'Lesson progress', 'Feedback loops'],
        nextSteps: [
            'Prototype practice interactions for common lesson formats.',
            'Add teacher review tools for learner submissions.',
            'Test engagement loops with early learners.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90',
        title: 'Teacher Evaluation',
        category: 'Flurn performance system',
        timeline: 'Flurn internship',
        description: 'Teacher evaluation system for performance analytics, feedback, and quality tracking.',
        role: 'Product discovery, analytics framing, teacher research, and metrics definition at Flurn',
        problem: 'Worked on teacher evaluation and analytics to help teams understand teaching quality, performance signals, and support needs.',
        approach: [
            'Defined teacher performance signals across engagement, delivery, feedback, and learner outcomes.',
            'Used discovery inputs from teacher and student workflows to frame evaluation needs.',
            'Mapped dashboard and review flows for performance analytics.',
            'Connected evaluation metrics to support, training, and operational quality decisions.'
        ],
        outcomes: [
            'Teacher analytics framing',
            'Performance review flow',
            'Support signals',
            'Quality tracking'
        ],
        metrics: ['Teacher analytics', 'Engagement', 'NPS', 'Performance signals'],
        nextSteps: [
            'Add rubric-based evaluation views.',
            'Connect performance insights to teacher training modules.',
            'Build historical trends for quality improvement.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=90',
        title: 'Fire Response Vehicle',
        category: 'Embedded robotics',
        timeline: 'Mar 2025',
        description: 'Autonomous vehicle for rapid fire detection, navigation, and targeted suppression.',
        role: 'Embedded systems, sensor integration, navigation logic, and hardware prototyping',
        problem: 'Built an autonomous fire extinguisher vehicle to detect flames, navigate hazardous spaces, and reduce the need for direct human intervention in industrial or remote firefighting scenarios.',
        approach: [
            'Used IR and UV sensors for precise flame detection in hazardous environments.',
            'Integrated ultrasonic sensors for obstacle avoidance while navigating toward fire sources.',
            'Developed a targeted suppression system using a power water pump and controlled nozzle.',
            'Built the embedded control flow with Arduino and Embedded C/C++.'
        ],
        outcomes: [
            'Autonomous flame detection',
            'Obstacle-aware navigation',
            'Targeted water spraying',
            'Reduced human exposure'
        ],
        metrics: ['Arduino', 'Embedded C/C++', 'IR and UV sensors', 'Ultrasonic sensors', 'DC motors'],
        nextSteps: [
            'Add stronger localization for larger indoor spaces.',
            'Improve suppression targeting with nozzle calibration.',
            'Test ruggedized enclosure designs for field use.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=90',
        title: 'AIChatGemma',
        category: 'iOS AI chatbot',
        timeline: 'Aug 2025',
        description: 'Gemma3-based iOS chatbot with local AI responses and secure authentication.',
        role: 'iOS development, AI integration, authentication, and MVVM architecture',
        problem: 'Built an iOS AI chatbot app that runs Gemma3 locally through Ollama to answer user queries with privacy-conscious, on-device style processing.',
        approach: [
            'Integrated Gemma3 locally through Ollama for intelligent query responses.',
            'Implemented Google Sign-In and Firebase Authentication for secure login.',
            'Structured the app with SwiftUI and Swift using separated authentication, chat, and AI logic.',
            'Used MVVM and REST APIs to keep interaction flows clean and maintainable.'
        ],
        outcomes: [
            'Local AI chatbot',
            'Secure login',
            'SwiftUI chat flow',
            'Modular app architecture'
        ],
        metrics: ['Swift', 'SwiftUI', 'Firebase', 'Google Sign-In', 'Ollama Gemma3'],
        nextSteps: [
            'Add chat history and context memory controls.',
            'Improve streaming responses and error states.',
            'Add model settings for response style and privacy preferences.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=90',
        title: 'CherryChat',
        category: 'AI web companion',
        timeline: 'Pitch deck product',
        description: 'Universal AI and community chat overlay for websites.',
        role: 'Founder-led product strategy, product development, growth planning, and business model design',
        links: [
            { label: 'Project report', href: '/files/cherrychat-pitchdeck.pdf' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Website visitors often lack clarity, peer support, and timely help, while website owners lack real-time insight into user pain points and repeated questions.',
        approach: [
            'Designed a universal website chat overlay that combines peer discussion with AI-powered answers.',
            'Defined workflows where the AI scans website content and answers user questions instantly.',
            'Planned flagged queries, chat analytics, sentiment insights, and feedback forwarding for website owners.',
            'Built a freemium and subscription model with analytics, AI customization, branding, and advertising options.'
        ],
        outcomes: [
            'AI website assistant',
            'Real-time visitor discussion',
            'Owner feedback loop',
            'Analytics-ready product model'
        ],
        metrics: ['10,000 year-one free users target', '10% paid conversion target', 'Website overlay', 'Chat analytics'],
        nextSteps: [
            'Ship browser extension and website script integration.',
            'Add multilingual AI support.',
            'Build owner dashboards for trends, flagged queries, and sentiment.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=90',
        title: 'Guess The Cricketer',
        category: 'Cricket product game',
        timeline: 'Product report',
        description: 'guessthecricketer.com product concept for a cricket guessing game experience.',
        role: 'Product requirement writing, game-loop design, UX framing, and launch planning',
        links: [
            { label: 'Project report', href: '/files/guess-the-cricketer-product-report.pdf' },
            { label: 'Live site', href: 'https://guessthecricketer.com' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Cricket fans need a lightweight, repeatable game experience that turns player knowledge into a quick challenge they can play, share, and revisit.',
        approach: [
            'Defined the core guessing loop around clue reveal, attempts, feedback, and completion states.',
            'Mapped user flows for first play, repeat play, result sharing, and content refresh.',
            'Framed product requirements around simple onboarding, fast rounds, mobile-first interaction, and retention hooks.',
            'Outlined launch priorities for content quality, daily challenges, and social distribution.'
        ],
        outcomes: [
            'Cricket guessing loop',
            'Mobile-first game UX',
            'Shareable results',
            'PRD-backed product scope'
        ],
        metrics: ['Completion rate', 'Repeat plays', 'Share rate', 'Daily active users'],
        nextSteps: [
            'Add daily challenge streaks and leaderboards.',
            'Improve clue difficulty balancing across player eras and formats.',
            'Track funnel drop-offs from first clue to completed guess.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=90',
        title: 'Police Asset Watch',
        category: 'Inventory management',
        timeline: 'Product concept',
        description: 'Centralized hardware inventory system for asset tracking, maintenance, and reporting.',
        role: 'Product architecture, workflow mapping, system design, and technical planning',
        problem: 'Designed a centralized inventory management product to address inaccurate records, inefficient allocation, lifecycle gaps, compliance risk, and cost leakage in hardware-heavy departments.',
        approach: [
            'Mapped role-specific workflows for admins and regular users across asset registration, allocation, requests, approvals, maintenance, and reporting.',
            'Planned predictive maintenance, automated storage updates, barcode/RFID tracking, and analytics dashboards.',
            'Designed a web stack with React, Node/Express, JWT, MongoDB, WebSocket, Chart.js/D3, Google Maps, and scanner APIs.',
            'Framed security, compliance, auditing, and integration needs for existing department systems.'
        ],
        outcomes: [
            'Centralized asset registry',
            'Role-specific workflows',
            'Maintenance scheduling',
            'Inventory analytics'
        ],
        metrics: ['React', 'Node.js', 'MongoDB', 'Barcode/RFID', 'JWT'],
        nextSteps: [
            'Add mobile scanning flows for field inventory updates.',
            'Build predictive maintenance scoring.',
            'Create compliance reports and disaster recovery asset views.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=90',
        title: 'Provider Data Validation',
        category: 'Agentic healthcare AI',
        timeline: 'Product concept',
        description: 'Agentic AI system for validating and enriching healthcare provider directories.',
        role: 'AI system design, data validation strategy, workflow design, and KPI planning',
        links: [
            { label: 'Project report', href: '/files/provider-data-validation.pdf' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Healthcare payer directories often contain inaccurate provider addresses, phone numbers, credentials, and inconsistent records across web, app, and print surfaces.',
        approach: [
            'Designed a master-agent workflow that schedules and monitors provider validation cycles.',
            'Planned worker agents for web scraping, API cross-checks, enrichment from public registries, QA scoring, fraud flagging, and directory updates.',
            'Used public web sources, NPI Registry APIs, medical board sites, and Google Maps API as validation inputs.',
            'Framed dashboards and prioritized review queues for manual checks.'
        ],
        outcomes: [
            'Automated provider validation',
            'Data enrichment agents',
            'Quality scoring',
            'Review queue workflows'
        ],
        metrics: ['80%+ validation target', '85%+ extraction target', '500+ validations/hour', '70% workload reduction target'],
        nextSteps: [
            'Build a self-service provider update portal.',
            'Add management analytics and quality trend dashboards.',
            'Integrate regional healthcare data exchanges.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=90',
        title: 'CricAbode',
        category: 'Cricket fan platform',
        timeline: 'Pitch deck product',
        description: 'Interactive cricket fan platform for predictions, simulations, polls, and real-time chat.',
        role: 'Product strategy, market positioning, fan workflow design, metrics, and roadmap planning',
        links: [
            { label: 'Project report', href: '/files/cricabode.pdf' },
            { label: 'Live site', href: 'https://cricabode.vercel.app/' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Cricket fans jump between score apps, fantasy apps, social media, polls, and group chats because there is no dedicated place for live predictions, simulations, and fan discussion together.',
        approach: [
            'Designed a platform with live points tables, match schedules, what-if simulator, playoff odds, prediction polls, team servers, private DMs, and profiles.',
            'Defined target users as active IPL fans who debate in WhatsApp groups, social platforms, and score apps.',
            'Created competitive positioning against Cricbuzz, Reddit, Discord, fantasy apps, and ESPN Cricinfo.',
            'Planned growth through cricket groups, fan pages, university hubs, creator partnerships, simulation scenarios, and programmatic SEO.'
        ],
        outcomes: [
            'Live fan community',
            'Playoff simulations',
            'Prediction polls',
            'Team servers'
        ],
        metrics: ['First 1,000 users plan', 'DAU', 'Poll votes', 'Simulations', 'Retention'],
        nextSteps: [
            'Add leaderboards, prediction streaks, and match reminders.',
            'Launch share cards and creator communities.',
            'Expand from IPL to year-round cricket.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=90',
        title: 'RailOne Super Route',
        category: 'AI travel planner',
        timeline: 'Product concept',
        description: 'AI-powered multimodal journey planner and auto-booking system.',
        role: 'Product strategy, AI agent flow design, decision scoring, and growth impact modeling',
        links: [
            { label: 'Project report', href: '/files/rail-one-app.pdf' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'When direct trains are unavailable or waitlisted, travelers often leave the rail app to manually compare buses, flights, connecting trains, and backup routes.',
        approach: [
            'Designed a Super-Route Agent that asks users four preference questions around time, budget, savings, and assured travel.',
            'Planned AI route discovery across direct trains, connecting trains, split journeys, train-bus combos, local transport, and waitlist backups.',
            'Defined a decision engine that scores route options and returns the top three recommendations with full breakdowns.',
            'Outlined an auto-booking agent that books each selected leg one by one.'
        ],
        outcomes: [
            'Multimodal route discovery',
            'Preference-based scoring',
            'Top route recommendations',
            'Auto-booking flow'
        ],
        metrics: ['+5-8% completed booking uplift', '+10-12% return-user growth', '3,000 extra multi-leg trips/month', 'Rs 30-60K monthly revenue potential'],
        nextSteps: [
            'Prototype scoring for route reliability, cost, and time.',
            'Add failure handling for partially unavailable legs.',
            'Build trust copy for why each route is recommended.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=90',
        title: 'Krishi Vyapaar',
        category: 'Agri marketplace',
        timeline: 'Product concept',
        description: 'Direct farmer-to-buyer marketplace with negotiation, matching, and multilingual support.',
        role: 'Product design, mobile app architecture, marketplace workflow design, and feature planning',
        links: [
            { label: 'Project report', href: '/files/krishi-vyapaar.pdf' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Farmers face dependency on middlemen, limited market access, price fluctuations, low bargaining power, and lack of digital tools for direct buyer access.',
        approach: [
            'Designed direct farmer-to-buyer flows with transparent pricing, fair payments, and real-time inventory management.',
            'Planned price negotiation, KisanConnect, geo-based buyer-farmer matching, ratings, feedback, and multilingual support.',
            'Mapped use cases for searching products, managing inventory, accepting negotiations, viewing orders, and chatting.',
            'Planned a Kotlin Jetpack Compose and Firebase architecture with Firestore, Realtime Database, Auth, Cloud Messaging, Functions, and scikit-learn.'
        ],
        outcomes: [
            'Direct market access',
            'Geo-based matching',
            'Negotiation flows',
            'Farmer digital tools'
        ],
        metrics: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Firestore', 'scikit-learn'],
        nextSteps: [
            'Add logistics partner integrations.',
            'Build farmer education and onboarding flows.',
            'Add quality assurance and dispute handling mechanisms.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=90',
        title: 'Wanderlust',
        category: 'Travel planning platform',
        timeline: 'Aug 2024',
        description: 'All-in-one travel accommodation and planning platform inspired by modern booking products.',
        role: 'Full-stack product planning, system modeling, travel UX, and web application architecture',
        links: [
            { label: 'Project report', href: '/files/wanderlust.pdf' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Travel planning is fragmented across hotel search, itinerary planning, maps, transport details, attractions, and support channels, making trip planning slow and frustrating.',
        approach: [
            'Designed a platform for discovering and booking unique stays with travel convenience data.',
            'Planned map API integration for interactive maps, location search, distances, routes, and nearby attractions.',
            'Added virtual tours, AI-powered chatbot support, dynamic pricing, and personalized recommendations.',
            'Modeled the system with UML, DFD, ER diagrams, and backend/frontend requirements.'
        ],
        outcomes: [
            'Accommodation discovery',
            'Travel planning hub',
            'Interactive maps',
            'AI support'
        ],
        metrics: ['Node.js', 'MongoDB', 'Cloudinary', 'EJS', 'Render'],
        nextSteps: [
            'Add itinerary builder and route optimization.',
            'Build host dashboards for listings and media.',
            'Personalize recommendations by trip budget and interests.'
        ]
    },
    {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
        title: 'Xeno Dashboard',
        category: 'CRM homepage UX',
        timeline: 'PM assignment',
        description: 'Insight-first CRM dashboard for campaign performance, action alerts, and marketer workflows.',
        role: 'Product analysis, dashboard design, user workflow mapping, and feature justification',
        links: [
            { label: 'Project report', href: '/files/xeno-dashboard.pdf' },
            { label: 'Contact me', href: '/contact' }
        ],
        problem: 'Retail marketers and CRM teams need immediate clarity on campaign performance, revenue, customer engagement, and what to do next without navigating multiple tools.',
        approach: [
            'Mapped user roles including retail marketing managers, CRM specialists, loyalty managers, and campaign automation managers.',
            'Defined dashboard goals around glanceable clarity, faster action, quick workflows, and proactive insights.',
            'Designed modules for KPIs, real-time performance, action center alerts, AI opportunities, campaign snapshots, customer health, quick actions, and activity feed.',
            'Justified features around immediate insight, prioritization, faster execution, and team visibility.'
        ],
        outcomes: [
            'Insight-first homepage',
            'Action center',
            'Campaign visibility',
            'Customer health view'
        ],
        metrics: ['Revenue impact', 'Campaign engagement', 'Customer growth', 'Loyalty participation'],
        nextSteps: [
            'Prototype the dashboard in high fidelity.',
            'Add prioritization logic for alerts and AI opportunities.',
            'Test quick actions against real marketer workflows.'
        ]
    }
];

const projectGroups = [
    {
        label: 'AI, ML & Data',
        titles: [
            'Parkinsons Detection',
            'Infant Cry Classifier',
            'Provider Data Validation',
            'E-commerce Analytics',
            'Rainbow Coloring'
        ]
    },
    {
        label: 'Apps & Engineering',
        titles: [
            'SCOPE',
            'Dash Scorecard',
            'AIChatGemma',
            'Fire Response Vehicle',
            'Wanderlust'
        ]
    },
    {
        label: 'Flurn Product Work',
        titles: [
            'LMS',
            'Progress Tracker',
            'Post Login UX',
            'Teacher Trainer',
            'Music Learning Platform',
            'Teacher Evaluation'
        ]
    },
    {
        label: 'Product Strategy',
        titles: [
            'CherryChat',
            'Guess The Cricketer',
            'Police Asset Watch',
            'CricAbode',
            'RailOne Super Route',
            'Krishi Vyapaar',
            'Xeno Dashboard'
        ]
    }
];

const groupByTitle = projectGroups.reduce((groups, group) => {
    group.titles.forEach((title) => {
        groups[title] = group.label;
    });
    return groups;
}, {});

const enrichProject = (project) => ({
    ...project,
    category: groupByTitle[project.title] || project.category || 'Product Work',
    role: project.role || 'Product strategy, UX thinking, research synthesis, and execution planning',
    timeline: project.timeline || 'Portfolio case study',
    links: project.links || [
        { label: 'Contact me', href: '/contact' }
    ],
    problem: project.problem || `${project.title} explores how a product team could turn a broad opportunity into a clearer user problem, a focused product direction, and a practical execution plan.`,
    approach: project.approach || [
        'Define the user segment, context, and core job-to-be-done before jumping into features.',
        'Map the current workflow, identify moments of friction, and separate user pain from business assumptions.',
        'Prioritize the first product slice using impact, confidence, effort, and learning value.',
        'Design the experience around clear states, feedback loops, and measurable product outcomes.'
    ],
    outcomes: project.outcomes || [
        'Sharper problem framing',
        'Clearer product narrative',
        'Prioritized MVP scope',
        'Metrics for validation'
    ],
    metrics: project.metrics || ['Activation', 'Completion rate', 'Retention signal', 'Qualitative confidence'],
    nextSteps: project.nextSteps || [
        'Replace placeholder details with real project artifacts.',
        'Add screenshots, product decisions, trade-offs, and measurable outcomes.',
        'Convert the story into a recruiter-ready product case study.'
    ]
});

const projects = projectImages.map(enrichProject);
const projectByTitle = projects.reduce((lookup, project) => {
    lookup[project.title] = project;
    return lookup;
}, {});
const projectLanes = projectGroups.map(({ label, titles }) => ({
    label,
    projects: titles.map((title) => projectByTitle[title]).filter(Boolean)
}));

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOrigin, setModalOrigin] = useState(null);
    const previewCardRef = useRef(null);
    const compactAnimationRef = useRef(null);
    const compactRef = useRef({ current: 0, target: 0 });

    useEffect(() => {
        return () => {
            if (compactAnimationRef.current) cancelAnimationFrame(compactAnimationRef.current);
        };
    }, []);

    useEffect(() => {
        if (!selectedProject) return undefined;
        document.body.style.overflow = 'hidden';
        document.body.classList.add('project-modal-open');
        return () => {
            document.body.style.overflow = 'auto';
            document.body.classList.remove('project-modal-open');
        };
    }, [selectedProject]);

    const openProject = (project, event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const overlayPadding = Math.min(Math.max(window.innerWidth * 0.03, 14), 36);
        const finalWidth = Math.min(980, window.innerWidth - overlayPadding * 2);
        const finalHeight = Math.min(window.innerHeight * 0.88, 860);
        const finalLeft = (window.innerWidth - finalWidth) / 2;
        const finalTop = (window.innerHeight - finalHeight) / 2;

        setModalOrigin({
            x: rect.left - finalLeft,
            y: rect.top - finalTop,
            scaleX: rect.width / finalWidth,
            scaleY: rect.height / finalHeight
        });
        setSelectedProject(project);
        compactRef.current = { current: 0, target: 0 };
    };

    const updateModalCompactness = (event) => {
        const card = event.currentTarget;
        const raw = Math.min(1, card.scrollTop / 240);
        compactRef.current.target = raw * raw * (3 - 2 * raw);

        if (compactAnimationRef.current) return;

        const tick = () => {
            const compact = compactRef.current;
            compact.current += (compact.target - compact.current) * 0.24;

            if (Math.abs(compact.current - compact.target) < 0.003) {
                compact.current = compact.target;
            }

            if (previewCardRef.current) {
                previewCardRef.current.style.setProperty('--modal-compact', compact.current.toFixed(4));
            }

            if (compact.current === compact.target) {
                compactAnimationRef.current = null;
                return;
            }

            compactAnimationRef.current = requestAnimationFrame(tick);
        };

        compactAnimationRef.current = requestAnimationFrame(tick);
    };

    return (
        <main className="projects-page">
            <section className="projects-hero" aria-labelledby="projects-title">
                <h1 id="projects-title">Projects across ML, product, mobile apps, and product strategy.</h1>
                <p>
                    A redesigned four-lane project board. Every card opens into a deeper case-study view with the
                    problem, approach, outcomes, metrics, next steps, and links.
                </p>
            </section>

            <section className="projects-stack" aria-label="Projects in four horizontal stacks">
                {projectLanes.map((lane, laneIndex) => (
                    <div className="project-lane" key={lane.label}>
                        <div className="project-lane-heading">
                            <span>0{laneIndex + 1}</span>
                            <h2>{lane.label}</h2>
                            <small>{lane.projects.length} projects</small>
                        </div>
                        <div className="project-lane-track">
                            {lane.projects.map((project) => (
                                <GlassBlogCard
                                    key={project.title}
                                    title={project.title}
                                    excerpt={project.description}
                                    image={project.src}
                                    date={project.timeline}
                                    readTime={`${project.metrics.length} signals`}
                                    tags={[project.category, project.timeline]}
                                    onOpen={(event) => openProject(project, event)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {selectedProject && (
                <div className="project-preview-overlay" role="dialog" aria-modal="true" aria-labelledby="project-preview-title" onMouseDown={() => setSelectedProject(null)}>
                    <article
                        className="project-preview-card"
                        ref={previewCardRef}
                        style={{
                            '--origin-x': modalOrigin ? `${modalOrigin.x}px` : '0px',
                            '--origin-y': modalOrigin ? `${modalOrigin.y}px` : '0px',
                            '--origin-scale-x': modalOrigin ? modalOrigin.scaleX : 0.2,
                            '--origin-scale-y': modalOrigin ? modalOrigin.scaleY : 0.2,
                            '--modal-compact': 0
                        }}
                        onScroll={updateModalCompactness}
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <button type="button" className="project-preview-close" onClick={() => setSelectedProject(null)} aria-label="Close project preview">
                            <X size={22} />
                        </button>
                        <div className="project-preview-media">
                            <img src={selectedProject.src} alt="" />
                        </div>
                        <div className="project-preview-copy">
                            <div className="project-preview-hero-copy">
                                <span>{selectedProject.category}</span>
                                <h2 id="project-preview-title">{selectedProject.title}</h2>
                                <p>{selectedProject.description}</p>
                            </div>

                            <div className="project-detail-meta">
                                <div>
                                    <small>Role</small>
                                    <strong>{selectedProject.role}</strong>
                                </div>
                                <div>
                                    <small>Timeline</small>
                                    <strong>{selectedProject.timeline}</strong>
                                </div>
                            </div>

                            <section className="project-detail-section">
                                <h3>Problem</h3>
                                <p>{selectedProject.problem}</p>
                            </section>

                            <section className="project-detail-section">
                                <h3>Approach</h3>
                                <ul>
                                    {selectedProject.approach.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="project-detail-section">
                                <h3>What this project shows</h3>
                                <div className="project-detail-chip-grid">
                                    {selectedProject.outcomes.map((item) => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>
                            </section>

                            <section className="project-detail-section">
                                <h3>Metrics I would track</h3>
                                <div className="project-detail-chip-grid">
                                    {selectedProject.metrics.map((item) => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>
                            </section>

                            <section className="project-detail-section">
                                <h3>Next steps</h3>
                                <ul>
                                    {selectedProject.nextSteps.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="project-detail-section">
                                <h3>Links</h3>
                                <div className="project-detail-link-row">
                                    {selectedProject.links.map((link) => (
                                        <a key={link.href} className="project-detail-action" href={link.href} target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                            <ArrowUpRight size={18} />
                                        </a>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </article>
                </div>
            )}
        </main>
    );
};

export default Projects;
