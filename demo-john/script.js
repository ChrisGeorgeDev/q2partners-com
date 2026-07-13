// ═══════════════════════════════════════════════════════════════════════════
// Q2 Capital Partners — Investor Portal (Demo) — John Doe
// Static HTML/CSS/JS port of east97-demo-john-doe.jsx
// ═══════════════════════════════════════════════════════════════════════════

// ─── BRAND COLORS (mirrors JSX theme tokens) ─────────────────────────────────
const T = {
  canvas:"#0b1220", navy:"#0b1220", navyMid:"#111c2e", navyLight:"#16263f",
  gold:"#c9a96e", goldLight:"#e8d5b0", goldPale:"#e8d5b0",
  blue:"#a9c0d8", blueLight:"#dbe7f2",
  text:"#f4efe8", textMid:"#8fa3bc", textLight:"#64788f",
  border:"#c9a96e2e", borderLight:"#c9a96e4a", line:"#c9a96e14",
  green:"#7da98c", greenDim:"#152219",
  red:"#c47070", redDim:"#241414",
  amber:"#b8874f", amberDim:"#241c10",
  white:"#ffffff",
};
const LT = { bg:"#f4efe8", head:"#e9e2d4", row:"rgba(11,18,32,0.035)", rowOpen:"#fbf8f2", text:"#0b1220", mid:"#4a5b70", faint:"#7d8798", line:"rgba(11,18,32,0.10)", strong:"rgba(11,18,32,0.16)", gold:"#a3803e", green:"#3f7d5a", red:"#a84848", amber:"#8f6a33" };

// ─── DATA ─────────────────────────────────────────────────────────────────
const INVESTOR = {
  name:        "John Doe",
  entity:      "Doe Capital Holdings Inc.",
  initials:    "JD",
  role:        "Limited Partner",
  memberSince: "January 2021",
  committed:   754688.09,
  invested:    394188.09,
  returned:    198000,
  profit:      670776.81,
  projValue:   5353278.16,
  currentROI:  170.17,
  targetROI:   1223.29,
  positions: [
    { project:"Cambridge Main St LP",           committed:198000,   invested:0,        returned:198000, profit:449051.64, projProfit:449051.64,  roi:226.79, targetROI:226.79,  status:"Realized" },
    { project:"Milton Thompson Rd LP",          committed:200000,   invested:200000,   returned:0,      profit:-39,       projProfit:543339.52,  roi:-0.02,  targetROI:271.67,  status:"Active"   },
    { project:"Drayton Wellington St South LP", committed:25000,    invested:12500,    returned:0,      profit:0,         projProfit:749364.37,  roi:0,      targetROI:5994.91, status:"Active"   },
    { project:"Drayton Wellington Rd LP",       committed:300000,   invested:150000,   returned:0,      profit:0,         projProfit:2858559.37, roi:0,      targetROI:1905.71, status:"Active"   },
    { project:"51 Sparrow Ave – Unit 40",       committed:31688.09, invested:31688.09, returned:0,      profit:221764.17, projProfit:221764.17,  roi:699.83, targetROI:699.83,  status:"Active"   },
  ],
  loans: [
    { id:"L-001", description:"Private Mortgage Loan — Cambridge Main Street", principal:222257.88, outstanding:0,      returned:315000, interest:42158.22, rate:"9.00% per annum", term:"24 months", issued:"Jan 15, 2022", matured:"Jan 15, 2024", status:"Repaid", notes:"Full principal + interest returned at maturity. Cambridge Main St project completed." },
    { id:"L-002", description:"Mezzanine Loan — Kennedy Circle Construction", principal:150000, outstanding:150000, returned:0, interest:9562.50, rate:"9.00% per annum", term:"18 months", issued:"Oct 1, 2024", matured:"Apr 1, 2026", status:"Active", notes:"Interest accruing. Repayment expected upon construction draw milestone — Q3 2026." },
    { id:"L-003", description:"Bridge Loan — Drayton Wellington Rd Pre-Development", principal:75000, outstanding:75000, returned:0, interest:2812.50, rate:"7.50% per annum", term:"12 months", issued:"Mar 1, 2026", matured:"Mar 1, 2027", status:"Active", notes:"Funds site work and pre-development costs. Repayment tied to municipal approval milestone." },
  ],
  units: [
    { address:"40 – 51 Sparrow Ave, Cambridge ON", tenant:"Sample Tenant Name", rent:2700, method:"PAD", status:"Current", note:"" },
  ],
};

const POSITION_DOCS = {
  "Cambridge Main St LP": ["Final Distribution Statement — Nov 2024", "Partnership Agreement"],
  "Milton Thompson Rd LP": ["Partnership Agreement", "KC PM Progress Report — Apr 2026"],
  "Drayton Wellington St South LP": ["Partnership Agreement"],
  "Drayton Wellington Rd LP": ["Partnership Agreement"],
  "51 Sparrow Ave – Unit 40": ["Unit 40 Lease Agreement", "2025 T5013 Tax Slip"],
};

const KC_MILESTONES = [
  { name:"Elevator Commissioned",   date:"Jun 29, 2026", status:"Delayed"  },
  { name:"Mockup Suite Complete",   date:"May 26, 2026", status:"Delayed"  },
  { name:"Proof of Concept Suites", date:"Jun 19, 2026", status:"Delayed"  },
  { name:"Structure Complete",      date:"Jul 13, 2026", status:"On Track" },
  { name:"Landscaping Complete",    date:"Jul 2, 2026",  status:"On Track" },
  { name:"Watertight Complete",     date:"Aug 10, 2026", status:"On Track" },
  { name:"Interior Amenities Done", date:"Sep 16, 2026", status:"On Track" },
  { name:"Suite Finishing",         date:"Sep 16, 2026", status:"On Track" },
  { name:"Occupancy Granted",       date:"Sep 11, 2026", status:"On Track" },
  { name:"Substantial Completion",  date:"Sep 14, 2026", status:"On Track" },
  { name:"Total Completion",        date:"Oct 16, 2026", status:"On Track" },
];
const KC_CONTRACT = [
  { date:"Dec 2025", budget:52898112.59, ctd:27554778.39, pct:52.08 },
  { date:"Jan 2026", budget:52678489.90, ctd:27730683.69, pct:52.63 },
  { date:"Feb 2026", budget:52069408.88, ctd:27772829.90, pct:53.27 },
  { date:"Mar 2026", budget:52075748.63, ctd:28088561.26, pct:53.82 },
  { date:"Apr 2026", budget:52075748.63, ctd:28130611.89, pct:53.85, current:true },
];
const KC_LOOKAHEAD = [
  "First Floor Interior Walls","Elevator Start","Stucco Work Resume",
  "Podium Extension Complete","Mechanical Room Prep Complete",
  "Electrical Room Waterproofed","Second Floor Framing",
];
const KC_ADMIN = {
  rfis:       { issuedToDate:13, answeredThisMonth:7,  outstanding:4  },
  submittals: { issuedToDate:51, returnedThisMonth:31, outstanding:11 },
  notes:["M/E Shop Drawings in good shape. Structural (framing, concrete, rebar) on track.","Most outstanding submittals are landscaping and resubmittals.","Procurement almost wrapped — 7 small contracts remaining."],
  critical:[
    { desc:"Fire Dampers",                 num:"128" },
    { desc:"Fire Alarm Shop Drawings",     num:"135" },
    { desc:"Grills, Registers, Diffusers", num:"122" },
  ],
};
const KC_TRADES = [
  "All trades performing well.",
  "1st Floor — All drywalled walls, framing ceilings. Plumbers doing lines and ABS pipes.",
  "2nd Floor — Demising wall up and insulated. Insulation inspection April 24.",
  "3rd Floor — Electricians dropping wires. Plumbers doing lines.",
  "Sprinklers stubbed in corridor walls, floors 1–6.",
  "Underground — Plumbers nearly complete with 12\" pipes and basement connections.",
  "Mechanical room in penthouse insulated and drywalled.",
];
const KC_CONSULTANT_NOTES = [
  "Architectural drawings did not match ground floor (reviewed April 17 with Giovanni).",
  "Architects need to revise drawings — sent from Gio April 20, 2026.",
  "Waiting on interior designer to update per revised architect drawings.",
];
const KC_PHOTOS = [
  { label:"Landscape — Podium Waterproofing",          section:"Landscape",     src:"img/landscape-podium-waterproofing.jpg" },
  { label:"Underground — Mechanical Space",            section:"Underground",   src:"img/underground-mechanical-space.jpg" },
  { label:"Ground Floor — Electrical Rough-in",        section:"Ground Floor",  src:"img/ground-floor-electrical-roughin.jpg" },
  { label:"2nd Floor — Demising Wall & Insulation",    section:"2nd Floor",     src:"img/2nd-floor-demising-wall-insulation.jpg" },
  { label:"3rd Floor — Electrical Drop",               section:"3rd Floor",     src:"img/3rd-floor-electrical-drop.jpg" },
  { label:"Roof Terrace — Gravel Bed",                 section:"Roof Terrace",  src:"img/roof-terrace-gravel-bed.jpg" },
];
const KC_SECTION_COLORS = { Underground:T.amber, Landscape:"#7a9e7e", "Ground Floor":T.blue, "2nd Floor":T.gold, "3rd Floor":"#9e7ab5", "Roof Terrace":T.green };

const JD_ACTIVITY = [
  { date:"Mar 1, 2026",  type:"Loan Funding",   project:"Drayton Bridge Loan (L-003)",            amount:-75000 },
  { date:"Nov 30, 2024", type:"Distribution — Profit",            project:"Cambridge Main St LP", amount:449051.64 },
  { date:"Nov 30, 2024", type:"Distribution — Return of Capital", project:"Cambridge Main St LP", amount:198000 },
  { date:"Oct 1, 2024",  type:"Loan Funding",   project:"Kennedy Circle Mezzanine (L-002)",       amount:-150000 },
  { date:"Jan 15, 2024", type:"Loan Repayment", project:"Private Mortgage — Cambridge (L-001)",   amount:315000 },
  { date:"Sep 1, 2023",  type:"Contribution",   project:"Drayton Wellington Rd LP",               amount:-150000 },
  { date:"Jun 15, 2023", type:"Contribution",   project:"Drayton Wellington St South LP",         amount:-12500 },
  { date:"Oct 1, 2022",  type:"Contribution",   project:"Milton Thompson Rd LP",                  amount:-200000 },
  { date:"Jan 15, 2022", type:"Loan Funding",   project:"Private Mortgage — Cambridge (L-001)",   amount:-222257.88 },
  { date:"Feb 15, 2021", type:"Contribution",   project:"Cambridge Main St LP",                   amount:-198000 },
  { date:"May 1, 2019",  type:"Contribution",   project:"51 Sparrow Ave – Unit 40",               amount:-31688.09 },
];
const UNCALLED = [
  { project:"Drayton Wellington Rd LP",       amount:150000 },
  { project:"Drayton Wellington St South LP", amount:12500 },
];
const UNCALLED_TOTAL = 162500;
const ANNOUNCEMENTS = [
  { date:"Apr 28, 2026", title:"Kennedy Circle — April PM Progress Report published", body:"53.85% complete. Occupancy tracking Sep 11, 2026. Full report in the Kennedy Circle tab." },
  { date:"Mar 12, 2026", title:"Rivercroft Drayton — Draft Plan submission update",   body:"Municipal review progressing with the Township of Mapleton. Next milestone: circulation comments." },
  { date:"Feb 3, 2026",  title:"2025 Annual Investment Summaries issued",             body:"Your annual summary is available in Documents. Questions welcome at info@east97.ca." },
];

const NAV = [
  { id:"portfolio", label:"My Portfolio",     icon:"chart"    },
  { id:"activity",  label:"Capital Activity", icon:"dollar"   },
  { id:"loans",     label:"Loan Positions",   icon:"loan"     },
  { id:"projects",  label:"Active Projects",  icon:"building" },
  { id:"kennedy",   label:"Kennedy Circle",   icon:"building" },
  { id:"property",  label:"My Property",      icon:"home"     },
  { id:"documents", label:"Documents",        icon:"file"     },
];

const PROJECTS = [
  { id:"kennedy",   name:"Kennedy Circle",          sub:"Milton Thompson Rd LP · 148 units · 6 storeys",     pct:54,  roi:"271.67%",  color:T.gold,    status:"Under Construction", highlight:"$12.1M projected profit · FMV $65M",   budget:"$52.1M", ctd:"$28.1M" },
  { id:"drayrd",    name:"Rivercroft — Drayton Rd", sub:"Drayton Wellington Rd LP · 580-unit subdivision",   pct:3,   roi:"1905.71%", color:"#7a9e7e", status:"Pre-Development",    highlight:"$53.8M projected margin",              budget:"$269M",  ctd:"$7.2M"  },
  { id:"drayst",    name:"Rivercroft — Drayton St", sub:"Drayton Wellington St South LP · 580 units",        pct:6,   roi:"5994.91%", color:"#7a7a9e", status:"Pre-Development",    highlight:"$17.9M projected margin",              budget:"$111M",  ctd:"$6.1M"  },
  { id:"cambridge", name:"Cambridge Main Street",   sub:"Fully realized — capital + 126.79% profit returned",pct:100, roi:"226.79%",  color:T.green,   status:"Fully Realized",     highlight:"All LP capital returned to investors", budget:"—",      ctd:"—"      },
];

const OPPORTUNITIES = [
  { name:"Rivercroft — Phase 2",            detail:"Next phase of the 580-unit Drayton subdivision. Targeting 2027 opening to existing LPs first.", tag:"Coming 2027" },
  { name:"Q2 Capital Private Loan Program",  detail:"Project-secured lending at a 9% target annual rate. Quarterly interest statements.",             tag:"Open to LPs" },
];

const DOCS = [
  { name:"2025 Annual Investment Summary — Doe Capital Holdings Inc.pdf", type:"Annual Report",   icon:"📄" },
  { name:"Kennedy Circle — Project Proforma 2026.pdf",                     type:"Project Report",  icon:"📊" },
  { name:"KC PM Progress Report — April 2026.pptx",                        type:"Progress Report", icon:"📊" },
  { name:"Rivercroft Drayton Road — Draft Plan of Subdivision.pdf",        type:"Project Report",  icon:"📊" },
  { name:"Milton Thompson Rd LP — Partnership Agreement.pdf",              type:"LP Agreement",    icon:"📋" },
  { name:"Drayton Wellington Rd LP — Partnership Agreement.pdf",           type:"LP Agreement",    icon:"📋" },
  { name:"Drayton Wellington St South LP — Partnership Agreement.pdf",     type:"LP Agreement",    icon:"📋" },
  { name:"Loan Agreement L-001 — Private Mortgage Cambridge.pdf",          type:"Loan Agreement",  icon:"🏦" },
  { name:"Loan Agreement L-002 — Kennedy Circle Mezzanine.pdf",            type:"Loan Agreement",  icon:"🏦" },
  { name:"Loan Agreement L-003 — Drayton Bridge Loan.pdf",                 type:"Loan Agreement",  icon:"🏦" },
  { name:"Q2 Capital Partners — 30-Year Compounding Projections.pdf",      type:"Projection",      icon:"📈" },
  { name:"Q2 Property — Unit 40 Lease Agreement.pdf",                      type:"Lease",           icon:"🏠" },
  { name:"T5013 — 2025 Tax Slip (Doe Capital Holdings).pdf",               type:"Tax Slip",        icon:"🧾" },
  { name:"T5013 — 2024 Tax Slip (Doe Capital Holdings).pdf",               type:"Tax Slip",        icon:"🧾" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const fc = (n, abbr=false) => {
  if (n == null) return "—";
  const abs = Math.abs(n), s = n < 0 ? "-" : "";
  if (abbr && abs >= 1e6) return `${s}$${(abs/1e6).toFixed(2)}M`;
  if (abbr && abs >= 1e3) return `${s}$${(abs/1e3).toFixed(0)}K`;
  return `${s}$${abs.toLocaleString("en-CA",{minimumFractionDigits:2,maximumFractionDigits:2})}`;
};
const fp = (n) => n == null ? "—" : `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;
const rc  = (n) => n > 100 ? T.goldLight : n > 0 ? T.green : n < 0 ? T.red : T.textMid;
const rcL = (n) => n > 100 ? LT.gold : n > 0 ? LT.green : n < 0 ? LT.red : LT.mid;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

// ─── ICONS ────────────────────────────────────────────────────────────────────
const ICONS = {
  chart:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  building: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>`,
  dollar:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  file:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  home:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  logout:   `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  loan:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
};

// ─── STATE ────────────────────────────────────────────────────────────────────
const state = {
  loggedIn: false,
  tab: "portfolio",
  activityFilter: "All",
  openPosition: null,
  kcSubtab: "overview",
  kcSection: "All",
  selectedProject: null,
};

// ─── CHARTS ───────────────────────────────────────────────────────────────────
function donutChart(data, size=150) {
  const total = data.reduce((s,d)=>s+d.value,0);
  const R = 54, CIRC = 2*Math.PI*R;
  let acc = 0;
  const segs = data.map(d => { const frac = d.value/total; const seg = { ...d, frac, off:acc }; acc += frac; return seg; });
  const circles = segs.map(s => `<circle cx="70" cy="70" r="${R}" fill="none" stroke="${s.color}" stroke-width="18" stroke-dasharray="${s.frac*CIRC} ${CIRC}" stroke-dashoffset="${-s.off*CIRC}" transform="rotate(-90 70 70)"/>`).join("");
  const legend = segs.map(s => `
    <div class="donut-legend-row">
      <div class="donut-swatch" style="background:${s.color}"></div>
      <span class="donut-legend-label">${esc(s.label)}</span>
      <span class="donut-legend-value">${(s.frac*100).toFixed(1)}%</span>
    </div>`).join("");
  return `
    <div class="donut-wrap">
      <svg width="${size}" height="${size}" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="${R}" fill="none" stroke="${T.navy}" stroke-width="18"/>
        ${circles}
        <text x="70" y="66" text-anchor="middle" style="font-size:13px;fill:${T.text};font-family:'Cormorant Garamond',Georgia,serif;font-weight:600">${fc(total,true)}</text>
        <text x="70" y="82" text-anchor="middle" style="font-size:7px;fill:${T.textLight};letter-spacing:0.1em">DEPLOYED</text>
      </svg>
      <div class="donut-legend">${legend}</div>
    </div>`;
}

function progressionChart() {
  const pts = [
    { yr:"2019", out:31688,   inn:0 },
    { yr:"2021", out:229688,  inn:0 },
    { yr:"2022", out:651946,  inn:0 },
    { yr:"2023", out:814446,  inn:0 },
    { yr:"2024", out:964446,  inn:962052 },
    { yr:"2026", out:1039446, inn:962052 },
  ];
  const W=340,H=120,P=12, max=1150000;
  const x = i => P + i*(W-2*P)/(pts.length-1);
  const y = v => H-P-(v/max)*(H-2*P);
  const line = k => pts.map((p,i)=>`${x(i)},${y(p[k])}`).join(" ");
  const dots = pts.map((p,i)=>`
    <circle cx="${x(i)}" cy="${y(p.out)}" r="2.6" fill="${T.goldLight}"/>
    <circle cx="${x(i)}" cy="${y(p.inn)}" r="2.6" fill="${T.green}"/>
    <text x="${x(i)}" y="${H+12}" text-anchor="middle" style="font-size:8px;fill:${T.textLight}">${p.yr}</text>`).join("");
  return `
    <div>
      <svg width="100%" viewBox="0 0 ${W} ${H+16}">
        <polyline points="${line("out")}" fill="none" stroke="${T.gold}" stroke-width="2"/>
        <polyline points="${line("inn")}" fill="none" stroke="${T.green}" stroke-width="2"/>
        ${dots}
      </svg>
      <div class="progression-legend">
        <span style="color:${T.goldLight}">― Capital Deployed (cumulative)</span>
        <span style="color:${T.green}">― Proceeds Received (cumulative)</span>
      </div>
    </div>`;
}

// ─── TAB: PORTFOLIO ───────────────────────────────────────────────────────────
function positionsTable() {
  const cols = ["Project","Committed","Invested","Returned","Realized P&L","Proj. Profit","Current ROI","Target ROI","Status"];
  const rows = INVESTOR.positions.map((p,i) => {
    const isOpen = state.openPosition === i;
    const uncalledP = p.status === "Active" ? Math.max(0, p.committed - p.invested) : 0;
    const acts = JD_ACTIVITY.filter(a => a.project === p.project);
    const badgeClass = `badge-l-${p.status.replace(/\s+/g,"")}`;
    let detail = "";
    if (isOpen) {
      const stats = [
        { l:"Invested", v:fc(p.invested,true) },
        { l:"Returned", v:fc(p.returned,true) },
        ...(uncalledP>0 ? [{ l:"Uncalled", v:fc(uncalledP,true), warn:true }] : []),
        { l:"Realized P&L", v:fc(p.profit,true) },
      ];
      const statsHtml = stats.map(s => `
        <div class="stat-chip${s.warn?" warn":""}">
          <div class="stat-chip-label${s.warn?" warn":""}">${s.l}</div>
          <div class="stat-chip-value${s.warn?" warn":""}">${s.v}</div>
        </div>`).join("");
      const actsHtml = acts.length ? acts.map((a,j) => `
        <div class="tx-row">
          <span class="tx-date">${a.date}</span>
          <span class="tx-type">${esc(a.type)}</span>
          <span class="tx-amount" style="color:${a.amount>=0?LT.green:LT.mid}">${a.amount>=0?"+":""}${fc(a.amount)}</span>
        </div>`).join("") : `<div style="font-size:11px;color:${LT.faint};font-style:italic">No dated transactions on file for this position.</div>`;
      const docsHtml = (POSITION_DOCS[p.project]||[]).map(d => `<span class="doc-chip">📄 ${esc(d)}</span>`).join("");
      detail = `
        <tr>
          <td colspan="9" class="position-detail">
            <div class="position-detail-inner">
              <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:12px">${statsHtml}</div>
              <div class="tx-history-title">Transaction History</div>
              ${actsHtml}
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">${docsHtml}</div>
            </div>
          </td>
        </tr>`;
    }
    return `
      <tr class="clickable${isOpen?" open-row":!( i%2===0)?" zebra":""}" data-position-toggle="${i}">
        <td><span class="position-toggle">${isOpen?"▾":"▸"}</span>${esc(p.project)}</td>
        <td style="text-align:right;color:${LT.mid}">${fc(p.committed)}</td>
        <td style="text-align:right">${fc(p.invested)}</td>
        <td style="text-align:right;color:${p.returned>0?LT.green:LT.faint}">${fc(p.returned)}</td>
        <td style="text-align:right;font-weight:700;color:${p.profit>=0?LT.gold:LT.red}">${fc(p.profit)}</td>
        <td style="text-align:right;color:${LT.gold}">${fc(p.projProfit,true)}</td>
        <td style="text-align:right;font-weight:700;color:${rcL(p.roi)}">${fp(p.roi)}</td>
        <td style="text-align:right;color:${LT.gold}">${fp(p.targetROI)}</td>
        <td><span class="badge-l ${badgeClass}">${p.status}</span></td>
      </tr>
      ${detail}`;
  }).join("");
  return `
    <div class="lt-panel">
      <div class="lt-head">
        <div class="lt-head-title">Investment Positions</div>
        <div class="lt-head-hint">Select a row for transaction detail</div>
      </div>
      <div class="table-scroll">
        <table class="resp positions-table">
          <thead><tr>${cols.map(h=>`<th style="text-align:${["Project","Status"].includes(h)?"left":"right"}">${h}</th>`).join("")}</tr></thead>
          <tbody>${rows}</tbody>
          <tfoot>
            <tr>
              <td style="color:${LT.gold}">TOTAL</td>
              <td style="text-align:right">${fc(INVESTOR.committed)}</td>
              <td style="text-align:right">${fc(INVESTOR.invested)}</td>
              <td style="text-align:right;color:${LT.green}">${fc(INVESTOR.returned)}</td>
              <td style="text-align:right;color:${LT.gold}">${fc(INVESTOR.profit)}</td>
              <td style="text-align:right;color:${LT.gold}">${fc(INVESTOR.projValue,true)}</td>
              <td style="text-align:right;color:${rcL(INVESTOR.currentROI)};font-size:13px">${fp(INVESTOR.currentROI)}</td>
              <td style="text-align:right;color:${LT.gold};font-size:13px">${fp(INVESTOR.targetROI)}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>`;
}

function renderPortfolioTab() {
  const stats = [
    { l:"Total Committed",  v:fc(INVESTOR.committed,true),  c:T.text  },
    { l:"Capital Invested", v:fc(INVESTOR.invested,true),   c:T.text  },
    { l:"Capital Returned", v:fc(INVESTOR.returned,true),   c:T.green },
    { l:"Realized P&L",     v:fc(INVESTOR.profit,true),     c:T.goldLight },
    { l:"Projected Value",  v:fc(INVESTOR.projValue,true),  c:T.goldLight },
  ];
  const statsHtml = stats.map(s => `
    <div>
      <div class="hero-stat-label">${s.l}</div>
      <div class="hero-stat-value" style="color:${s.c}">${s.v}</div>
    </div>`).join("");

  const updatesHtml = ANNOUNCEMENTS.map(a => `
    <div class="updates-row">
      <span class="updates-date">${a.date}</span>
      <div>
        <div class="updates-title">${esc(a.title)}</div>
        <div class="updates-body">${esc(a.body)}</div>
      </div>
    </div>`).join("");

  return `
    <div class="flex-col">
      <div class="hero">
        <div class="hero-ring"></div>
        <div class="hero-mark"><img src="img/logo-qc.png" alt="" style="height:80px;opacity:1;display:block"></div>
        <div class="hero-kicker">2025 Annual Investment Summary</div>
        <div class="hero-entity">${INVESTOR.entity}</div>
        <div class="hero-name">${INVESTOR.name} · ${INVESTOR.role}</div>
        <div class="hero-since">Member since ${INVESTOR.memberSince}</div>
        <div class="hero-stats">${statsHtml}</div>
        <div class="hero-roi">
          <div class="hero-roi-bar-wrap">
            <div class="hero-roi-bar-head">
              <span>Current ROI</span>
              <span style="color:${rc(INVESTOR.currentROI)}">${fp(INVESTOR.currentROI)}</span>
            </div>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.min(INVESTOR.currentROI/2,100)}%"></div></div>
          </div>
          <div>
            <div class="hero-target-label">Target ROI</div>
            <div class="hero-target-value">${fp(INVESTOR.targetROI)}</div>
          </div>
        </div>
      </div>

      <div class="grid-3">
        <div class="kpi" style="border-color:${T.amber}44">
          <div class="kpi-label" style="color:${T.amber}">Uncalled Commitment</div>
          <div class="kpi-value" style="color:${T.amber}">${fc(UNCALLED_TOTAL,true)}</div>
          <div class="kpi-sub">Drayton Rd $150K · Drayton St $12.5K</div>
        </div>
        <div class="kpi">
          <div class="kpi-label">Projected Equity Multiple</div>
          <div class="kpi-value" style="color:${T.goldLight}">7.1x</div>
          <div class="kpi-sub">Projected value ÷ committed capital</div>
        </div>
        <div class="kpi">
          <div class="kpi-label">Realized IRR — Cambridge</div>
          <div class="kpi-value" style="color:${T.green}">36.7%</div>
          <div class="kpi-sub">Annualized, 2021–2024 · 3.27x multiple</div>
        </div>
      </div>

      <div class="grid-2">
        <div class="panel" style="padding:16px 18px">
          <div class="panel-head-title" style="margin-bottom:12px">Capital Allocation — Currently Deployed</div>
          ${donutChart([
            { label:"Loan Facilities",            value:225000,   color:"#b8874f" },
            { label:"Milton Thompson Rd LP",      value:200000,   color:"#c9a96e" },
            { label:"Drayton Wellington Rd LP",   value:150000,   color:"#7a9e7e" },
            { label:"51 Sparrow Ave – Unit 40",   value:31688.09, color:"#a9c0d8" },
            { label:"Drayton Wellington St S LP", value:12500,    color:"#9e7ab5" },
          ])}
        </div>
        <div class="panel" style="padding:16px 18px">
          <div class="panel-head-title" style="margin-bottom:12px">Portfolio Progression</div>
          ${progressionChart()}
        </div>
      </div>

      <div class="panel" style="padding:14px 18px">
        <div class="panel-head-title" style="margin-bottom:10px">Latest Updates</div>
        ${updatesHtml}
      </div>

      ${positionsTable()}
    </div>`;
}

// ─── TAB: ACTIVITY ────────────────────────────────────────────────────────────
function tBadge(ty) {
  if (ty === "Contribution") return { bg:`${T.blue}18`, fg:T.blue, bd:`${T.blue}44` };
  if (ty.startsWith("Distribution")) return { bg:T.greenDim, fg:T.green, bd:`${T.green}44` };
  if (ty === "Loan Repayment") return { bg:`${T.gold}18`, fg:T.goldLight, bd:`${T.gold}44` };
  return { bg:T.amberDim, fg:T.amber, bd:`${T.amber}44` };
}
function tBadgeL(ty) {
  if (ty === "Contribution") return { bg:"#e2e9f2", fg:"#3d5a78", bd:"#c4d2e2" };
  if (ty.startsWith("Distribution")) return { bg:"#e3ead9", fg:"#3f6a3f", bd:"#c3d4b8" };
  if (ty === "Loan Repayment") return { bg:"#f0e7d3", fg:"#8f6a33", bd:"#dcc9a3" };
  return { bg:"#f2e3cf", fg:"#8a6b3a", bd:"#e0cba4" };
}
function lightLedger(rows) {
  const trs = rows.map((r,i) => {
    const b = tBadgeL(r.type);
    return `
      <tr class="${i%2===0?"":"zebra"}">
        <td style="white-space:nowrap;color:${LT.mid}">${r.date}</td>
        <td><span class="tbadge" style="background:${b.bg};color:${b.fg};border-color:${b.bd}">${esc(r.type)}</span></td>
        <td>${esc(r.project)}</td>
        <td style="text-align:right;font-weight:700;white-space:nowrap;color:${r.amount>=0?LT.green:LT.mid}">${r.amount>=0?"+":""}${fc(r.amount)}</td>
      </tr>`;
  }).join("");
  return `
    <div class="lt-panel">
      <div class="table-scroll">
        <table class="resp ledger-table">
          <thead><tr>${["Date","Type","Project / Facility","Amount"].map(h=>`<th style="text-align:${h==="Amount"?"right":"left"}">${h}</th>`).join("")}</tr></thead>
          <tbody>${trs}</tbody>
        </table>
      </div>
    </div>`;
}
function renderActivityTab() {
  const match = (t) => state.activityFilter === "All" ? true
    : state.activityFilter === "Contributions" ? t === "Contribution"
    : state.activityFilter === "Distributions" ? t.startsWith("Distribution")
    : t.startsWith("Loan");
  const rows = JD_ACTIVITY.filter(r => match(r.type));
  const sums = {
    contrib: JD_ACTIVITY.filter(r=>r.type==="Contribution").reduce((s,r)=>s+Math.abs(r.amount),0),
    dist:    JD_ACTIVITY.filter(r=>r.type.startsWith("Distribution")).reduce((s,r)=>s+r.amount,0),
    loanOut: JD_ACTIVITY.filter(r=>r.type==="Loan Funding").reduce((s,r)=>s+Math.abs(r.amount),0),
    loanIn:  JD_ACTIVITY.filter(r=>r.type==="Loan Repayment").reduce((s,r)=>s+r.amount,0),
  };
  const kpis = [
    { l:"Total Contributions", v:fc(sums.contrib,true), c:T.blueLight, sub:"5 LP positions" },
    { l:"Total Distributions", v:fc(sums.dist,true),    c:T.green,     sub:"Cambridge exit 2024" },
    { l:"Loans Funded",        v:fc(sums.loanOut,true), c:T.amber,     sub:"3 loan facilities" },
    { l:"Loan Repayments",     v:fc(sums.loanIn,true),  c:T.goldLight, sub:"Principal + interest" },
  ];
  const kpisHtml = kpis.map(k => `
    <div class="kpi">
      <div class="kpi-label">${k.l}</div>
      <div class="kpi-value kpi-value-lg" style="color:${k.c}">${k.v}</div>
      <div class="kpi-sub">${k.sub}</div>
    </div>`).join("");
  const filters = ["All","Contributions","Distributions","Loans"];
  const filtersHtml = filters.map(f => `<button class="btn-filter${state.activityFilter===f?" active":""}" data-filter="${f}">${f}</button>`).join("");

  return `
    <div class="flex-col">
      <div>
        <div class="section-title section-title-lg">Capital Activity</div>
        <div class="section-sub">Dated ledger of contributions, distributions, and loan activity — Doe Capital Holdings Inc.</div>
      </div>
      <div class="grid-4">${kpisHtml}</div>
      <div class="uncalled-panel">
        <div class="uncalled-flex">
          <div>
            <div class="uncalled-title">Uncalled Capital Commitment</div>
            <div class="uncalled-detail">${UNCALLED.map(u=>`${u.project}: ${fc(u.amount,true)}`).join("  ·  ")}</div>
            <div class="uncalled-note">Capital call notices are issued with a minimum of 10 business days' notice.</div>
          </div>
          <div>
            <div class="uncalled-total">${fc(UNCALLED_TOTAL,true)}</div>
            <div class="uncalled-total-label">Remaining to call</div>
          </div>
        </div>
      </div>
      <div class="filter-row">
        ${filtersHtml}
        <span class="filter-count">${rows.length} transactions</span>
      </div>
      ${lightLedger(rows)}
      <div class="italic-note">Transaction dates shown are illustrative for this demo. In the live portal, entries reconcile to Jonas Premier and bank records.</div>
    </div>`;
}

// ─── TAB: LOANS ───────────────────────────────────────────────────────────────
function renderLoansTab() {
  const totalPrincipal   = INVESTOR.loans.reduce((s,l)=>s+l.principal,0);
  const totalOutstanding = INVESTOR.loans.reduce((s,l)=>s+l.outstanding,0);
  const totalInterest    = INVESTOR.loans.reduce((s,l)=>s+l.interest,0);
  const totalReturned    = INVESTOR.loans.reduce((s,l)=>s+l.returned,0);
  const kpis = [
    { l:"Total Principal Lent", v:fc(totalPrincipal,true),   c:T.text,      sub:`${INVESTOR.loans.length} loan positions` },
    { l:"Outstanding Balance",  v:fc(totalOutstanding,true), c:T.amber,     sub:"Currently deployed" },
    { l:"Interest Earned",      v:fc(totalInterest,true),    c:T.goldLight, sub:"Accrued to date" },
    { l:"Total Returned",       v:fc(totalReturned,true),    c:T.green,     sub:"Principal + interest" },
  ];
  const kpisHtml = kpis.map(k => `
    <div class="kpi">
      <div class="kpi-label">${k.l}</div>
      <div class="kpi-value kpi-value-lg" style="color:${k.c}">${k.v}</div>
      <div class="kpi-sub">${k.sub}</div>
    </div>`).join("");

  const loansHtml = INVESTOR.loans.map(loan => {
    const isActive = loan.status === "Active";
    const accrualPct = loan.outstanding > 0 ? (loan.interest / loan.principal * 100).toFixed(2) : null;
    const fields = [
      { l:"Interest Rate",    v:loan.rate,            c:T.goldLight },
      { l:"Term",             v:loan.term,            c:T.text      },
      { l:"Issued",           v:loan.issued,          c:T.textMid   },
      { l:"Maturity",         v:loan.matured,         c:T.textMid   },
      { l:"Outstanding",      v:fc(loan.outstanding), c:loan.outstanding>0?T.amber:T.green },
      { l:"Interest Accrued", v:fc(loan.interest),    c:T.goldLight },
      ...(loan.returned>0 ? [{ l:"Total Returned", v:fc(loan.returned,true), c:T.green }] : []),
    ];
    const fieldsHtml = fields.map(f => `
      <div class="loan-field">
        <div class="loan-field-label">${f.l}</div>
        <div class="loan-field-value" style="color:${f.c}">${f.v}</div>
      </div>`).join("");
    const badgeClass = `badge-${loan.status}`;
    return `
      <div class="loan-card${isActive?" active":""}">
        <div class="loan-head${isActive?" active":""}">
          <div>
            <div class="loan-id-row">
              <span class="loan-id">${loan.id}</span>
              <span class="badge ${badgeClass}">${loan.status}</span>
            </div>
            <div class="loan-desc">${esc(loan.description)}</div>
          </div>
          <div>
            <div class="loan-principal-label">Principal</div>
            <div class="loan-principal-value" style="color:${isActive?T.amber:T.green}">${fc(loan.principal,true)}</div>
          </div>
        </div>
        <div class="loan-body">
          <div class="loan-fields">${fieldsHtml}</div>
          ${isActive ? `
          <div class="loan-progress">
            <div class="loan-progress-head">
              <span>Interest accrued vs principal</span>
              <span>${accrualPct}%</span>
            </div>
            <div class="bar-track"><div class="bar-fill" style="width:${Math.min(parseFloat(accrualPct)*3,100)}%"></div></div>
          </div>` : ""}
          <div class="loan-notes">
            <span>◈</span>
            <span>${esc(loan.notes)}</span>
          </div>
        </div>
      </div>`;
  }).join("");

  return `
    <div class="flex-col">
      <div>
        <div class="section-title section-title-lg">Private Loan Positions</div>
        <div class="section-sub">Mortgage, mezzanine, and bridge loan facilities — Doe Capital Holdings Inc.</div>
      </div>
      <div class="grid-4">${kpisHtml}</div>
      ${loansHtml}
      <div class="policy-note">
        <div class="policy-note-icon">◈</div>
        <div>
          <div class="policy-note-title">Loan Interest Policy</div>
          <div class="policy-note-body">Private loans through Q2 Capital Partners earn interest at the agreed rate (typically 7.5–9.0% per annum) from the date of funding. Interest is calculated daily and repaid with principal at loan maturity or project milestone. All loan positions are secured by project assets and backed by Q2 Capital Partners' LP structure. Statements are issued quarterly.</div>
        </div>
      </div>
    </div>`;
}

// ─── TAB: PROJECTS ────────────────────────────────────────────────────────────
function renderProjectsTab() {
  const cardsHtml = PROJECTS.map(p => `
    <div class="project-card${state.selectedProject===p.id?" selected":""}" data-project="${p.id}">
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
        <div class="project-progress-head">
          <span>Progress</span>
          <span style="color:${p.color}">${p.pct}%</span>
        </div>
        <div class="project-track"><div class="project-fill" style="width:${p.pct}%;background:linear-gradient(90deg,${p.color},${T.goldLight})"></div></div>
      </div>` : ""}
      <div class="project-highlight">${esc(p.highlight)}</div>
    </div>`).join("");

  let detailHtml = "";
  if (state.selectedProject) {
    const p = PROJECTS.find(x => x.id === state.selectedProject);
    const fields = [["Total Budget",p.budget],["Cost to Date",p.ctd],["Target ROI",p.roi],["Status",p.status]];
    detailHtml = `
      <div class="project-detail">
        <div class="project-detail-title">${esc(p.name)}</div>
        <div class="grid-4">
          ${fields.map(([l,v]) => `
            <div class="project-detail-field">
              <div class="project-detail-field-label">${l}</div>
              <div class="project-detail-field-value">${v}</div>
            </div>`).join("")}
        </div>
      </div>`;
  }

  const oppsHtml = OPPORTUNITIES.map(o => `
    <div class="opportunity-card">
      <div class="opportunity-head">
        <span class="opportunity-name">${esc(o.name)}</span>
        <span class="opportunity-tag">${o.tag}</span>
      </div>
      <div class="opportunity-detail">${esc(o.detail)}</div>
      <button class="btn-register" data-register>Register Interest →</button>
    </div>`).join("");

  return `
    <div class="flex-col">
      <div class="section-title">Active Projects — Q2 Capital Partners</div>
      <div class="grid-2">${cardsHtml}</div>
      ${detailHtml}
      <div class="opportunities-panel">
        <div class="opportunities-title">New Investment Opportunities</div>
        <div class="grid-2">${oppsHtml}</div>
      </div>
    </div>`;
}

// ─── TAB: KENNEDY CIRCLE ──────────────────────────────────────────────────────
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
    <div class="grid-2">
      <div class="status-summary ontrack">
        <div class="status-summary-count ontrack">${onTrack} On Track</div>
        <div class="status-summary-note">Structure, occupancy, total completion on schedule</div>
      </div>
      <div class="status-summary delayed">
        <div class="status-summary-count delayed">${delayed} Delayed</div>
        <div class="status-summary-note">Elevator, mockup suite, proof of concept suites</div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><div class="panel-head-title">2026 Milestone Tracker</div></div>
      ${milestonesHtml}
    </div>`;
}
function kcContractsPanel() {
  const rfiSplit = (KC_ADMIN.rfis.answeredThisMonth/KC_ADMIN.rfis.issuedToDate)*100;
  const rfiOut   = (KC_ADMIN.rfis.outstanding/KC_ADMIN.rfis.issuedToDate)*100;
  const subSplit = (KC_ADMIN.submittals.returnedThisMonth/KC_ADMIN.submittals.issuedToDate)*100;
  const subOut   = (KC_ADMIN.submittals.outstanding/KC_ADMIN.submittals.issuedToDate)*100;
  const rows = (obj, keys) => keys.map(([l,v,c]) => `
    <div class="stat-count-row">
      <span class="stat-count-label">${l}</span>
      <span class="stat-count-value" style="color:${c}">${v}</span>
    </div>`).join("");
  const notesHtml = KC_ADMIN.notes.map(n => `<div class="pm-note-row"><span>◈</span><span>${esc(n)}</span></div>`).join("");
  const criticalHtml = KC_ADMIN.critical.map(s => `
    <tr>
      <td>${esc(s.desc)}</td>
      <td class="num-cell">${s.num}</td>
      <td><span class="pending-chip">Pending</span></td>
    </tr>`).join("");
  return `
    <div class="grid-2">
      <div class="panel">
        <div class="panel-head"><div class="panel-head-title">RFIs — March 10 to April 10</div></div>
        <div class="panel-body">
          ${rows(null, [["Issued to Date",KC_ADMIN.rfis.issuedToDate,T.text],["Answered This Month",KC_ADMIN.rfis.answeredThisMonth,T.green],["Outstanding",KC_ADMIN.rfis.outstanding,T.amber]])}
          <div class="split-bar"><div style="width:${rfiSplit}%;background:${T.green}"></div><div style="width:${rfiOut}%;background:${T.amber}"></div></div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div class="panel-head-title">Shop Drawings &amp; Submittals</div></div>
        <div class="panel-body">
          ${rows(null, [["Issued to Date",KC_ADMIN.submittals.issuedToDate,T.text],["Returned This Month",KC_ADMIN.submittals.returnedThisMonth,T.green],["Outstanding",KC_ADMIN.submittals.outstanding,T.amber]])}
          <div class="split-bar"><div style="width:${subSplit}%;background:${T.green}"></div><div style="width:${subOut}%;background:${T.amber}"></div></div>
        </div>
      </div>
    </div>
    <div class="panel panel-body">
      <div class="panel-head-title" style="margin-bottom:8px">PM Notes</div>
      ${notesHtml}
    </div>
    <div class="critical-panel">
      <div class="critical-head"><span>Critical Submittals — Pending</span></div>
      <table>
        <thead><tr><th>Description</th><th>Submittal #</th><th>Status</th></tr></thead>
        <tbody>${criticalHtml}</tbody>
      </table>
    </div>`;
}
function kcTradesPanel() {
  const tradesHtml = KC_TRADES.map((note,i) => `
    <div class="trade-item ${i===0?"first":"normal"}">
      <div class="trade-num"><span>${i===0?"✓":i}</span></div>
      <span class="trade-text ${i===0?"first":"normal"}">${esc(note)}</span>
    </div>`).join("");
  const consultantsHtml = KC_CONSULTANT_NOTES.map(n => `
    <div class="trade-item warn">
      <span class="warn-icon">!</span>
      <span class="trade-text normal">${esc(n)}</span>
    </div>`).join("");
  return `
    <div class="grid-2">
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
  const sectionBtns = sections.map(s => `<button class="btn-filter${state.kcSection===s?" active":""}" data-photo-section="${esc(s)}" style="${state.kcSection===s?`background:${KC_SECTION_COLORS[s]||T.gold};border-color:${KC_SECTION_COLORS[s]||T.gold};color:${T.navy}`:""}">${s}</button>`).join("");
  const gridHtml = filtered.map((photo,i) => `
    <div class="photo-thumb" data-photo="${KC_PHOTOS.indexOf(photo)}">
      <img src="${photo.src}" alt="${esc(photo.label)}">
      <div class="photo-tag" style="background:${KC_SECTION_COLORS[photo.section]||T.gold}cc">${photo.section}</div>
      <div class="photo-caption"><span>${esc(photo.label.replace(/^[^—]+— /,""))}</span></div>
    </div>`).join("");
  return `
    <div class="photos-head">
      <div class="section-title" style="font-size:13px">Site Photos — April 2026 · ${KC_PHOTOS.length} photos (sample)</div>
      <div class="photos-hint">Click to enlarge</div>
    </div>
    <div class="photo-filter-row">${sectionBtns}</div>
    <div class="photo-grid">${gridHtml}</div>`;
}
function renderKennedyTab() {
  const cur = KC_CONTRACT[KC_CONTRACT.length-1];
  const kcStats = [
    { l:"Budget",         v:"$52.07M",      c:T.text },
    { l:"Cost to Date",   v:"$28.13M",      c:T.gold },
    { l:"Completion",     v:"53.85%",       c:T.goldLight },
    { l:"Occupancy",      v:"Sep 11, 2026", c:T.green },
    { l:"Total Complete", v:"Oct 16, 2026", c:T.blueLight },
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
    overview: kcOverviewPanel(),
    schedule: kcSchedulePanel(),
    contracts: kcContractsPanel(),
    trades: kcTradesPanel(),
    photos: kcPhotosPanel(),
  };

  return `
    <div class="flex-col">
      <div class="kc-header">
        <img src="img/logo-kc.png" alt="Kennedy Circle" class="kc-logo">
        <div class="kc-kicker">DCB Project Services · April 2026</div>
        <div class="kc-title">Kennedy Circle Residences — PM Progress Report</div>
        <div class="kc-address">1001 Kennedy Circle, Milton ON · 148 units · 6 storeys</div>
        <div class="kc-stats">${statsHtml}</div>
      </div>
      <div class="kc-subtabs">${subTabsHtml}</div>
      <div class="kc-panel active">${panels[state.kcSubtab]}</div>
    </div>`;
}

// ─── TAB: DOCUMENTS ───────────────────────────────────────────────────────────
function renderDocsTab() {
  const rowsHtml = DOCS.map(d => `
    <div class="doc-row">
      <span class="doc-icon">${d.icon}</span>
      <div style="flex:1">
        <div class="doc-name">${esc(d.name)}</div>
        <div class="doc-type">${d.type}</div>
      </div>
      <button class="btn-download" data-download>↓ Download</button>
    </div>`).join("");
  return `
    <div class="flex-col">
      <div>
        <div class="section-title">Documents</div>
        <div class="section-sub">Investment reports, LP agreements, loan documents, and statements</div>
      </div>
      <div class="docs-warning">
        <span>🔒</span>
        <span>Demo mode — document downloads are disabled. In the live portal, all documents will be available directly from SharePoint.</span>
      </div>
      ${rowsHtml}
    </div>`;
}

// ─── TAB: PROPERTY ────────────────────────────────────────────────────────────
function renderPropertyTab() {
  const unitsHtml = INVESTOR.units.map(u => `
    <div class="unit-card">
      <div class="unit-head">
        <div class="unit-head-kicker">Residential Unit — Q2 Property Management</div>
        <div class="unit-head-address">${esc(u.address)}</div>
      </div>
      <div class="unit-body">
        <div class="unit-tenant-row">
          <div>
            <div class="unit-tenant-label">Tenant</div>
            <div class="unit-tenant-value">${esc(u.tenant)}</div>
          </div>
          <span class="badge badge-${u.status}">${u.status}</span>
        </div>
        <div class="unit-fields">
          <div class="unit-field">
            <div class="unit-field-label">Monthly Rent</div>
            <div class="unit-field-value rent">${fc(u.rent)}</div>
          </div>
          <div class="unit-field">
            <div class="unit-field-label">Payment Method</div>
            <div class="unit-field-value">${u.method}</div>
          </div>
          <div class="unit-field">
            <div class="unit-field-label">Managed By</div>
            <div class="unit-field-value managed">Q2 Property Mgmt</div>
          </div>
        </div>
      </div>
    </div>`).join("");
  return `
    <div class="flex-col">
      <div class="section-title">My Properties — Q2 Property Management</div>
      ${unitsHtml}
      <div class="pm-contact">
        <div class="pm-contact-title">Q2 Property Management</div>
        <div class="pm-contact-detail">300–1100 Burloak Drive, Burlington ON L7L 6B2 · <span>289-962-4281</span> · info@q2propertymanagement.com</div>
      </div>
    </div>`;
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
const TAB_RENDERERS = {
  portfolio: renderPortfolioTab,
  activity:  renderActivityTab,
  loans:     renderLoansTab,
  projects:  renderProjectsTab,
  kennedy:   renderKennedyTab,
  property:  renderPropertyTab,
  documents: renderDocsTab,
};

function renderTab() {
  const el = document.getElementById("tab-content");
  el.innerHTML = TAB_RENDERERS[state.tab]();
  document.getElementById("topbar-title").textContent = NAV.find(n=>n.id===state.tab)?.label || "";
  document.querySelectorAll("#nav-tabs .nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === state.tab);
  });
  document.getElementById("main-scroll").scrollTop = 0;
}

// ─── NAV ICONS (rendered once) ────────────────────────────────────────────────
function initNavIcons() {
  document.querySelectorAll("#nav-tabs .nav-btn").forEach(btn => {
    const iconEl = btn.querySelector(".nav-ico");
    const navItem = NAV.find(n => n.id === btn.dataset.tab);
    if (iconEl && navItem) iconEl.innerHTML = ICONS[navItem.icon];
  });
  const signoutIcon = document.querySelector("#signout-btn .nav-ico");
  if (signoutIcon) signoutIcon.innerHTML = ICONS.logout;
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function openLightbox(index) {
  const photo = KC_PHOTOS[index];
  document.getElementById("lightbox-img").src = photo.src;
  document.getElementById("lightbox-img").alt = photo.label;
  document.getElementById("lightbox-label").textContent = photo.label;
  document.getElementById("lightbox").hidden = false;
}
function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
}

// ─── EVENT DELEGATION (tab content) ───────────────────────────────────────────
document.getElementById("tab-content").addEventListener("click", (e) => {
  const download = e.target.closest("[data-download]");
  if (download) {
    download.classList.add("locked");
    download.textContent = "🔒 Demo only";
    return;
  }
  const register = e.target.closest("[data-register]");
  if (register) {
    register.classList.add("locked");
    register.textContent = "🔒 Demo only";
    return;
  }
  const filter = e.target.closest("[data-filter]");
  if (filter) { state.activityFilter = filter.dataset.filter; renderTab(); return; }

  const posToggle = e.target.closest("[data-position-toggle]");
  if (posToggle) {
    const idx = Number(posToggle.dataset.positionToggle);
    state.openPosition = state.openPosition === idx ? null : idx;
    renderTab();
    return;
  }

  const kctab = e.target.closest("[data-kctab]");
  if (kctab) { state.kcSubtab = kctab.dataset.kctab; renderTab(); return; }

  const photoSection = e.target.closest("[data-photo-section]");
  if (photoSection) { state.kcSection = photoSection.dataset.photoSection; renderTab(); return; }

  const photo = e.target.closest("[data-photo]");
  if (photo) { openLightbox(Number(photo.dataset.photo)); return; }

  const project = e.target.closest("[data-project]");
  if (project) {
    const id = project.dataset.project;
    state.selectedProject = state.selectedProject === id ? null : id;
    renderTab();
    return;
  }
});

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});

// ─── NAV / SIGN OUT ───────────────────────────────────────────────────────────
document.querySelectorAll("#nav-tabs .nav-btn").forEach(btn => {
  btn.addEventListener("click", () => { state.tab = btn.dataset.tab; renderTab(); });
});
document.getElementById("signout-btn").addEventListener("click", () => {
  state.loggedIn = false;
  document.getElementById("app").hidden = true;
  document.getElementById("login-screen").hidden = false;
  document.getElementById("pw-input").value = "";
  document.getElementById("pw-error").hidden = true;
  document.getElementById("pw-input").classList.remove("error");
  document.getElementById("login-btn").classList.remove("active");
});

// ─── LOGIN ────────────────────────────────────────────────────────────────────
const DEMO_PASSWORD = "Q2Capital";
function attemptLogin() {
  const pwInput = document.getElementById("pw-input");
  if (pwInput.value === DEMO_PASSWORD) {
    state.loggedIn = true;
    document.getElementById("login-screen").hidden = true;
    document.getElementById("app").hidden = false;
    renderTab();
  } else {
    document.getElementById("pw-error").hidden = false;
    pwInput.classList.add("error");
  }
}
const pwInput = document.getElementById("pw-input");
pwInput.addEventListener("input", () => {
  document.getElementById("pw-error").hidden = true;
  pwInput.classList.remove("error");
  document.getElementById("login-btn").classList.toggle("active", pwInput.value.length > 0);
});
pwInput.addEventListener("keydown", (e) => { if (e.key === "Enter") attemptLogin(); });
document.getElementById("login-btn").addEventListener("click", attemptLogin);

// ─── INIT ─────────────────────────────────────────────────────────────────────
initNavIcons();
