import { ServiceItem, BlogArticle, Testimonial } from '../types';

export const BUSINESS_INFO = {
  name: "Pest Free Services",
  tradeName: "Grant's Pest Free Services",
  founder: "Grant Arnold",
  legalForm: "Close Corporation (CC)",
  regNumber: "B2011063958",
  vatNumber: "9365327171",
  incorporatedYear: "2011",
  address: "24 Kensington Gardens, Umbilo, Durban, 4001, KwaZulu-Natal",
  phone: "082 555 7890",
  landline: "031 205 4890",
  email: "grant@pestfreeservices.co.za",
  hours: "Mon - Sat: 07:30 - 17:30 | 24/7 Emergency Response",
  stats: {
    yearsInBusiness: "14+",
    householdsServed: "650+",
    bioFriendlyRate: "100%",
    entomologistVerified: "UKZN Certified"
  }
};

export const DURBAN_SUBURBS = [
  "Umbilo",
  "North Beach",
  "South Beach",
  "Morningside",
  "Durban North",
  "Umhlanga",
  "Musgrave",
  "Glenwood",
  "Westville",
  "Kloof",
  "Hillcrest",
  "Pinetown",
  "Berea",
  "La Lucia",
  "Amanzimtoti",
  "Ballito"
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "wood-borer",
    name: "Wood-Borer & Termite Bio-Treatment",
    category: "pest",
    iconName: "ShieldAlert",
    shortDesc: "Our flagship non-fumigation bio-friendly treatment for subterranean and drywood borers.",
    fullDesc: "Durban's coastal humidity creates prime conditions for wood-borer larvae to hollow out wooden floors, structural beams, and antique furniture. Traditional providers insist on heavy tent fumigation requiring complete evacuation. Grant's proprietary bio-treatment penetrates deep into wood grain to eradicate larvae and beetles with zero tents, zero toxic fumes, and zero household evacuation.",
    bioAdvantage: "Bio-based formulation verified by UKZN entomologists. Safe for pets, children, and plants.",
    priceEstimate: "R1,450 - R3,200",
    isFlagship: true
  },
  {
    id: "cockroaches",
    name: "Cockroach Eradication",
    category: "pest",
    iconName: "Bug",
    shortDesc: "Targeted gel baiting and odorless bio-repellents for German & American roaches.",
    fullDesc: "Durban's warm climate breeds resilient cockroach colonies in kitchens and drainage. We employ odorless bio-gels that eliminate colonies at the nest without liquid mess or toxic odors.",
    bioAdvantage: "Targeted micro-baiting that destroys the nest without chemical overspray.",
    priceEstimate: "R650 - R1,200"
  },
  {
    id: "ants",
    name: "Ant Colony Control",
    category: "pest",
    iconName: "Footprints",
    shortDesc: "Perimeter eco-barriers and queen-targeting bait matrices.",
    fullDesc: "Eliminates garden ants and sugar ants invading food areas. Our eco-barrier stops new scouts while workers carry non-toxic organic growth regulators back to destroy the queen.",
    bioAdvantage: "Long-lasting botanical barrier safe for kitchen countertops.",
    priceEstimate: "R550 - R950"
  },
  {
    id: "bed-bugs",
    name: "Bed Bug & Thermal Treatment",
    category: "pest",
    iconName: "Bed",
    shortDesc: "Comprehensive eco-steam and bio-active extraction for mattresses and frames.",
    fullDesc: "Complete mattress and soft furniture treatment that kills bed bug adults and eggs instantly without chemical residue on sleeping surfaces.",
    bioAdvantage: "High-temperature organic vapor extraction with immediate room re-entry.",
    priceEstimate: "R950 - R2,100"
  },
  {
    id: "dust-mites",
    name: "Dust Mite & Allergen Neutralizer",
    category: "pest",
    iconName: "Sparkles",
    shortDesc: "Deep mattress and upholstery sanitation reducing asthma and skin triggers.",
    fullDesc: "Essential for Durban's high humidity where dust mite populations thrive. We neutralize allergens using natural enzymes.",
    bioAdvantage: "Hypoallergenic enzyme solution safe for sensitive skin and infants.",
    priceEstimate: "R500 - R850"
  },
  {
    id: "mosquitoes",
    name: "Mosquito Barrier Protection",
    category: "pest",
    iconName: "Wind",
    shortDesc: "Plant-derived foliage sprays and gutter larva controls for outdoor spaces.",
    fullDesc: "Keeps outdoor patios, verandas, and gardens free of biting mosquitoes with essential plant oil barrier applications.",
    bioAdvantage: "All-natural essential oil blend harmless to bees and garden flora.",
    priceEstimate: "R750 - R1,400"
  },
  {
    id: "snakes-geckos",
    name: "Snake & Gecko Control",
    category: "pest",
    iconName: "ShieldCheck",
    shortDesc: "Humane snake relocation, perimeter repelling, and gecko entry proofing.",
    fullDesc: "Durban gardens and roof cavities frequently attract harmless geckos as well as venomous snakes (green mambas, cobras, night adders). Grant provides safe, humane relocation and natural bio-repellent application.",
    bioAdvantage: "100% humane, non-lethal organic repellents.",
    priceEstimate: "R800 - R1,500"
  },
  {
    id: "handyman-repairs",
    name: "Handyman Wooden Repairs",
    category: "handyman",
    iconName: "Wrench",
    shortDesc: "Expert restoration of borer-damaged doors, windows, and cupboards.",
    fullDesc: "Once borer or moisture has damaged your woodwork, we don't just stop the pest — Grant personally repairs or rebuilds damaged wooden window frames, sagging wooden doors, and compromised kitchen cupboards.",
    bioAdvantage: "Seamless timber restoration paired directly with preservative bio-sealing.",
    priceEstimate: "Custom Quote upon inspection"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    clientName: "Body Corporate Supervisor (Baumann Ave Flats)",
    suburb: "North Beach, Durban",
    quote: "Back in 2012, our block of flats was heavily infested with wood-borer right before a tenant was due to move in. Grant treated the flat with his bio-friendly method without tenting the building. The borer inside were eradicated completely, and dead adults were found along the corridor outside. It saved us thousands in tenting costs!",
    rating: 5,
    serviceType: "Wood-Borer Treatment",
    year: "2012 Trial",
    verifiedBadge: "UKZN Entomologist Confirmed"
  },
  {
    id: "t2",
    clientName: "David & Sarah K.",
    suburb: "Morningside, Durban",
    quote: "We were terrified when we noticed fine yellow dust under our hardwood Oregon pine floors. Other companies quoted astronomical prices and demanded we pack up and leave for 3 days. Grant Arnold arrived, treated the floors bio-friendly while we stayed home, and 2 years later our floors are pristine!",
    rating: 5,
    serviceType: "Wood-Borer Floor Restoration",
    year: "2024"
  },
  {
    id: "t3",
    clientName: "Prashant Naidoo",
    suburb: "Umbilo, Durban",
    quote: "Grant is an absolute gentleman. Not only did he eradicate a stubborn German cockroach infestation in my restaurant kitchen using odorless gel, but he also fixed a sticking wooden door frame the next morning! That's true owner service.",
    rating: 5,
    serviceType: "Cockroach Control & Door Repair",
    year: "2025"
  },
  {
    id: "t4",
    clientName: "Jennifer Miller",
    suburb: "Umhlanga Rocks",
    quote: "Living near coastal bush, we had a snake scare in our garden. Grant responded within 40 minutes, humanely removed the snake, and treated our garden perimeter with eco-repellent. Highly recommended!",
    rating: 5,
    serviceType: "Snake & Gecko Relocation",
    year: "2025"
  },
  {
    id: "t5",
    clientName: "Thabo Mthembu",
    suburb: "Durban North",
    quote: "No chemical smell, no ruined furniture, no hassle. As someone with severe asthma, Grant's bio-friendly pest control was a breath of fresh air. 100% genuine Durban business.",
    rating: 5,
    serviceType: "Bed Bug & Allergen Treatment",
    year: "2026"
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "wood-borer-signs-durban",
    title: "5 Warning Signs of Wood-Borer Infestation in Durban Homes",
    category: "Wood-Borer & Termites",
    excerpt: "Durban's humid coastal climate creates the ideal breeding ground for wood-borer beetles. Learn how to spot early signs before structural timber damage occurs.",
    content: [
      "If you live in Durban or surrounding coastal areas like Morningside, Umbilo, or North Beach, your timber floors, skirting boards, and antique furniture are constantly exposed to high humidity — the exact environment drywood and powderpost borers thrive in.",
      "1. Fine Frass or 'Wood Powder': The most common indicator is tiny piles of flour-like dust beneath wooden furniture, floorboards, or door frames. This powder is frass produced by borer larvae as they tunnel.",
      "2. Tiny Round Exit Holes: Clean-cut 1mm to 2mm circular holes appearing on Oregon pine floors, roof trusses, or cupboard backs mean adult beetles have matured and emerged.",
      "3. Weak or Spongy Floorboards: If your timber floor creaks excessively or feels soft underfoot, borer larvae may have hollowed out the internal wood fibers.",
      "4. Dead Adult Beetles near Windows: Adult beetles fly toward natural sunlight. Finding small brownish beetles on windowsills during spring and summer is a clear red flag.",
      "5. Crumbling Edge Timber: Doors or wooden window sills that break apart easily when light pressure is applied usually indicate heavy internal damage.",
      "Why Bio-Friendly Treatment Works Best: Traditional fumigation tents submerge your home in heavy gases that dissipate quickly, whereas Pest Free Services' bio-treatment penetrates deep into the wood fibers, killing larvae instantly and leaving an organic residual barrier without requiring you to pack up or leave your home."
    ],
    readTime: "4 min read",
    date: "July 12, 2026",
    author: "Grant Arnold",
    tags: ["Wood-Borer", "Durban Homes", "Eco Treatment", "Timber Protection"],
    seoDescription: "Identify early wood borer signs in Durban houses. Learn frass, exit holes, and bio-friendly non-fumigation treatment solutions."
  },
  {
    id: "bio-friendly-vs-tent-fumigation",
    title: "Bio-Friendly Pest Control vs. Chemical Tent Fumigation",
    category: "Eco Tips",
    excerpt: "Why Durban homeowners are choosing non-fumigation bio-treatments over inconvenient and chemical-heavy fumigation tents.",
    content: [
      "For decades, the standard response to a wood-borer outbreak in KwaZulu-Natal was 'tenting' — wrapping an entire house in giant tarpaulins and pumping toxic fumigants inside. While dramatic, tenting carries severe downsides for modern families.",
      "The Inconvenience of Tenting: Tenting requires all residents, pets, and indoor plants to evacuate for 3 to 5 days. Food items must be double-bagged or removed, and there is always a risk of roof tile damage from heavy tent riggers.",
      "The Bio-Friendly Advantage: At Pest Free Services, Grant Arnold pioneered a bio-based non-fumigation methodology back in 2012. Our organic formulation is applied directly to affected and vulnerable timber surfaces.",
      "1. Zero Household Displacement: You remain safely in your home during and immediately after the treatment.",
      "2. No Toxic Residue: Safe for babies, pets, and elderly family members.",
      "3. Proven Scientific Results: Independently tested and verified by UKZN-trained entomologists after our landmark trial at North Beach.",
      "4. Cost Efficiency: Because we don't require heavy scaffolding or tenting crews, we pass significant savings directly to Durban property owners."
    ],
    readTime: "5 min read",
    date: "June 28, 2026",
    author: "Grant Arnold",
    tags: ["Non-Fumigation", "Bio-Friendly", "Durban Pest Control", "Home Safety"],
    seoDescription: "Compare bio-friendly non-fumigation pest control with traditional tent fumigation in Durban. Safe, cost-effective, zero house evacuation."
  },
  {
    id: "wooden-window-door-maintenance-durban",
    title: "How to Prevent Wood-Borer Damage in Wooden Windows & Doors",
    category: "Handyman Repair",
    excerpt: "Coastal humidity causes timber expansion and borer vulnerability. Here is how Grant restores and seals wooden fixtures.",
    content: [
      "Wooden sash windows and heavy timber doors add timeless charm to Durban homes, but coastal salt spray, rain, and humidity make untreated timber susceptible to fungal rot and borer larvae.",
      "Step 1: Check Weather Seals & Varnishes: Cracked varnish allows moisture to enter wood grain, creating softened fibers that female borer beetles love for egg-laying.",
      "Step 2: Apply Bio-Preservative Oils: Periodically treating raw wood surfaces with bio-friendly preservative oil repels insects while maintaining timber elasticity.",
      "Step 3: Prompt Handyman Repairs: If your wooden door sticks or sills crumble, repairing damaged sections early prevents infestation from spreading to structural roof trusses.",
      "At Pest Free Services, we don't just treat pests — Grant personally offers wooden window, door, and cupboard repair services to restore your property's value."
    ],
    readTime: "3 min read",
    date: "June 15, 2026",
    author: "Grant Arnold",
    tags: ["Handyman", "Wooden Windows", "Door Repairs", "Durban Restoration"],
    seoDescription: "Tips for maintaining wooden windows and doors in Durban. How to fix borer-damaged timber with Grant's pest and handyman services."
  },
  {
    id: "snake-safety-gecko-durban-gardens",
    title: "Durban Garden Safety: Managing Geckos and Snakes Safely",
    category: "Durban Pest Guide",
    excerpt: "Lush Durban gardens are home to wildlife. Learn how to keep venomous snakes away while managing gecko populations humanely.",
    content: [
      "KwaZulu-Natal's warm sub-tropical climate means gardens in suburbs like Berea, Westville, and Umhlanga frequently encounter wildlife.",
      "Geckos: Harmless but noisy or invasive when in large numbers inside roof cavities. We use physical proofing and harmless natural repellents to keep them outdoors where they belong.",
      "Snakes: Common species in Durban include harmless spotted bush snakes as well as venomous Black Mambas, Green Mambas, and Mozambique Spitting Cobras. Never attempt to catch or corner a snake yourself.",
      "Emergency Snake Guidelines: Keep kids and pets at least 5 meters away, keep eyes on the snake from a distance, and call Grant Arnold immediately for expert humane removal."
    ],
    readTime: "4 min read",
    date: "May 30, 2026",
    author: "Grant Arnold",
    tags: ["Snakes", "Geckos", "Durban Gardens", "Emergency Pest"],
    seoDescription: "Safe handling and humane snake & gecko control in Durban gardens. Emergency contact for Grant's Pest Free Services."
  }
];
