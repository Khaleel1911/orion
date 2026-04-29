export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  name?: string
  tagline?: string
  badge?: string
  gradient?: string        // kept for backward compatibility but not used in hero now
  highlights?: string[]
  fullDescription?: string
  specs?: ProductSpec[]
  features?: string[]
  images?: string[]        // gallery images
  heroImage?: string       // new: main hero image
  /** Card listing image; optional duplicate of first cross-section path so you can change it without touching crossSectionImages order */
  cardCoverImage?: string
  crossSectionImages?: string[]  // new: diagrams
  brochureUrl?: string     // new: PDF link
}

export interface SubCategory {
  id: string
  name: string
  description?: string
  products?: Product[]
  /** Subcategory listing: banner image below intro */
  heroImage?: string
  /** Subcategory listing: secondary visual (e.g. beside description) */
  cardCoverImage?: string
  /** Subcategory listing: marketing or technical image gallery */
  crossSectionImages?: string[]
  /** Single-page showcase bullets (e.g. uPVC — no per-product cards) */
  features?: string[]
}

export interface Category {
  id: string
  name: string
  description?: string
  subcategories?: SubCategory[]
  disabled?: boolean
  /** Optional: overrides default category image on /products grid */
  image?: string
}

export const categories: Category[] = [
  // ─────────────────────────────────────────────────
  // 1. WINDOWS & DOORS SYSTEMS
  // ─────────────────────────────────────────────────
  {
    id: 'windows-doors',
    name: 'Windows & Doors Systems',
    description: 'Premium aluminium systems engineered for architectural precision and lasting performance.',
    subcategories: [
      {
        id: 'sliding',
        name: 'Sliding Systems',
        description: 'Smooth, precision-engineered sliding profiles designed for expansive glazed openings and seamless indoor-outdoor connection.',
        products: [
          {
            id: 'orion-core-25',
            name: 'Orion 25mm Window Core Series',
            tagline: 'Entry-level 25mm sliding system with compact profile geometry and practical glazing support',
            highlights: ['25mm Sash Width', 'Max Height 2135mm', 'Single & Double Glazing'],
            gradient: 'linear-gradient(135deg, #192b45 0%, #2d6799 100%)',
            badge: '25mm',
            fullDescription:
              'The Orion 25mm Window Core Series is the foundational sliding platform in the Orion range. It is designed for projects that need clean aesthetics, reliable sliding action, and practical glazing combinations in a compact profile. The system supports multiple track configurations and flexible roller/locking selections for everyday residential and light commercial use.',
            specs: [
              { label: 'Maximum Window Height', value: '2135mm (up to approx. 7 ft)' },
              { label: 'Sash Dimensions', value: 'Height 62mm / Width 25mm' },
              { label: 'Interlocking', value: 'Slim Interlock 20mm, Standard Interlock 66mm' },
              { label: 'Glass Range', value: 'Single 5-8mm, Double up to 18mm' },
              { label: 'Track Depth - 2 Track', value: 'Horizontal 28mm/72mm, Vertical 31mm/16mm' },
              { label: 'Track Depth - 3 Track', value: 'Horizontal 28mm/72mm, Vertical 31mm/16mm' },
              { label: 'Track Depth - 4 Track', value: 'Top/Bottom 28mm/72mm, Vertical 31mm/16mm' },
              { label: 'Corner Joint Options', value: 'Track 90 deg, Sash 90 deg/45 deg, Slim Interlock 90 deg' },
            ],
            features: [
              'Supports single and double glazing combinations for flexible project requirements',
              'Compatible with 2-track, 3-track, and 4-track sliding layouts',
              'Roller options include fixed single, fixed double, and adjustable double roller',
              'Locking can be configured as single-point or multi-point',
              'Performance-focused design for sound insulation, wind load, air permeability, impact resistance, and water tightness',
            ],
            heroImage: '/images/products/sliding/sliding-shared-hero.png',
            cardCoverImage: '/images/products/sliding/core-cross-1.png',
            crossSectionImages: ['/images/products/sliding/core-cross-1.png','/images/products/sliding/core-cross-2.png'],
          },
          {
            id: 'orion-nova-29',
            name: 'Orion 29mm Window Nova Series',
            tagline: 'Advanced 29mm sliding system with taller opening support and wider glazing compatibility',
            highlights: ['29mm Platform', 'Max Height 3048mm', 'Laminated & DGU Support'],
            gradient: 'linear-gradient(135deg, #1a3055 0%, #3577aa 100%)',
            badge: '29mm',
            fullDescription:
              'The Orion 29mm Window Nova Series is developed for larger and more demanding sliding openings. Compared with the core platform, it supports taller heights, broader glass options including laminated and double-glazed units, and deeper track configurations for expanded panel layouts.',
            specs: [
              { label: 'Maximum Window Height', value: '3048mm (up to 10 ft)' },
              { label: 'Sash Dimensions', value: 'Height 59mm/45mm, Width 31mm' },
              { label: 'Interlocking', value: 'Slim Interlock 20mm and 25mm options' },
              { label: 'Glass Range', value: 'Single 5-8mm, Laminated 5+5 to 15mm, Double up to 20mm' },
              { label: 'Track Depth - 2 Track', value: 'Top/Bottom 48mm/98mm, Vertical 23mm/15mm' },
              { label: 'Track Depth - 3 Track', value: 'Top/Bottom 48mm/148mm, Vertical 23mm/15mm' },
              { label: 'Cutting / Jointing', value: '90 deg frame cutting, 90 deg sash cutting, 90 deg track/sash/slim interlock joints' },
            ],
            features: [
              'Supports fixed single, fixed double, and adjustable double roller configurations',
              'Single-point and multi-point locking options for different security requirements',
              'Suitable for larger-format sliding windows with higher opening height',
              'Designed for strong envelope performance across sound insulation, wind load, air permeability, impact resistance, and water tightness',
            ],
            heroImage: '/images/products/sliding/sliding-shared-hero.png',
            cardCoverImage: '/images/products/sliding/nova-cross-1.png',
            crossSectionImages: ['/images/products/sliding/nova-cross-1.png','/images/products/sliding/nova-cross-2.png'],
          },
          {
            id: 'orion-nebula-31',
            name: 'Orion Nebula Series',
            tagline: 'Premium sliding system engineered for maximum insulation and architectural elegance',
            highlights: ['31mm Profile Depth', 'Superior Thermal Break'],
            gradient: 'linear-gradient(135deg, #0f1e32 0%, #204e7a 100%)',
            badge: '31mm',
            fullDescription:
              'The Orion Nebula Series represents the pinnacle of the Orion sliding range — a 31mm premium profile that delivers class-leading thermal insulation, acoustic attenuation, and architectural refinement. Purpose-built for high-specification residential and commercial projects where no compromise is accepted.',
            specs: [
              { label: 'Profile Depth', value: '31mm' },
              { label: 'Frame Material', value: 'Aluminium Alloy 6063-T5' },
              { label: 'Thermal Break', value: 'Wide-Bridge Polyamide PA66GF25' },
              { label: 'Glazing Capacity', value: 'Up to 40mm DGU / Triple Glazing' },
              { label: 'Maximum Sash Weight', value: '160 kg' },
              { label: 'Finish Options', value: 'Powder Coat / Anodised / Dual Colour / Timber Effect' },
            ],
            features: [
              'Wide-bridge thermal break achieves U-values down to 1.4 W/m²K',
              'Triple glazing compatible — accepts units up to 40mm thickness',
              'Heavy-duty roller carriage rated to 160 kg for expansive sash configurations',
              'Class-leading acoustic performance reduces external noise intrusion',
              'Timber-effect foil laminate finish option for a natural aesthetic',
              'Integrated drainage channels prevent water ingress at sill level',
            ],
            heroImage: '/images/products/sliding/sliding-shared-hero.png',
            cardCoverImage: '/images/products/sliding/nebula-cross-1.png',
            crossSectionImages: ['/images/products/sliding/nebula-cross-1.png'],
          },
        ],
      },
      {
        id: 'casement',
        name: 'Casement Systems',
        description: 'Outward-opening aluminium casement windows combining thermal efficiency with architectural clarity and lasting durability.',
        products: [
          {
            id: 'gateway-40',
            name: 'Orion 40mm Window Gateway Series',
            tagline: '40mm casement platform with slim design and robust locking for high wind-use openings',
            highlights: ['40mm Platform', 'Glazing from 5mm to 24mm', 'Single to Multipoint Locking'],
            gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d6799 100%)',
            badge: '40mm',
            fullDescription:
              'The Orion 40mm Window Gateway Series is a slim-profile aluminium casement system designed for balanced aesthetics and durability. It supports practical glazing options, flexible locking selections, and reliable operation for medium-to-large window and door openings under demanding environmental conditions.',
            specs: [
              { label: 'System', value: 'Orion 40mm Window Gateway Series' },
              { label: 'Design Platform', value: 'European profile concept' },
              { label: 'Glazing Range', value: 'From 5mm to 24mm' },
              { label: 'Clip / Jointing', value: 'Square shops clip, corner + T-joint for stronger mechanical joint' },
              { label: 'Locking Options', value: 'Single-point to multipoint locking systems' },
              { label: 'Opening Suitability', value: 'Medium opening and high wind-load conditions' },
            ],
            features: [
              'European-style slim form architecture with modern visual proportions',
              'Glazing can be installed from inside for improved security workflow',
              'Internal and external opening system compatibility',
              'Smooth and effortless operation in daily use',
              'System tuned for sound insulation, wind load, air permeability, impact resistance, and water tightness',
              'Suitable for both window and door applications',
            ],
            heroImage: '/images/products/casement/casement-shared-hero.png',
            cardCoverImage: '/images/products/casement/gateway-40-cross-1.png',
            crossSectionImages: ['/images/products/casement/gateway-40-cross-1.png','/images/products/casement/gateway-40-cross-2.png'],
          },
          {
            id: 'gateway-50',
            name: 'Orion 50mm Window Gateway Series',
            tagline: '50mm casement system for larger openings, wider glazing, and stronger locking combinations',
            highlights: ['50mm Platform', 'Glazing from 5mm to 38mm', 'Tilt & Turn Compatible'],
            gradient: 'linear-gradient(135deg, #152d4e 0%, #1e5280 100%)',
            badge: '50mm',
            fullDescription:
              'The Orion 50mm Window Gateway Series extends the Gateway range with broader glazing compatibility, larger opening support, and advanced locking options. It is suitable for projects that require stronger structural behavior and premium operational performance, including tilt-and-turn compatible configurations.',
            specs: [
              { label: 'System', value: 'Orion 50mm Window Gateway Series' },
              { label: 'Glazing Range', value: 'From 5mm to 38mm' },
              { label: 'Compatibility', value: 'Tilt & Turn system compatible' },
              { label: 'Clip / Jointing', value: 'Molding and square shapes clip, corner + T-joint for stronger mechanical joint' },
              { label: 'Locking Options', value: 'Single-point to multipoint locking systems' },
              { label: 'Opening Suitability', value: 'Large opening and high wind-load conditions' },
            ],
            features: [
              'Internal and external opening system support for flexible design layouts',
              'Glazing from inside for secure installation approach',
              'Smooth and effortless operation despite larger profile format',
              'Designed for high envelope performance in sound insulation, wind load, air permeability, impact resistance, and water tightness',
              'Supports door and window variants within the same platform family',
            ],
            heroImage: '/images/products/casement/casement-shared-hero.png',
            cardCoverImage: '/images/products/casement/gateway-50-cross-1.png',
            crossSectionImages: ['/images/products/casement/gateway-50-cross-1.png','/images/products/casement/gateway-50-cross-2.png','/images/products/casement/gateway-50-cross-3.png'],
          },
        ],
      },
      {
        id: 'slim-partitions',
        name: 'Slim Partitions',
        description: 'Ultra-minimal aluminium partition systems for uninterrupted glazed facades and architectural interiors.',
        products: [
          {
            id: 'slim-maxima',
            name: 'Orion 16×44 Window Slim Maxima Series',
            tagline: 'Ultra-slim 16×44 partition profiles with modular glass joints and floor-spring door option',
            highlights: ['16×44 Profile', 'Max Door Width 1100mm', '10mm / 12mm Glass Joints'],
            gradient: 'linear-gradient(135deg, #192b45 0%, #4a7fa8 100%)',
            badge: '16×44',
            fullDescription:
              'The Orion 16×44 Window Slim Maxima Series delivers an architectural slim partition platform for interior glazed doors and fixed partitions. Profile sections cover door frame, fix partition, and dedicated glass joint profiles for 10mm and 12mm glass. Floor spring hardware is specified to suit door height and width — order accordingly. Where the datasheet does not specify a value, existing Orion Slim Maxima guidance still applies for tall panels, modular layouts, and premium interior finishes.',
            specs: [
              { label: 'Series', value: 'Orion 16×44 Slim Maxima' },
              { label: 'Profile Dimensions', value: '16mm × 44mm' },
              { label: 'Maximum Door Width', value: '1100mm' },
              { label: 'Floor Spring', value: 'Order per door height and door width' },
              { label: 'SP 16-21 — Door Frame', value: 'Weight 4.439 kg/12′' },
              { label: 'SP 55-8 — 12mm Glass Joint', value: 'Weight 0.370 kg/12′' },
              { label: 'SP 55-11 — 10mm Glass Joint', value: 'Weight 0.342 kg/12′' },
              { label: 'SP 16-22 — Door Frame / Fix Partition', value: 'Weight 3.002 kg/12′' },
              { label: 'Maximum Panel Height', value: '4000mm' },
              { label: 'Glazing Capacity', value: 'Up to 12mm single / 28mm DGU (general range)' },
              { label: 'Frame Material', value: 'Aluminium Alloy 6063-T5' },
              { label: 'Application', value: 'Interior / conditioned exterior' },
              { label: 'Finish Options', value: 'Powder coat / anodised' },
            ],
            features: [
              'Ultra-slim 16mm face for near-frameless glazed partitions',
              'Dedicated profiles for 10mm and 12mm glass joints (SP 55-11 / SP 55-8)',
              'Door frame and fix-partition sections (SP 16-21 / SP 16-22)',
              'Maximum door width 1100mm; floor spring ordered to suit height and width',
              'Panel heights up to 4000mm for floor-to-ceiling interior applications',
              'Modular system for layout changes; demountable options where specified',
            ],
            heroImage: '/images/products/slim-partitions/maxima-hero.png',
            cardCoverImage: '/images/products/slim-partitions/maxima-card-cover.png',
            crossSectionImages: [
              '/images/products/slim-partitions/maxima-profile-cross-1.png',
              '/images/products/slim-partitions/maxima-profile-cross-2.png',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 2. uPVC SOLUTIONS (single subcategory — all styles)
  // ─────────────────────────────────────────────────
  {
    id: 'upvc',
    name: 'Premium uPVC Systems',
    description:
      'Built for performance and precision: durable, insulating, low-maintenance uPVC designed for everyday living — long-lasting reliability with trusted profiles.',
    image: '/images/products/upvc/category-card-cover.png',
    subcategories: [
      {
        id: 'upvc-systems',
        name: 'uPVC Window & Door Systems',
        description:
          'Orion World offers a premium range of uPVC doors and windows built on high-quality engineered profiles for durability and everyday performance. Designed for modern homes, the line balances functionality, aesthetics, and reliability in one integrated offering — from sliding and casement windows to tilt-and-turn, slide-and-fold doors, internal doors, patio sliding doors, and villa-grade windows. Manufacturing follows ISO-aligned quality discipline; projects are supported from concept through installation, with flexible finishes (White, Oak Wood, Walnut, Black, Grey and extended RAL foils) and long-term assurance including warranty options up to 20 years where applicable. Premium specifications reference trusted profile systems such as SBM Gold–grade performance.',
        heroImage: '/images/products/upvc/category-hero.png',
        cardCoverImage: '/images/products/upvc/category-card-cover.png',
        features: [
          'Certified quality systems — ISO-aligned manufacturing for consistent performance',
          'Complete project execution — integrated approach from concept to installation',
          'Design flexibility — curated styles, materials, and finishes for contemporary living',
          'Long-term assurance — warranty support up to 20 years where applicable',
          'Weather-resistant and low-maintenance uPVC with strong thermal insulation',
          'Eco-conscious, durable profiles compatible with European hardware systems',
          'Professional installation and reliable after-sales support',
          'Style range includes sliding windows, casement windows, tilt-and-turn windows, slide-and-fold uPVC doors, internal doors, sliding doors, and villa windows',
        ],
        crossSectionImages: [
          '/images/products/upvc/upvc-cross-1.png',
          '/images/products/upvc/upvc-cross-2.png',
          '/images/products/upvc/upvc-cross-3.png',
          '/images/products/upvc/upvc-cross-4.png',
          '/images/products/upvc/upvc-cross-5.png',
          '/images/products/upvc/upvc-cross-6.png',
        ],
        products: [],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 3. SKYLIGHT & ROOFING SYSTEMS
  // ─────────────────────────────────────────────────
  {
    id: 'skylight',
    name: 'Skylight & Roofing Systems',
    description: 'Innovative skylight and roofing solutions that bring natural light and architectural shelter to premium spaces.',
    subcategories: [
      {
        id: 'skylight-blinds',
        name: 'Skylight Blinds',
        description: 'Precision-engineered blinds designed specifically for skylight apertures, roof glazing, and overhead installations.',
        products: [
          {
            id: 'honeycomb-skylight',
            name: 'Honeycomb Skylight Blinds',
            tagline: 'Cell-structured skylight blinds for comfort, insulation, and refined natural light control',
            highlights: ['Honeycomb Insulation', 'UV Protection', 'Motorized / Manual'],
            gradient: 'linear-gradient(135deg, #1a2f4b 0%, #2d5f8a 100%)',
            fullDescription:
              'Honeycomb Skylight Blinds are designed for overhead windows and skylights, combining a clean modern appearance with practical energy efficiency. The honeycomb cellular structure traps air to improve insulation while still filtering daylight for a softer, more comfortable indoor environment.',
            specs: [
              { label: 'Use Case', value: 'Skylights and overhead windows' },
              { label: 'Fabric Structure', value: 'Honeycomb / cellular profile' },
              { label: 'Operation', value: 'Motorized and manual options' },
              { label: 'UV Control', value: 'Helps block up to ~90% of harmful UV rays' },
              { label: 'Maintenance', value: 'Dust-resistant fabrics, easy vacuum/wipe care' },
              { label: 'Aesthetic', value: 'Sleek look with refined skylight integration' },
            ],
            features: [
              'Honeycomb cells create an insulating air layer to reduce heat transfer',
              'UV protection helps reduce glare and interior fading',
              'Available with remote, wall switch, and smart-home friendly controls',
              'Maintains visual elegance while improving day-to-day comfort',
            ],
            heroImage: '/images/products/skylight-blinds/honeycomb-cover.png',
            cardCoverImage: '/images/products/skylight-blinds/honeycomb-cover.png',
          },
          {
            id: 'roman-skylight',
            name: 'Roman Skylight Blinds',
            tagline: 'Soft-fold Roman skylight blinds that blend elegant fabric style with precision operation',
            highlights: ['Smooth Folding', 'Motorized / Manual', 'Thermal Efficiency'],
            gradient: 'linear-gradient(135deg, #162840 0%, #265577 100%)',
            fullDescription:
              'Roman Skylight Blinds are built for skylights and sloped glazing where premium appearance and practical control are both important. They combine the luxurious visual texture of soft fabric folds with dependable day-to-day operation in hard-to-reach roof openings.',
            specs: [
              { label: 'Blind Style', value: 'Roman soft-fold profile' },
              { label: 'Operation', value: 'Motorized or manual control' },
              { label: 'Use Case', value: 'Skylights and sloped roof glazing' },
              { label: 'Folding Stability', value: 'Neat pleats with reduced sagging/loose fabric' },
              { label: 'Thermal Benefit', value: 'Helps maintain indoor temperature' },
              { label: 'Design Intent', value: 'Elegant look with modern overhead integration' },
            ],
            features: [
              'Smooth folding mechanism retracts in clean, balanced pleats',
              'Motorized and manual options for flexible control preference',
              'Supports comfort by reducing heat exchange through skylight openings',
              'Adds a decorative fabric statement to modern skylight interiors',
            ],
            heroImage: '/images/products/skylight-blinds/roman-cover.png',
            cardCoverImage: '/images/products/skylight-blinds/roman-cover.png',
          },
          {
            id: 'exterior-skylight',
            name: 'Exterior Skylight Blinds',
            tagline: 'Exterior-mounted skylight blind engineered for solar control and weather resilience',
            highlights: ['Exterior Solar Shield', 'High-Tension Fabric', 'Climate Protection'],
            gradient: 'linear-gradient(135deg, #0f2038 0%, #1e4a70 100%)',
            fullDescription:
              'Exterior Skylight Blinds are installed outside roof glazing to stop heat before it enters the building envelope. Designed for durability and sustainability, the system combines weather-resistant materials with controlled high-tension fabric behavior for consistent performance in demanding outdoor conditions.',
            specs: [
              { label: 'Installation', value: 'Exterior side of roof glazing / skylight' },
              { label: 'Heat Rejection', value: 'Can block up to ~85-90% solar heat before interior gain' },
              { label: 'Fabric System', value: 'High-tension weather-resistant exterior fabric' },
              { label: 'Primary Benefit', value: 'Reduces cooling load and improves indoor comfort' },
              { label: 'Use Case', value: 'Residential and commercial climate-control applications' },
              { label: 'Positioning', value: 'First-barrier solar protection at glazing level' },
            ],
            features: [
              'Exterior placement is significantly more effective than interior-only shade',
              'Engineered fabric stays stable under wind with tensioned support behavior',
              'Helps reduce HVAC demand by lowering roof-glazing heat ingress',
              'Suitable for both residential and commercial sustainability-focused projects',
            ],
            heroImage: '/images/products/skylight-blinds/exterior-cover.png',
            cardCoverImage: '/images/products/skylight-blinds/exterior-cover.png',
          },
        ],
      },
      {
        id: 'roofing-systems',
        name: 'Roofing Systems',
        description: 'Motorised retractable roofing systems for seamless indoor-outdoor architectural living spaces.',
        products: [
          {
            id: 'retractable-roof',
            name: 'Retractable Roof',
            tagline: 'All-weather retractable roof system with smooth motorized opening and panoramic sky access',
            highlights: ['Openable Sliding Design', 'Motorized Operation', 'All-Weather Comfort'],
            gradient: 'linear-gradient(135deg, #192b45 0%, #2d6a8a 100%)',
            fullDescription:
              'Our Retractable Roof System blends modern engineering with timeless design to create dynamic, all-weather outdoor spaces. With a push of a button, the roof slides open to welcome fresh air and sunlight, or closes to provide shelter from rain and wind. Built with durable aluminium structures and weather-resistant materials, it is ideal for residential patios, commercial terraces, cafes, and rooftop lounges. Optional integrated LED lighting and rain-sensor automation add extra comfort and convenience.',
            specs: [
              { label: 'System Type', value: 'Motorized retractable roof glazing system' },
              { label: 'Frame Material', value: 'Weather-resistant powder-coated aluminium' },
              { label: 'Panels', value: 'Clear tempered glass sliding panels' },
              { label: 'Control', value: 'Remote-operated motorized open/close' },
              { label: 'Optional Add-ons', value: 'Integrated LED lighting, rain sensors' },
              { label: 'Use Cases', value: 'Patios, terraces, cafes, rooftop lounges' },
            ],
            features: [
              'Openable sliding roof design lets in fresh air and daylight on demand',
              'Smooth motorized operation for effortless daily use',
              'Designed to adapt quickly to sun, rain, and windy conditions',
              'Strong aluminium build supports long-term outdoor durability',
              'Panoramic skylight effect enhances premium outdoor spaces',
            ],
            heroImage: '/images/products/roofing/retractable-roof-cover.png',
            cardCoverImage: '/images/products/roofing/retractable-roof-cover.png',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 4. INSECT SCREENS & PROTECTION
  // ─────────────────────────────────────────────────
  {
    id: 'screens',
    name: 'Insect Screens & Protection',
    description: 'Advanced mesh and screen systems providing effective insect protection without compromising ventilation or aesthetics.',
    subcategories: [
      {
        id: 'mesh-systems',
        name: 'Mesh Systems',
        description: 'Pleated and barrier-free insect mesh screens for windows and doors across all opening configurations.',
        products: [
          {
            id: 'pleated-classic',
            name: 'Classic Pleated Mesh',
            tagline: 'Stylish and functional pleated insect mesh for modern windows and doors',
            highlights: ['Compact & Space-Saving', 'Low Maintenance'],
            gradient: 'linear-gradient(135deg, #1b3a4a 0%, #2d6760 100%)',
            fullDescription:
              'Classic Pleated Mesh is a stylish and practical insect-screen solution for contemporary living spaces. Its pleated design folds neatly to the side, making it ideal for wide openings such as sliding doors, French windows, balconies, and patio transitions while preserving a clean architectural look.',
            specs: [
              { label: 'System Type', value: 'Pleated side-retract insect mesh' },
              { label: 'Application', value: 'Sliding doors, French windows, patio openings' },
              { label: 'Retract Method', value: 'Side-folding into slim cassette' },
              { label: 'Frame Material', value: 'Powder-coated aluminium frame' },
              { label: 'Maintenance', value: 'Easy to clean and weather-change resistant' },
            ],
            features: [
              'Compact and space-saving design retracts smoothly when not in use',
              'Low-maintenance mesh system for daily residential operation',
              'Blends seamlessly with modern interior and exterior openings',
              'Provides insect protection while preserving ventilation and view',
            ],
            heroImage: '/images/products/screens/classic-pleated-cover.png',
            cardCoverImage: '/images/products/screens/classic-pleated-cover.png',
          },
          {
            id: 'barrier-free',
            name: 'Barrier-Free Mesh',
            tagline: 'Seamless access insect mesh with zero-threshold comfort and smooth operation',
            highlights: ['Zero Threshold', 'Smooth Sliding', 'Custom Fit'],
            gradient: 'linear-gradient(135deg, #162f3d 0%, #255856 100%)',
            fullDescription:
              'Barrier Free Mesh is an innovative insect-screen door concept designed for uninterrupted access while maintaining insect protection. The design supports safer movement across doorways, making it especially suitable for children, seniors, and wheelchair users where smooth everyday passage is essential.',
            specs: [
              { label: 'Threshold Design', value: 'Flat low-threshold / trip-reduced passage' },
              { label: 'Operation', value: 'Smooth side sliding with light effort' },
              { label: 'Mesh Type', value: 'Durable UV-resistant pleated mesh' },
              { label: 'Fitment', value: 'Custom fit including large patio and balcony doors' },
              { label: 'Use Case', value: 'High-frequency movement zones and accessible entries' },
            ],
            features: [
              'Zero-threshold concept improves safety and movement comfort',
              'Smooth sliding mechanism supports frequent daily operation',
              'UV-resistant pleated mesh for long-term visibility and performance',
              'Custom sizing flexibility for large openings',
            ],
            heroImage: '/images/products/screens/barrier-free-cover.png',
            cardCoverImage: '/images/products/screens/barrier-free-cover.png',
          },
          {
            id: 'elite-pleated',
            name: 'Elite Pleated Mesh',
            tagline: 'High-end pleated insect mesh designed for premium wide-opening applications',
            highlights: ['Wide Span Coverage', 'Slim & Sleek Frame'],
            gradient: 'linear-gradient(135deg, #122836 0%, #1e4e4c 100%)',
            fullDescription:
              'Elite Pleated Mesh is engineered for spaces that demand style, durability, and refined operation. With premium pleated fabric and a robust slim frame, it offers a sophisticated insect-screen solution for balconies, large doors, French windows, and patio openings without compromising aesthetics.',
            specs: [
              { label: 'System Type', value: 'Premium pleated side-retract mesh' },
              { label: 'Coverage', value: 'Large doors, balconies, French windows, patio openings' },
              { label: 'Frame Profile', value: 'Slim and sleek modern aluminium frame' },
              { label: 'Operation', value: 'Smooth manual pleated movement' },
              { label: 'Design Goal', value: 'High-end insect control with minimal visual bulk' },
            ],
            features: [
              'Wide-span coverage for premium fenestration layouts',
              'Slim frame profile integrates with contemporary interiors',
              'Refined pleated design supports reliable long-term operation',
              'Enhances usability without compromising architectural character',
            ],
            heroImage: '/images/products/screens/elite-pleated-cover.png',
            cardCoverImage: '/images/products/screens/elite-pleated-cover.png',
          },
        ],
      },
      {
        id: 'security-screens',
        name: 'Security & Advanced Screens',
        description: 'High-performance security and retractable screen solutions for enhanced protection and solar control.',
        products: [
          {
            id: 'aluminium-security',
            name: 'Aluminium Security Mesh',
            tagline: 'Stainless steel woven security screen housed in a heavy-gauge aluminium frame',
            highlights: ['316 Stainless Mesh', 'Impact Resistant'],
            gradient: 'linear-gradient(135deg, #1e3040 0%, #2a5c5a 100%)',
            fullDescription:
              'The Aluminium Security Mesh screen provides a robust first line of defence against forced entry while maintaining full ventilation and visibility. Marine-grade 316 stainless steel woven mesh is held within a heavy-gauge powder-coated aluminium frame secured by a tamper-resistant perimeter clamp system.',
            specs: [
              { label: 'Mesh Type', value: '316 Marine-Grade Stainless Steel Woven' },
              { label: 'Mesh Wire Diameter', value: '0.9mm' },
              { label: 'Frame Material', value: 'Heavy-Gauge Aluminium (1.6mm Wall)' },
              { label: 'Fixing System', value: 'Tamper-Resistant Perimeter Clamp' },
              { label: 'Impact Resistance', value: 'Tested to AS 5039 Standard' },
              { label: 'Finish', value: 'Powder Coat — Full RAL Range' },
            ],
            features: [
              'Marine-grade 316 stainless mesh resists cutting and corrosion at coastal sites',
              'Tamper-resistant clamp bar prevents mesh removal from the exterior',
              'Heavy 1.6mm aluminium frame resists frame distortion under impact',
              'Tested and compliant with AS 5039 security screen standard',
              'Full ventilation maintained — mesh does not restrict airflow',
              'Powder coat finish available in any RAL colour to match the window system',
            ],
            heroImage: '/images/products/screens/aluminium-security-cover.png',
            cardCoverImage: '/images/products/screens/aluminium-security-cover.png',
          },
          {
            id: 'roller-mesh',
            name: 'Roller Mesh',
            tagline: 'Retractable insect-screen system for windows and doors where space efficiency matters',
            highlights: ['Retractable Roll-Up', 'Smooth Spring Mechanism'],
            gradient: 'linear-gradient(135deg, #172a38 0%, #235252 100%)',
            fullDescription:
              'Roller Mesh is a compact retractable insect-screen system that rolls into a top cassette when not in use. It is ideal for windows and doors where clean lines, ease of operation, and functional everyday performance are key requirements.',
            specs: [
              { label: 'System Type', value: 'Retractable roll-up insect mesh' },
              { label: 'Cassette Position', value: 'Top-mounted slim aluminium cassette' },
              { label: 'Operation', value: 'Pull-down and automatic spring roll-up' },
              { label: 'Application', value: 'Window and door openings with limited space' },
              { label: 'Design Benefit', value: 'Discreet when retracted, functional when deployed' },
            ],
            features: [
              'Retractable roll-up design keeps the mesh hidden when not required',
              'Smooth spring mechanism supports low-effort operation',
              'Compact cassette improves visual neatness on modern facades',
              'Practical for daily use across residential and light commercial spaces',
            ],
            heroImage: '/images/products/screens/roller-mesh-cover.png',
            cardCoverImage: '/images/products/screens/roller-mesh-cover.png',
          },
          {
            id: 'zip-screens',
            name: 'Zip Screens',
            tagline: 'High-performance outdoor zip screen for sun, wind, rain, and insect control',
            highlights: ['Zip-Guided Track', 'Wind-Resistant Design'],
            gradient: 'linear-gradient(135deg, #122030 0%, #1c4848 100%)',
            fullDescription:
              'Zip Screens are modern outdoor blind systems designed for combined protection from sun, rain, wind, and insects. Their engineered zip-guided track keeps the fabric securely engaged in side channels, preventing edge gaps and maintaining smooth, stable operation even in stronger wind conditions.',
            specs: [
              { label: 'Track System', value: 'Zip-guided side channel locking' },
              { label: 'Primary Benefit', value: 'Sealed edges for wind and insect control' },
              { label: 'Wind Handling', value: 'Designed for high pressure without detaching' },
              { label: 'Fabric Behavior', value: 'Stable guided movement with reduced flapping' },
              { label: 'Application', value: 'Outdoor facades, balconies, and patio fronts' },
            ],
            features: [
              'Zip-guided tracks eliminate edge gaps and improve secure operation',
              'Wind-resistant configuration supports stable movement under breezy conditions',
              'Combines shading, weather control, and insect protection in one system',
              'Suitable for modern residential and commercial outdoor envelopes',
            ],
            heroImage: '/images/products/screens/zip-screens-cover.png',
            cardCoverImage: '/images/products/screens/zip-screens-cover.png',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 5. BLINDS & OUTDOOR SYSTEMS
  // ─────────────────────────────────────────────────
  {
    id: 'blinds',
    name: 'Blinds & Outdoor Systems',
    description: 'Integrated blind systems and outdoor structures for complete light control and premium architectural outdoor living.',
    subcategories: [
      {
        id: 'blinds-sub',
        name: 'Blinds',
        description: 'Double glazing unit integrated blinds offering a permanently dust-free, low-maintenance shading solution.',
        products: [
          {
            id: 'dgu-blinds',
            name: 'DGU Blinds',
            tagline: 'Integrated privacy and light-control blinds with clean modern framing for interior glazing',
            highlights: ['Light & Privacy Control', 'Sleek Modern Design'],
            gradient: 'linear-gradient(135deg, #2d2a1f 0%, #4a3f2d 100%)',
            fullDescription:
              'DGU Blinds combine style, privacy, and practicality in one integrated glazing solution. Designed for modern interiors, they provide smooth light and glare control while maintaining a refined visual appearance that suits both contemporary and classic spaces.',
            specs: [
              { label: 'System Type', value: 'Integrated Insulating Glass Unit Blind' },
              { label: 'Slat Width', value: '25mm Aluminium Venetian' },
              { label: 'Glazing Unit Thickness', value: '27mm — 36mm (slat-dependent)' },
              { label: 'Control', value: 'External Magnetic Wheel — No Penetration' },
              { label: 'Functions', value: 'Raise / Lower / Tilt (Full to Blackout)' },
              { label: 'Glass Options', value: 'Low-E / Tinted / Standard' }
            ],
            features: [
              'Adjust natural light and privacy to match the space throughout the day',
              'Clean-lined profile complements modern and transitional interior styles',
              'Integrated configuration reduces exposed blind hardware clutter',
              'Practical for both cozy residential spaces and bright work areas',
            ],
            heroImage: '/images/products/blinds-outdoor/blinds-dgu-cover.png',
            cardCoverImage: '/images/products/blinds-outdoor/blinds-dgu-cover.png',
          },
          {
            id: 'honeycomb-dgu',
            name: 'Honeycomb DGU Blinds',
            tagline: 'Energy-efficient cellular blind system with strong insulation and acoustic comfort',
            highlights: ['Superior Thermal Insulation', 'Sound Absorption'],
            gradient: 'linear-gradient(135deg, #2a2518 0%, #433823 100%)',
            fullDescription:
              'Honeycomb DGU Blinds combine form and function through a cellular interior structure that traps air and supports thermal efficiency. They help maintain cooler interiors in summer and warmer rooms in winter while keeping a sleek, modern visual language for premium spaces.',
            specs: [
              { label: 'System Type', value: 'Honeycomb Fabric — Integrated IGU' },
              { label: 'Cell Structure', value: 'Single Honeycomb (25mm Cell Depth)' },
              { label: 'U-Value Improvement', value: 'Up to 0.5 W/m²K Reduction' },
              { label: 'Glazing Unit Thickness', value: '32mm — 44mm' },
              { label: 'Control', value: 'External Magnetic Drive' },
              { label: 'Light Control', value: 'Translucent / Dim-Out Options' }
            ],
            features: [
              'Unique honeycomb cellular structure reduces heat gain and cooling loss',
              'Improves indoor acoustic comfort by dampening external noise',
              'Delivers a clean architectural appearance with practical energy benefits',
              'Suitable for modern spaces requiring comfort-focused glazing solutions',
            ],
            heroImage: '/images/products/blinds-outdoor/honeycomb-dgu-cover.png',
            cardCoverImage: '/images/products/blinds-outdoor/honeycomb-dgu-cover.png',
          },
        ],
      },
      {
        id: 'outdoor-structures',
        name: 'Outdoor Structures',
        description: 'Modular PVC pergola systems designed for premium outdoor living, entertaining, and architectural extension.',
        products: [
          {
            id: 'pvc-pergola',
            name: 'PVC Pergolas',
            tagline: 'Low-maintenance outdoor pergola system engineered for durability and coastal-ready performance',
            highlights: ['Lightweight Yet Durable', 'Ambient Lighting & Add-ons'],
            gradient: 'linear-gradient(135deg, #1f2820 0%, #3a4a35 100%)',
            fullDescription:
              'PVC Pergolas deliver a stylish, low-maintenance outdoor extension for patios, gardens, terraces, and poolside spaces. Manufactured from high-quality UV-resistant Polyvinyl Chloride (PVC), they are designed to handle sun, rust, and weather exposure without frequent repainting or heavy upkeep while retaining a clean painted-wood look.',
            specs: [
              { label: 'Core Material', value: 'UV-resistant weather-grade PVC' },
              { label: 'Installation', value: 'Lightweight and structural-user-friendly assembly' },
              { label: 'Maintenance', value: 'No rust, rot, or repainting cycle required' },
              { label: 'Visual Finish', value: 'Classic white or custom color options' },
              { label: 'Style Match', value: 'Painted-wood aesthetic with long-term durability' },
              { label: 'Optional Add-ons', value: 'LED strips, heaters, glass partitions, curtains/blinds' }
            ],
            features: [
              'Built for outdoor comfort with strong weather and UV resistance',
              'Enhances outdoor living zones with elegant modern shade architecture',
              'Durable material behavior supports long service life with low upkeep',
              'Customizable with comfort accessories for all-season usability',
            ],
            heroImage: '/images/products/blinds-outdoor/pvc-pergola-cover.png',
            cardCoverImage: '/images/products/blinds-outdoor/pvc-pergola-cover.png',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 6. FUTURE (DISABLED)
  // ─────────────────────────────────────────────────
  {
    id: 'future',
    name: 'Future',
    description: 'Exciting new product lines currently in development — coming soon to the Orion World portfolio.',
    subcategories: [
      {
        id: 'wooden-windows',
        name: 'Wooden Window Systems',
        description: 'Premium hardwood and engineered timber window systems — arriving soon.',
        heroImage: '/images/products/future/wooden-windows-hero.png',
        cardCoverImage: '/images/products/future/wooden-windows-hero.png',
        products: [],
      },
      {
        id: 'railing-systems',
        name: 'Railing Systems',
        description: 'Architectural railing and balustrade systems — arriving soon.',
        heroImage: '/images/products/future/railing-systems-hero.png',
        cardCoverImage: '/images/products/future/railing-systems-hero.png',
        products: [],
      },
    ],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function findProduct(catId: string, subId: string, productId: string) {
  const cat = categories.find(c => c.id === catId)
  const sub = cat?.subcategories?.find(s => s.id === subId)
  const product = sub?.products?.find(p => p.id === productId)
  return { cat, sub, product }
}

export function getRelatedProducts(catId: string, subId: string, currentProductId: string) {
  const cat = categories.find(c => c.id === catId)
  const sub = cat?.subcategories?.find(s => s.id === subId)
  return (sub?.products ?? []).filter(p => p.id !== currentProductId)
}
