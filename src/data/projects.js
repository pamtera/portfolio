export const projects = [
  {
    id: 1,
    slug: "esim-journey-mapping",
    title: "Untangling Global Complexity",
    subtitle: "Journey mapping the SIM & eSIM profile generation process across four countries",
    category: "UX Research",
    year: "2025",
    role: "Senior UX Researcher & Designer",
    duration: "5 months",
    scope: "11 stakeholder interviews · 4 countries · 1 process no one had ever fully mapped",
    company: "International Mobile Technology Company",
    tags: ["UX Research", "Service Design", "Stakeholder Management", "Strategy"],

    heroImage: "/global-complexity.jpg",
    heroAlt: "Journey map artifact — full spread",

    hook: ``,

    overview: `Every SIM card shipped to a customer starts with a profile —
    a precise set of data generated through a multi-step process spanning
    engineering teams, customer operations, and testing centers across Germany,
    Spain, the United States, and India.

    The process worked. Technically. But it had grown organically over a decade,
    accumulating local tools, informal workarounds, and undocumented handovers
    that lived entirely in people's heads. When a senior engineer left, part of
    the process left with them. When a new team came online, they invented their
    own version of the workflow. No one had ever mapped it end to end.

    I was brought in to change that.`,

    contextImage: "/croped-Journey-2.png",
    contextImageCaption: "Teams across Germany, Spain, USA, and India — operating with no shared process documentation.",

    challenge: {
      intro: `The symptoms were visible everywhere. The root cause was invisible
      to everyone — because no one had standing to see the whole.`,

      symptoms: [
        {
          icon: "eye-off",
          title: "No Shared Visibility",
          description: `Managers could see their team's slice of the process.
          Nobody could see the full chain. Dependencies were discovered
          reactively — usually when something broke.`
        },
        {
          icon: "brain",
          title: "Knowledge Concentrated in Individuals",
          description: `Critical steps were undocumented and held by a handful
          of long-tenured engineers. Onboarding a new team member meant weeks
          of shadowing, hoping to catch the right person on the right day.`
        },
        {
          icon: "alert-circle",
          title: "Inconsistent Quality Across Regions",
          description: `Each site had built its own toolchain, its own templates,
          its own definition of "done." Quality varied. SLAs were impossible to
          enforce consistently. Errors meant restarting from scratch.`
        }
      ],

      constraint: `The process involved deeply technical workflows — specialized
      tools, telecom acronyms, and legacy systems built over a decade. I had to
      earn credibility with engineers who had no reason to trust an outsider with
      their process, and make sense of complexity that resisted simplification.`
    },

    process: [
      {
        phase: "Discovery — Round 1",
        duration: "Weeks 1–4",
        content: `I started by mapping what I didn't know. Before the first
        interview, I spent two weeks reading internal documentation — outdated
        as it was — to build enough vocabulary to ask useful questions.

        Over 11 in-depth interviews (90 minutes each), I spoke with Profile
        Engineers, Customer Project Managers, Test Center leads, and Customer
        Operations staff. I asked each person to walk me through their version
        of the process — what they did, who they handed off to, and where
        things went wrong.

        What emerged immediately: no two people described the same process.
        Not because they were wrong — but because each had only ever seen
        their own slice.

        Still, I was able to align everyone around five main phases:`,

        image: "/phases.png",
        imageStyle: "plain"
      },
      {
        phase: "Definition — Round 1",
        duration: "Weeks 5–7",
        content: `I synthesized the interviews into a first-draft flow diagram
        covering all five main phases of a VRS order — the smallest, most
        frequent, and therefore most representative order type.

        This wasn't the final map. It was a provocation — something concrete
        enough to be wrong about, which made it useful. I brought it back to
        stakeholders in collaborative workshops and asked them to break it.
        They did. That was the point.`,

        image: "/VRS-Orders.jpg"
      },
      {
        phase: "Discovery — Round 2",
        duration: "Weeks 8–10",
        content: `The workshops surfaced what interviews couldn't: the gaps
        between teams. When engineers from Germany and Spain sat with the same
        diagram for the first time, they discovered they had different names
        for the same step — and different owners for the same handover.

        I also conducted a full tool audit: every spreadsheet, script, email
        template, and internal system used across all four sites. The result
        was a map of fragmentation made visible.`,
      },
      {
        phase: "Definition — Round 2",
        duration: "Weeks 11–20",
        content: `With validated process knowledge, I built the complete
        Journey Map — layering stakeholder quotes, pain points, tool touchpoints,
        and opportunity signals across every phase.

        I then translated the map into a strategic presentation for leadership:
        six opportunity areas, three implementation pillars, a prioritized
        roadmap. The goal wasn't just to document — it was to create the
        conditions for change.`,

        image: "/Profile-Generation-Journey-Map-small.jpg"
      }
    ],

    findings: [
      {
        title: "No Common Input Standard",
        quote: `"We don't have a pattern... the input file is very simple,
        it's a .txt, but each one has their own way."`,
        insight: `Every customer — and every team — used a different file format
        to initiate profile generation. Engineers spent hours manually transforming
        inputs before any real work could begin. Each transformation was a chance
        for error.`
      },
      {
        title: "Tools Built in Isolation",
        quote: `"Some teams have their own specific tools created by themselves...
        it would be helpful if different sites shared the tools."`,
        insight: `Teams had independently engineered workarounds to fill gaps
        in the official toolchain. Some were scripts. Some were spreadsheets.
        All were invisible to other sites — and unmaintainable when the person
        who built them moved on.`
      },
      {
        title: "A Broken Feedback Loop",
        quote: `"When the customer is happy and signs off, we are not
        informed automatically."`,
        insight: `Profile Engineers had no way of knowing whether their work
        was accepted. The process simply ended — in silence. Without feedback,
        there was no learning. Without learning, errors repeated.`
      },
      {
        title: "A Process That Outgrew Itself",
        quote: `"This process was inherited from when we had 10 clients.
        Now we have many more, but we're still doing the same."`,
        insight: `The workflow hadn't been redesigned since the company's early
        days. It had been patched and extended — but never rethought. New team
        members created documentation because they were the only ones who noticed
        what was missing.`
      }
    ],

    strategy: {
      intro: `Six opportunity areas. Three pillars. One clear direction.`,
      pillars: ["Standardization", "Documentation", "Automation"],
      opportunities: [
        {
          number: "01",
          title: "Company-Wide Tool & Process Standards",
          impact: "High",
          feasibility: "High",
          phase: 1,
          quarter: "Q1",
          solution: `Develop unified standards for tools and process steps across
          all sites, with a governance model for continuous alignment.`,
          outcome: `Shared tools create shared language. Cross-site collaboration
          becomes possible. KPIs become measurable.`
        },
        {
          number: "02",
          title: "Customer Self-Service Ordering Platform",
          impact: "High",
          feasibility: "High",
          phase: 1,
          quarter: "Q1",
          status: "in-testing",
          solution: `A platform that allows customers to directly order eSIM profiles,
          connected to the Cost team for commercial validation and to Profile Engineers
          for production — eliminating the manual ordering process entirely.`,
          outcome: `Customers place orders independently. Sales and Profile Engineer teams
          receive structured, actionable requests. End-to-end traceability from order
          to delivery, with a first customer already onboarded.`
        },
        {
          number: "03",
          title: "Structured Documentation Framework",
          impact: "High",
          feasibility: "High",
          phase: 1,
          quarter: "Q2",
          solution: `A modular, centralized documentation system with clear
          ownership, version control, and quarterly review cycles.`,
          outcome: `New team members can onboard without a dedicated guide.
          Tribal knowledge becomes institutional knowledge.`
        },
        {
          number: "04",
          title: "Regular Feedback & Retrospective Cadence",
          impact: "High",
          feasibility: "High",
          phase: 1,
          quarter: "Q2",
          solution: `Structured retrospectives across stakeholder groups to
          surface bottlenecks, review metrics, and prevent process debt.`,
          outcome: `Teams stay aligned. Process improvements happen continuously,
          not only when something breaks.`
        },
        {
          number: "05",
          title: "Unified Management System",
          impact: "High",
          feasibility: "Medium",
          phase: 2,
          solution: `Complete the internal tool roadmap to cover all workflows,
          eliminating parallel systems and creating a single source of truth.`,
          outcome: `One tool for all flows. Reduced switching overhead.
          Automated pre-fills reduce manual work.`
        },
        {
          number: "06",
          title: "Customer Acceptance Notification",
          impact: "High",
          feasibility: "Medium",
          phase: 2,
          solution: `Automated notification to Profile Engineers when customers
          confirm acceptance — closing the feedback loop.`,
          outcome: `Engineers learn from outcomes. Errors become visible.
          Quality improves over time.`
        },
        {
          number: "07",
          title: "Standardized Input File Template",
          impact: "High",
          feasibility: "Low",
          phase: 2,
          solution: `A standard input schema with pre-configured templates
          for different customer segments.`,
          outcome: `Reliable parsing. Fewer errors. Faster onboarding
          for new customers.`
        }
      ],
      image: "IMAGE_PLACEHOLDER_ROADMAP"
    },

    outcome: {
      intro: `The journey map became the first shared document in the company's
      history that showed the complete profile generation process — from initial
      customer request to final acceptance — across all global teams.`,

      metrics: [
        {
          value: "12+",
          label: "Teams aligned",
          context: "across 4 countries, for the first time"
        },
        {
          value: "11",
          label: "Stakeholder interviews",
          context: "90 minutes each, across all global sites"
        },
        {
          value: "7",
          label: "Strategic opportunities",
          context: "prioritized by impact and feasibility"
        },
        {
          value: "4/4",
          label: "Phase 1 initiatives approved",
          context: "by leadership following the final presentation"
        }
      ],

      narrative: `Leadership approved all four Phase 1 initiatives:
      the standardization roadmap, the documentation framework, the
      quarterly retrospective process, and a customer-facing ordering
      platform. The platform is already in active testing with a first
      customer — connecting them directly to the Cost team and Profile Engineers,
      and eliminating the manual ordering process entirely.
      That project is documented separately.`
    },

    reflection: `Working on this journey revealed that complexity in B2B operational systems rarely comes only from the tools or interfaces. Much of it comes from the diversity of customer setups, legacy decisions, and long-established ways of working across teams.

Many of the steps in the process exist because each customer has slightly different requirements, formats, or systems. As a result, teams have historically adapted the workflow case by case rather than enforcing a single standardized flow. While standardization could bring efficiency, it also requires balancing operational realities and business priorities.

That's why, instead of forcing internal teams or customers to change their established ways of working, we proposed the development of a platform where customers can create profile orders themselves. Through this platform they can edit profile configurations and upload their input files directly, offering an alternative and more structured way to request profiles without disrupting existing processes.

Conducting these interviews was also a valuable learning experience for me. They helped me gain a deeper understanding of areas of the company I was not previously exposed to, including technical and operational processes behind profile generation. This broader perspective now allows me to approach future projects with more context and confidence, and to collaborate more effectively with teams across the organization.

Ultimately, the journey map became less about proposing immediate redesigns and more about creating a shared understanding of how the process actually works today. That shared visibility is a necessary first step before meaningful improvements or automation can realistically happen.`,

    nextProject: "esim-ordering-platform"
  },

  {
    id: 2,
    slug: "esim-ordering-platform",
    title: "The Platform the Map Made Possible",
    subtitle: "Designing a self-service ordering experience for eSIM profile generation",
    category: "Product Design",
    year: "2025",
    role: "UX Designer & Scrum Master",
    duration: "Ongoing",
    scope: "Zero-to-one product design — research through shipped interface",
    company: "International Mobile Technology Company",
    tags: ["Product Design", "Systems Design", "Scrum", "B2B UX"],

    heroImage: "IMAGE_PLACEHOLDER_HERO_P2",
    heroAlt: "eSIM ordering platform — interface overview",

    hook: `The journey map revealed the problem. This project is the answer.`,

    overview: `Before this platform existed, customers ordered eSIM profiles
    the way they always had — by email, with attached files in formats that
    varied by customer, by region, and by whoever had set up the process years
    ago. Each order required manual transformation by internal engineers before
    anything could begin.

    The journey mapping project made the cost of this visible: hours of
    overhead per order, errors from inconsistent inputs, no status visibility
    for customers, no feedback loop for engineers. The case for a self-service
    platform was now grounded in evidence.

    This is that platform.`,

    challenge: `The design problem had two sides that pulled against each other.
    Customers needed simplicity — a guided flow that didn't require them to
    understand the internal process. Internal teams needed precision —
    structured inputs that matched exactly what the profile generation system
    expected.

    The platform had to resolve that tension invisibly. Every validation rule,
    every field label, every status message had to absorb complexity on the
    backend while feeling effortless on the frontend. And it had to do this
    for customers across multiple countries, with different technical literacy,
    ordering different product types.`,

    process: [
      {
        phase: "Research Foundation",
        content: `Rather than starting from scratch, this project built
        directly on the journey mapping work. The stakeholder interviews,
        tool audit, and pain point analysis provided a research foundation
        that most product projects never have.

        I ran a focused second round of research on the customer side:
        what information do customers need to provide at each step,
        where do they typically make errors, and what visibility do they
        expect after submitting an order?`,

        image: "IMAGE_PLACEHOLDER_P2_PROCESS_1"
      },
      {
        phase: "Information Architecture",
        content: `I mapped the core flow: order intake → input validation →
        configuration review → submission → status tracking. Each stage had
        to match a corresponding internal workflow step — making the IA a
        direct translation of the journey map into interaction design.

        The key architectural decision was where to validate. Inline validation
        at input time — rather than at submission — was essential for preventing
        the formatting errors that had caused so many manual corrections.`,
      },
      {
        phase: "Design & Prototyping",
        content: `I designed the interface in Figma, prioritizing guided input
        over free-form fields wherever possible. Customers who had previously
        submitted a .txt file with custom formatting now moved through a
        structured form that handled formatting invisibly.

        Prototypes were tested with internal proxy users — team members
        who had direct customer contact and could simulate customer behavior
        accurately. Three rounds of testing, progressively higher fidelity.`,

        image: "IMAGE_PLACEHOLDER_P2_PROCESS_2"
      },
      {
        phase: "Delivery & Scrum",
        content: `Beyond design, I acted as Scrum Master throughout the
        build phase — facilitating sprint planning, daily standups, and
        retrospectives across a cross-functional team with members in
        two time zones.

        This dual role — designer and process owner — meant I could
        catch design-implementation drift early. When a developer's
        interpretation of a component diverged from intent, I was
        in the room to course-correct before it became rework.`,
      }
    ],

    outcome: `A customer-facing platform that gives clients direct control
    over their profile orders for the first time. Standardized input removes
    the manual transformation step that was the primary source of error
    and overhead. Order status is visible in real time. The feedback loop
    that the journey map identified as broken is now closed by design.

    This project is the clearest example in my work of research turning
    directly into product. Every design decision traces back to a specific
    finding from the journey mapping phase.`,

    outcomeImage: "IMAGE_PLACEHOLDER_P2_OUTCOME",

    reflection: `This project reinforced something I believe about
    the value of sequencing in design work. The research phase wasn't
    just preparation — it was the design brief. Walking into a product
    problem with deep process knowledge meant every decision had a
    reason, and every tradeoff was visible.

    It also confirmed that being both the designer and the Scrum Master
    on a project creates friction worth having. You lose the distance
    that pure facilitation gives you, but you gain the ability to protect
    design intent through the entire delivery cycle — not just hand it
    over and hope.`,

    prevProject: "esim-journey-mapping",
    nextProject: null
  }
]
