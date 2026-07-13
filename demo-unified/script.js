// ═══════════════════════════════════════════════════════════════════════════
// East97 Member Portal — Q2 Capital Partners & Q2 Property Management
// Static HTML/CSS/JS port of east97-unified-portal.jsx
// ═══════════════════════════════════════════════════════════════════════════

const T = {
  canvas:"#0b1220", navyDeep:"#0b1220", navy:"#111c2e", navyMid:"#16263f", navyLight:"#16263f",
  gold:"#c9a96e", goldLight:"#e8d5b0",
  blue:"#a9c0d8", blueLight:"#dbe7f2",
  text:"#f4efe8", textMid:"#8fa3bc", textLight:"#64788f",
  border:"#c9a96e2e",
  green:"#7da98c", greenDim:"#152219",
  red:"#c47070", redDim:"#241414",
  amber:"#b8874f", amberDim:"#241c10",
  white:"#ffffff",
};

// ─── UNIFIED USER REGISTRY ────────────────────────────────────────────────────
const USERS = [
  { id:"allison", name:"Allison Williams",              entity:"2536546 Ontario Inc.",                            hasQ2:true,  hasQC:true  },
  { id:"ashley",  name:"Ashley & Ian Newman",           entity:"2551947 Ontario Inc.",                            hasQ2:true,  hasQC:true  },
  { id:"stefan",  name:"Stefan Wood",                   entity:"2747288 Ontario Inc.",                            hasQ2:true,  hasQC:true  },
  { id:"davidng", name:"Dr. David Ng",                  entity:"Dr. D. Ng Medicine Professional Corporation",     hasQ2:true,  hasQC:true  },
  { id:"spiros",  name:"Spiros Konstantatos",           entity:"Spiros Konstantatos Medicine Professional Corp.", hasQ2:true,  hasQC:true  },
  { id:"phil",    name:"Dr. Phil Stasiak",              entity:"Stasiak Holdings Inc.",                           hasQ2:true,  hasQC:true  },
  { id:"anne",    name:"Dr. Anne Brusby",                entity:"Dr. Anne Brusby",                                 hasQ2:true,  hasQC:true  },
  { id:"jihad",   name:"Jihad Abouali & Jesleen Rana",  entity:"Personal",                                        hasQ2:true,  hasQC:false },
  { id:"newman2", name:"Ashley & Ian Newman (Q2 only)", entity:"Personal — Rental",                                hasQ2:true,  hasQC:false },
  { id:"rikin",   name:"Dr. Rikin Patel",               entity:"2806091 Ontario Inc.",                            hasQ2:false, hasQC:true  },
  { id:"rainka",  name:"Ms. Rainka Joshi",              entity:"Personal",                                        hasQ2:false, hasQC:true  },
  { id:"carlos",  name:"Carlos Macedo",                 entity:"Personal",                                        hasQ2:false, hasQC:true  },
  { id:"neil",    name:"Dr. Neil Isaac",                entity:"NRAD Holdings Inc.",                              hasQ2:false, hasQC:true  },
];

// ─── Q2 PROPERTY DATA ────────────────────────────────────────────────────────
const Q2_TENANTS = {
  allison: [
    { address:"29 – 51 Sparrow Ave, Cambridge ON", tenant:"Ademuyisan Adeolu Dele", rent:2640, method:"PAD", status:"Current", note:"" },
    { address:"7133 Wellington Rd 11, Drayton ON",  tenant:"Brenda Aguilar",         rent:2550, method:"PAD", status:"Overdue", note:"Balance outstanding. Q2 following up." },
  ],
  ashley: [{ address:"65 – 51 Sparrow Ave, Cambridge ON", tenant:"Marie Dunkel & Tawfiqul Khan", rent:2550, method:"PAD", status:"Overdue", note:"Feb rent not paid, March PAD NSF. N4 issued." }],
  stefan: [{ address:"71 – 51 Sparrow Ave, Cambridge ON", tenant:"Sarah Holman",                 rent:2550, method:"PAD", status:"Current", note:"" }],
  davidng:[{ address:"66 – 51 Sparrow Ave, Cambridge ON", tenant:"Brandon Sotheara",             rent:2625, method:"PAD", status:"Current", note:"" }],
  spiros: [{ address:"67 – 51 Sparrow Ave, Cambridge ON", tenant:"Lejla Smailovic",              rent:2550, method:"PAD", status:"Current", note:"" }],
  phil:   [{ address:"40 – 51 Sparrow Ave, Cambridge ON", tenant:"Aveeva Switzer & Jason Reid",  rent:2700, method:"PAD", status:"Current", note:"" }],
  anne:   [{ address:"72 – 51 Sparrow Ave, Cambridge ON", tenant:"Anne Brusby",                  rent:2600, method:"PAD", status:"Current", note:"" }],
  jihad:  [
    { address:"33 – 51 Sparrow Ave, Cambridge ON", tenant:"Naomi Downer",       rent:1793, method:"PAD",        status:"Current", note:"" },
    { address:"902 – 222 Jackson St, Hamilton ON", tenant:"Chris Meidel",       rent:2600, method:"e-Transfer", status:"Current", note:"" },
    { address:"918 – 21 Nelson St, Toronto ON",    tenant:"Alain Mbanjabahizi", rent:2000, method:"e-Transfer", status:"Current", note:"" },
  ],
};

// ─── Q2 CAPITAL DATA ──────────────────────────────────────────────────────────
const QC_DATA = {
  allison: { entity:"2536546 Ontario Inc.", committed:2652564.47, invested:1695424.47, returned:227465, profit:675084.51, projValue:21393101.40, currentROI:39.82, targetROI:1161.77,
    positions:[
      { project:"Cambridge Main St LP",           committed:227465,   invested:0,        returned:227465, profit:494410.39, projProfit:494410.39,  roi:217.36, targetROI:217.36,  status:"Realized" },
      { project:"Milton Thompson Rd LP",          committed:932000,   invested:932000,   returned:0,      profit:-23633.39, projProfit:2833532.18, roi:-2.54,  targetROI:304.03,  status:"Active"   },
      { project:"Drayton Wellington St South LP", committed:109800,   invested:54900,    returned:0,      profit:0,         projProfit:3291208.33, roi:0,      targetROI:5994.91, status:"Active"   },
      { project:"Drayton Wellington Rd LP",       committed:1349550,  invested:674775,   returned:0,      profit:-3735.02,  projProfit:12855494.33,roi:-0.55,  targetROI:1905.15, status:"Active"   },
      { project:"51 Sparrow Ave – Unit 29",       committed:31349.47, invested:31349.47, returned:0,      profit:208396.78, projProfit:208396.78,  roi:664.75, targetROI:664.75,  status:"Active"   },
    ]},
  ashley: { entity:"2551947 Ontario Inc.", committed:654558.49, invested:394058.49, returned:98000, profit:436596.31, projValue:5018968.07, currentROI:110.79, targetROI:1164.27,
    positions:[
      { project:"Cambridge Main St LP",           committed:98000,    invested:0,        returned:98000, profit:222257.88, projProfit:222257.88,  roi:226.79, targetROI:226.79,  status:"Realized" },
      { project:"Milton Thompson Rd LP",          committed:200000,   invested:200000,   returned:0,     profit:-42,       projProfit:543339.52,  roi:-0.02,  targetROI:271.67,  status:"Active"   },
      { project:"Drayton Wellington St South LP", committed:25000,    invested:12500,    returned:0,     profit:0,         projProfit:749364.37,  roi:0,      targetROI:5994.91, status:"Active"   },
      { project:"Drayton Wellington Rd LP",       committed:300000,   invested:150000,   returned:0,     profit:0,         projProfit:2858559.37, roi:0,      targetROI:1905.71, status:"Active"   },
      { project:"51 Sparrow Ave – Unit 65",       committed:31558.49, invested:31558.49, returned:0,     profit:214380.43, projProfit:214380.43,  roi:679.31, targetROI:679.31,  status:"Active"   },
    ]},
  stefan: { entity:"2747288 Ontario Inc.", committed:686705.05, invested:366205.05, returned:158000, profit:573439.98, projValue:5187958.29, currentROI:156.59, targetROI:1290.19,
    positions:[
      { project:"Cambridge Main St LP",           committed:158000,   invested:0,       returned:158000, profit:358334.14, projProfit:358334.14,  roi:226.79, targetROI:226.79,  status:"Realized" },
      { project:"Milton Thompson Rd LP",          committed:200000,   invested:200000,  returned:0,      profit:-42,       projProfit:543339.52,  roi:-0.02,  targetROI:271.67,  status:"Active"   },
      { project:"Drayton Wellington St South LP", committed:25000,    invested:12500,   returned:0,      profit:0,         projProfit:749364.37,  roi:0,      targetROI:5994.91, status:"Active"   },
      { project:"Drayton Wellington Rd LP",       committed:300000,   invested:150000,  returned:0,      profit:0,         projProfit:2858559.37, roi:0,      targetROI:1905.71, status:"Active"   },
      { project:"51 Sparrow Ave – Unit 71",       committed:3705.05,  invested:3705.05, returned:0,      profit:215147.84, projProfit:215147.84,  roi:5806.88,targetROI:5806.88, status:"Active"   },
    ]},
  davidng:{ entity:"Dr. D. Ng Medicine Professional Corporation", committed:754668.78, invested:394168.78, returned:198000, profit:679417.86, projValue:5361899.90, currentROI:172.37, targetROI:1225.55,
    positions:[
      { project:"Cambridge Main St LP",           committed:198000,   invested:0,       returned:198000, profit:449051.64, projProfit:449051.64,  roi:226.79, targetROI:226.79,  status:"Realized" },
      { project:"Milton Thompson Rd LP",          committed:200000,   invested:200000,  returned:0,      profit:-42,       projProfit:543339.52,  roi:-0.02,  targetROI:271.67,  status:"Active"   },
      { project:"Drayton Wellington St South LP", committed:25000,    invested:12500,   returned:0,      profit:0,         projProfit:749364.37,  roi:0,      targetROI:5994.91, status:"Active"   },
      { project:"Drayton Wellington Rd LP",       committed:300000,   invested:150000,  returned:0,      profit:0,         projProfit:2858559.37, roi:0,      targetROI:1905.71, status:"Active"   },
      { project:"51 Sparrow Ave – Unit 66",       committed:31668.78, invested:31668.78,returned:0,      profit:230408.22, projProfit:230408.22,  roi:727.56, targetROI:727.56,  status:"Active"   },
    ]},
  spiros: { entity:"Spiros Konstantatos Medicine Professional Corp.", committed:702665.05, invested:392165.05, returned:148000, profit:547220.11, projValue:5177698.43, currentROI:139.54, targetROI:1198.10,
    positions:[
      { project:"Cambridge Main St LP",           committed:148000,   invested:0,       returned:148000, profit:335654.76, projProfit:335654.76,  roi:226.79, targetROI:226.79,  status:"Realized" },
      { project:"Milton Thompson Rd LP",          committed:200000,   invested:200000,  returned:0,      profit:-41,       projProfit:543339.52,  roi:-0.02,  targetROI:271.67,  status:"Active"   },
      { project:"Drayton Wellington St South LP", committed:25000,    invested:12500,   returned:0,      profit:0,         projProfit:749364.37,  roi:0,      targetROI:5994.91, status:"Active"   },
      { project:"Drayton Wellington Rd LP",       committed:300000,   invested:150000,  returned:0,      profit:0,         projProfit:2858559.37, roi:0,      targetROI:1905.71, status:"Active"   },
      { project:"51 Sparrow Ave – Unit 67",       committed:29665.05, invested:29665.05,returned:0,      profit:211606.35, projProfit:211606.35,  roi:713.32, targetROI:713.32,  status:"Active"   },
    ]},
  phil:   { entity:"Stasiak Holdings Inc.", committed:754688.09, invested:394188.09, returned:198000, profit:670776.81, projValue:5353278.16, currentROI:170.17, targetROI:1223.29,
    positions:[
      { project:"Cambridge Main St LP",           committed:198000,   invested:0,       returned:198000, profit:449051.64, projProfit:449051.64,  roi:226.79, targetROI:226.79,  status:"Realized" },
      { project:"Milton Thompson Rd LP",          committed:200000,   invested:200000,  returned:0,      profit:-39,       projProfit:543339.52,  roi:-0.02,  targetROI:271.67,  status:"Active"   },
      { project:"Drayton Wellington St South LP", committed:25000,    invested:12500,   returned:0,      profit:0,         projProfit:749364.37,  roi:0,      targetROI:5994.91, status:"Active"   },
      { project:"Drayton Wellington Rd LP",       committed:300000,   invested:150000,  returned:0,      profit:0,         projProfit:2858559.37, roi:0,      targetROI:1905.71, status:"Active"   },
      { project:"51 Sparrow Ave – Unit 40",       committed:31688.09, invested:31688.09,returned:0,      profit:221764.17, projProfit:221764.17,  roi:699.83, targetROI:699.83,  status:"Active"   },
    ]},
  anne:   { entity:"Dr. Anne Brusby", committed:754779.36, invested:394279.36, returned:198000, profit:663638.74, projValue:5346231.36, currentROI:168.32, targetROI:1221.20,
    positions:[
      { project:"Cambridge Main St LP",           committed:198000,   invested:0,       returned:198000, profit:449051.64, projProfit:449051.64,  roi:226.79, targetROI:226.79,  status:"Realized" },
      { project:"Milton Thompson Rd LP",          committed:200000,   invested:200000,  returned:0,      profit:-42,       projProfit:543339.52,  roi:-0.02,  targetROI:271.67,  status:"Active"   },
      { project:"Drayton Wellington St South LP", committed:25000,    invested:12500,   returned:0,      profit:0,         projProfit:749364.37,  roi:0,      targetROI:5994.91, status:"Active"   },
      { project:"Drayton Wellington Rd LP",       committed:300000,   invested:150000,  returned:0,      profit:0,         projProfit:2858559.37, roi:0,      targetROI:1905.71, status:"Active"   },
      { project:"51 Sparrow Ave – Unit 72",       committed:31779.36, invested:31779.36,returned:0,      profit:214629.10, projProfit:214629.10,  roi:675.37, targetROI:675.37,  status:"Active"   },
    ]},
  rikin:  { entity:"2806091 Ontario Inc.", committed:515000, invested:515000, returned:315000, profit:-10527, projValue:671862.52, currentROI:-5.26, targetROI:271.67,
    positions:[
      { project:"Milton Thompson Rd LP",    committed:200000,    invested:200000,    returned:0,      profit:-10527,   projProfit:543339.52, roi:-5.26, targetROI:271.67, status:"Active" },
      { project:"Private Loan – Cambridge", committed:222257.88, invested:222257.88, returned:315000, profit:42158.22, projProfit:42158.22, roi:0,     targetROI:13.38,  status:"Loan"   },
    ]},
  neil:   { entity:"NRAD Holdings Inc.", committed:300000, invested:150000, returned:0, profit:0, projValue:2858559.37, currentROI:0, targetROI:1905.71,
    positions:[
      { project:"Drayton Wellington Rd LP", committed:300000, invested:150000, returned:0, profit:0, projProfit:2858559.37, roi:0, targetROI:1905.71, status:"Active" },
    ]},
  rainka: { entity:"Personal", committed:200000, invested:200000, returned:0, profit:-42, projValue:543339.52, currentROI:-0.02, targetROI:271.67,
    positions:[
      { project:"Milton Thompson Rd LP", committed:200000, invested:200000, returned:0, profit:-42, projProfit:543339.52, roi:-0.02, targetROI:271.67, status:"Active" },
    ]},
  carlos: { entity:"Personal", committed:200000, invested:200000, returned:0, profit:-42, projValue:543339.52, currentROI:-0.02, targetROI:271.67,
    positions:[
      { project:"Milton Thompson Rd LP", committed:200000, invested:200000, returned:0, profit:-42, projProfit:543339.52, roi:-0.02, targetROI:271.67, status:"Active" },
    ]},
};

// ─── KC PHOTOS ────────────────────────────────────────────────────────────────
const KC_PHOTOS = [
  { label:"Landscape — Podium Waterproofing",       section:"Landscape",    src:"img/landscape-podium-waterproofing.jpg" },
  { label:"Landscape — Site Overview",              section:"Landscape",    src:"img/landscape-site-overview.jpg" },
  { label:"Underground — Mechanical Space",         section:"Underground",  src:"img/underground-mechanical-space.jpg" },
  { label:"Underground — Basement Plumbing",        section:"Underground",  src:"img/underground-basement-plumbing.jpg" },
  { label:"Underground — Foundation Work",          section:"Underground",  src:"img/underground-foundation-work.jpg" },
  { label:"Ground Floor — Electrical Rough-in",     section:"Ground Floor", src:"img/ground-floor-electrical-roughin.jpg" },
  { label:"Ground Floor — Framing & Drywall",       section:"Ground Floor", src:"img/ground-floor-framing-drywall.jpg" },
  { label:"Ground Floor — Corridor",                section:"Ground Floor", src:"img/ground-floor-corridor.jpg" },
  { label:"Ground Floor — Suite Interior",          section:"Ground Floor", src:"img/ground-floor-suite-interior.jpg" },
  { label:"Ground Floor — Mechanical Rough-in",     section:"Ground Floor", src:"img/ground-floor-mechanical-roughin.jpg" },
  { label:"Ground Floor — Plumbing Lines",          section:"Ground Floor", src:"img/ground-floor-plumbing-lines.jpg" },
  { label:"2nd Floor — Demising Wall & Insulation",  section:"2nd Floor",    src:"img/2nd-floor-demising-wall-insulation.jpg" },
  { label:"2nd Floor — Corridor Framing",           section:"2nd Floor",    src:"img/2nd-floor-corridor-framing.jpg" },
  { label:"3rd Floor — Electrical Drop",            section:"3rd Floor",    src:"img/3rd-floor-electrical-drop.jpg" },
  { label:"3rd Floor — Ceiling Framing",            section:"3rd Floor",    src:"img/3rd-floor-ceiling-framing.jpg" },
  { label:"3rd Floor — Suite Framing",              section:"3rd Floor",    src:"img/3rd-floor-suite-framing.jpg" },
  { label:"3rd Floor — Corridor",                   section:"3rd Floor",    src:"img/3rd-floor-corridor.jpg" },
  { label:"Roof Terrace — Gravel Bed",              section:"Roof Terrace", src:"img/roof-terrace-gravel-bed.jpg" },
  { label:"Roof Terrace — Scaffolding",             section:"Roof Terrace", src:"img/roof-terrace-scaffolding.jpg" },
  { label:"Roof Terrace — Overview",                section:"Roof Terrace", src:"img/roof-terrace-overview.jpg" },
  { label:"Roof Terrace — Equipment",               section:"Roof Terrace", src:"img/roof-terrace-equipment.jpg" },
];
const KC_SECTION_COLORS = { Underground:"#b8874f", Landscape:"#7a9e7e", "Ground Floor":T.blue, "2nd Floor":T.gold, "3rd Floor":"#9e7ab5", "Roof Terrace":T.green };

// ─── KC REPORT DATA (April 2026) ──────────────────────────────────────────────
const KC_MILESTONES = [
  { name:"Elevator Commissioned",    date:"Jun 29, 2026", status:"Delayed"  },
  { name:"Mockup Suite Complete",     date:"May 26, 2026", status:"Delayed"  },
  { name:"Proof of Concept Suites",   date:"Jun 19, 2026", status:"Delayed"  },
  { name:"Structure Complete",        date:"Jul 13, 2026", status:"On Track" },
  { name:"Landscaping Complete",      date:"Jul 2, 2026",  status:"On Track" },
  { name:"Watertight Complete",       date:"Aug 10, 2026", status:"On Track" },
  { name:"Interior Amenities Done",   date:"Sep 16, 2026", status:"On Track" },
  { name:"Suite Finishing Complete",  date:"Sep 16, 2026", status:"On Track" },
  { name:"Occupancy Granted",         date:"Sep 11, 2026", status:"On Track" },
  { name:"Substantial Completion",    date:"Sep 14, 2026", status:"On Track" },
  { name:"Total Completion",          date:"Oct 16, 2026", status:"On Track" },
];
const KC_CONTRACT = [
  { quarter:"Q4 2025", date:"Dec 2025", budget:52898112.59, ctd:27554778.39, pct:52.08 },
  { quarter:"Q1 2026", date:"Jan 2026", budget:52678489.90, ctd:27730683.69, pct:52.63 },
  { quarter:"Q1 2026", date:"Feb 2026", budget:52069408.88, ctd:27772829.90, pct:53.27 },
  { quarter:"Q1 2026", date:"Mar 2026", budget:52075748.63, ctd:28088561.26, pct:53.82 },
  { quarter:"Q2 2026", date:"Apr 2026", budget:52075748.63, ctd:28130611.89, pct:53.85, current:true },
];
const KC_LOOKAHEAD = [
  "First Floor Interior Walls","Elevator Start","Stucco Work Resume",
  "Podium Extension Complete","Mechanical Room Prep Complete",
  "Electrical Room Waterproofed","Second Floor Framing",
];
const KC_CONTRACT_ADMIN = {
  period: "March 10 – April 10, 2026",
  rfis:       { issuedToDate:13, answeredThisMonth:7,  outstanding:4  },
  submittals: { issuedToDate:51, returnedThisMonth:31, outstanding:11 },
  notes: [
    "M/E Shop Drawings are in good shape as is Structural (framing, concrete, rebar).",
    "Most outstanding submittals are landscaping and some resubmittals.",
    "Procurement is almost wrapped up with 7 small contracts to finalize.",
  ],
  criticalSubmittals: [
    { desc:"Fire Dampers",                 num:"128", status:"Pending" },
    { desc:"Fire Alarm Shop Drawings",     num:"135", status:"Pending" },
    { desc:"Grills, Registers, Diffusers", num:"122", status:"Pending" },
  ],
  attachments: [
    "Current Accounting Budget (updated in Procore) Invoice Job Cost",
    "Baseline Schedule",
    "Commitment Change Order Log",
    "Procurement Log / Submittal Log",
    "RFI Log",
    "Site Instructions",
    "Snapshot Budget Update",
    "Approved Change Orders",
    "Budget Modifications Review",
    "Photos",
  ],
};
const KC_TRADES = [
  "All trades continue to perform well.",
  "1st Floor — Drywalled walls, framing ceilings. Plumbers doing lines and ABS pipes.",
  "2nd Floor — Demising wall up and insulated. Insulation inspection April 24. Plumbers on lines.",
  "3rd Floor — Electricians dropping wires. Plumbers doing lines and ABS pipes.",
  "Sprinklers completed and stubbed in corridor walls, floors 1–6.",
  "Underground — Plumbers nearly complete with 12\" pipes and basement connections.",
  "Mechanical room in penthouse insulated and drywalled.",
];
const KC_CONSULTANTS = [
  "Architectural drawings did not match ground floor conditions (reviewed April 17 with Giovanni).",
  "Architects need to update changes and revise drawings sent from Gio April 20, 2026.",
  "Waiting on interior designer to update drawings per architect's revised plans.",
];

// ─── ANNOUNCEMENTS ────────────────────────────────────────────────────────────
const ANNOUNCEMENTS_U = [
  { date:"Apr 28, 2026", title:"Kennedy Circle — April PM Progress Report published", body:"53.85% complete. Occupancy tracking Sep 11, 2026. Full report under Q2 Capital → Kennedy Circle." },
  { date:"Apr 2, 2026",  title:"Annual LP Conference — May 24, 2026",                 body:"Registration details and agenda to follow by email." },
  { date:"Feb 3, 2026",  title:"2025 Annual Investment Summaries issued",             body:"Available under Q2 Capital → Documents." },
];

// ─── ACTIVE PROJECTS (static, QC Portal) ─────────────────────────────────────
const QC_PROJECTS = [
  { name:"Kennedy Circle",          sub:"Milton Thompson Rd LP · 148 units · 6 storeys",     pct:62,  roi:"271.67%",  color:T.gold,    status:"Under Construction", highlight:"$12.1M projected profit · FMV $65M" },
  { name:"Rivercroft – Drayton Rd", sub:"Drayton Wellington Rd LP · 580-unit subdivision",   pct:3,   roi:"1905.71%", color:"#7a9e7e", status:"Pre-Development",    highlight:"$53.8M projected margin" },
  { name:"Rivercroft – Drayton St", sub:"Drayton Wellington St South LP · 580 units",        pct:6,   roi:"5994.91%", color:"#7a7a9e", status:"Pre-Development",    highlight:"$17.9M projected margin" },
  { name:"Cambridge Main Street",  sub:"Fully realized — capital returned + 126.79% profit", pct:100, roi:"226.79%",  color:T.green,   status:"Fully Realized",     highlight:"All capital returned to investors" },
];

// ─── FORMAT HELPERS ───────────────────────────────────────────────────────────
const fc = (n, abbr=false) => {
  if (n == null) return "—";
  const abs = Math.abs(n), s = n < 0 ? "-" : "";
  if (abbr && abs >= 1e6) return `${s}$${(abs/1e6).toFixed(2)}M`;
  if (abbr && abs >= 1e3) return `${s}$${(abs/1e3).toFixed(0)}K`;
  return `${s}$${abs.toLocaleString("en-CA",{minimumFractionDigits:2})}`;
};
const fp = (n) => n == null ? "—" : `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;
const rc = (n) => n > 100 ? T.goldLight : n > 0 ? T.green : n < 0 ? T.red : T.textMid;
const rcL = (n) => n > 100 ? "#a3803e" : n > 0 ? "#3f7d5a" : n < 0 ? "#a84848" : "#4a5b70";
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

// ─── ICONS ────────────────────────────────────────────────────────────────────
const ICONS = {
  home:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  chart:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  dollar:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  building: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>`,
  file:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  mail:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  logout:   `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  bell:     `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
  arrow:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
};

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  userId: null,
  view: "home",       // home | qc | q2
  q2Tab: "units",
  qcTab: "portfolio",
  kcSubtab: "overview",
  kcSection: "All",
  qcOpenPosition: null,
};
const currentUser = () => USERS.find(u => u.id === state.userId);

// ─── BADGE ────────────────────────────────────────────────────────────────────
function badge(label) {
  const cls = `badge-${label.replace(/\s+/g,"")}`;
  return `<span class="badge ${cls}">${label}</span>`;
}

// ─── LOGIN ────────────────────────────────────────────────────────────────────
function initLogin() {
  const bothGrp = document.getElementById("grp-both");
  const qcGrp = document.getElementById("grp-qc");
  const q2Grp = document.getElementById("grp-q2");
  USERS.filter(u=>u.hasQ2&&u.hasQC).forEach(u => bothGrp.insertAdjacentHTML("beforeend", `<option value="${u.id}">${esc(u.name)}</option>`));
  USERS.filter(u=>!u.hasQ2&&u.hasQC).forEach(u => qcGrp.insertAdjacentHTML("beforeend", `<option value="${u.id}">${esc(u.name)}</option>`));
  USERS.filter(u=>u.hasQ2&&!u.hasQC).forEach(u => q2Grp.insertAdjacentHTML("beforeend", `<option value="${u.id}">${esc(u.name)}</option>`));

  const select = document.getElementById("user-select");
  const loginBtn = document.getElementById("login-btn");
  select.addEventListener("change", () => {
    const has = select.value.length > 0;
    select.classList.toggle("chosen", has);
    loginBtn.classList.toggle("active", has);
    loginBtn.disabled = !has;
    loginBtn.textContent = has ? "Sign In →" : "Select your account to continue";
  });
  loginBtn.addEventListener("click", () => { if (select.value) doLogin(select.value); });
}

function doLogin(userId) {
  state.userId = userId;
  state.view = "home";
  state.q2Tab = "units";
  state.qcTab = "portfolio";
  state.kcSubtab = "overview";
  state.kcSection = "All";
  state.qcOpenPosition = null;
  document.getElementById("login-screen").hidden = true;
  document.getElementById("app").hidden = false;
  buildSidebar();
  renderMain();
}

function doLogout() {
  state.userId = null;
  document.getElementById("app").hidden = true;
  document.getElementById("login-screen").hidden = false;
  document.getElementById("user-select").value = "";
  document.getElementById("user-select").classList.remove("chosen");
  document.getElementById("pw-input").value = "";
  const loginBtn = document.getElementById("login-btn");
  loginBtn.classList.remove("active");
  loginBtn.disabled = true;
  loginBtn.textContent = "Select your account to continue";
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
function buildSidebar() {
  const user = currentUser();
  document.getElementById("user-name").textContent = user.name;
  document.getElementById("user-badges").innerHTML = [
    user.hasQC ? `<span class="pill pill-gold">INVESTOR</span>` : "",
    user.hasQ2 ? `<span class="pill pill-blue">OWNER</span>` : "",
  ].join("");

  const navButtons = [];
  navButtons.push({ id:"home", label:"Dashboard", icon:"home", color:"gold" });
  if (user.hasQC) navButtons.push({ id:"qc", label:"Q2 Capital — Investor", icon:"chart", color:"gold" });
  if (user.hasQ2) navButtons.push({ id:"q2", label:"Q2 — Property Owner", icon:"building", color:"blue" });
  document.getElementById("nav-buttons").innerHTML = navButtons.map(n => `
    <button class="nav-btn" data-view="${n.id}" data-color="${n.color}">
      <span class="nav-ico"></span>${n.label}
    </button>`).join("");
  document.querySelectorAll("#nav-buttons .nav-btn").forEach(btn => {
    btn.querySelector(".nav-ico").innerHTML = ICONS[navButtons.find(n=>n.id===btn.dataset.view).icon];
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });

  const footer = [];
  if (user.hasQC) footer.push(`<div class="side-nav-footer-row" style="color:${T.gold}">Portfolio: ${fc(QC_DATA[user.id]?.projValue,true)}</div>`);
  if (user.hasQ2) footer.push(`<div class="side-nav-footer-row" style="color:${T.blue}">Rent/mo: ${fc((Q2_TENANTS[user.id]||[]).reduce((s,u)=>s+u.rent,0),true)}</div>`);
  document.getElementById("side-nav-footer").innerHTML = footer.join("");

  document.querySelector("#signout-btn .nav-ico").innerHTML = ICONS.logout;
}

function setView(v) {
  state.view = v;
  state.q2Tab = "units";
  state.qcTab = "portfolio";
  state.kcSubtab = "overview";
  state.kcSection = "All";
  state.qcOpenPosition = null;
  renderMain();
}

// ─── TOPBAR + MAIN RENDER ─────────────────────────────────────────────────────
function renderMain() {
  const user = currentUser();
  document.querySelectorAll("#nav-buttons .nav-btn").forEach(btn => {
    const active = btn.dataset.view === state.view;
    btn.classList.toggle("active", active);
    btn.classList.toggle("gold-active", active && btn.dataset.color === "gold");
    btn.classList.toggle("blue-active", active && btn.dataset.color === "blue");
  });

  const titles = {
    home: ["My Dashboard", "EAST97 MEMBER PORTAL · 2025"],
    qc:   ["Q2 Capital Partners — Investor Portal", "Q2 CAPITAL PARTNERS · 2025 ANNUAL INVESTMENT SUMMARY"],
    q2:   ["Q2 Property Management — Owner Portal", "Q2 PROPERTY MANAGEMENT · BURLINGTON, ON · 289-962-4281"],
  };
  document.getElementById("topbar-title").textContent = titles[state.view][0];
  document.getElementById("topbar-sub").textContent = titles[state.view][1];
  document.getElementById("topbar-rule").classList.toggle("blue", state.view === "q2");

  const initials = user.name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
  const avatar = document.getElementById("avatar");
  avatar.textContent = initials;
  avatar.classList.toggle("blue-border", state.view === "q2");

  const content = document.getElementById("view-content");
  if (state.view === "home") content.innerHTML = renderHomeDash(user);
  else if (state.view === "q2") content.innerHTML = renderQ2Portal(user);
  else if (state.view === "qc") content.innerHTML = renderQCPortal(user);

  document.getElementById("main-scroll").scrollTop = 0;
}

// ─── HOME DASHBOARD ───────────────────────────────────────────────────────────
function renderHomeDash(user) {
  const q2 = Q2_TENANTS[user.id];
  const qc = QC_DATA[user.id];
  const hasOverdue = q2 && q2.some(u => u.status === "Overdue");
  const totalRent = q2 ? q2.reduce((s,u)=>s+u.rent,0) : 0;

  const qcCol = (user.hasQC && qc) ? `
    <div class="welcome-col bordered">
      <div class="welcome-col-label" style="color:${T.gold}">Q2 Capital Portfolio</div>
      <div class="welcome-col-value" style="color:${T.goldLight}">${fc(qc.projValue,true)}</div>
      <div class="welcome-col-sub">Projected Value · ${fp(qc.targetROI)} Target ROI</div>
      <div class="welcome-bar-track"><div class="welcome-bar-fill" style="width:${Math.min(Math.abs(qc.currentROI)/2,100)}%;background:linear-gradient(90deg,${T.gold},${T.goldLight})"></div></div>
      <div class="welcome-roi-note" style="color:${rc(qc.currentROI)}">Current ROI: ${fp(qc.currentROI)}</div>
    </div>` : "";
  const q2Col = (user.hasQ2 && q2) ? `
    <div class="welcome-col">
      <div class="welcome-col-label" style="color:${T.blue}">Q2 Property Management</div>
      <div class="welcome-col-value" style="color:${T.blueLight}">${fc(totalRent)}<span style="font-size:12px;color:${T.textMid};font-weight:400">/mo</span></div>
      <div class="welcome-col-sub">${q2.length} unit${q2.length>1?"s":""} under management</div>
      <div class="welcome-col-status" style="color:${hasOverdue?T.red:T.green}">${hasOverdue?"⚠ Rent action required":"✓ All rents current"}</div>
    </div>` : "";

  const updatesHtml = ANNOUNCEMENTS_U.map(a => `
    <div class="updates-row">
      <span class="updates-date">${a.date}</span>
      <div>
        <div class="updates-title">${esc(a.title)}</div>
        <div class="updates-body">${esc(a.body)}</div>
      </div>
    </div>`).join("");

  const qcTile = user.hasQC ? `
    <div class="portal-tile gold" data-goto-view="qc">
      <div class="portal-tile-ring gold"></div>
      <div class="portal-tile-kicker" style="color:${T.gold}">Q2 Capital Partners</div>
      <div class="portal-tile-title">Investor Portal</div>
      <div class="portal-tile-desc">Annual investment summary, project proformas, LP positions, and projected returns.</div>
      ${qc ? `
      <div class="portal-tile-stats">
        <div><div class="portal-tile-stat-label">Invested</div><div class="portal-tile-stat-value" style="color:${T.goldLight}">${fc(qc.invested,true)}</div></div>
        <div><div class="portal-tile-stat-label">Proj. Value</div><div class="portal-tile-stat-value" style="color:${T.goldLight}">${fc(qc.projValue,true)}</div></div>
        <div><div class="portal-tile-stat-label">Target ROI</div><div class="portal-tile-stat-value" style="color:${T.goldLight}">${fp(qc.targetROI)}</div></div>
      </div>` : ""}
      <div class="portal-tile-cta" style="color:${T.gold}">Open Investor Portal <span class="nav-ico" style="width:13px;height:13px">${ICONS.arrow}</span></div>
    </div>` : "";
  const q2Tile = user.hasQ2 ? `
    <div class="portal-tile blue" data-goto-view="q2">
      <div class="portal-tile-ring blue"></div>
      <div class="portal-tile-kicker" style="color:${T.blue}">Q2 Property Management</div>
      <div class="portal-tile-title">Owner Portal</div>
      <div class="portal-tile-desc">Tenant status, rent collection, bank activity, annual reporting letters, and lease documents.</div>
      ${q2 ? `
      <div class="portal-tile-stats">
        <div><div class="portal-tile-stat-label">Units</div><div class="portal-tile-stat-value" style="color:${T.blueLight}">${q2.length}</div></div>
        <div><div class="portal-tile-stat-label">Rent/mo</div><div class="portal-tile-stat-value" style="color:${T.blueLight}">${fc(totalRent,true)}</div></div>
        <div><div class="portal-tile-stat-label">Status</div><div class="portal-tile-stat-value" style="color:${hasOverdue?T.red:T.green}">${hasOverdue?"Action Req.":"All Clear"}</div></div>
      </div>
      ${hasOverdue ? `<div class="portal-tile-alert">⚠ Overdue rent on ${q2.filter(u=>u.status==="Overdue").length} unit(s) — Q2 is managing this</div>` : ""}` : ""}
      <div class="portal-tile-cta" style="color:${T.blue}">Open Property Portal <span class="nav-ico" style="width:13px;height:13px">${ICONS.arrow}</span></div>
    </div>` : "";

  const rentAlert = hasOverdue ? `
    <div class="rent-alert">
      <div style="display:flex;gap:10px;align-items:flex-start">
        <span class="nav-ico" style="width:15px;height:15px;color:${T.red}">${ICONS.bell}</span>
        <div>
          <div class="rent-alert-title">Rent Collection Notice</div>
          ${q2.filter(u=>u.status==="Overdue").map(u=>`<div class="rent-alert-row"><strong>${esc(u.address)}</strong> — ${esc(u.note)}</div>`).join("")}
          <div class="rent-alert-note">Q2 Property Management is managing this on your behalf.</div>
        </div>
      </div>
    </div>` : "";

  return `
    <div class="flex-col gap-22">
      <div class="welcome-card">
        <div class="welcome-ring-1"></div>
        <div class="welcome-ring-2"></div>
        <div class="welcome-kicker">My Dashboard</div>
        <div class="welcome-name">${esc(user.name)}</div>
        <div class="welcome-entity">${esc(user.entity)}</div>
        <div class="welcome-split">${qcCol}${q2Col}</div>
      </div>
      <div class="panel panel-body">
        <div class="panel-head-title" style="margin-bottom:10px">Latest Updates</div>
        ${updatesHtml}
      </div>
      <div class="grid-2" style="${(user.hasQ2&&user.hasQC)?"":"grid-template-columns:1fr"}">${qcTile}${q2Tile}</div>
      ${rentAlert}
    </div>`;
}

// ─── Q2 PORTAL ────────────────────────────────────────────────────────────────
function renderQ2Portal(user) {
  const q2 = Q2_TENANTS[user.id] || [];
  const tabs = [
    { id:"units",     label:"My Units",     icon:"home"   },
    { id:"statement", label:"Statements",   icon:"dollar" },
    { id:"bank",      label:"Bank Activity",icon:"chart"  },
    { id:"documents", label:"Documents",    icon:"file"   },
    { id:"contact",   label:"Contact Q2",   icon:"mail"   },
  ];
  const subnav = tabs.map(t => `
    <button class="subnav-btn ${state.q2Tab===t.id?"active-blue":""}" data-q2tab="${t.id}">
      <span class="nav-ico">${ICONS[t.icon]}</span>${t.label}
    </button>`).join("");

  let body = "";
  if (state.q2Tab === "units") {
    const unitsHtml = q2.map(u => `
      <div class="unit-card${u.status==="Overdue"?" overdue":""}">
        <div class="unit-head">
          <div class="unit-head-kicker">Residential Unit</div>
          <div class="unit-head-address">${esc(u.address)}</div>
        </div>
        <div class="unit-body">
          <div class="unit-tenant-row">
            <div>
              <div class="unit-tenant-label">Tenant</div>
              <div class="unit-tenant-value">${esc(u.tenant)}</div>
            </div>
            ${badge(u.status)}
          </div>
          <div class="unit-fields">
            <div><div class="unit-field-label">Monthly Rent</div><div class="unit-field-value">${fc(u.rent)}</div></div>
            <div style="text-align:right"><div class="unit-field-label">Method</div><div class="unit-field-value method">${u.method}</div></div>
          </div>
          ${u.note ? `<div class="unit-note">${esc(u.note)}</div>` : ""}
        </div>
      </div>`).join("");
    body = `
      <div class="flex-col">
        <div class="section-title">My Properties</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px">${unitsHtml}</div>
      </div>`;
  } else if (state.q2Tab === "statement") {
    const totalRent = q2.reduce((s,u)=>s+u.rent,0);
    const rows = [
      ["Rental Income",         totalRent],
      ["Management Fee (4.5%)", -(totalRent*0.045)],
      ["Bank / PAD Fee",        -4.50],
      ["Owner Distribution",    -(totalRent*0.90)],
    ].filter(([,v]) => v !== 0).map(([l,v]) => `
      <div class="statement-row">
        <div class="statement-row-label">${l}</div>
        <div class="statement-row-value" style="color:${v>0?T.green:T.text}">${fc(v)}</div>
      </div>`).join("");
    body = `
      <div class="flex-col">
        <div class="section-title">Monthly Statements</div>
        <div class="statement-panel">
          <div class="statement-head">
            <div class="statement-head-title">April 2025 — Owner Statement</div>
            <button class="statement-download">Download PDF</button>
          </div>
          ${rows}
          <div class="statement-footer">
            <span class="statement-footer-label">Net to Owner</span>
            <span class="statement-footer-value">${fc(totalRent*0.955-4.5)}</span>
          </div>
        </div>
      </div>`;
  } else {
    const labels = { bank:"Bank Activity", documents:"Documents", contact:"Contact Q2" };
    body = `
      <div class="placeholder-panel">
        <div class="placeholder-icon">📂</div>
        <div class="placeholder-title">${labels[state.q2Tab]}</div>
        <div class="placeholder-detail">This section connects to your SharePoint data once Rinki completes the backend setup.</div>
        <div class="placeholder-contact">Q2 Property Management · 289-962-4281 · info@q2propertymanagement.com</div>
      </div>`;
  }

  return `<div class="subnav">${subnav}</div>${body}`;
}

// ─── LIGHT POSITIONS TABLE (QC Portfolio drill-down) ─────────────────────────
function renderPositionsTable(qc) {
  const cols = ["Project","Committed","Invested","Returned","Realized P&L","Proj. Profit","Current ROI","Target ROI","Status"];

  const rows = qc.positions.map((p,i) => {
    const isOpen = state.qcOpenPosition === i;
    const uncalled = p.status === "Active" ? Math.max(0, p.committed - p.invested) : 0;
    const badgeClass = `badge-l-${p.status.replace(/\s+/g,"")}`;
    let detail = "";
    if (isOpen) {
      const stats = [
        { l:"Invested", v:fc(p.invested,true) },
        { l:"Returned", v:fc(p.returned,true) },
        ...(uncalled>0 ? [{ l:"Uncalled", v:fc(uncalled,true), warn:true }] : []),
        { l:"Realized P&L", v:fc(p.profit,true) },
        { l:"Projected Profit", v:fc(p.projProfit,true) },
      ];
      detail = `
        <tr>
          <td colspan="9" class="position-detail">
            <div class="position-detail-inner">
              ${stats.map(s => `
                <div class="stat-chip${s.warn?" warn":""}">
                  <div class="stat-chip-label${s.warn?" warn":""}">${s.l}</div>
                  <div class="stat-chip-value${s.warn?" warn":""}">${s.v}</div>
                </div>`).join("")}
            </div>
          </td>
        </tr>`;
    }
    return `
      <tr class="clickable${isOpen?" open-row":!(i%2===0)?" zebra":""}" data-position-toggle="${i}">
        <td><span class="position-toggle">${isOpen?"▾":"▸"}</span>${esc(p.project)}</td>
        <td style="text-align:right;color:#4a5b70">${fc(p.committed)}</td>
        <td style="text-align:right">${fc(p.invested)}</td>
        <td style="text-align:right;color:${p.returned>0?"#3f7d5a":"#7d8798"}">${fc(p.returned)}</td>
        <td style="text-align:right;font-weight:700;color:${p.profit>=0?"#a3803e":"#a84848"}">${fc(p.profit)}</td>
        <td style="text-align:right;color:#a3803e">${fc(p.projProfit,true)}</td>
        <td style="text-align:right;font-weight:700;color:${rcL(p.roi)}">${fp(p.roi)}</td>
        <td style="text-align:right;color:#a3803e">${fp(p.targetROI)}</td>
        <td>${badge2l(p.status,badgeClass)}</td>
      </tr>
      ${detail}`;
  }).join("");

  return `
    <div class="lt-panel">
      <div style="background:var(--lt-head);padding:11px 18px;border-bottom:1px solid var(--lt-strong);display:flex;justify-content:space-between;align-items:center">
        <div style="color:var(--lt-text);font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase">Investment Positions</div>
        <div style="font-size:10px;color:var(--lt-faint)">Select a row for transaction detail</div>
      </div>
      <div class="table-scroll">
        <table class="resp">
          <thead><tr>${cols.map(h=>`<th style="text-align:${["Project","Status"].includes(h)?"left":"right"}">${h}</th>`).join("")}</tr></thead>
          <tbody>${rows}</tbody>
          <tfoot>
            <tr>
              <td style="color:var(--lt-gold)">TOTAL</td>
              <td style="text-align:right">${fc(qc.committed)}</td>
              <td style="text-align:right">${fc(qc.invested)}</td>
              <td style="text-align:right;color:var(--lt-green)">${fc(qc.returned)}</td>
              <td style="text-align:right;color:var(--lt-gold)">${fc(qc.profit)}</td>
              <td style="text-align:right;color:var(--lt-gold)">${fc(qc.projValue,true)}</td>
              <td style="text-align:right;color:${rcL(qc.currentROI)};font-size:13px">${fp(qc.currentROI)}</td>
              <td style="text-align:right;color:var(--lt-gold);font-size:13px">${fp(qc.targetROI)}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>`;
}
function badge2l(label, cls) {
  return `<span class="badge-l ${cls}">${label}</span>`;
}

// ─── QC PORTAL ────────────────────────────────────────────────────────────────
function renderQCPortal(user) {
  const qc = QC_DATA[user.id];
  if (!qc) return `<div style="color:var(--text-light);padding:40px;text-align:center">No investment data found.</div>`;
  const uncalled = qc.positions.filter(p=>p.status==="Active").reduce((s,p)=>s+Math.max(0,p.committed-p.invested),0);
  const tabs = [
    { id:"portfolio", label:"My Portfolio",    icon:"chart"    },
    { id:"projects",  label:"Active Projects", icon:"building" },
    { id:"kennedy",   label:"Kennedy Circle",  icon:"building" },
    { id:"documents", label:"Documents",       icon:"file"     },
  ];
  const subnav = tabs.map(t => `
    <button class="subnav-btn ${state.qcTab===t.id?"active-gold":""}" data-qctab="${t.id}">
      <span class="nav-ico">${ICONS[t.icon]}</span>${t.label}
    </button>`).join("");

  let body = "";
  if (state.qcTab === "portfolio") {
    const stats = [
      { l:"Committed",           v:fc(qc.committed,true),  c:T.text },
      { l:"Invested",            v:fc(qc.invested,true),   c:T.text },
      { l:"Returned",            v:fc(qc.returned,true),   c:T.green },
      { l:"Realized P&L",        v:fc(qc.profit,true),     c:qc.profit>=0?T.goldLight:T.red },
      { l:"Projected Value",     v:fc(qc.projValue,true),  c:T.goldLight },
      { l:"Target ROI",          v:fp(qc.targetROI),       c:T.goldLight },
      { l:"Uncalled Commitment", v:fc(uncalled,true),      c:uncalled>0?"#b8874f":T.textMid },
      { l:"Projected Multiple",  v:(qc.projValue/qc.committed).toFixed(1)+"x", c:T.goldLight },
    ];
    body = `
      <div class="flex-col gap-18">
        <div class="qc-summary">
          <div class="qc-summary-kicker">2025 Annual Investment Summary</div>
          <div class="qc-summary-entity">${esc(user.entity)}</div>
          <div class="qc-summary-stats">
            ${stats.map(s => `
              <div>
                <div class="qc-summary-stat-label">${s.l}</div>
                <div class="qc-summary-stat-value" style="color:${s.c}">${s.v}</div>
              </div>`).join("")}
          </div>
        </div>
        ${renderPositionsTable(qc)}
      </div>`;
  } else if (state.qcTab === "projects") {
    const cardsHtml = QC_PROJECTS.map(p => `
      <div class="project-card">
        <div class="project-head">
          <div>
            <div class="project-status" style="color:${p.color}">${p.status}</div>
            <div class="project-name">${esc(p.name)}</div>
            <div class="project-sub">${esc(p.sub)}</div>
          </div>
          <div>
            <div class="project-roi-label">Target ROI</div>
            <div class="project-roi-value">${p.roi}</div>
          </div>
        </div>
        ${p.pct < 100 ? `
        <div class="project-progress">
          <div class="project-progress-head"><span>Progress</span><span style="color:${p.color}">${p.pct}%</span></div>
          <div class="project-track"><div class="project-fill" style="width:${p.pct}%;background:linear-gradient(90deg,${p.color},${T.goldLight})"></div></div>
        </div>` : ""}
        <div class="project-highlight">${esc(p.highlight)}</div>
      </div>`).join("");
    body = `<div class="flex-col"><div class="section-title">Active Projects</div>${cardsHtml}</div>`;
  } else if (state.qcTab === "kennedy") {
    body = renderKennedyTab();
  } else if (state.qcTab === "documents") {
    const docs = [
      { name:`2025 Annual Investment Summary — ${user.name}.pdf`,     type:"Annual Report",   icon:"📄" },
      { name:"Kennedy Circle — Project Proforma 2026.pdf",             type:"Project Report",  icon:"📊" },
      { name:"Rivercroft Drayton — Draft Plan of Subdivision.pdf",     type:"Project Report",  icon:"📊" },
      { name:"Milton Thompson Rd LP — Partnership Agreement.pdf",      type:"LP Agreement",    icon:"📋" },
      { name:"Drayton Wellington Rd LP — Partnership Agreement.pdf",   type:"LP Agreement",    icon:"📋" },
      { name:"Q2 Capital — 30-Year Compounding Projections.pdf",        type:"Projection",      icon:"📈" },
    ];
    body = `
      <div class="flex-col" style="gap:12px">
        <div class="section-title">Investment Documents</div>
        ${docs.map(d => `
          <div class="doc-row">
            <span class="doc-icon">${d.icon}</span>
            <div style="flex:1"><div class="doc-name">${esc(d.name)}</div><div class="doc-type">${d.type}</div></div>
            <button class="doc-download">Download</button>
          </div>`).join("")}
      </div>`;
  }

  return `<div class="subnav">${subnav}</div>${body}`;
}

// ─── KENNEDY CIRCLE FULL REPORT TAB ───────────────────────────────────────────
function kcOverviewPanel() {
  const bars = KC_CONTRACT.map(r => {
    const h = Math.round((r.pct/60)*52);
    return `
      <div class="bar-chart-col">
        <div class="bar-chart-pct${r.current?" current":""}">${r.pct}%</div>
        <div class="bar-chart-track"><div class="bar-chart-fill${r.current?" current":""}" style="height:${h}px"></div></div>
        <div class="bar-chart-date${r.current?" current":""}">${r.date}</div>
      </div>`;
  }).join("");
  const listRows = KC_CONTRACT.map(r => `
    <div class="contract-row${r.current?" current":""}">
      <span style="color:${r.current?T.gold:T.textMid}">${r.quarter} ${r.current?"(Current)":""}</span>
      <span style="color:${T.textMid}">${r.date}</span>
      <span style="color:${T.text}">$${r.budget.toLocaleString("en-CA",{maximumFractionDigits:0})}</span>
      <span style="color:${r.current?T.goldLight:T.text}">$${r.ctd.toLocaleString("en-CA",{maximumFractionDigits:0})}</span>
      <span style="font-weight:${r.current?700:400};color:${r.current?T.gold:T.textMid}">${r.pct}%</span>
    </div>`).join("");
  const lookaheadHtml = KC_LOOKAHEAD.map((t,i) => `
    <div class="lookahead-item">
      <div class="lookahead-num"><span>${i+1}</span></div>
      <span class="lookahead-text">${esc(t)}</span>
    </div>`).join("");
  return `
    <div class="panel">
      <div class="panel-head"><div class="panel-head-title">Contract Progress — Quarterly Trend</div></div>
      <div class="panel-body">
        <div class="bar-chart-row">${bars}</div>
        <div class="contract-list">${listRows}</div>
      </div>
    </div>
    <div class="panel panel-body">
      <div class="panel-head-title" style="margin-bottom:10px">3-Week Look Ahead</div>
      <div class="lookahead-grid">${lookaheadHtml}</div>
    </div>`;
}
function kcSchedulePanel() {
  const onTrack = KC_MILESTONES.filter(m=>m.status==="On Track").length;
  const delayed = KC_MILESTONES.filter(m=>m.status==="Delayed").length;
  const milestonesHtml = KC_MILESTONES.map(m => {
    const isDelayed = m.status === "Delayed";
    const highlight = m.name.includes("Occupancy");
    return `
      <div class="milestone-row${highlight?" highlight":""}">
        <div class="milestone-dot ${isDelayed?"delayed":"ontrack"}"></div>
        <div class="milestone-name${highlight?" highlight":""}">${esc(m.name)}</div>
        <div class="milestone-date">${m.date}</div>
        <div class="milestone-status ${isDelayed?"delayed":"ontrack"}">${m.status}</div>
      </div>`;
  }).join("");
  return `
    <div class="grid-2-14">
      <div class="status-summary ontrack">
        <div class="status-summary-count ontrack">${onTrack} On Track</div>
        <div class="status-summary-note">Structure, occupancy, total completion</div>
      </div>
      <div class="status-summary delayed">
        <div class="status-summary-count delayed">${delayed} Delayed</div>
        <div class="status-summary-note">Elevator, mockup suite, proof of concept</div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><div class="panel-head-title">2026 Milestone Tracker</div></div>
      ${milestonesHtml}
    </div>`;
}
function kcContractsPanel() {
  const rfiSplit = (KC_CONTRACT_ADMIN.rfis.answeredThisMonth/KC_CONTRACT_ADMIN.rfis.issuedToDate)*100;
  const rfiOut   = (KC_CONTRACT_ADMIN.rfis.outstanding/KC_CONTRACT_ADMIN.rfis.issuedToDate)*100;
  const subSplit = (KC_CONTRACT_ADMIN.submittals.returnedThisMonth/KC_CONTRACT_ADMIN.submittals.issuedToDate)*100;
  const subOut   = (KC_CONTRACT_ADMIN.submittals.outstanding/KC_CONTRACT_ADMIN.submittals.issuedToDate)*100;
  const rfiRows = [
    { label:"RFIs Issued to Date",   value:KC_CONTRACT_ADMIN.rfis.issuedToDate,      color:T.text },
    { label:"Answered This Month",   value:KC_CONTRACT_ADMIN.rfis.answeredThisMonth, color:T.green },
    { label:"Outstanding RFIs",      value:KC_CONTRACT_ADMIN.rfis.outstanding,       color:T.amber },
  ].map(r => `<div class="stat-count-row"><span class="stat-count-label">${r.label}</span><span class="stat-count-value" style="color:${r.color}">${r.value}</span></div>`).join("");
  const subRows = [
    { label:"Submittals Issued to Date", value:KC_CONTRACT_ADMIN.submittals.issuedToDate,       color:T.text },
    { label:"Returned This Month",       value:KC_CONTRACT_ADMIN.submittals.returnedThisMonth,  color:T.green },
    { label:"Outstanding Submittals",    value:KC_CONTRACT_ADMIN.submittals.outstanding,        color:T.amber },
  ].map(r => `<div class="stat-count-row"><span class="stat-count-label">${r.label}</span><span class="stat-count-value" style="color:${r.color}">${r.value}</span></div>`).join("");
  const notesHtml = KC_CONTRACT_ADMIN.notes.map(n => `<div class="pm-note-row"><span>◈</span><span>${esc(n)}</span></div>`).join("");
  const criticalHtml = KC_CONTRACT_ADMIN.criticalSubmittals.map((s,i) => `
    <tr>
      <td style="color:${T.textLight}">${i+1}</td>
      <td>${esc(s.desc)}</td>
      <td class="num-cell">${s.num}</td>
      <td><span class="pending-chip">Pending</span></td>
    </tr>`).join("");
  const attachmentsHtml = KC_CONTRACT_ADMIN.attachments.map(a => `
    <div class="attachment-item"><span>📎</span><span>${esc(a)}</span></div>`).join("");

  return `
    <div class="period-banner">
      <div class="section-title" style="font-size:13px">Contract Administration</div>
      <div class="period-chip">${KC_CONTRACT_ADMIN.period}</div>
    </div>
    <div class="grid-2-14">
      <div class="panel">
        <div class="panel-head"><div class="panel-head-title">Requests for Information (RFIs)</div></div>
        <div class="panel-body">
          ${rfiRows}
          <div class="split-bar"><div style="width:${rfiSplit}%;background:${T.green}"></div><div style="width:${rfiOut}%;background:${T.amber}"></div></div>
          <div class="split-legend">
            <div class="split-legend-item"><div class="split-legend-dot" style="background:${T.green}"></div><span class="split-legend-label">Answered</span></div>
            <div class="split-legend-item"><div class="split-legend-dot" style="background:${T.amber}"></div><span class="split-legend-label">Outstanding</span></div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div class="panel-head-title">Shop Drawings &amp; Submittals</div></div>
        <div class="panel-body">
          ${subRows}
          <div class="split-bar"><div style="width:${subSplit}%;background:${T.green}"></div><div style="width:${subOut}%;background:${T.amber}"></div></div>
          <div class="split-legend">
            <div class="split-legend-item"><div class="split-legend-dot" style="background:${T.green}"></div><span class="split-legend-label">Returned</span></div>
            <div class="split-legend-item"><div class="split-legend-dot" style="background:${T.amber}"></div><span class="split-legend-label">Outstanding</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-body">
      <div class="panel-head-title" style="margin-bottom:8px">PM Notes</div>
      ${notesHtml}
    </div>
    <div class="critical-panel">
      <div class="critical-head">
        <span>Critical Submittals — Pending Return</span>
        <span class="critical-head-badge">ACTION REQUIRED</span>
      </div>
      <table>
        <thead><tr><th>#</th><th>Description</th><th>Submittal No.</th><th>Status</th></tr></thead>
        <tbody>${criticalHtml}</tbody>
      </table>
    </div>
    <div class="panel panel-body">
      <div class="panel-head-title" style="margin-bottom:10px">Supporting Attachments (Procore)</div>
      <div class="attachment-grid">${attachmentsHtml}</div>
    </div>`;
}
function kcTradesPanel() {
  const tradesHtml = KC_TRADES.map((note,i) => `
    <div class="trade-item ${i===0?"first":"normal"}">
      <div class="trade-num"><span>${i===0?"✓":i}</span></div>
      <span class="trade-text ${i===0?"first":"normal"}">${esc(note)}</span>
    </div>`).join("");
  const consultantsHtml = KC_CONSULTANTS.map(n => `
    <div class="trade-item warn">
      <div class="trade-num warn"><span>!</span></div>
      <span class="trade-text normal">${esc(n)}</span>
    </div>`).join("");
  return `
    <div class="grid-2-14">
      <div class="trades-panel panel">
        <div class="trades-head good"><span>Trades — Performing Well</span></div>
        <div class="trades-body">${tradesHtml}</div>
      </div>
      <div class="trades-panel panel">
        <div class="trades-head warn"><span>Consultants — Action Required</span></div>
        <div class="trades-body">
          ${consultantsHtml}
          <div class="warn-summary">⚠ Drawing discrepancy identified April 17, 2026. Resolution in progress.</div>
        </div>
      </div>
    </div>`;
}
function kcPhotosPanel() {
  const sections = ["All", ...Array.from(new Set(KC_PHOTOS.map(p=>p.section)))];
  const filtered = state.kcSection === "All" ? KC_PHOTOS : KC_PHOTOS.filter(p=>p.section===state.kcSection);
  const sectionBtns = sections.map(s => `<button class="btn-filter" data-kcsection="${esc(s)}" style="${state.kcSection===s?`background:${KC_SECTION_COLORS[s]||T.gold};border-color:${KC_SECTION_COLORS[s]||T.gold};color:${T.navyDeep};font-weight:700`:""}">${s}</button>`).join("");
  const gridHtml = filtered.map(photo => `
    <div class="photo-thumb" data-photo="${KC_PHOTOS.indexOf(photo)}">
      <img src="${photo.src}" alt="${esc(photo.label)}">
      <div class="photo-tag" style="background:${KC_SECTION_COLORS[photo.section]||T.gold}cc">${photo.section}</div>
      <div class="photo-caption"><span>${esc(photo.label.replace(/^[^—]+— /,""))}</span></div>
    </div>`).join("");
  return `
    <div class="photos-head">
      <div class="section-title" style="font-size:13px">Site Photos — April 2026 · ${KC_PHOTOS.length} photos</div>
      <div class="photos-hint">Click to enlarge</div>
    </div>
    <div class="photo-filter-row">${sectionBtns}</div>
    <div class="photo-grid">${gridHtml}</div>`;
}
function renderKennedyTab() {
  const current = KC_CONTRACT[KC_CONTRACT.length-1];
  const fcM = (n) => n == null ? "—" : "$" + (n/1000000).toFixed(2) + "M";
  const kcStats = [
    { l:"Budget",         v:fcM(current.budget), c:T.text },
    { l:"Cost to Date",   v:fcM(current.ctd),    c:T.gold },
    { l:"Completion",     v:current.pct+"%",     c:T.goldLight },
    { l:"Occupancy",      v:"Sep 11, 2026",      c:T.green },
    { l:"Total Complete", v:"Oct 16, 2026",      c:T.blueLight },
  ];
  const statsHtml = kcStats.map(s => `
    <div>
      <div class="kc-stat-label">${s.l}</div>
      <div class="kc-stat-value" style="color:${s.c}">${s.v}</div>
    </div>`).join("");
  const subTabs = [
    { id:"overview",  label:"Overview" },
    { id:"schedule",  label:"Schedule" },
    { id:"contracts", label:"Contract Admin" },
    { id:"trades",    label:"Trades" },
    { id:"photos",    label:"Site Photos" },
  ];
  const subTabsHtml = subTabs.map(t => `<button class="kc-subtab-btn${state.kcSubtab===t.id?" active":""}" data-kctab="${t.id}">${t.label}</button>`).join("");
  const panels = {
    overview: kcOverviewPanel(), schedule: kcSchedulePanel(),
    contracts: kcContractsPanel(), trades: kcTradesPanel(), photos: kcPhotosPanel(),
  };
  return `
    <div class="flex-col gap-20">
      <div class="kc-header">
        <img src="img/logo-kc.png" alt="Kennedy Circle" class="kc-logo">
        <div class="kc-kicker">DCB Project Services · April 2026</div>
        <div class="kc-title">Kennedy Circle Residences — PM Progress Report</div>
        <div class="kc-address">1001 Kennedy Circle, Milton ON · 148 units · 6 storeys</div>
        <div class="kc-stats">${statsHtml}</div>
      </div>
      <div class="kc-subtabs">${subTabsHtml}</div>
      <div class="kc-panel">${panels[state.kcSubtab]}</div>
    </div>`;
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function openLightbox(index) {
  const photo = KC_PHOTOS[index];
  document.getElementById("lightbox-img").src = photo.src;
  document.getElementById("lightbox-img").alt = photo.label;
  document.getElementById("lightbox-label").textContent = photo.label;
  document.getElementById("lightbox").hidden = false;
}
function closeLightbox() { document.getElementById("lightbox").hidden = true; }

// ─── EVENT DELEGATION (main content area) ────────────────────────────────────
document.getElementById("view-content").addEventListener("click", (e) => {
  const goto = e.target.closest("[data-goto-view]");
  if (goto) { setView(goto.dataset.gotoView); return; }

  const q2tab = e.target.closest("[data-q2tab]");
  if (q2tab) { state.q2Tab = q2tab.dataset.q2tab; renderMain(); return; }

  const qctab = e.target.closest("[data-qctab]");
  if (qctab) {
    state.qcTab = qctab.dataset.qctab;
    state.kcSubtab = "overview";
    state.kcSection = "All";
    state.qcOpenPosition = null;
    renderMain();
    return;
  }

  const kctab = e.target.closest("[data-kctab]");
  if (kctab) { state.kcSubtab = kctab.dataset.kctab; renderMain(); return; }

  const kcSection = e.target.closest("[data-kcsection]");
  if (kcSection) { state.kcSection = kcSection.dataset.kcsection; renderMain(); return; }

  const photo = e.target.closest("[data-photo]");
  if (photo) { openLightbox(Number(photo.dataset.photo)); return; }

  const posToggle = e.target.closest("[data-position-toggle]");
  if (posToggle) {
    const idx = Number(posToggle.dataset.positionToggle);
    state.qcOpenPosition = state.qcOpenPosition === idx ? null : idx;
    renderMain();
    return;
  }
});

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
document.getElementById("signout-btn").addEventListener("click", doLogout);

// ─── INIT ─────────────────────────────────────────────────────────────────────
initLogin();
