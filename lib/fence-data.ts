export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
  popular?: boolean;
  warranty: string;
  lifespan: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'Vinyl / PVC' | 'Wood Privacy' | 'Aluminum & Ornamental' | 'Chain Link' | 'Farm & Decks';
  location: string;
  linearFeet: string;
  image: string;
  description: string;
  highlights: string[];
  duration: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  service: string;
  review: string;
  verified: boolean;
}

export const COMPANY_INFO = {
  name: 'Quality Fence Works LLC',
  legalName: 'Quality Fence Works LLC',
  phone: '(703) 856-5215',
  phoneRaw: '7038565215',
  email: 'qualityfenceworkllc@gmail.com',
  address: 'Northern Virginia & Greater Washington DC Metro Area',
  license: 'VA Licensed & Fully Insured Commercial & Residential Contractor',
  yearsExperience: '15+',
  hours: 'Mon - Sat: 7:00 AM - 7:00 PM | 24/7 Emergency Storm Damage Calls',
  threadsProfile: 'https://www.threads.com/@antonio131696',
  threadsHandle: '@antonio131696',
  coreOfferings: ['PVC & Vinyl', 'Wood Privacy', 'Aluminum', 'Chain Link', 'Decks', 'Patios'],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'vinyl-fence',
    title: 'PVC & Vinyl Fence Installation',
    tagline: 'Zero-Maintenance Lifetime Privacy & Security',
    description:
      'Engineered with heavy-gauge virgin vinyl UV inhibitors that will never rot, peel, or require repainting. Our solid tongue-and-groove pickets and reinforced gate uprights provide ultimate residential privacy with standard HOA compliance across Northern Virginia.',
    features: [
      'Heavy-duty virgin vinyl with UV protection',
      'Solid tongue-and-groove panels (no gaps)',
      'Aluminum-reinforced bottom rails prevent sagging',
      'Steel-reinforced post inserts on all swinging gates',
      'HOA compliant heights: 4ft, 5ft, and 6ft',
    ],
    image: '/assets/aistudio/831492650_122333258252224375_1164876312457662615_n_1bd70c7d.jpg',
    popular: true,
    warranty: 'Lifetime Manufacturer Material Warranty',
    lifespan: '30+ Years',
  },
  {
    id: 'wood-fence',
    title: 'Custom Wood Privacy & Board-on-Board',
    tagline: 'Warm Organic Craftsmanship & Custom Terrain Grading',
    description:
      'Handcrafted on-site with premium pressure-treated southern pine or Western red cedar. We tailor every shadowbox, board-on-board, dog-ear, and horizontal panel to match the natural contours of your lawn and hills without awkward bottom gaps.',
    features: [
      'Choice of #1 Grade Pressure-Treated Pine or Cedar',
      'Board-on-board overlapping pickets for 100% true privacy',
      '2x4 top/middle/bottom horizontal backing stringers',
      '4x4 or 6x6 posts sunk deep in high-strength concrete',
      'Optional 2x6 finished cap rail and decorative trim',
    ],
    image: '/assets/aistudio/886168088_122340146924224375_861486219090302653_n_3c6783d7.jpg',
    popular: true,
    warranty: '5-Year Workmanship & Structure Warranty',
    lifespan: '20-25 Years',
  },
  {
    id: 'aluminum-fence',
    title: 'Ornamental Aluminum & Security',
    tagline: 'Sleek Estate Elegance & Certified Pool Code Safety',
    description:
      'Powder-coated architectural aluminum that delivers the regal aesthetic of wrought iron with zero rust. Rakeable panels gracefully step down steep grades between homes and meet all local BOCA safety codes for swimming pools.',
    features: [
      'Multi-stage commercial powder coat finish in matte black',
      'Concealed screw-less fastener technology',
      'BOCA & local Virginia swimming pool code compliant',
      'Rackable panels for steep slopes and rolling terrain',
      'Child-safe magnetic self-closing MagnaLatch options',
    ],
    image: '/assets/aistudio/884823143_122340146972224375_3220186993496971353_n_9688ab5e.jpg',
    popular: false,
    warranty: 'Lifetime Finish & Corrosion Warranty',
    lifespan: '35+ Years',
  },
  {
    id: 'chain-link',
    title: 'Galvanized & Black Vinyl Chain Link',
    tagline: 'Economical, Durable Yard & Pet Security',
    description:
      'A dependable, budget-friendly boundary solution for yards, dog runs, and wooded acreage. Available in classic hot-dipped galvanized steel or sleek black vinyl-coated mesh that blends subtly into wooded landscapes and vegetation.',
    features: [
      'Heavy 9-gauge galvanized or black vinyl-coated mesh',
      'Tubular steel top rails and heavy corner terminal posts',
      'Tension wire bottom to prevent dogs digging under',
      'Rust-resistant hardware, latches, and caps',
      'Commercial grade or residential heights (4ft, 5ft, 6ft)',
    ],
    image: '/assets/aistudio/870354898_122339113262224375_9206968771107175932_n_382a5863.jpg',
    popular: false,
    warranty: '10-Year Rust & Workmanship Warranty',
    lifespan: '25+ Years',
  },
  {
    id: 'decks-patios',
    title: 'Custom Decks, Patios & Gates',
    tagline: 'Expand Your Outdoor Living & Yard Accessibility',
    description:
      'Complete outdoor carpentered living spaces including pressure-treated and composite decks, stairs, railings, stone paver patios, and custom oversized drive gates built with structural internal cross-braces that never sag.',
    features: [
      'Custom deck design, footings, and code inspections',
      'Treated wood or premium low-maintenance composite boards',
      'Integrated wire rail, aluminum spindles, or solid balusters',
      'Oversized single and double-swing driveway gates',
      'Self-closing heavy gauge black powder-coated hinges',
    ],
    image: '/assets/aistudio/853141582_122336512808224375_6815886156800158024_n_8c9fafa4.jpg',
    popular: false,
    warranty: '5-Year Structural Workmanship Warranty',
    lifespan: '20-30 Years',
  },
  {
    id: 'fence-repairs',
    title: 'Fence Repair & Post Replacement',
    tagline: 'Storm Damage Restoration, Leaning Posts & Gates',
    description:
      'Fast turnaround repairs for storm-damaged panels, rotted post bases, vehicle strikes, and dragging gates. We dig out failed concrete collars and reset heavy-duty treated posts so your existing fence functions like new.',
    features: [
      'Emergency response for fallen panels & loose pets',
      'Hydraulic post extraction and fresh concrete setting',
      'Gate hinge re-alignment and drop-rod replacement',
      'Section match with existing weathered lumber or vinyl',
      'Insurance claim documentation and detailed quotes',
    ],
    image: '/assets/aistudio/885266556_122340147062224375_4218959900417183069_n_484fdf23.jpg',
    popular: false,
    warranty: 'Full 1-Year Repair Warranty',
    lifespan: 'Restored to Original Strength',
  },
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'proj-1',
    title: 'Loudoun County Subdivision White Vinyl Privacy',
    category: 'Vinyl / PVC',
    location: 'Ashburn, VA',
    linearFeet: '240 Linear Ft',
    image: '/assets/aistudio/831492650_122333258252224375_1164876312457662615_n_1bd70c7d.jpg',
    description:
      'Installed 6ft solid privacy vinyl along a corner residential boundary. Perfectly laser-leveled across undulating lawn with double gate access for zero maintenance privacy.',
    highlights: ['6ft Solid Tongue-and-Groove', 'Laser-leveled top rails', 'HOA architectural committee approved'],
    duration: '2 Days',
  },
  {
    id: 'proj-2',
    title: 'Fairfax Sloped Backyard Pressure-Treated Wood Privacy',
    category: 'Wood Privacy',
    location: 'Fairfax, VA',
    linearFeet: '185 Linear Ft',
    image: '/assets/aistudio/869932850_122339113376224375_4398391151928394633_n_072ca27a.jpg',
    description:
      'Custom dog-ear wood fence raked smoothly down a steep grade adjacent to the homeowner storage shed. Posts dug 36 inches into dense clay to prevent frost heave.',
    highlights: ['Raked slope installation', 'Pressure-treated #1 pine', '36-inch concrete post footings'],
    duration: '2 Days',
  },
  {
    id: 'proj-3',
    title: 'Ashburn Hillside Black Ornamental Aluminum Fence',
    category: 'Aluminum & Ornamental',
    location: 'Loudoun County, VA',
    linearFeet: '160 Linear Ft',
    image: '/assets/aistudio/884823143_122340146972224375_3220186993496971353_n_9688ab5e.jpg',
    description:
      'Installed 5ft flat-top black aluminum security fence between high-end townhome properties on steep grade. Meets all county guidelines with sleek modern elegance.',
    highlights: ['Multi-stepped panel design', 'Powder-coated rustproof finish', 'Concealed fasteners'],
    duration: '1.5 Days',
  },
  {
    id: 'proj-4',
    title: 'Woodland Boundary Black Vinyl-Coated Chain Link',
    category: 'Chain Link',
    location: 'Woodbridge, VA',
    linearFeet: '310 Linear Ft',
    image: '/assets/aistudio/870354898_122339113262224375_9206968771107175932_n_382a5863.jpg',
    description:
      'Large lot pet perimeter installed with black vinyl coated chain link mesh along a wooded property boundary. Disappears into tree canopy while securing energetic dogs.',
    highlights: ['Heavy gauge black vinyl mesh', 'Bottom tension wire', 'Seamless integration with wooded tree line'],
    duration: '2 Days',
  },
  {
    id: 'proj-5',
    title: 'Craftsman Board-on-Board Cedar Fence with Cap Rail',
    category: 'Wood Privacy',
    location: 'Reston, VA',
    linearFeet: '190 Linear Ft',
    image: '/assets/aistudio/886168088_122340146924224375_861486219090302653_n_3c6783d7.jpg',
    description:
      'Premium architectural board-on-board fence featuring overlapping pickets that eliminate shrinkage gaps, topped with a custom 2x6 routed top cap.',
    highlights: ['100% true privacy overlap', 'Architectural 2x6 top cap', 'Custom mortised corner posts'],
    duration: '3 Days',
  },
  {
    id: 'proj-6',
    title: 'Heavy-Duty White PVC Double Drive Gate with Hardware',
    category: 'Vinyl / PVC',
    location: 'Centreville, VA',
    linearFeet: '10ft Double Drive Gate',
    image: '/assets/aistudio/885266556_122340147062224375_4218959900417183069_n_484fdf23.jpg',
    description:
      'Custom 10-foot wide double drive vinyl gate with internal aluminum post stiffeners, heavy-duty black self-closing hinges, and stainless steel drop-pin lock.',
    highlights: ['Aluminum internal post reinforcement', 'Commercial black hardware', 'Drop rod security pin'],
    duration: '1 Day',
  },
  {
    id: 'proj-7',
    title: 'Equestrian Split Rail & Protective Farm Wire',
    category: 'Farm & Decks',
    location: 'Leesburg, VA',
    linearFeet: '450 Linear Ft',
    image: '/assets/aistudio/854729553_122336512814224375_2718215012085013928_n_67033636.jpg',
    description:
      'Traditional 3-rail pressure-treated post and board fence backing open pastures. Reinforced with welded wire backing to keep small pets and dogs safely inside.',
    highlights: ['Classic Virginia equestrian aesthetic', 'Welded wire pet backing', 'Rugged rot-resistant timber'],
    duration: '4 Days',
  },
  {
    id: 'proj-8',
    title: 'Townhouse Patio Shadowbox Wood Privacy Enclosure',
    category: 'Wood Privacy',
    location: 'Alexandria, VA',
    linearFeet: '120 Linear Ft',
    image: '/assets/aistudio/875356338_122339113418224375_7299277562119421432_n_73fa0a08.jpg',
    description:
      'Clean semi-privacy shadowbox installation separating adjoining townhouse courtyards. Allows breeze flow while providing superior privacy from neighboring windows.',
    highlights: ['Breeze-friendly shadowbox spacing', 'Precision property line boundary', 'Smooth sanded pickets'],
    duration: '1.5 Days',
  },
  {
    id: 'proj-9',
    title: 'Backyard Raised Deck & Protective Perimeter Rail',
    category: 'Farm & Decks',
    location: 'Manassas, VA',
    linearFeet: 'Custom Deck + 85ft Rail',
    image: '/assets/aistudio/853141582_122336512808224375_6815886156800158024_n_8c9fafa4.jpg',
    description:
      'Complete outdoor backyard living upgrade with custom treated pine deck stairs, platform landing, and connected yard perimeter fence.',
    highlights: ['Stout joist framing & piers', 'Integrated deck-to-yard transition', 'Heavy-duty safety railings'],
    duration: '3.5 Days',
  },
  {
    id: 'proj-10',
    title: 'Galvanized Steel Perimeter Fence with Shed Enclosure',
    category: 'Chain Link',
    location: 'Chantilly, VA',
    linearFeet: '210 Linear Ft',
    image: '/assets/aistudio/876603376_122339113334224375_1245338989403677095_n_4fd0dbff.jpg',
    description:
      'Clean commercial galvanized steel chain link installation wrapping property boundary and outdoor utility shed with single walk-through gate.',
    highlights: ['Galvanized anti-corrosion coating', 'Heavy tension bar hardware', 'Tight line along evergreen hedges'],
    duration: '1.5 Days',
  },
  {
    id: 'proj-11',
    title: 'Quality Fence Works Official Project Sign & Clean White Vinyl',
    category: 'Vinyl / PVC',
    location: 'Herndon, VA',
    linearFeet: '175 Linear Ft',
    image: '/assets/aistudio/885924226_122340146846224375_5176292162525368276_n_c238e8d3.jpg',
    description:
      'Freshly completed white vinyl installation showcase featuring Quality Fence Works LLC yard signage (703-856-5215). Clean lines and pristine lawn restoration.',
    highlights: ['Full HOA compliance approval', 'Virgin vinyl panels', 'Same-week install turnaround'],
    duration: '1 Day',
  },
  {
    id: 'proj-12',
    title: 'Subdivision Perimeter Full Vinyl Backyard Enclosure',
    category: 'Vinyl / PVC',
    location: 'Gainesville, VA',
    linearFeet: '290 Linear Ft',
    image: '/assets/aistudio/829381016_122333258240224375_2236086763123967068_n_f1322065.jpg',
    description:
      'Full perimeter enclosure for new construction home. Secure pet boundary with seamless transitions along sloping swale line.',
    highlights: ['Stepped top rail transition', 'Dog-proof bottom clearance', 'Reinforced corner anchors'],
    duration: '2.5 Days',
  },
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Marcus & Elena Vance',
    location: 'Ashburn, VA (Broadlands)',
    date: '2 weeks ago',
    rating: 5,
    service: 'Vinyl Privacy Fence Installation',
    review:
      'Antonio and his crew at Quality Fence Works did an incredible job on our 220-foot vinyl fence. Our HOA in Ashburn is notoriously strict, but Antonio provided all the specs, cut sheets, and diagram within 24 hours. The installation was finished in two days flat and every single line is laser straight. Best contractor experience we have had in Northern VA!',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'David K. Henderson',
    location: 'Fairfax, VA',
    date: '1 month ago',
    rating: 5,
    service: 'Custom Wood Privacy Fence',
    review:
      'Our backyard has a tough 15-degree slope that two other fence companies wanted to charge an arm and a leg for. Antonio came out personally, gave an honest, very fair on-site estimate, and built a custom pressure-treated fence that hugs the ground with zero gaps. Super polite, cleaned up every piece of sawdust, and finished on time. Call 703-856-5215, you will not regret it.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Sarah Jenkins',
    location: 'Leesburg, VA',
    date: '3 months ago',
    rating: 5,
    service: 'Split Rail Fence with Wire Mesh for Dogs',
    review:
      'We have two energetic golden retrievers and 1.5 acres in Leesburg. Quality Fence Works built a gorgeous 3-rail post and board fence with black wire backing that keeps the dogs 100% secure without blocking our countryside view. Unmatched workmanship and reasonable pricing.',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Robert Thornton',
    location: 'Alexandria, VA',
    date: '4 months ago',
    rating: 5,
    service: 'Black Aluminum Fence & Patio Gate',
    review:
      'Top-notch professionalism. The black aluminum fence around our patio and garden looks like a million bucks. The self-closing gate latches smoothly and safely. Antonio answered every text immediately and made sure we inspected everything together before final payment.',
    verified: true,
  },
];

export const INSTALLATION_STEPS = [
  {
    step: 'STEP 01',
    title: 'REQUEST A FREE ESTIMATE',
    description:
      'Call (703) 856-5215 or submit our quick online form. We schedule a convenient, no-obligation on-site consultation at your property.',
    detail: 'Same-day callback & transparent itemized pricing',
  },
  {
    step: 'STEP 02',
    title: 'ON-SITE MEASUREMENT & DESIGN',
    description:
      'We walk your property lines, inspect yard slopes and terrain, discuss PVC, wood, aluminum, or chain link styles, and provide your exact quote.',
    detail: 'HOA spec sheets and permit assistance included',
  },
  {
    step: 'STEP 03',
    title: 'UTILITY MARKING & SITE PREP',
    description:
      'We coordinate with Miss Utility (811) to mark underground electrical, gas, and plumbing lines before any digging begins to ensure 100% safety.',
    detail: 'Safety first: zero risk to underground pipes or cables',
  },
  {
    step: 'STEP 04',
    title: 'PROFESSIONAL INSTALLATION',
    description:
      'Our seasoned crew arrives on time. We dig deep post holes below the frost line, pour high-strength concrete, assemble tight panels, and hang heavy-duty gates.',
    detail: 'Most residential fences completed in 1 to 2 days',
  },
  {
    step: 'STEP 05',
    title: 'FINAL QUALITY CHECK & WALKTHROUGH',
    description:
      'We inspect every post for plumb, test every gate latch, sweep and remove all job site debris, and walk the completed fence with you to ensure perfection.',
    detail: '100% satisfaction guarantee before job completion sign-off',
  },
];

export const SERVICE_AREAS = [
  { county: 'Fairfax County', cities: ['Fairfax', 'Reston', 'Herndon', 'Vienna', 'McLean', 'Centreville', 'Chantilly', 'Burke', 'Springfield', 'Annandale'] },
  { county: 'Loudoun County', cities: ['Ashburn', 'Leesburg', 'Sterling', 'Purcellville', 'South Riding', 'Aldie', 'Brambleton'] },
  { county: 'Prince William County', cities: ['Manassas', 'Woodbridge', 'Gainesville', 'Haymarket', 'Bristow', 'Dumfries'] },
  { county: 'Arlington & Alexandria', cities: ['Arlington', 'City of Alexandria', 'Falls Church', 'Franconia', 'Mount Vernon'] },
];

export const FAQS = [
  {
    q: 'How fast can Quality Fence Works LLC start on my project?',
    a: 'We pride ourselves on prompt service! Once you approve the free estimate and materials are confirmed (and HOA approval is granted if required), we typically break ground within 5 to 10 business days. Most standard residential fences are completed in just 1 to 2 days on-site.',
  },
  {
    q: 'Do you assist with HOA approvals and property line permits?',
    a: 'Yes, absolutely. We work with HOAs all over Fairfax, Loudoun, and Prince William counties every week. We provide you with professional plot drawings, material cut sheets, height specifications, and contractor documentation for your HOA architectural review board.',
  },
  {
    q: 'How deep do you set your fence posts in Northern Virginia?',
    a: 'Post depth is critical to prevent winter frost heaving and wind blowouts. We dig our posts 30 to 36 inches deep (well below the regional frost line) and secure them with commercial-grade high-strength concrete footings.',
  },
  {
    q: 'What is the main difference between vinyl (PVC) and wood fences?',
    a: 'Vinyl fencing is virtually maintenance-free—it never rots, warps, or requires staining or painting, and comes with a lifetime material warranty. Wood fencing offers a natural, organic warmth and can be custom-raked to hug steep slopes at a slightly lower initial material cost.',
  },
  {
    q: 'Are you licensed and insured in Virginia?',
    a: 'Yes! Quality Fence Works LLC is a fully registered, licensed, and comprehensively insured fence and deck contractor in the Commonwealth of Virginia. We carry full general liability and workers’ compensation coverage for your complete peace of mind.',
  },
  {
    q: 'How do I get my free on-site estimate?',
    a: 'Simply call or text us at (703) 856-5215, or fill out our instant estimate form on this website. Antonio or a team specialist will reach out within a few hours to confirm a visit time that fits your schedule.',
  },
];
