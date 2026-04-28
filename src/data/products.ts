export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  name: string
  tagline: string
  highlights: [string, string]
  gradient: string
  badge?: string
  // Detail page fields
  fullDescription: string
  specs: ProductSpec[]
  features: string[]
}

export interface SubCategory {
  id: string
  name: string
  description: string
  products: Product[]
}

export interface Category {
  id: string
  name: string
  description: string
  subcategories: SubCategory[]
  disabled?: boolean
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
            name: 'Orion Core Series',
            tagline: 'Entry-level precision sliding with 25mm aluminium profile depth',
            highlights: ['25mm Profile Depth', 'Thermally Broken Frame'],
            gradient: 'linear-gradient(135deg, #192b45 0%, #2d6799 100%)',
            badge: '25mm',
            fullDescription:
              'The Orion Core Series delivers reliable, thermally efficient sliding performance in a refined 25mm aluminium profile. Designed as the entry point into the Orion sliding range, it combines robust construction with clean architectural lines, making it ideal for residential and light commercial glazed openings where value and performance must coexist.',
            specs: [
              { label: 'Profile Depth', value: '25mm' },
              { label: 'Frame Material', value: 'Aluminium Alloy 6063-T5' },
              { label: 'Thermal Break', value: 'Polyamide Insert' },
              { label: 'Glazing Capacity', value: 'Up to 24mm DGU' },
              { label: 'Maximum Sash Weight', value: '80 kg' },
              { label: 'Finish Options', value: 'Powder Coat / Anodised' },
            ],
            features: [
              'Thermally broken frame reduces heat transfer for improved energy efficiency',
              'Precision extruded 6063-T5 aluminium for structural rigidity and longevity',
              'Smooth-glide stainless steel roller system with adjustable height',
              'Compatible with standard 24mm double glazing units',
              'Available in a full RAL powder coat colour spectrum',
              'Low-profile aluminium threshold suitable for flush floor applications',
            ],
          },
          {
            id: 'orion-nova-29',
            name: 'Orion Nova Series',
            tagline: 'Advanced thermal performance in a refined 29mm sliding profile',
            highlights: ['29mm Profile Depth', 'Enhanced Weathersealing'],
            gradient: 'linear-gradient(135deg, #1a3055 0%, #3577aa 100%)',
            badge: '29mm',
            fullDescription:
              'The Orion Nova Series elevates the sliding experience with an enhanced 29mm profile and upgraded dual-layer weathersealing system. Engineered for climates demanding greater thermal and acoustic performance, it accommodates wider glazing units while maintaining the slim, architectural aesthetic that defines the Orion range.',
            specs: [
              { label: 'Profile Depth', value: '29mm' },
              { label: 'Frame Material', value: 'Aluminium Alloy 6063-T5' },
              { label: 'Thermal Break', value: 'Enhanced Polyamide PA66GF25' },
              { label: 'Glazing Capacity', value: 'Up to 32mm DGU' },
              { label: 'Maximum Sash Weight', value: '120 kg' },
              { label: 'Finish Options', value: 'Powder Coat / Anodised / Dual Colour' },
            ],
            features: [
              'Upgraded polyamide PA66GF25 thermal break for superior insulation values',
              'Dual-layer pile weatherseal system significantly reduces air and water infiltration',
              'Heavy-duty stainless steel roller carriage rated to 120 kg sash weight',
              'Wide glazing rebate accepts units up to 32mm including triple-pane configurations',
              'Multi-point security locking hardware as standard',
              'Dual-colour powder coat option for contrasting interior and exterior finishes',
            ],
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
            name: '40mm Gateway Series',
            tagline: 'Classic casement profile with modern precision hardware and clean sightlines',
            highlights: ['40mm Frame Depth', 'Multi-Point Locking'],
            gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d6799 100%)',
            badge: '40mm',
            fullDescription:
              'The 40mm Gateway Series is a refined, versatile aluminium casement system suited to a broad range of residential and light commercial applications. Its 40mm profile depth delivers a balanced combination of structural performance and slim sightlines, while multi-point locking hardware ensures security and airtight closure.',
            specs: [
              { label: 'Profile Depth', value: '40mm' },
              { label: 'Frame Material', value: 'Aluminium Alloy 6063-T5' },
              { label: 'Opening Type', value: 'Outward Opening Casement' },
              { label: 'Hardware', value: 'Multi-Point Friction Stay' },
              { label: 'Glazing Capacity', value: 'Up to 28mm DGU' },
              { label: 'Finish Options', value: 'Powder Coat / Anodised' },
            ],
            features: [
              'Slim 40mm sightlines maximise the glazed area and natural light',
              'Multi-point perimeter locking for enhanced weather resistance and security',
              'Friction stay hinge system allows stepless ventilation control',
              'Compatible with 28mm insulating glass units for thermal efficiency',
              'Fully drained and ventilated frame system prevents moisture accumulation',
              'Available in a comprehensive RAL powder coat palette',
            ],
          },
          {
            id: 'gateway-50',
            name: '50mm Gateway Series',
            tagline: 'Enhanced casement system delivering superior thermal comfort and acoustic performance',
            highlights: ['50mm Frame Depth', 'Triple Seal System'],
            gradient: 'linear-gradient(135deg, #152d4e 0%, #1e5280 100%)',
            badge: '50mm',
            fullDescription:
              'The 50mm Gateway Series expands on the classic Gateway profile with a deeper 50mm frame that accommodates a full triple-seal perimeter gasket and wider glazing units. It is the preferred choice for projects requiring enhanced thermal insulation and acoustic comfort without sacrificing architectural proportion.',
            specs: [
              { label: 'Profile Depth', value: '50mm' },
              { label: 'Frame Material', value: 'Aluminium Alloy 6063-T5' },
              { label: 'Opening Type', value: 'Outward Opening Casement' },
              { label: 'Seal System', value: 'Triple EPDM Perimeter Seal' },
              { label: 'Glazing Capacity', value: 'Up to 36mm DGU' },
              { label: 'Finish Options', value: 'Powder Coat / Anodised / Dual Colour' },
            ],
            features: [
              'Triple EPDM perimeter seal system dramatically reduces air leakage',
              'Extended 50mm frame depth improves overall window U-value performance',
              'Accepts glazing units up to 36mm including high-performance coatings',
              'Enhanced acoustic performance suitable for urban and high-traffic environments',
              'Dual-colour finish option allows different interior and exterior aesthetics',
              'Integrated condensation gutter channel manages moisture at sill level',
            ],
          },
          {
            id: 'n-series-50',
            name: 'N 50mm Series',
            tagline: 'Next-generation narrow casement with 50mm performance profile and minimal sightlines',
            highlights: ['50mm Profile', 'Narrow Sightlines'],
            gradient: 'linear-gradient(135deg, #0d1f35 0%, #163d63 100%)',
            badge: 'N 50mm',
            fullDescription:
              'The N 50mm Series represents a new generation of narrow-face casement design — delivering the full thermal and acoustic benefits of a 50mm profile depth while achieving exceptionally slim visible sightlines. Purpose-designed for contemporary, glass-forward architecture where structural performance and minimal framing must coexist.',
            specs: [
              { label: 'Profile Depth', value: '50mm' },
              { label: 'Visible Face Width', value: 'Narrow (Engineered Slim)' },
              { label: 'Frame Material', value: 'Aluminium Alloy 6063-T5' },
              { label: 'Thermal Break', value: 'Polyamide PA66GF25' },
              { label: 'Glazing Capacity', value: 'Up to 36mm DGU' },
              { label: 'Finish Options', value: 'Powder Coat / Anodised / Dual Colour' },
            ],
            features: [
              'Narrowest possible face width for maximum glass area and transparency',
              'Full 50mm depth provides the structural performance of a heavyweight system',
              'Polyamide PA66GF25 thermal break minimises thermal bridging',
              'Engineered for large-format sash configurations with minimal deflection',
              'Compatible with high-performance solar control and acoustic glazing units',
              'Architecturally certified for use in demanding façade applications',
            ],
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
            name: 'Slim Maxima Series',
            tagline: 'Architectural slim partition with 16×44mm profile for expansive floor-to-ceiling glazing',
            highlights: ['16×44mm Ultra-Slim Profile', 'Floor-to-Ceiling Glazing'],
            gradient: 'linear-gradient(135deg, #192b45 0%, #4a7fa8 100%)',
            badge: '16×44',
            fullDescription:
              'The Slim Maxima Series sets a new benchmark for internal glazed partition design, featuring an ultra-slim 16×44mm profile that is virtually invisible within the glazed plane. Designed for open-plan offices, residential interiors, and high-end retail environments, it creates seamless, floor-to-ceiling glazed expanses with extraordinary structural efficiency.',
            specs: [
              { label: 'Profile Dimensions', value: '16mm × 44mm' },
              { label: 'Frame Material', value: 'Aluminium Alloy 6063-T5' },
              { label: 'Glazing Capacity', value: 'Up to 12mm Single / 28mm DGU' },
              { label: 'Maximum Panel Height', value: '4000mm' },
              { label: 'Application', value: 'Interior / Conditioned Exterior' },
              { label: 'Finish Options', value: 'Powder Coat / Anodised' },
            ],
            features: [
              '16mm face width creates an almost frameless glazed partition appearance',
              'Panel heights up to 4000mm allow true floor-to-ceiling installations',
              'Compatible with both single and double-glazed units for acoustic privacy',
              'Modular system allows rapid reconfiguration of interior layouts',
              'Integrated cable management channels within the profile system',
              'Demountable design enables relocation without structural alterations',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────
  // 2. uPVC SOLUTIONS
  // ─────────────────────────────────────────────────
  {
    id: 'upvc',
    name: 'uPVC Solutions',
    description: 'High-performance uPVC window and door systems for low-maintenance, thermally efficient living.',
    subcategories: [
      {
        id: 'sliding-upvc-windows',
        name: 'Sliding uPVC Windows',
        description: 'Smooth-gliding uPVC sliding windows with multi-chamber profiles for superior insulation and effortless operation.',
        products: [
          {
            id: 'sliding-upvc-w1',
            name: 'Sliding uPVC Window',
            tagline: 'Smooth-gliding multi-chamber uPVC sliding window for contemporary living',
            highlights: ['Multi-Chamber Profile', 'UV-Stabilised Frame'],
            gradient: 'linear-gradient(135deg, #1a3a5c 0%, #2d7a8a 100%)',
            fullDescription:
              'Our Sliding uPVC Window system combines a 5-chamber profile with UV-stabilised PVC to deliver a long-lasting, low-maintenance sliding window solution. The smooth stainless steel roller system and multi-point locking provide both effortless operation and robust security for residential and semi-commercial applications.',
            specs: [
              { label: 'Material', value: 'uPVC Multi-Chamber Profile' },
              { label: 'Chambers', value: '5-Chamber' },
              { label: 'Glazing Capacity', value: 'Up to 28mm DGU' },
              { label: 'Reinforcement', value: 'Galvanised Steel Insert' },
              { label: 'Hardware', value: 'Stainless Steel Roller + Lock' },
              { label: 'Color Options', value: 'White / Woodgrain / RAL Foil' },
            ],
            features: [
              '5-chamber uPVC profile delivers excellent thermal and acoustic insulation',
              'UV-stabilised compound ensures the frame does not yellow or degrade over time',
              'Galvanised steel reinforcement provides structural rigidity for wide spans',
              'Stainless steel roller system offers smooth, low-effort operation',
              'Integrated drainage channels prevent water pooling and ingress',
              'Woodgrain foil laminate option for a natural timber appearance',
            ],
          },
        ],
      },
      {
        id: 'casement-upvc-windows',
        name: 'Casement uPVC Windows',
        description: 'Versatile outward-opening uPVC casement windows with robust multi-point locking systems.',
        products: [
          {
            id: 'casement-upvc-w1',
            name: 'Casement uPVC Window',
            tagline: 'Versatile outward-opening uPVC window with robust multi-point locking and double weatherseal',
            highlights: ['Multi-Point Lock', 'Double Weatherseal'],
            gradient: 'linear-gradient(135deg, #1e3d5a 0%, #2a6e85 100%)',
            fullDescription:
              'The Casement uPVC Window provides a versatile outward-opening solution for a wide range of window configurations. Its double-layer EPDM weatherseal and multi-point perimeter locking system ensure consistent airtight and watertight performance, making it an ideal choice for demanding residential environments.',
            specs: [
              { label: 'Material', value: 'uPVC Multi-Chamber Profile' },
              { label: 'Opening Type', value: 'Outward Opening Casement' },
              { label: 'Seal System', value: 'Double EPDM Perimeter Seal' },
              { label: 'Hardware', value: 'Multi-Point Espagnolette Lock' },
              { label: 'Glazing Capacity', value: 'Up to 32mm DGU' },
              { label: 'Color Options', value: 'White / Woodgrain / RAL Foil' },
            ],
            features: [
              'Double EPDM weatherseal eliminates draughts and reduces heat loss',
              'Multi-point espagnolette lock compresses the seal uniformly around the perimeter',
              'Friction stay hinge allows controlled ventilation at any open position',
              'Galvanised steel reinforcement enables large sash formats without deflection',
              'Fully drained and back-ventilated frame system prevents moisture buildup',
              'Available with trickle ventilators integrated into the head frame',
            ],
          },
        ],
      },
      {
        id: 'tilt-turn',
        name: 'Tilt & Turn Windows',
        description: 'Dual-function European-style windows that tilt inward for ventilation or swing fully open for unobstructed access.',
        products: [
          {
            id: 'tilt-turn-1',
            name: 'Tilt & Turn uPVC Window',
            tagline: 'European-style dual-function window with tilt ventilation and full-turn opening capability',
            highlights: ['Dual Open Mode', 'European Hardware'],
            gradient: 'linear-gradient(135deg, #163252 0%, #1d6278 100%)',
            fullDescription:
              'The Tilt & Turn uPVC Window offers unmatched operational versatility through its precision-engineered dual-mode hardware — tilt the sash inward from the top for secure background ventilation, or turn it fully open like a casement for unobstructed access and easy external cleaning from inside.',
            specs: [
              { label: 'Material', value: 'uPVC Multi-Chamber Profile' },
              { label: 'Operating Modes', value: 'Tilt (Top-In) + Turn (Side-Swing)' },
              { label: 'Hardware', value: 'European Tilt-Turn Mechanism' },
              { label: 'Glazing Capacity', value: 'Up to 36mm DGU' },
              { label: 'Reinforcement', value: 'Galvanised Steel Insert' },
              { label: 'Color Options', value: 'White / Woodgrain / RAL Foil' },
            ],
            features: [
              'Tilt mode provides secure background ventilation even in adverse weather',
              'Full-turn casement mode allows easy external glass cleaning from inside',
              'Single handle controls both modes via a simple 90° / 180° rotation',
              'European-certified tilt-turn hardware tested to 100,000 operating cycles',
              'Enhanced security with multi-point locking in the closed position',
              'Wide glazing rebate accepts high-performance triple-glazed units',
            ],
          },
        ],
      },
      {
        id: 'slide-fold-doors',
        name: 'Slide & Fold Doors',
        description: 'Space-maximising folding door systems that open completely to create a seamless indoor-outdoor threshold.',
        products: [
          {
            id: 'slide-fold-1',
            name: 'Slide & Fold uPVC Door',
            tagline: 'Space-maximising folding door system for seamless indoor-outdoor living connections',
            highlights: ['Full Opening Width', 'Low-Profile Track'],
            gradient: 'linear-gradient(135deg, #12253e 0%, #1a5a72 100%)',
            fullDescription:
              'The Slide & Fold uPVC Door system folds and stacks entirely to one or both sides, creating a completely unobstructed opening that blurs the boundary between interior and exterior spaces. The low-profile aluminium threshold enables a flush transition between floor surfaces, ideal for patio, terrace, and garden living spaces.',
            specs: [
              { label: 'Material', value: 'uPVC Multi-Chamber Profile' },
              { label: 'Configuration', value: '2, 3, 4 or 6 Panel Fold' },
              { label: 'Threshold', value: 'Low-Profile Aluminium (21mm)' },
              { label: 'Hardware', value: 'Top-Hung Folding Track System' },
              { label: 'Glazing Capacity', value: 'Up to 28mm DGU' },
              { label: 'Maximum Opening Width', value: '6000mm' },
            ],
            features: [
              'Panels fold and stack completely clear of the opening for maximum airflow',
              '21mm low-profile threshold enables near-flush indoor-to-outdoor transitions',
              'Top-hung track system keeps the floor clear of debris and obstructions',
              'Available in 2 to 6 panel configurations for openings up to 6 metres wide',
              'Multi-point locking system secures all panels in the closed position',
              'Smooth-action folding hardware rated for 50,000 operation cycles',
            ],
          },
        ],
      },
      {
        id: 'internal-doors',
        name: 'Internal Doors',
        description: 'Sleek uPVC internal door systems delivering clean architectural lines for modern interior design.',
        products: [
          {
            id: 'internal-door-1',
            name: 'Internal uPVC Door',
            tagline: 'Sleek uPVC internal door system with clean architectural lines and smooth operation',
            highlights: ['Sound Dampening', 'Smooth Operation'],
            gradient: 'linear-gradient(135deg, #192b45 0%, #2a5f7a 100%)',
            fullDescription:
              'Our Internal uPVC Door system brings the durability and low-maintenance benefits of uPVC into interior spaces. The acoustic seal package and solid construction deliver meaningful sound dampening between rooms, making it an ideal solution for bedrooms, home offices, and hospitality interiors demanding privacy and comfort.',
            specs: [
              { label: 'Material', value: 'uPVC Reinforced Profile' },
              { label: 'Door Thickness', value: '44mm' },
              { label: 'Acoustic Performance', value: 'Up to 32 dB Rw' },
              { label: 'Hardware', value: 'Heavy-Duty European Hinges' },
              { label: 'Glazing Option', value: 'Solid / Single Glazed Panel' },
              { label: 'Color Options', value: 'White / Woodgrain / RAL Foil' },
            ],
            features: [
              '44mm door slab delivers meaningful acoustic separation between rooms',
              'EPDM compression seal ensures a tight close with no rattling',
              'Heavy-duty European concealed hinges support slab weights up to 80 kg',
              'Available as solid panel or single-glazed vision panel configurations',
              'Woodgrain foil laminate provides a natural timber aesthetic on uPVC',
              'Pre-hung frame system for fast, accurate installation with minimal site work',
            ],
          },
        ],
      },
      {
        id: 'sliding-doors',
        name: 'Sliding Doors',
        description: 'Elegant uPVC sliding door systems offering wide openings with a minimal profile footprint.',
        products: [
          {
            id: 'sliding-door-1',
            name: 'uPVC Sliding Door',
            tagline: 'Elegant uPVC sliding door offering wide openings with a minimal profile footprint',
            highlights: ['Wide Format Glazing', 'Anti-Lift Track System'],
            gradient: 'linear-gradient(135deg, #1e3550 0%, #24687e 100%)',
            fullDescription:
              'The uPVC Sliding Door delivers wide-format glazed openings with a slender profile and smooth-glide operation. The anti-lift security track prevents forced-entry panel removal, while the multi-roller carriage system distributes sash weight evenly for effortless movement even on oversized panels.',
            specs: [
              { label: 'Material', value: 'uPVC Multi-Chamber Profile' },
              { label: 'Panel Configuration', value: '2 or 3 Panel Sliding' },
              { label: 'Security', value: 'Anti-Lift Track + Multi-Point Lock' },
              { label: 'Roller System', value: 'Multi-Roller Stainless Carriage' },
              { label: 'Glazing Capacity', value: 'Up to 28mm DGU' },
              { label: 'Maximum Width Per Panel', value: '1400mm' },
            ],
            features: [
              'Anti-lift security groove in the track prevents panel removal from outside',
              'Multi-roller stainless steel carriage ensures smooth operation under load',
              'Finger-pull handle provides comfortable operation for all users',
              'Integrated fly screen channel accommodates optional insect screen installation',
              'Flush sill option available for accessible threshold applications',
              'Galvanised steel reinforcement enables panel widths up to 1400mm',
            ],
          },
        ],
      },
      {
        id: 'villa-windows',
        name: 'Villa Windows',
        description: 'Premium uPVC villa window systems crafted for residential prestige, comfort, and long-term performance.',
        products: [
          {
            id: 'villa-window-1',
            name: 'Villa uPVC Window',
            tagline: 'Premium uPVC villa window crafted for residential prestige and superior thermal comfort',
            highlights: ['Reinforced Profile', 'Noise Reduction Class 3'],
            gradient: 'linear-gradient(135deg, #142240 0%, #1f5f7a 100%)',
            fullDescription:
              'The Villa uPVC Window is our premium residential window system, purpose-engineered for villas and high-end homes where aesthetics, comfort, and performance must all be exceptional. Its heavily reinforced 6-chamber profile, Class 3 acoustic performance, and wide glazing rebate make it the complete solution for discerning residential projects.',
            specs: [
              { label: 'Material', value: 'uPVC 6-Chamber Profile' },
              { label: 'Reinforcement', value: 'Heavy-Gauge Galvanised Steel' },
              { label: 'Acoustic Class', value: 'Class 3 (up to 38 dB Rw)' },
              { label: 'Glazing Capacity', value: 'Up to 40mm Triple Glazing' },
              { label: 'Hardware', value: 'Premium Anti-Burglary Fittings' },
              { label: 'Color Options', value: 'White / Woodgrain / Full RAL Foil Wrap' },
            ],
            features: [
              '6-chamber profile achieves the highest thermal resistance in the uPVC range',
              'Class 3 acoustic rating reduces external noise by up to 38 dB Rw',
              'Heavy-gauge galvanised steel reinforcement in every profile member',
              'Compatible with triple-glazed units up to 40mm for extreme climates',
              'Anti-burglary hardware rated to RC2 resistance class as standard',
              'Full foil wrap available in over 40 wood and solid colour finishes',
            ],
          },
        ],
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
            tagline: 'Cellular honeycomb blinds engineered for skylight apertures with superior thermal insulation',
            highlights: ['Cellular Insulation', 'Custom-Fit Cassette'],
            gradient: 'linear-gradient(135deg, #1a2f4b 0%, #2d5f8a 100%)',
            fullDescription:
              'Honeycomb Skylight Blinds use a precision-cut cellular fabric that traps air within each cell, creating a thermal buffer between the room and the overhead glazing. Custom-fabricated to fit any skylight aperture, the integrated aluminium cassette mounts discretely within the skylight frame for a clean, factory-finished look.',
            specs: [
              { label: 'Fabric Structure', value: 'Single-Cell Honeycomb (25mm Cell)' },
              { label: 'Operation', value: 'Manual Cord / Optional Motorised' },
              { label: 'Frame', value: 'Powder-Coated Aluminium Cassette' },
              { label: 'Mounting', value: 'Skylight Frame Integrated' },
              { label: 'Light Control', value: 'Translucent / Blackout Options' },
              { label: 'Custom Sizes', value: 'Yes — fabricated to aperture' },
            ],
            features: [
              'Honeycomb cell structure traps air and significantly reduces heat gain and loss',
              'Available in translucent and blackout fabric weights for flexible light control',
              'Aluminium cassette conceals the fabric stack for a clean, architectural finish',
              'Custom-fabricated to any skylight aperture shape including trapezoid and arched',
              'Optional motorised operation with remote or smart-home integration',
              'Tensioned guide wire system prevents sagging on sloped installations',
            ],
          },
          {
            id: 'roman-skylight',
            name: 'Roman Skylight Blinds',
            tagline: 'Elegant soft-fold Roman fabric blinds with a custom skylight frame mounting system',
            highlights: ['Soft-Fold Fabric', 'UV-Blocking Weave'],
            gradient: 'linear-gradient(135deg, #162840 0%, #265577 100%)',
            fullDescription:
              'Roman Skylight Blinds bring the elegance of traditional Roman fabric folds to overhead glazing. Manufactured from a tight UV-blocking weave, they reduce glare and solar gain while adding a tactile, premium softness to skylit interior spaces. The bespoke aluminium headrail system is engineered specifically for inclined and horizontal skylight mounting.',
            specs: [
              { label: 'Fabric Type', value: 'Woven Polyester UV-Blocking' },
              { label: 'Solar Absorption', value: 'Up to 85% UV Block' },
              { label: 'Operation', value: 'Motorised (Standard) / Manual Cord' },
              { label: 'Headrail', value: 'Aluminium — Skylight Specific' },
              { label: 'Mounting', value: 'Face Fix to Skylight Frame' },
              { label: 'Fold Depth', value: '100mm Roman Folds' },
            ],
            features: [
              'UV-blocking woven fabric protects furnishings and reduces solar heat gain',
              'Soft 100mm Roman folds add texture and visual warmth to the skylight opening',
              'Motorised operation as standard for safe, effortless control of overhead blinds',
              'Aluminium headrail engineered for inclined installations up to 45° pitch',
              'Wide fabric library including sheer, dim-out, and blackout weave options',
              'Child-safe by design — no exposed cords on motorised variants',
            ],
          },
          {
            id: 'exterior-skylight',
            name: 'Exterior Skylight Blinds',
            tagline: 'UV-resistant exterior-mounted protection system for overhead glazing and roof lights',
            highlights: ['Exterior-Grade Fabric', 'Weather-Sealed Track'],
            gradient: 'linear-gradient(135deg, #0f2038 0%, #1e4a70 100%)',
            fullDescription:
              'Exterior Skylight Blinds intercept solar energy before it passes through the glass, delivering dramatically superior shading efficiency compared to interior solutions. The weather-sealed extruded aluminium track and UV-stable exterior fabric ensure year-round performance under full exposure to sun, rain, and wind.',
            specs: [
              { label: 'Fabric Type', value: 'PVC-Coated Polyester — Exterior Grade' },
              { label: 'UV Resistance', value: 'Class 5 (ISO 4892)' },
              { label: 'Track System', value: 'Weather-Sealed Extruded Aluminium' },
              { label: 'Operation', value: 'Motorised with Weather Sensor' },
              { label: 'Wind Resistance', value: 'Up to 80 km/h (auto-retract above)' },
              { label: 'Mounting', value: 'Exterior Skylight Frame / Roof Structure' },
            ],
            features: [
              'Exterior positioning blocks up to 90% of solar energy before it enters the glass',
              'UV Class 5 exterior fabric resists fading and degradation in full sun exposure',
              'Weather sensor automatically retracts the blind when wind exceeds safe threshold',
              'Weather-sealed aluminium track channels prevent water infiltration at guides',
              'Motorised with remote control, timer, and smart-home protocol options',
              'Engineered for year-round exterior exposure without seasonal removal',
            ],
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
            tagline: 'Motorised retractable roof system for seamless indoor-outdoor living and entertainment spaces',
            highlights: ['Motorised Operation', 'Weatherproof Aluminium Frame'],
            gradient: 'linear-gradient(135deg, #192b45 0%, #2d6a8a 100%)',
            fullDescription:
              'The Retractable Roof system transforms any outdoor terrace, pergola, or covered space into an all-weather living environment. At the press of a button, extruded aluminium louvres rotate and retract to modulate sunlight and ventilation, while the IP54-rated motor drive and integrated drainage channels ensure reliable performance through all seasons.',
            specs: [
              { label: 'Frame Material', value: 'Powder-Coated Aluminium 6063-T5' },
              { label: 'Louvre Material', value: 'Extruded Aluminium' },
              { label: 'Motor', value: 'IP54-Rated Tubular Motor' },
              { label: 'Control', value: 'Remote / Wall Switch / Smart-Home' },
              { label: 'Max Span', value: '6000mm (without intermediate post)' },
              { label: 'Wind Resistance', value: 'Class 3 (up to 130 km/h)' },
            ],
            features: [
              'Motorised louvres rotate from 0° to 135° for precise light and ventilation control',
              'IP54-rated motor is fully weatherproof for permanent exterior installation',
              'Integrated drainage channels in each louvre carry rainwater to concealed downpipes',
              'Spans up to 6 metres without intermediate structural posts',
              'Wind resistance Class 3 — engineered for exposed coastal and elevated sites',
              'Compatible with smart-home systems including KNX, Zigbee, and Wi-Fi protocols',
            ],
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
            name: 'Pleated Mesh Classic',
            tagline: 'Classic folded mesh screen for standard window and door openings with compact cassette',
            highlights: ['Fibreglass Mesh', 'Compact Cassette'],
            gradient: 'linear-gradient(135deg, #1b3a4a 0%, #2d6760 100%)',
            fullDescription:
              'The Pleated Mesh Classic is our foundational insect screen solution, providing reliable protection against insects for the full range of window and door configurations. The fibreglass mesh folds compactly into a low-profile aluminium cassette when not in use, maintaining the visual character of the opening.',
            specs: [
              { label: 'Mesh Type', value: 'Fibreglass 18×16 / Polyester Option' },
              { label: 'Mesh Opening', value: '1.2mm × 1.6mm' },
              { label: 'Frame Material', value: 'Powder-Coated Aluminium' },
              { label: 'Operation', value: 'Side-Folding Pleated' },
              { label: 'Cassette Size', value: 'Compact 25mm Housing' },
              { label: 'Color Options', value: 'White / Silver / Bronze / Anthracite' },
            ],
            features: [
              'Fibreglass mesh provides excellent insect protection without obstructing airflow',
              'Compact 25mm cassette housing keeps the screen discreet when not in use',
              'Side-folding operation allows single-hand use on hinged and sliding openings',
              'Powder-coated aluminium frame matches any window or door finish',
              'Available in mesh weights from standard to heavy-duty pollen filter',
              'Compatible with all standard window and door frame systems',
            ],
          },
          {
            id: 'barrier-free',
            name: 'Barrier-Free Mesh',
            tagline: 'Track-free magnetic pleated mesh for unobstructed, fully accessible thresholds',
            highlights: ['No Bottom Track', 'Magnetic Guide System'],
            gradient: 'linear-gradient(135deg, #162f3d 0%, #255856 100%)',
            fullDescription:
              'The Barrier-Free Mesh system eliminates the traditional bottom track, creating a completely flush and trip-hazard-free threshold. Magnetic guides on either side of the opening hold the folded mesh panels in place without any floor-mounted hardware, making it the ideal screen solution for accessible, barrier-free doorways.',
            specs: [
              { label: 'Mesh Type', value: 'Fibreglass 18×16' },
              { label: 'Bottom Track', value: 'None — Floor-Free System' },
              { label: 'Guide System', value: 'Magnetic Side Guides' },
              { label: 'Frame Material', value: 'Powder-Coated Aluminium' },
              { label: 'Maximum Width', value: '1800mm (single leaf)' },
              { label: 'Compliance', value: 'Barrier-Free Access Compatible' },
            ],
            features: [
              'Completely trackless floor — no trip hazard for elderly or mobility-impaired users',
              'Magnetic side guides align the screen panels without floor-mounted fixings',
              'Meets barrier-free access requirements for residential and commercial doorways',
              'Standard fibreglass mesh ensures full insect protection without reducing airflow',
              'Panels self-close under their own weight when released',
              'Compatible with single and double door configurations up to 1800mm per leaf',
            ],
          },
          {
            id: 'elite-pleated',
            name: 'Elite Pleated Mesh',
            tagline: 'Premium pleated screen system with upgraded mesh fabric and precision anodised hardware',
            highlights: ['Premium Mesh Fabric', 'Anodised Hardware'],
            gradient: 'linear-gradient(135deg, #122836 0%, #1e4e4c 100%)',
            fullDescription:
              'The Elite Pleated Mesh system combines the operational simplicity of the classic pleated design with premium anodised aluminium hardware and an upgraded high-transparency mesh fabric. Designed for high-end residential installations where every detail of the finished fenestration must reflect quality and precision.',
            specs: [
              { label: 'Mesh Type', value: 'High-Transparency Polyester (18×14)' },
              { label: 'Mesh Colour', value: 'Black (for reduced visual obstruction)' },
              { label: 'Frame Material', value: 'Anodised Aluminium' },
              { label: 'Cassette Finish', value: 'Anodised Silver / Bronze / Charcoal' },
              { label: 'Operation', value: 'Side-Folding Pleated' },
              { label: 'Maximum Width', value: '2400mm (with centre guide)' },
            ],
            features: [
              'High-transparency black polyester mesh provides an almost invisible view from inside',
              'Anodised aluminium hardware resists corrosion for coastal and humid environments',
              'Wider opening capability up to 2400mm with optional centre guide post',
              'Smooth-action pleating hardware with soft-close tensioner for quiet operation',
              'Bespoke cassette sizing to match exact window and door profiles',
              'Lifetime structural warranty on anodised aluminium frame components',
            ],
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
          },
          {
            id: 'roller-mesh',
            name: 'Roller Mesh',
            tagline: 'Spring-loaded roller insect screen for smooth single-hand operation on any opening',
            highlights: ['Spring-Loaded Roller', 'Silent Operation'],
            gradient: 'linear-gradient(135deg, #172a38 0%, #235252 100%)',
            fullDescription:
              'The Roller Mesh screen combines the simplicity of a spring-loaded roller mechanism with the effectiveness of a precision fibreglass insect mesh. Housed in a compact aluminium cassette at the top of the opening, the screen rolls down to close and automatically retracts when released, providing effortless single-hand operation.',
            specs: [
              { label: 'Mesh Type', value: 'Fibreglass 18×16 / Solar Mesh Option' },
              { label: 'Operation', value: 'Spring-Loaded Roller with Auto-Retract' },
              { label: 'Cassette', value: 'Aluminium — Top or Side Mount' },
              { label: 'Guide System', value: 'Aluminium Side Channels' },
              { label: 'Bottom Bar', value: 'Weighted Aluminium Pull Bar' },
              { label: 'Color Options', value: 'White / Silver / Bronze / Anthracite' },
            ],
            features: [
              'Spring-loaded auto-retract mechanism allows single-hand open and close',
              'Silent operation — spring is pre-tensioned to minimise noise on retraction',
              'Upgrade to solar mesh fabric for combined insect and solar glare protection',
              'Compact cassette mounts at top or side of the opening with minimal profile',
              'Weighted bottom bar ensures the screen hangs flat and seals at the sill',
              'Guide channels retain the mesh under wind load without billowing',
            ],
          },
          {
            id: 'zip-screens',
            name: 'Zip Screens',
            tagline: 'Tensioned guide-wire zip screen system for insect protection and solar shade control',
            highlights: ['Zip-Guided Fabric', 'Wind-Resistant System'],
            gradient: 'linear-gradient(135deg, #122030 0%, #1c4848 100%)',
            fullDescription:
              'Zip Screens use a tensioned zip-guided fabric system to create a completely sealed insect and solar protection barrier. The fabric edge zips into extruded aluminium side channels, eliminating gaps at the edges and preventing the screen from billowing under wind load — delivering both superior insect exclusion and effective solar shading in one system.',
            specs: [
              { label: 'Fabric', value: 'PVC-Coated Polyester with Zip Edge' },
              { label: 'Openness Factor', value: '1% — 10% (Solar Control Options)' },
              { label: 'Guide System', value: 'Extruded Aluminium Zip Channel' },
              { label: 'Operation', value: 'Manual Strap / Motorised' },
              { label: 'Wind Resistance', value: 'Class 3 (Zip-Guided)' },
              { label: 'Color Options', value: 'Multiple Fabric and Frame Colors' },
            ],
            features: [
              'Zip-guided edge creates a sealed perimeter — no gaps for insects to enter',
              'Wind-resistant to Class 3 — fabric stays taut and functional in exposed locations',
              'Solar control fabric options reduce heat gain without blocking the view',
              'Motorised operation with remote, timer, and smart-home compatibility',
              'Suitable for large openings including full-width façade applications',
              'Side channels integrate neatly into window and door frame systems',
            ],
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
            tagline: 'Double glazing unit integrated blinds for permanent dust-free light and privacy control',
            highlights: ['Sealed Within Glass', 'Zero Maintenance'],
            gradient: 'linear-gradient(135deg, #2d2a1f 0%, #4a3f2d 100%)',
            fullDescription:
              'DGU Blinds are permanently sealed within the insulating glass unit itself, making them completely dust-free and maintenance-free for the life of the window. A small magnetic control wheel on the glass surface raises, lowers, and tilts the internal venetian slats without any physical connection penetrating the sealed glass unit.',
            specs: [
              { label: 'System Type', value: 'Integrated Insulating Glass Unit Blind' },
              { label: 'Slat Width', value: '25mm Aluminium Venetian' },
              { label: 'Glazing Unit Thickness', value: '27mm — 36mm (slat-dependent)' },
              { label: 'Control', value: 'External Magnetic Wheel — No Penetration' },
              { label: 'Functions', value: 'Raise / Lower / Tilt (Full to Blackout)' },
              { label: 'Glass Options', value: 'Low-E / Tinted / Standard' },
            ],
            features: [
              'Blind is permanently sealed within the glass — zero dust, zero cleaning required',
              'Magnetic external control operates the blind with no penetrations in the sealed unit',
              'Venetian slats tilt from fully open to fully closed for privacy on demand',
              'Compatible with any standard insulating glass unit window or door system',
              'Eliminates cord hazards — inherently child and pet safe',
              'Glass unit retains its full thermal performance — blind adds no U-value penalty',
            ],
          },
          {
            id: 'honeycomb-dgu',
            name: 'Honeycomb DGU Blinds',
            tagline: 'Cellular honeycomb blinds integrated within double glazing for enhanced thermal insulation',
            highlights: ['Cellular Energy Core', 'Built-In U-Value Boost'],
            gradient: 'linear-gradient(135deg, #2a2518 0%, #433823 100%)',
            fullDescription:
              'Honeycomb DGU Blinds integrate a precision cellular fabric directly within the sealed double glazing unit, adding a significant thermal insulation layer that actively improves the overall U-value of the glazed assembly. The honeycomb structure traps a layer of still air that acts as an additional thermal buffer between the interior and exterior glass panes.',
            specs: [
              { label: 'System Type', value: 'Honeycomb Fabric — Integrated IGU' },
              { label: 'Cell Structure', value: 'Single Honeycomb (25mm Cell Depth)' },
              { label: 'U-Value Improvement', value: 'Up to 0.5 W/m²K Reduction' },
              { label: 'Glazing Unit Thickness', value: '32mm — 44mm' },
              { label: 'Control', value: 'External Magnetic Drive' },
              { label: 'Light Control', value: 'Translucent / Dim-Out Options' },
            ],
            features: [
              'Cellular honeycomb fabric traps a still-air layer that actively improves U-value',
              'Measurable reduction in heat loss compared to standard IGU alone',
              'Fabric is permanently sealed — immune to dust, moisture, and handling',
              'Magnetic external control provides smooth raise and lower operation',
              'Translucent option diffuses light evenly; dim-out option provides privacy',
              'Compatible with both aluminium and uPVC window and door frame systems',
            ],
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
            tagline: 'Modular PVC pergola structures engineered for elegant outdoor living and entertainment extensions',
            highlights: ['Modular Assembly', 'Weather-Grade PVC'],
            gradient: 'linear-gradient(135deg, #1f2820 0%, #3a4a35 100%)',
            fullDescription:
              'Our PVC Pergola system provides a robust, low-maintenance outdoor structure that extends the living space of any home or hospitality venue. Engineered from weather-grade cellular uPVC, it resists UV degradation, moisture, and insect damage without ever requiring painting or treatment, while the modular bolt-together assembly enables flexible sizing and rapid installation.',
            specs: [
              { label: 'Material', value: 'Weather-Grade Cellular uPVC' },
              { label: 'Structure', value: 'Modular Bolt-Together System' },
              { label: 'Post Section', value: '150mm × 150mm' },
              { label: 'Rafter Span', value: 'Up to 5000mm' },
              { label: 'Roof Option', value: 'Adjustable Louvre / Solid Panel' },
              { label: 'Color Options', value: 'White / Woodgrain (Oak, Mahogany)' },
            ],
            features: [
              'Weather-grade uPVC never needs painting, staining, or rot treatment',
              'UV-stabilised compound resists yellowing and surface degradation for decades',
              'Modular system enables custom widths, depths, and heights on-site',
              'Rafter spans up to 5000mm without intermediate support posts',
              'Adjustable louvre roof option for controllable shade and ventilation',
              'Woodgrain surface texture provides a natural timber aesthetic on uPVC',
            ],
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
        products: [],
      },
      {
        id: 'railing-systems',
        name: 'Railing Systems',
        description: 'Architectural railing and balustrade systems — arriving soon.',
        products: [],
      },
    ],
    disabled: true,
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function findProduct(catId: string, subId: string, productId: string) {
  const cat = categories.find(c => c.id === catId)
  const sub = cat?.subcategories.find(s => s.id === subId)
  const product = sub?.products.find(p => p.id === productId)
  return { cat, sub, product }
}

export function getRelatedProducts(catId: string, subId: string, currentProductId: string) {
  const cat = categories.find(c => c.id === catId)
  const sub = cat?.subcategories.find(s => s.id === subId)
  return (sub?.products ?? []).filter(p => p.id !== currentProductId)
}
