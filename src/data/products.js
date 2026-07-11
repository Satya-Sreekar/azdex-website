// AZDEX Chemicals: Product catalogue
// Copy sourced verbatim from the AZDEX Website Copy Pack.

// Product photos live in public/products/<slug>.jpg (Unsplash, free commercial license).
// <slug>-bg.jpg is the translucent page-background image (application/industry themed).
const photo = (slug) => `${import.meta.env.BASE_URL}products/${slug}.jpg`
const bgPhoto = (slug) => `${import.meta.env.BASE_URL}products/${slug}-bg.jpg`

export const products = [
  {
    slug: 'technical-grade-urea',
    image: photo('technical-grade-urea'),
    bgImage: bgPhoto('technical-grade-urea'),
    name: 'Technical Grade Urea',
    formula: 'CO(NH₂)₂',
    cardSummary:
      'Industrial-grade urea for resins, adhesives, plywood, DEF/SCR and related downstream applications.',
    productsCard:
      'For resins, adhesives, plywood, DEF/SCR and industrial applications.',
    heroSub:
      'Industrial-grade urea for resins, adhesives, plywood, DEF/SCR and other downstream applications where grade consistency and commercial clarity matter.',
    overview:
      'Technical Grade Urea is supplied for industrial uses where purity, handling consistency and documentation matter. It is commercially relevant for resin manufacturing, adhesive applications, plywood production, diesel exhaust fluid and other downstream industrial requirements.',
    specHeading: 'Indicative Specification Reference',
    specs: [
      { label: 'Minimum total nitrogen', value: '46.0% by weight' },
      { label: 'Maximum moisture', value: '0.6% by weight' },
      { label: 'Maximum biuret', value: '0.9% by weight' },
      { label: 'Packing reference', value: '50 kg bags' },
    ],
    specNote:
      'Exact supply specifications should always be confirmed against current lot documents and buyer requirements.',
    applications: [
      'Urea-formaldehyde resin',
      'Adhesives',
      'Plywood and panel applications',
      'Diesel exhaust fluid / SCR',
      'Dyes and pigments',
      'Industrial formulations based on buyer requirement',
    ],
    packaging:
      '50 kg bags, subject to current packing availability and quotation stage confirmation.',
    origins:
      'India and selected international origins, subject to availability, documentation and applicable trade requirements.',
    industriesServed: [
      'Plywood & MDF',
      'Resin & Adhesives',
      'Chemical Manufacturing',
      'Industrial Trading & Distribution',
    ],
    enquiry:
      'Tell us your required grade, quantity, destination and target timeline, and our team will review the most practical supply option.',
  },
  {
    slug: 'soda-ash',
    image: photo('soda-ash'),
    bgImage: bgPhoto('soda-ash'),
    name: 'Soda Ash',
    formula: 'Na₂CO₃',
    cardSummary:
      'Dense and light grades for glass, detergents, water treatment and chemical manufacturing.',
    productsCard:
      'Dense and light grades for glass, detergents, water treatment and chemicals.',
    heroSub:
      'Dense and light grades for industrial users in glass, detergents, water treatment and chemical manufacturing.',
    overview:
      'AZDEX supplies Soda Ash for industrial applications where consistent quality, commercially practical supply and responsive support are important. The product is relevant across glass manufacturing, detergents, water treatment and sodium-based chemical processing.',
    forms: [
      {
        name: 'Soda Ash Dense',
        desc: 'Commonly used in glass and other heavy industrial applications requiring stable handling characteristics.',
      },
      {
        name: 'Soda Ash Light',
        desc: 'Commonly used in detergents, chemicals and selected process applications based on formulation needs.',
      },
    ],
    specHeading: 'Key Specifications',
    specNote:
      'Available in Dense and Light grades. Exact assay, bulk density, particle profile, packing and lot documentation are confirmed at quotation stage.',
    applications: [
      'Glass manufacturing',
      'Detergents and cleaning products',
      'Sodium-based chemical production',
      'Water softening',
      'Silicate manufacturing',
      'Textile and process uses based on buyer requirement',
    ],
    packaging:
      'Bags or bulk packing options, subject to product grade, origin and quotation stage confirmation.',
    origins:
      'India and selected international origins, subject to availability, documentation and applicable trade requirements.',
    industriesServed: [
      'Glass Manufacturing',
      'Detergents & Cleaning Products',
      'Water Treatment',
      'Chemical Manufacturing',
      'Textile & Process Industries',
    ],
    enquiry:
      'Share your required grade, quantity and delivery destination, and our team will review the most suitable commercial option.',
  },
  {
    slug: 'caustic-soda',
    image: photo('caustic-soda'),
    bgImage: bgPhoto('caustic-soda'),
    name: 'Caustic Soda',
    formula: 'NaOH',
    cardSummary:
      'Industrial caustic soda for processing, formulation and plant operations, including flakes and lye, subject to availability.',
    productsCard:
      'Solid and lye forms for process industries, subject to current availability.',
    heroSub:
      'Industrial caustic soda supplied in forms suited to processing, formulation and plant operations, including flakes and lye, subject to current market availability.',
    overview:
      'Caustic Soda is a core industrial chemical used across process industries where alkalinity, pH control and reaction performance matter. AZDEX supports buyers requiring commercially clear supply options for plant use, formulation needs and downstream industrial applications.',
    specHeading: 'Indicative Specification Reference',
    specs: [
      { label: 'Standard reference', value: 'Covered under IS 252:2013' },
      { label: 'Min. sodium hydroxide (technical grade)', value: '99.50% on dry basis (lye and solid form)' },
    ],
    specNote:
      'Exact grade, form, certification applicability and current lot documentation should be confirmed before order confirmation.',
    formsLabel: 'Forms',
    formsList: ['Lye', 'Flakes', 'Other solid forms subject to market availability'],
    applications: [
      'Detergents and cleaning formulations',
      'Pulp and paper',
      'Textile bleaching, dyeing and mercerising',
      'Water treatment',
      'pH adjustment',
      'Chemical manufacturing and processing',
    ],
    packaging:
      'Packaging depends on form and supply arrangement. Bagged solid material and tanker-based supply for lye may be available subject to quotation stage confirmation.',
    complianceNote:
      'Caustic Soda is covered under IS 252:2013, and BIS lists it under the Bureau of Indian Standard (Caustic Soda) Order, 2018. Where applicable, AZDEX confirms grade, certification applicability and documentation before order confirmation.',
    origins:
      'India and selected international origins, subject to availability, documentation and applicable trade requirements.',
    industriesServed: [
      'Detergents & Cleaning Products',
      'Water Treatment',
      'Textile & Paper',
      'Chemical Manufacturing',
    ],
    enquiry:
      'Send us your required form, grade, quantity and destination, and we will review the most practical supply option currently available.',
  },
  {
    slug: 'pvc-resin',
    image: photo('pvc-resin'),
    bgImage: bgPhoto('pvc-resin'),
    name: 'PVC Resin',
    formula: '(C₂H₃Cl)ₙ',
    cardSummary:
      'Suspension-grade PVC resin for pipes, fittings, cables, profiles, films and industrial plastic applications.',
    productsCard:
      'Suspension-grade resin for downstream plastic processing applications.',
    heroSub:
      'Suspension-grade PVC resin for downstream processors manufacturing pipes, fittings, cables, profiles, films and other industrial plastic products.',
    overview:
      'PVC Resin is supplied for downstream plastic processing applications where grade consistency, processing suitability and commercially practical sourcing matter. AZDEX supports buyers serving construction, infrastructure, cable, profile and related plastic conversion markets.',
    specHeading: 'Key Specifications',
    specNote:
      'Suspension-grade PVC resin. Exact K-value, application fit, packing, origin and lot documentation are confirmed at quotation stage based on buyer requirement.',
    applications: [
      'Pipes and fittings',
      'Cable compounds and sheathing',
      'Profiles',
      'Films',
      'Flooring and roofing applications',
      'Industrial plastic products',
    ],
    packaging:
      'Industrial packing options subject to origin, grade and quotation stage confirmation.',
    tradeNote:
      'Origin availability and trade applicability are confirmed at quotation stage. Import and export policy requirements can vary by HS code and applicable regulatory conditions.',
    origins:
      'Selected approved origins, subject to availability, documentation and applicable trade requirements.',
    industriesServed: [
      'PVC & Plastics',
      'Building Materials',
      'Cable & Infrastructure Products',
      'Industrial Trading & Distribution',
    ],
    enquiry:
      'Share your grade requirement, quantity, application and destination, and our team will respond with the most suitable commercial option.',
  },
  {
    slug: 'melamine',
    image: photo('melamine'),
    bgImage: bgPhoto('melamine'),
    name: 'Melamine',
    formula: 'C₃H₆N₆',
    cardSummary:
      'Industrial melamine for boards, laminates, coatings, adhesives and related resin applications.',
    productsCard:
      'For boards, laminates, coatings and resin-based industrial uses.',
    heroSub:
      'Industrial melamine for resin and surface applications used in boards, laminates, coatings and related downstream products.',
    overview:
      'Melamine is a commercially important industrial input for board, decorative surface and resin-based applications. AZDEX supports buyers who require practical supply options backed by clear commercial communication and documentation.',
    specHeading: 'Key Specifications',
    specNote:
      'Industrial melamine for resin and surface applications. Exact purity, packing, origin and lot documentation are confirmed at quotation stage.',
    applications: [
      'Furniture boards',
      'Laminates',
      'Coatings',
      'Adhesives and resins',
      'Surface finishing systems',
      'Related downstream industrial applications',
    ],
    packaging:
      'Industrial packing options subject to supply source and quotation stage confirmation.',
    origins:
      'India and selected international origins, subject to availability, documentation and applicable trade requirements.',
    industriesServed: [
      'Plywood & MDF',
      'Laminates & Decorative Surfaces',
      'Resin & Adhesives',
      'Industrial Trading & Distribution',
    ],
    enquiry:
      'Tell us your application, quantity and destination, and our team will review the most practical supply route.',
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
