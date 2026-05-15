import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Target, 
  ShieldAlert, 
  Zap, 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sword, 
  Search,
  Activity,
  Copy
} from "lucide-react";
import { TypeBadge } from "@/components/pokemon/TypeBadge";

// --- 1. AUDITED TACTICAL DATA (Inlined for zero-import failure) ---
const tacticalData = {
  header: {
    teamName: "Tailwind Hyper Offense",
    format: "VGC 2024 Reg G",
    playstyle: "Hyper Offense",
  },
  scores: { overall: 82, offense: "High", defense: "Medium", speed: "Good" },
  summary: "Alta pressão ofensiva e bom controle de velocidade, mas com riscos defensivos claros contra Ground e Trick Room.",
  priorities: [
    { num: "01", title: "Ground pressure is dangerous", impact: "High", action: "Add Ground immunity or stronger resist.", color: "danger" },
    { num: "02", title: "Trick Room instability", impact: "Medium", action: "Add denial or slower mode.", color: "warning" },
    { num: "03", title: "Water resist is limited", impact: "Medium", action: "Consider a stable defensive answer.", color: "warning" }
  ],
  weaknesses: [
    { type: "Ground", label: "High Risk", color: "danger" },
    { type: "Ice", label: "High Risk", color: "danger" },
    { type: "Fairy", label: "Medium", color: "warning" }
  ],
  resistances: ["Grass", "Electric", "Dark", "Fairy"],
  strongInto: ["Dragon", "Dark", "Fighting", "Water"],
  threats: [
    { name: "Miraidon", level: "High", reason: "Electric Terrain + special pressure", answer: "Partial (Rillaboom needed)" },
    { name: "Calyrex-Shadow", level: "High", reason: "Speed + spread pressure", answer: "Weak" },
    { name: "Incineroar", level: "Medium", reason: "Fake Out + Intimidate cycle", answer: "Manageable" }
  ],
  nextActions: [
    "Add a Ground immunity",
    "Test Trick Room matchup",
    "Add secondary speed control",
    "Review Water defensive answer"
  ]
};

const teamSprites = [
  { name: "Flutter Mane", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png", types: ["Ghost", "Fairy"] },
  { name: "Koraidon", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png", types: ["Fighting", "Dragon"] },
  { name: "Rillaboom", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png", types: ["Grass"] },
  { name: "Incineroar", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png", types: ["Fire", "Dark"] },
  { name: "Urshifu", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png", types: ["Fighting", "Water"] },
  { name: "Amoonguss", url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png", types: ["Grass", "Poison"] }
];

// --- 2. LOCAL SUB-COMPONENTS (Audited & Safe) ---

function TacticalMeter({ icon, label, status, color }: { icon: React.ReactNode, label: string, status: string, color: 'success' | 'warning' | 'danger' }) {
  const colorClass = color === 'success' ? 'text-emerald-600' : color === 'warning' ? 'text-amber-600' : 'text-red-600';
  return (
    <div className="space-y-1">
      <div className="text-[9px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] flex items-center gap-1.5">{icon} {label}</div>
      <div className={`text-sm font-black uppercase tracking-widest ${colorClass}`}>{status}</div>
    </div>
  );
}

function PriorityCard({ num, title, impact, action, color }: { num: string, title: string, impact: string, action: string, color: string }) {
  const borderColor = color === 'danger' ? 'border-l-red-600' : 'border-l-amber-500';
  const badgeColor = color === 'danger' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-amber-50 text-amber-700 border-amber-100';
  return (
    <div className={`bg-white border border-[var(--rc-border-soft)] p-5 rounded-2xl border-l-4 ${borderColor} shadow-sm flex flex-col justify-between h-full group hover:shadow-md transition-all`}>
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="text-xl font-black text-slate-100 italic tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">{num}</div>
          <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${badgeColor}`}>Impact: {impact}</span>
        </div>
        <h3 className="text-[11px] font-black text-[var(--rc-text-primary)] uppercase tracking-tight mb-2 leading-tight">{title}</h3>
      </div>
      <div className="pt-2 border-t border-[var(--rc-border-soft)] mt-2 font-medium text-[10px] text-[var(--rc-text-secondary)]">
        <span className="font-bold text-[var(--rc-text-primary)] uppercase text-[8px] tracking-widest block mb-1 text-left">Suggested Action</span>
        {action}
      </div>
    </div>
  );
}

function MatchupChip({ type, label, color }: { type: string, label: string, color: 'danger' | 'warning' }) {
  const textColor = color === 'danger' ? 'text-red-600' : 'text-amber-600';
  return (
    <div className="flex items-center gap-1.5 p-1 pr-3 bg-white rounded-full border border-[var(--rc-border-soft)] shadow-sm text-left">
      <TypeBadge type={type} size="sm" />
      <span className={`text-[9px] font-black uppercase tracking-widest ${textColor}`}>{label}</span>
    </div>
  );
}

function PositiveItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-emerald-50/50 rounded-2xl border border-emerald-100">
      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
      <span className="text-[10px] font-bold text-[var(--rc-text-primary)] uppercase tracking-tight">{text}</span>
    </div>
  );
}

function ActionItem({ text, num }: { text: string, num: number }) {
  return (
    <button className="w-full text-left flex items-center justify-between p-4 bg-white border border-[var(--rc-border-soft)] rounded-xl hover:border-[var(--rc-accent-primary)] hover:shadow-md transition-all group">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded bg-[var(--rc-bg-muted)] text-[10px] font-black text-[var(--rc-text-muted)] flex items-center justify-center group-hover:bg-[var(--rc-accent-primary)] group-hover:text-white transition-colors">{num}</div>
        <span className="text-sm font-bold text-[var(--rc-text-primary)]">{text}</span>
      </div>
      <ArrowRight size={16} className="text-[var(--rc-text-muted)] group-hover:text-[var(--rc-accent-primary)] transition-colors group-hover:translate-x-1" />
    </button>
  );
}

// --- 3. MAIN ANALYZER COMPONENT (SERVER COMPONENT) ---
export default function RedCoreAnalyzer() {
  
  // Safe Mappings
  const priorities = tacticalData.priorities || [];
  const weaknesses = tacticalData.weaknesses || [];
  const resistances = tacticalData.resistances || [];
  const strongInto = tacticalData.strongInto || [];
  const threats = tacticalData.threats || [];
  const team = teamSprites || [];
  const nextActions = tacticalData.nextActions || [];

  return (
    <div className="max-w-[1200px] mx-auto pb-24 rc-animate-fade bg-[var(--rc-bg-app)] min-h-screen">
      
      {/* HEADER SECTION */}
      <div className="bg-white border-b border-[var(--rc-border-soft)] pt-8 pb-6 shadow-sm">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6 lg:px-10 mb-8">
            <div>
               <div className="flex items-center gap-3 mb-2">
                 <span className="bg-[var(--rc-accent-primary)] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">Tactical Analysis</span>
                 <span className="text-[10px] font-black text-[var(--rc-success)] uppercase tracking-widest px-2 border-l border-[var(--rc-border-strong)] flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-[var(--rc-success)] animate-pulse" />
                   Ready
                 </span>
               </div>
               <h1 className="text-3xl font-black text-[var(--rc-text-primary)] tracking-tighter uppercase italic leading-none">{tacticalData.header.teamName}</h1>
               <div className="flex items-center gap-3 text-xs font-bold text-[var(--rc-text-secondary)] uppercase tracking-widest mt-3">
                 <span>{tacticalData.header.format}</span>
                 <span className="text-[var(--rc-border-strong)]">•</span>
                 <span className="text-[var(--rc-accent-secondary)]">{tacticalData.header.playstyle}</span>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <Link href="/builder" className="px-6 py-2.5 bg-white border border-[var(--rc-border-strong)] text-[var(--rc-text-primary)] font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-[var(--rc-bg-muted)] transition-all flex items-center gap-2 shadow-sm"><ArrowLeft size={14} /> Back</Link>
            </div>
         </div>

         <div className="px-6 lg:px-10">
            <div className="flex overflow-x-auto gap-2 pb-2 custom-scrollbar">
               {team.map((p, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white border border-[var(--rc-border-soft)] p-2 rounded-xl shrink-0 min-w-[150px] shadow-sm group hover:border-[var(--rc-accent-primary)] transition-all">
                   <div className="w-10 h-10 bg-[var(--rc-bg-muted)]/50 rounded-lg flex items-center justify-center shrink-0">
                     <img src={p.url} alt={p.name} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
                   </div>
                   <div className="min-w-0 text-left">
                     <div className="text-[10px] font-black uppercase tracking-tight text-[var(--rc-text-primary)] truncate">{p.name}</div>
                     <div className="flex gap-1 mt-0.5">
                       {p.types?.map(t => <TypeBadge key={t} type={t} size="sm" />)}
                     </div>
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <div className="px-6 lg:px-10 space-y-12 mt-10">
        
        {/* SCORE SECTION */}
        <section className="flex flex-col md:flex-row gap-6 items-stretch">
          <div className="md:w-64 bg-[var(--rc-accent-primary)] rounded-[32px] p-8 text-white flex flex-col items-center justify-center text-center shadow-xl shadow-[var(--rc-accent-glow)] shrink-0">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2">Team Score</div>
            <div className="text-8xl font-black italic tracking-tighter drop-shadow-md mb-2">{tacticalData.scores.overall}</div>
            <div className="mt-3 bg-white/20 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-sm">Strong but Risky</div>
          </div>

          <div className="flex-1 bg-white border border-[var(--rc-border-soft)] rounded-[32px] p-8 shadow-[var(--rc-shadow-sm)] flex flex-col justify-center">
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <TacticalMeter icon={<Sword size={16} />} label="Offense" status={tacticalData.scores.offense} color="success" />
                <TacticalMeter icon={<ShieldAlert size={16} />} label="Defense" status={tacticalData.scores.defense} color="warning" />
                <TacticalMeter icon={<Zap size={16} />} label="Speed" status={tacticalData.scores.speed} color="success" />
             </div>
             <p className="mt-8 pt-6 border-t border-[var(--rc-border-soft)] text-sm font-medium text-[var(--rc-text-secondary)] leading-relaxed italic border-l-4 border-[var(--rc-accent-primary)]/20 pl-4">
                "{tacticalData.summary}"
             </p>
          </div>
        </section>

        {/* TOP PRIORITIES SECTION */}
        <section className="space-y-4">
           <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)] pl-1 italic">Top Priorities</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {priorities.map((p, idx) => (
                <PriorityCard key={idx} {...p} />
              ))}
           </div>
        </section>

        {/* MATCHUP GRID SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <section className="space-y-4">
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)] pl-1 border-b border-[var(--rc-border-soft)] pb-3 italic text-left">Type Matchup Map</h2>
              <div className="bg-white border border-[var(--rc-border-soft)] rounded-3xl shadow-sm overflow-hidden">
                 <div className="p-6 bg-red-50/30 border-b border-[var(--rc-border-soft)]">
                    <div className="text-[9px] font-black uppercase tracking-widest text-red-600 mb-4 flex items-center gap-2 text-left"><ShieldAlert size={12}/> Biggest Weaknesses</div>
                    <div className="flex flex-wrap gap-3">
                       {weaknesses.map((w, idx) => (
                         <MatchupChip key={idx} {...w} />
                       ))}
                    </div>
                 </div>
                 <div className="p-6">
                    <div className="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-4 flex items-center gap-2 text-left"><CheckCircle2 size={12}/> Safe Resistances</div>
                    <div className="flex flex-wrap gap-2">
                       {resistances.map((t, idx) => <TypeBadge key={idx} type={t} size="sm" />)}
                    </div>
                 </div>
              </div>
           </section>

           <section className="space-y-4 text-left">
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)] pl-1 border-b border-[var(--rc-border-soft)] pb-3 italic">Offensive Reach</h2>
              <div className="rc-card overflow-hidden h-full flex flex-col p-0 border-none shadow-none">
                 <div className="p-6 bg-white border border-[var(--rc-border-soft)] rounded-3xl shadow-sm flex-1 mb-4">
                    <div className="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-4 flex items-center gap-2 text-left"><TrendingUp size={12}/> Strong Into</div>
                    <div className="flex flex-wrap gap-2">
                       {strongInto.map((t, idx) => <TypeBadge key={idx} type={t} size="sm" />)}
                    </div>
                 </div>
                 <div className="p-6 bg-[var(--rc-bg-muted)]/30 rounded-3xl border border-[var(--rc-border-soft)] flex-1">
                    <div className="text-[9px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] mb-4 text-left">Strategic Gaps</div>
                    <div className="space-y-2">
                       <div className="text-[10px] font-bold text-[var(--rc-text-primary)] flex items-center gap-2 shadow-sm text-left">
                         <span className="text-amber-500">•</span> Missing Ground Coverage
                       </div>
                       <div className="text-[10px] font-bold text-[var(--rc-text-primary)] flex items-center gap-2 shadow-sm text-left">
                         <span className="text-amber-500">•</span> Missing Ice Coverage
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </div>

        {/* THREATS SECTION */}
        <section className="space-y-4">
           <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--rc-text-muted)] pl-1 italic text-left">Threat Radar</h2>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {threats.map((threat, i) => (
                <div key={i} className="bg-white border border-[var(--rc-border-soft)] rounded-2xl p-5 shadow-sm flex flex-col justify-between h-full group hover:border-[var(--rc-border-strong)] transition-all">
                   <div className="flex justify-between items-start mb-4 border-b border-[var(--rc-border-soft)] pb-3">
                     <h4 className="text-xs font-black uppercase tracking-tight text-[var(--rc-text-primary)] italic text-left">{threat.name}</h4>
                     <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-sm ${threat.level === 'High' ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'}`}>{threat.level}</span>
                   </div>
                   <div className="space-y-3">
                     <p className="text-[10px] font-medium text-[var(--rc-text-secondary)] leading-tight text-left">{threat.reason}</p>
                     <div className="pt-2 border-t border-[var(--rc-border-soft)]">
                       <div className="text-[8px] font-black uppercase tracking-widest text-[var(--rc-text-muted)] mb-1 text-left">Counter Status</div>
                       <p className={`text-[10px] font-black uppercase tracking-tight text-left ${threat.answer.includes('Weak') ? 'text-[var(--rc-danger)]' : 'text-[var(--rc-text-primary)]'}`}>{threat.answer}</p>
                     </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* FOOTER ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
           <section className="bg-white border border-[var(--rc-border-soft)] rounded-[32px] p-8 shadow-[var(--rc-shadow-card)] space-y-6">
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--rc-success)] flex items-center gap-2 text-left"><TrendingUp size={16} /> What Works</h2>
              <div className="space-y-3">
                 <PositiveItem text="Strong offensive pressure across the board." />
                 <PositiveItem text="Excellent primary speed control with Tailwind." />
                 <PositiveItem text="Solid Fake Out support." />
              </div>
           </section>

           <section className="bg-[var(--rc-bg-muted)] border border-[var(--rc-border-soft)] rounded-[32px] p-8 shadow-[var(--rc-shadow-card)] space-y-6">
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--rc-accent-primary)] flex items-center gap-2 text-left"><ArrowRight size={16} /> Next Steps</h2>
              <div className="space-y-2">
                 {nextActions.map((action, idx) => (
                   <ActionItem key={idx} text={action} num={idx + 1} />
                 ))}
              </div>
           </section>
        </div>

      </div>
    </div>
  );
}
