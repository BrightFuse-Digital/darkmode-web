// --- JavaScript Section ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded. Initializing script v18..."); // Version marker update

    // --- DATA ---
    const portfolioData = [
        // --- NEW Items (1-13) ---
        { id: 1, category: 'executive', title: 'The Calm CEO – Series B Founder Writing an Investor Update', brief: 'Julia Chen, founder of Mindspace (meditation/productivity app), writing a quarterly investor update after achieving 40% growth but facing engineering delays.', finalOutput: `Subject: Mindspace Q3 Update – Growth Steady, Engineering Challenges, Path Forward\n\nDear Mindspace Investors,\n\nThe path of building rarely follows a straight line, and this quarter exemplifies both the progress and challenges that come with meaningful growth.\n\nWe've achieved 40% user growth this quarter, exceeding our projections by 12% and maintaining a 4.8-star rating across app stores. Our revenue trajectory remains strong, with MRR crossing $780K and burn rate holding steady. These metrics have extended our runway to a comfortable 18 months, giving us space to build with intention rather than urgency.\n\nThe engineering delays on our 2.0 release deserve transparent discussion. While our product-market fit is clear, we're discovering that the architecture supporting our growth requires more thoughtful expansion. We've reevaluated our timeline, pushing the full release to Q1 instead of rushing an imperfect product. I believe this prudence will serve us better in the long run – especially as competitors like CalmMind and Prezence raise significant rounds to challenge our position.\n\nTo address this, we're focusing on two priorities: first, strengthening our senior engineering team with three strategic hires (two offers already accepted), and second, breaking the 2.0 release into modular components that can ship incrementally.\n\nThe market continues to validate our thesis that mindfulness tools integrated with productivity features create superior retention. Our NPS of 72 confirms we're building something people genuinely value in their daily lives.\n\nAs always, I welcome your thoughts and connections, particularly if you know exceptional engineering leaders who might be interested in our mission.\n\nWith gratitude for your continued support,\nJulia` },
        { id: 2, category: 'internal', title: 'The Cynical CTO – Internal Memo After a System Outage', brief: 'Dave Mercer, CTO of a fintech platform, writing to engineering team after a 4-hour production outage caused by a rushed deployment.', finalOutput: `Subject: Yesterday's Spectacular Dumpster Fire – And How We Never Repeat It\n\nTeam,\n\nSo, we experienced what I'm generously calling an "unplanned service interruption" yesterday. Four hours of customers wondering if we'd collectively decided to pursue new career paths. Root cause? Someone (no names, no blame game) decided that test environments are for the weak and pushed untested code straight to production at 2PM on a Thursday. Bold strategy.\n\nBefore you ask: yes, we've already sent the customary "we're sorry we broke your financial day" emails to customers. And yes, the incident has been logged in our "things we did that made Dave drink scotch at his desk" documentation.\n\nLet's be crystal clear: this wasn't a technical failure. Our systems did exactly what they were told to do. This was a process failure.\n\nEffective immediately:\n\n* ALL code gets reviewed. Even if you're the ghost of Alan Turing, you don't push without another set of eyes.\n* Production deploys happen ONLY during deployment windows.\n* Test coverage below 80% gets rejected faster than my attempt at karaoke last holiday party.\n\nDespite my sarcasm (it's how I process trauma), I know you're all brilliant engineers. We're growing fast, and sometimes processes don't keep pace with our expansion. But we're handling people's money, and they deserve our best.\n\nI've scheduled a blameless postmortem for tomorrow at 10AM. Bring your insights, not your defenses. And yes, I'm bringing donuts. The fancy ones.\n\nStill proud to work with you all,\nDave\n\nP.S. Our uptime is still 99.92% for the quarter. Let's keep it that way.` },
        { id: 3, category: 'executive', title: 'The Warm VP of People – LinkedIn Post About Remote Culture', brief: 'Aisha Johnson, VP of People at a 200-person SaaS company, sharing insights on building remote culture after two years of being fully distributed.', finalOutput: `Two years into our journey as a fully remote company, I've learned that connection doesn't happen by accident – it requires intention, care, and constant nurturing. 💫\n\nWhen we closed our offices in 2023, the question wasn't just "how will we work?" but "how will we belong?" Belonging can't be scheduled into a 30-minute Zoom call or manufactured through virtual happy hours.\n\nWhat's worked for us has been focusing on the small, meaningful moments:\n\n* We implemented "No Meeting Wednesdays" to give everyone breathing room for deep work and strategic thinking. This boundary has become sacred – a collective agreement that sometimes the best way to support each other is with space.\n* We created a "Local Connections" budget, giving team members $100/month to meet up with colleagues in their area. Watching photos stream in of small groups having coffee, taking walks, or volunteering together has been incredibly heartwarming.\n* We've learned to celebrate the tiny wins more visibly. In an office, you might see someone's smile when they solve a problem. Remotely, we need to amplify these moments. Our #wins channel has become the heartbeat of our company.\n\nThe truth I've learned: culture isn't built in grand gestures. It's cultivated in how we respond to a late-night message, whether we start meetings by checking in on each other, and if we truly listen when someone shares a challenge.\n\nI'd love to hear – what small but mighty practices have helped your remote teams thrive? 💙\n\n#RemoteWork #CompanyCulture #PeopleFirst` },
        { id: 4, category: 'marketing', title: 'The Aggressive Growth Marketer – Launch Announcement', brief: 'Tyler Washington, Head of Growth at an e-commerce platform, announcing a new personalization engine to drive conversions.', finalOutput: `🚀 MASSIVE NEWS: HyperPersonal AI Engine Is HERE! 🚀\n\nWe just COMPLETELY REVOLUTIONIZED the e-commerce game. Again.\n\nIntroducing HyperPersonal – our breakthrough AI engine that doesn't just understand your customers... it PREDICTS THEIR NEXT MOVE before they make it.\n\n👉 37% CONVERSION LIFT in our beta tests (not a typo!)\n👉 Set up in MINUTES, not weeks\n👉 ZERO coding required\n\nWhile other platforms are still sending the same tired emails to everyone, HyperPersonal dynamically adjusts product recommendations, pricing displays, and urgency triggers based on individual behavior patterns.\n\nThis isn't just personalization. It's HYPER-personalization.\n\n"We implemented HyperPersonal on Tuesday and saw results by Thursday afternoon. This is the real deal." - Beta customer seeing 41% AOV increase\n\nTHE COMPETITION IS ALREADY SCRAMBLING to catch up, but we're giving YOU first access.\n\nWe're opening just 50 beta slots TODAY. These will DISAPPEAR FAST.\n\n✅ CLAIM YOUR SPOT: [Link]\n\nIf you miss this opportunity, you're literally choosing to leave money on the table.\n\nLet's crush it,\nTyler` },
        { id: 5, category: 'executive', title: 'The Skeptical Founder – Funding Announcement', brief: 'Maya Desai, founder of an enterprise software company, announcing a $12M Series A while maintaining her characteristic dry wit.', finalOutput: `So we raised $12M in Series A funding.\n\nAfter 67 pitch meetings, 14 red-eye flights, and approximately 943 slight variations of the same slide deck, someone finally decided to give us money. Multiple someones, actually.\n\nThe round was led by Accel Partners, with participation from Founders Fund and several strategic angels who I promise I'll name-drop once our PR team approves this post.\n\nIf you're wondering: Yes, fundraising took longer than expected. No, it wasn't always fun explaining for the 50th time why enterprise document security actually matters. And yes, I briefly considered a career change to literally anything else around pitch meeting #38.\n\nThe capital will help us grow the team (we're hiring across engineering, sales, and customer success), accelerate our product roadmap, and maybe occasionally order lunch that isn't whatever was about to expire at the local grocery store.\n\nEnormous thanks to our team who kept building and selling while I was distracted by PowerPoint animations and investor questions about our "moat" (still hate that term). You're the reason anyone cared in the first place.\n\nAnd to our customers who trusted us early: you were right all along, and apparently now some venture capitalists agree with you.\n\nBack to building something worth all those zeros,\nMaya` },
        { id: 6, category: 'thought_leadership', title: 'The Visionary Designer – Blog Post About Product Intuition', brief: 'Elijah Carter, Head of Design at a consumer tech company, sharing thoughts on developing product intuition beyond data.', finalOutput: `The Space Between Data Points: Cultivating Product Intuition\n\nThere's a moment I cherish in product design – the quiet space between the last user interview and the first sketch. It's the moment when data transforms into intuition, when patterns become possibilities.\n\nWe've become disciplined in gathering data, running A/B tests, and analyzing heatmaps. Tools track every pixel of interaction, every millisecond of hesitation. This empirical foundation is essential, yet insufficient. The most meaningful leaps in design happen in the spaces between data points – where human intuition flourishes.\n\nI think of intuition as the residue of deep observation. It's what forms when you've watched enough users struggle with a form field without consciously tabulating their frustration. It's recognizing the subtle shift in someone's posture when they encounter something delightful. These micro-observations collect in our subconscious, forming patterns too nuanced for dashboards to capture.\n\nLast month, our team was deadlocked on a navigation redesign. The data showed two options performing similarly in tests. I found myself drawn to one solution, not because of any specific metric, but because I had observed a particular quality of movement – a fluidity – when users encountered it. This wasn't measurable in our analytics, but it mattered deeply to the experience.\n\nTo cultivate this intuition, I've developed personal rituals:\n\n* I spend one hour each week using our product as if for the first time, deliberately forgetting my familiarity with its patterns.\n* I regularly observe five users in their natural environment – not in formal studies, but in the messiness of their actual lives.\n* I collect "feeling words" – the adjectives users spontaneously express when interacting with products.\n\nThe alchemy of design happens when rigorous data meets refined intuition. The data tells us what is happening; intuition helps us understand why it matters. In this balance, we create products that don't just perform well in metrics but resonate at a human level.\n\nWhat practices have helped you develop your product intuition beyond data?` },
        { id: 7, category: 'internal', title: 'The Dry-as-Toast VP of Ops – LinkedIn Bio Rewrite', brief: 'Rewriting Harold Fischer\'s (VP Operations, Logistics) LinkedIn bio for effectiveness while retaining his direct style.', finalOutput: `<h5>BEFORE:</h5>\n<p>"VP Operations at FastFreight Inc. 15+ years experience in logistics and supply chain. Previously at Global Shipping Co. and LogiTech Solutions. MBA from State University. Focused on operational efficiency."</p>\n\n<h5>AFTER:</h5>\n<p>"VP Operations, FastFreight Inc. Cut delivery times 31% and reduced costs 18% across 47 distribution centers. Implemented route optimization system handling 12,000+ daily shipments. Previously: led Global Shipping's North American operations ($450M P&L), streamlined LogiTech's fulfillment network. MBA, State University. I solve logistics problems others call unsolvable. Not interested in thought leadership. Interested in results."</p>` },
        { id: 8, category: 'internal', title: 'The Friendly PM – Team Email About Process Change', brief: 'Sophia Rivera, Senior PM at a health tech startup, explaining a shift from two-week to six-week planning cycles.', finalOutput: `Subject: We're giving you more time to build (and fewer meetings!) 🙌\n\nHey team!\n\nFirst off, huge congrats on shipping the patient portal updates last week. The early feedback has been fantastic, and I saw at least three happy dances from our customer success team!\n\nI've been thinking a lot about how we work together, and specifically about something many of you have mentioned: we spend so much time planning that it can feel like we don't have enough time to actually build.\n\nYou're absolutely right, and we're going to fix it.\n\nStarting next month (July 3rd), we're shifting from our current two-week sprints to six-week cycles. Here's what this means for you:\n\n* Fewer planning meetings! We'll have one thorough planning session at the beginning of each cycle instead of a new one every two weeks\n* More uninterrupted building time so you can get into deep work mode\n* Less context-switching between planning and doing\n* Light mid-cycle check-ins (30 mins max) to make sure we're on track\n\nThis isn't about cramming more work into the timeline – it's about giving you the space to do your best work with fewer interruptions.\n\nI've scheduled optional "office hours" this Thursday and Friday if you have questions or want to chat about how this might affect your specific projects. And of course, my virtual door is always open if you'd prefer to talk one-on-one.\n\nHere's to building more and meeting less! 🚀\n\nWarmly,\nSophia` },
        { id: 9, category: 'thought_leadership', title: 'The Tactical Data Scientist – Thought Piece on AI Ethics', brief: 'Dr. Raj Patel, Head of Data Science at a healthcare AI company, sharing thoughts on responsible AI development.', finalOutput: `<p>Beyond Good Intentions: Practical AI Ethics in Healthcare</p><p>When building AI systems for healthcare, ethical considerations aren't academic exercises – they're engineering requirements.</p><p>Recent discussions around AI ethics tend toward philosophical abstractions, but practitioners need concrete approaches. After implementing machine learning models across diagnosis support, resource allocation, and treatment planning, I've found that ethical AI development requires specific technical practices, not just principles.</p><p>Three practical approaches we've implemented:</p><ol><li><p><strong>Explainability as a technical specification</strong></p><p>We've abandoned the false dichotomy between performance and explainability. Our diagnosis support models must provide confidence intervals and feature importance scores for each prediction. This requirement isn't just documentation – it's in our technical specifications with the same priority as accuracy metrics. Models failing explainability benchmarks don't deploy, regardless of their performance statistics.</p></li><li><p><strong>Representative data as an engineering problem</strong></p><p>Dataset bias isn't solved through good intentions. We've built automated demographic analysis into our data pipeline, quantifying representation across age, sex, race, and socioeconomic indicators. When we detected that our pneumonia dataset underrepresented rural populations by 23%, we didn't proceed with caveats – we paused development to correct the imbalance.</p></li><li><p><strong>Human oversight with specific transition thresholds</strong></p><p>"Human in the loop" becomes meaningless without defining when and how humans intervene. We've established explicit confidence thresholds that determine when a model can operate autonomously versus when it requires clinician review. These thresholds aren't static – they adjust based on ongoing performance monitoring and severity of potential outcomes.</p></li></ol><p>The most common failure mode I observe isn't malicious intent but the gap between ethical principles and implementation details. Ethics must be embedded in code reviews, technical specifications, and QA processes – not relegated to committees that operate adjacent to development teams.</p><p>Healthcare AI developers have obligations beyond regulatory compliance. Patients don't care about our ethical frameworks – they care whether our systems treat them equitably and safely.</p><p>I'm interested in exchanging practical approaches with others working in this space. What specific technical practices has your team implemented to ensure ethical AI development?</p>`  },
        { id: 10, category: 'marketing', title: 'The Spicy SaaS Bro – LinkedIn Post About "10 Things That Broke Us"', brief: 'Jack Reynolds, founder of a growth-stage SaaS startup, sharing lessons from early mistakes in a characteristically irreverent style.', finalOutput: `10 Things That Nearly Killed Our Startup (that I did on purpose, obviously 🙄)\n\nLook, they say entrepreneurship is about failing fast. So here's me speedrunning through failures so you don't have to:\n\n1. Tried marketing on EVERY channel simultaneously because "omnipresence" sounds cooler than "focus." Burned $50K in 3 weeks with exactly zero paying customers to show for it. Big brain move.\n2. Hired my former colleague as Head of Sales because we crushed happy hours together. Turns out "can order 7 tequila shots without slurring" isn't actually a sales qualification. Who knew?\n3. Called our first pricing strategy "market penetration" when it was actually "we're terrified to charge money." Customers literally told us we were too cheap and we STILL didn't raise prices for 6 months.\n4. Built a feature roadmap based entirely on what our biggest competitor was doing. Nothing says innovation like being a second-rate copycat!\n5. Ignored customer feedback because "they don't know what they want." Henry Ford quote and everything. Meanwhile customers were leaving faster than my hairline.\n6. Tried to be everything to everyone because saying "no" felt mean. Ended up being nothing to no one instead.\n7. Refused to fire an underperforming team member for 9 painful months because "we're family." We're not family. We're a business. My actual family doesn't have KPIs.\n8. Tracked vanity metrics that made us feel awesome in team meetings but didn't correlate with revenue. "Engagement" doesn't pay AWS bills, turns out.\n9. Spent 3 months building an API integration that exactly two customers asked for. Both churned before we finished.\n10. Worked 100-hour weeks thinking hustle was the answer when actually WORKING ON THE RIGHT THINGS was the answer.\n\nWe survived. Somehow. Now at $11M ARR. But man we made it harder than it needed to be.\n\nWhat's the dumbest founder mistake you've made? Drop it below so I feel less alone in my clownery. 🤡` },
        { id: 11, category: 'executive', title: 'The Understated Founder – First-person Website Intro', brief: 'Sam Nguyen, founder of a successful weather data API company, needing an "About" section telling the origin story.', finalOutput: `Our Story\n\nI never set out to build a company.\n\nIn 2018, I was simply frustrated with the inaccuracy of local weather forecasts. As someone who grew up in a family of farmers, I understood how consequential weather predictions could be – not just for convenience, but for livelihoods.\n\nSo I built a simple tool for myself, combining public data sources with a basic algorithm that accounted for microclimate patterns in my region. It was nothing revolutionary – just practical solving of a practical problem.\n\nWhen friends in the outdoor recreation community asked if they could use it, I cleaned up the interface and shared access. When local businesses inquired about integrating it with their operations, I built a rudimentary API. When developers from across the country began requesting access credentials, I realized this private project had become something more.\n\nToday, WeatherCore provides hyperlocal weather data to over 3,000 applications and services. Our prediction models are used by agricultural cooperatives, emergency management agencies, and some of the outdoor applications you likely use daily.\n\nWe've grown to a team of 17, with offices in Portland and Boulder. We've raised a single, modest funding round that gives us runway to grow sustainably while maintaining our focus on accuracy and reliability.\n\nAt heart, I'm still that weather enthusiast building tools I personally want to use. The company simply grew around that mission – to provide weather data you can actually trust to make decisions that matter.\n\n—Sam Nguyen, Founder` },
        { id: 12, category: 'internal', title: 'The Empathetic Product Lead – Product Update Email', brief: 'Emma Torres, Head of Product at a personal finance app, explaining a potentially disruptive UI redesign.', finalOutput: `Subject: Changes coming to your MoneyHelper experience (and why we're making them)\n\nHi there,\n\nEmma from MoneyHelper here. I wanted to personally let you know about some changes you'll see in the app over the next few weeks.\n\nFirst things first: we're redesigning parts of the MoneyHelper interface. Some of the screens and workflows you're used to will be changing – especially in the budgeting and transaction sections.\n\nI know changes like this can be disruptive. When you're managing something as important as your finances, having to relearn where things are is the last thing you need. I promise we haven't made these changes lightly.\n\nOver the past year, we've noticed that many people (maybe you too?) have been creating workarounds for certain tasks in the app. We've watched as users clicked through three screens to accomplish something that should take just one. We've read every piece of feedback about "I wish I could just..." and "Why can't I easily..."\n\nThe redesign directly addresses the most common pain points you've shared with us. You'll find:\n\n* A personalized dashboard that surfaces the information most relevant to your financial habits\n* Simplified transaction categorization that learns from your patterns\n* More accessible budgeting tools that adapt to your goals\n\nWe'll be rolling these changes out gradually over the next three weeks, starting with a small percentage of users and expanding based on feedback.\n\nTo help you navigate the changes, we're offering:\n\n* Live walkthrough webinars (you can register here)\n* In-app guided tours\n* A detailed help center article with before/after comparisons\n\nIf you have questions or concerns at any point, please reply directly to this email. It comes straight to our product team.\n\nThank you for trusting us with your financial journey. We're listening, and we're committed to making MoneyHelper work better for you.\n\nWarmly,\nEmma` },
        { id: 13, category: 'thought_leadership', title: 'The SaaS Strategist – Blog Post: What’s Missing from Most SaaS Messaging', brief: 'Ghostwritten thought piece positioning Darkmode Studios as a messaging expert for B2B SaaS.', finalOutput: `What’s Missing from Most SaaS Messaging? (Hint: It’s Not Features)\n\nLet me guess: your homepage lists every feature your platform offers in bulleted form, with a CTA button that reads something like “Book a Demo.”\n\nYou’ve got testimonials. You’ve got pricing tiers. You’ve got a hero banner with vague language about “streamlining workflows.”\n\nAnd yet… something isn’t landing.\n\nBecause here’s the truth: most SaaS messaging isn’t bad. It’s just interchangeable.\n\nIf I can swap your company name for a competitor’s and not notice, you don’t have a message. You have a list of features wearing a blazer.\n\nWhat’s missing?\n\n1.  **POV.**\n    What do you believe that others don’t? What’s your stance on the industry, the problem, or the outdated approach your product is replacing? Your perspective is the difference between a brand and a tool.\n\n2.  **Specificity.**\n    “Save time and money” is not a value prop. “Cut onboarding from 14 days to 3” is. Your audience isn’t dumb. They’re just busy. Give them a stat or a story, not empty adjectives.\n\n3.  **Humanity.**\n    SaaS buyers are people. Even in enterprise. Especially in enterprise. Your copy should feel like it was written by someone who has talked to a customer, not just read Gartner reports.\n\n4.  **Narrative.**\n    Where does your customer start, where do they end up, and how do you help them get there? This isn’t about inserting a hero’s journey into your copy—it’s about remembering that buying software is an emotional decision masquerading as a rational one.\n\n5.  **Resonance.**\n    When someone reads your site, do they feel like, “Finally, someone gets it”? That’s the bar.\n\nThe best SaaS brands aren’t just functional. They’re memorable.\nThey make prospects feel seen.\n\nAnd that’s what most messaging misses.\n\n—\nNeed help finding your POV and building messaging that actually connects?\nDMs are open. Let’s talk.` },

        // --- REFORMATTED OLD Examples (14-19) - Moved to 'internal' category, 'notes' restored, 'finalOutput' has Analysis & Human ---
        { id: 14, category: 'internal', title: "This Was Approved By Four Executives", brief: "Translating standard corporate security documentation into clear, concise language.", notes: `<p>In today's rapidly evolving cyber landscape, our vendor partners occupy a mission-critical role within our larger strategic tech ecosystem. Their deliverables, typically in the form of standardized documentation, templated updates, and protocol adherence, are crucial in maintaining our alignment with industry expectations and compliance frameworks.</p>`, finalOutput: `<h5>Analysis</h5> <p>This is the kind of paragraph that burns calories and brain cells in equal measure.</p><p>It's a Mad Libs of tech-speak that says nothing and commits the gravest sin: being <i>boring.</i></p> <h5>Human Rewrite</h5> <p>If your security stack's only as strong as its weakest vendor, maybe stop picking them like it's a corporate Secret Santa.</p><p>We vet our partners the same way we secure our systems: by testing, questioning, and refusing to accept "industry standard" as an answer.</p><p>Quarterly reviews aren't about check-ins; they're stress tests.</p><p>Good vendors don't just plug gaps. They level you up. That's the bar.</p>` },
        { id: 15, category: 'internal', title: "UX by committee. Fonts by Outlook.", brief: "Rewriting a description of a legacy dashboard UI to be more honest and engaging.", notes: `<p>The dashboard interface of EnterpriseSync 4.5 provides visualized metrics through a modular grid of static content windows. While functionality remains intact, the layout utilizes legacy design principles and familiar navigation schema, supporting continuity at the cost of innovation. Color hierarchy and microinteractions are minimal.</p>`, finalOutput: `<h5>Analysis</h5> <p>Reads like a cry for help from someone trapped in 2009 with a wireframe made in Excel.</p><p>Dense, passive, and too polite to admit it's ugly.</p> <h5>Human Rewrite</h5> <p>EnterpriseSync 4.5 works, if your definition of "works" includes staring into a gray dashboard void that feels like 2007 never ended.</p><p>It follows standard UX patterns, which is a polite way of saying "we copied whatever Microsoft did last quarter."</p><p>Settings are buried like a weird little Easter egg.</p><p>Final verdict: functional, but allergic to joy.</p>` },
        { id: 16, category: 'internal', title: "This Email Has Never Spoken To A Human", brief: "Transforming a generic outreach email into a direct, benefit-focused message.", notes: `<p>Dear Mr. Johnson, I hope this message finds you well. I'm reaching out in regard to our newly released Data Analytics as a Service platform, designed to support your organization's digital transformation goals and unlock actionable insights through an enhanced data ecosystem.</p>`, finalOutput: `<h5>Analysis</h5> <p>The copy equivalent of a firm handshake and no eye contact.</p><p>Entirely void of intent or identity.</p><p>Could have been written by a toaster.</p> <h5>Human Rewrite</h5> <p>Hey [First Name],</p><p>If your dashboards look like a Jackson Pollock painting of metrics, we should talk.</p><p>We've seen 20%+ efficiency boosts just by connecting the dots your data's already sitting on.</p><p>Got 30 minutes for a walk-through? I'll bring the charts, you bring the curiosity.</p>` },
        { id: 17, category: 'internal', title: "Case Study: Personality of a Copier", brief: "Rewriting a technical case study about microservices architecture for clarity and impact.", notes: `<p>The implementation of our distributed microservices architecture resulted in a 37% reduction in system latency across our enterprise applications. By migrating from our legacy monolithic codebase to containerized services orchestrated via Kubernetes, we achieved significant improvements in both scalability and resource utilization metrics.</p><p>The deployment of our proprietary load balancing algorithm further optimized network traffic distribution, resulting in 99.95% uptime over the previous fiscal quarter.</p><p>Our implementation approach leveraged industry-standard DevOps methodologies including continuous integration/continuous deployment pipelines and infrastructure-as-code principles, which facilitated automated testing procedures and version control compliance.</p><p>The resultant architecture has demonstrated enhanced resilience to peak demand periods while maintaining cost effectiveness through dynamic resource allocation.</p>`, finalOutput: `<h5>Analysis</h5> <p>Reads like someone optimized a thesaurus instead of their infrastructure.</p><p>You'd need a translator, a system architect, and three weeks to understand what the hell this actually means.</p> <h5>Human Rewrite</h5> <p>We cut system latency by 37%, not by throwing servers at the problem, but by breaking our old monolith into containerized services that actually talk to each other.</p><p>With Kubernetes handling orchestration and our own load balancer managing traffic, we hit 99.95% uptime last quarter.</p><p>CI/CD pipelines and infrastructure-as-code helped us deploy faster and recover even faster.</p><p>The result?</p><p>A system that scales when we need it to, costs less when we don't, and doesn't choke during peak hours.</p>` },
        { id: 18, category: 'internal', title: "This Landing Page Lost an Argument", brief: "Refining landing page copy for an enterprise cloud solution to focus on benefits over features.", notes: `<p>Welcome to CloudNexus Enterprise Solutions</p><p>CloudNexus delivers enterprise-grade cloud infrastructure solutions designed to maximize operational efficiency while minimizing total cost of ownership.</p><p>Our platform integrates seamlessly with existing technology stacks to provide a comprehensive suite of tools for monitoring, management, and optimization of multi-cloud environments.</p><p>Key features include:</p><ul><li>Real-time performance analytics dashboard with customizable KPI visualizations</li><li>Multi-tenant architecture supporting role-based access control mechanisms</li><li>Military-grade encryption protocols for data at rest and in transit</li><li>API-first design philosophy enabling extensive integration capabilities</li><li>Horizontal and vertical scaling functionality with predictive resource allocation</li></ul>`, finalOutput: `<h5>Analysis</h5> <p>Feels like it was written during a never-ending status meeting.</p><p>Flat, flavorless, and somehow both overexplained and underwritten.</p> <h5>Human Rewrite</h5> <p>CloudNexus helps enterprises get their cloud infrastructure under control, faster, cheaper, and without the vendor-lock nightmares.</p><p>Our platform works with what you already use, and gives you a real-time view of what's working (and what isn't).</p><ul><li>Visualize performance across clouds</li><li>Lock down access with flexible controls</li><li>Encrypt everything, everywhere</li><li>Plug into anything with our open API</li><li>Scale up, down, or sideways, automatically</li></ul><p>Ready to see it in action? Let's set up a demo and talk shop.</p>` },
        { id: 19, category: 'internal', title: "8AM, Tuesday Morning", brief: "Injecting personality and clarity into a standard conference speaking announcement.", notes: `<p>Pleased to announce that I will be speaking at the upcoming Enterprise Technology Summit on the topic of "Navigating the Transition from Traditional Data Centers to Hybrid Cloud Architectures."</p><p>My presentation will cover practical implementation considerations including security posture assessment methodologies, network topology optimization strategies, and governance frameworks for maintaining regulatory compliance.</p><p>I will also be sharing our organization's migration journey, highlighting the key decision points that influenced our technology stack selection process. The presentation will include a comprehensive analysis of performance benchmarks pre- and post-migration, with particular emphasis on database query efficiency metrics and API response times.</p><p>Looking forward to engaging with fellow technology leaders on this important topic.</p><p>#EnterpriseIT #CloudComputing #TechnologyLeadership</p>`, finalOutput: `<h5>Analysis</h5> <p>It walks in, ruins morale, and walks out like it was legally obligated to exist and emotionally unavailable while doing so.</p><p>The kind of post that got three likes and a self high-five.</p> <h5>Human Rewrite</h5> <p>I'll be speaking at the Enterprise Tech Summit on how we moved from a traditional data center setup to a hybrid cloud model, and what actually broke in the process.</p><p>Think: what we ditched, what we kept, and what surprised us most.</p><p>Real numbers. Real hiccups. Real lessons.</p><p>If you're knee-deep in your own migration (or about to be), come hang out. We'll talk security, scaling, and what not to do.</p><p>#CloudDoneRight #EnterpriseInfra #LessonsTheHardWay</p>` }
    ]; // END of portfolioData array

    // --- HOMEPAGE FUNCTIONALITY ---
    // Functions removed as carousel is gone

    // --- INTERSECTION OBSERVER ---
    let generalObserver;
    function initializeIntersectionObserver() {
        if (generalObserver) { generalObserver.disconnect(); }
        try {
            if ('IntersectionObserver' in window) {
                const observerOptions = { threshold: 0.1 };
                const observerCallback = (entries, obs) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            obs.unobserve(entry.target);
                        }
                    });
                };
                generalObserver = new IntersectionObserver(observerCallback, observerOptions);
                const elementsToObserve = document.querySelectorAll('.hero, .card-column, .about-card-wrapper, .portfolio-wrapper, .portfolio-item-card');
                elementsToObserve.forEach(el => {
                    if (el && !el.classList.contains('visible')) {
                        generalObserver.observe(el);
                    }
                });
            } else {
                document.querySelectorAll('.hero, .card-column, .about-card-wrapper, .portfolio-wrapper, .portfolio-item-card').forEach(el => {
                    if (el) el.classList.add('visible');
                });
            }
        } catch (error) {
            console.error("Error initializing General Intersection Observer:", error);
            document.querySelectorAll('.hero, .card-column, .about-card-wrapper, .portfolio-wrapper, .portfolio-item-card').forEach(el => {
                if (el) el.classList.add('visible');
             });
        }
    }

    // --- PORTFOLIO PAGE LOGIC ---
    const portfolioContainer = document.querySelector('.portfolio-main');
    const modalOverlay = document.getElementById('portfolio-modal');
    const modalTitleEl = modalOverlay ? modalOverlay.querySelector('.modal-title') : null;
    const modalBodyEl = modalOverlay ? modalOverlay.querySelector('.modal-body') : null;
    const modalCloseBtn = modalOverlay ? modalOverlay.querySelector('.modal-close') : null;

    // Creates cards for portfolio examples
    function createPortfolioCard(item, index) {
        const card = document.createElement('article');
        card.classList.add('portfolio-item-card');
        card.dataset.itemId = item.id;
        const safeTitle = item.title.replace(/<\/?(i|em)>/g, "");
        const safeBrief = item.brief.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        card.innerHTML = `
            <h3>${safeTitle}</h3>
            <p class="brief">${safeBrief}</p>
            <span class="view-button">Read The Story, Compiled</span>`;
        return card;
    }

    // Updated function V9: Use H4 consistently for modal headings
    function formatModalBody(item) {
         let html = '';
         const isOldExample = item.id >= 14 && item.id <= 19;

         // 1. Brief
         if (item.brief) {
             html += `<h4><span class="modal-heading-underline">Brief</span></h4><p>${item.brief.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>`;
         }

         // 2. Original Text (Only for old examples)
         if (isOldExample && item.notes) {
             let formattedNotes = item.notes;
             formattedNotes = formattedNotes.replace(/<\/?p>/g,'').trim();
             // <<< Use H4 here too >>>
             html += `<h4><span class="modal-heading-underline">Original</span></h4><div class="original-notes"><p>${formattedNotes}</p></div>`;
         }

         // 3. Final/Rewritten Content
         if (item.finalOutput) {
             let formattedOutput = item.finalOutput;

             if (isOldExample) {
                 // Inject pre-formatted Analysis/Human Rewrite HTML
                 // <<< Change H5 to H4 here >>>
                 formattedOutput = formattedOutput.replace(/<h5>Analysis<\/h5>/g, `<h4><span class="modal-heading-underline">Analysis</span></h4>`);
                 formattedOutput = formattedOutput.replace(/<h5>Human Rewrite<\/h5>/g, `<h4><span class="modal-heading-underline">Human Rewrite</span></h4>`);
                 // Keep non-semantic H5s like BEFORE/AFTER if they exist (though none seem to)
                 formattedOutput = formattedOutput.replace(/<h5>(.*?)<\/h5>/g, (match, p1) => `<h5>${p1}</h5>`);

                 html += `<div class="analysis-human-wrapper">${formattedOutput}</div>`;
             } else {
                 // For new examples, format plain text under "Final Output" heading (already uses H4)
                 html += `<h4><span class="modal-heading-underline">Final Output</span></h4><div class="final-output-wrapper">`;
                 // Basic check if content needs formatting
                 if (!formattedOutput.includes('<p>') && !formattedOutput.includes('<li>')) {

                    // Specific handling for ID 13 (use paragraphs)
                    if (item.id === 13) {
                        const lines = formattedOutput.split('\n');
                        formattedOutput = lines.map(line => {
                            const trimmedLine = line.trim();
                            if (trimmedLine === '') {
                                return '';
                            }
                            const boldedLine = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                            if (trimmedLine.match(/^(\d+)\.\s/)) {
                                return `<p>${boldedLine}</p>`;
                            }
                            else if (trimmedLine.match(/^—$/) && lines[lines.indexOf(line) + 1]?.trim().toLowerCase().startsWith('need help')) {
                                  return `<p style="text-align: center; margin-top: 1.5em;">${boldedLine}</p>`;
                             }
                            return `<p>${boldedLine}</p>`;
                        }).join('');
                         formattedOutput = formattedOutput.replace(/<p><\/p>/g, '');

                    }
                    // Default handling for other new examples (IDs 1-12) using lists
                    else {
                        const paragraphs = formattedOutput.split('\n').map(line => line.trim());
                        let listOpen = false;
                        let listType = 'ul';
                        let inPreformatted = false;

                        formattedOutput = paragraphs.map((p, i, arr) => {
                             let closingTag = '';
                             const isOrderedMatch = p.match(/^(\d+)\.\s/);
                             const isUnordered = p.startsWith('* ') || p.startsWith('- ');
                             const isPreStart = p.trim().startsWith('```');
                             const isPreEnd = p.trim().endsWith('```');

                             // Code Blocks
                             if (isPreStart && !inPreformatted) {
                                 inPreformatted = true;
                                 return '<pre><code>' + p.substring(3).trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
                             }
                             if (inPreformatted) {
                                 if (isPreEnd) {
                                     inPreformatted = false;
                                     return p.substring(0, p.length - 3).trim().replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>';
                                 }
                                 return p.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                             }

                             // Lists
                             if (isOrderedMatch || isUnordered) {
                                const currentListType = isOrderedMatch ? 'ol' : 'ul';
                                const listItemContent = isOrderedMatch ? p.substring(isOrderedMatch[0].length) : p.substring(2);
                                const formattedListItemContent = listItemContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                                const listItem = `<li>${formattedListItemContent}</li>`;

                                if (!listOpen) {
                                      listOpen = true;
                                      listType = currentListType;
                                      return `<${listType}>` + listItem;
                                } else if (listType !== currentListType) {
                                      closingTag = `</${listType}>`;
                                      listType = currentListType;
                                      return closingTag + `<${listType}>` + listItem;
                                }
                                return listItem;
                            } else { // Not list or code
                                if (listOpen) {
                                    closingTag = `</${listType}>`;
                                    listOpen = false;
                                }
                                 // Subject line (use H5 for subjects)
                                 if (p.toLowerCase().startsWith('subject:')) {
                                    return closingTag + `<h5>${p}</h5>`;
                                 }
                                 // Signature Block
                                 else if (p.match(/^(--|—|With gratitude|Warmly|Let's crush it|Back to building|Still proud|Cheers|Best)[,.]?\s*$/i) || (p.startsWith('—') && p.includes('Founder') && i > arr.length - 5)) {
                                     let style = 'margin-top: 1.5em;';
                                     if (p.startsWith('—') && p.includes('Founder')) style += ' text-align: right;';
                                     return closingTag + `<p style="${style}">${p}</p>`;
                                 }
                                 // Name after signature
                                 else if (arr[i-1]?.match(/^(--|—|With gratitude|Warmly|Let's crush it|Back to building|Still proud|Cheers|Best)[,.]?\s*$/i) && !p.includes('\n') && p.trim().split(' ').length < 4) {
                                    return closingTag + `<p>${p}</p>`;
                                 }
                                 // Standard paragraphs
                                 else if (p) {
                                     const formattedP = p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                                     return closingTag + `<p>${formattedP}</p>`;
                                 }
                                 // Empty line handling
                                 else if (arr[i-1] && arr[i-1].trim() !== '') {
                                     return closingTag;
                                 } else {
                                     return closingTag;
                                 }
                            }
                        }).join('');
                        if (listOpen) { formattedOutput += `</${listType}>`; }
                         formattedOutput = formattedOutput.replace(/<p><\/p>/g, '');
                    }

                 }
                 html += formattedOutput + `</div>`;
             }
         }

         return html;
    }


    // Populates the portfolio example grids
    function populatePortfolioGrids() {
        const grids = {
            executive: document.querySelector('.executive-ghostwriting-grid'),
            marketing: document.querySelector('.marketing-sales-copy-grid'),
            thought_leadership: document.querySelector('.thought-leadership-content-grid'),
            internal: document.querySelector('.internal-comms-rewrites-grid'),
        };
        if (!grids.executive && !grids.marketing && !grids.thought_leadership && !grids.internal) {
             console.warn("One or more portfolio example grids not found.");
             return;
        }

        let cardIndex = 0;
        portfolioData.forEach(item => {
            const grid = grids[item.category];
            if (grid) {
                const card = createPortfolioCard(item, cardIndex++);
                grid.appendChild(card);
             }
        });
         // Ensure the general observer runs AFTER the cards are added
         initializeIntersectionObserver();
    }

     // Handles clicks within the main portfolio area
     function handlePortfolioClick(event) {
        const card = event.target.closest('.portfolio-item-card');
        if (card && !card.classList.contains('service-item-card') && card.dataset.itemId) {
             if (!modalOverlay || !modalTitleEl || !modalBodyEl) return;

            const itemId = card.dataset.itemId;
            const itemData = portfolioData.find(item => item.id.toString() === itemId);
            if (!itemData) { console.error(`Data not found for item ID: ${itemId}`); return; }

            modalTitleEl.innerHTML = itemData.title.replace(/<\/?(i|em)>/g, "");
            modalBodyEl.innerHTML = formatModalBody(itemData);

            if (modalBodyEl.parentElement) { modalBodyEl.parentElement.scrollTop = 0; }
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
     }


     function closeModal() {
         if (!modalOverlay) return;
         modalOverlay.classList.remove('active');
         document.body.style.overflow = '';
     }

    // --- Initial Execution & Event Listeners ---
    try {
        console.log("Running initial setup...");
        initializeIntersectionObserver();

        if (portfolioContainer) {
            populatePortfolioGrids();
            portfolioContainer.addEventListener('click', handlePortfolioClick);
            if (modalCloseBtn) { modalCloseBtn.addEventListener('click', closeModal); }
            if (modalOverlay) { modalOverlay.addEventListener('click', (event) => { if (event.target === modalOverlay) { closeModal(); } }); }
            document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) { closeModal(); } });
        } else {
             console.log("Portfolio container not found. Skipping portfolio-specific setup.");
        }
    } catch (e) { console.error("Critical error during initial script execution:", e); }
    console.log("Script execution finished.");

}); // End of DOMContentLoaded