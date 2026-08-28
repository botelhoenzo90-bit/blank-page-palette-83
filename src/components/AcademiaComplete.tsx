import academiaHero from "@/assets/academia-hero.jpg";

const gallery = [
  { src: academiaHero, alt: "Treino de musculação" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85", alt: "Academia com equipamentos" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85", alt: "Pessoa treinando" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85", alt: "Treino funcional" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85", alt: "Treino de força" },
];

const reviews = [
  ["Marina A.", "A melhor academia que já frequentei. Estrutura excelente e professores realmente presentes.", "5.0"],
  ["Lucas R.", "Comecei sem saber por onde começar e em poucos meses já percebi uma diferença enorme na rotina.", "5.0"],
  ["Camila S.", "Ambiente incrível, equipamentos novos e planos que cabem no bolso. Recomendo muito.", "4.9"],
  ["Rafael M.", "Treino cedo, uso a unidade 24h e nunca precisei esperar equipamento. Muito bom.", "5.0"],
];

function ReviewCard({ review }: { review: string[] }) {
  return <article className="w-[310px] shrink-0 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:w-[360px]">
    <div className="flex items-center justify-between"><span className="text-amber-400">★★★★★</span><span className="text-xs text-white/50">Google {review[2]}</span></div>
    <p className="mt-5 text-sm leading-6 text-white/75">“{review[1]}”</p>
    <div className="mt-6 text-sm font-semibold text-white">{review[0]}</div>
  </article>;
}

function LeadForm({ compact = false }: { compact?: boolean }) {
  return <form className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`} onSubmit={(e) => e.preventDefault()}>
    <input required placeholder="Seu nome" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-lime-400" />
    <input required type="tel" placeholder="WhatsApp" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-lime-400" />
    <input required type="email" placeholder="Seu melhor e-mail" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-lime-400 sm:col-span-2" />
    {!compact && <select className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none sm:col-span-2"><option className="text-black">Objetivo principal</option><option className="text-black">Ganhar massa muscular</option><option className="text-black">Emagrecer</option><option className="text-black">Condicionamento físico</option><option className="text-black">Qualidade de vida</option></select>}
    <button className="rounded-xl bg-lime-400 px-5 py-3.5 text-sm font-black uppercase tracking-wide text-black transition hover:-translate-y-0.5 hover:bg-lime-300 sm:col-span-2">{compact ? "Quero conhecer a academia →" : "Quero minha aula experimental grátis →"}</button>
    <span className="text-center text-[11px] text-white/40 sm:col-span-2">Seus dados são usados apenas para entrar em contato sobre a academia.</span>
  </form>;
}

export function AcademiaComplete() {
  return <section id="academia" className="relative overflow-hidden bg-[#090b09] text-white">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_8%,rgba(163,230,53,.16),transparent_28%),radial-gradient(circle_at_10%_35%,rgba(163,230,53,.07),transparent_30%)]" />

    <header className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6">
      <a href="#academia" className="text-xl font-black tracking-tight">RAW<span className="text-lime-400">/</span>FIT</a>
      <nav className="hidden gap-7 text-sm text-white/65 md:flex">
        <a href="#modalidades" className="hover:text-white">Modalidades</a><a href="#planos" className="hover:text-white">Planos</a><a href="#depoimentos" className="hover:text-white">Avaliações</a><a href="#localizacao" className="hover:text-white">Unidades</a><a href="#faq" className="hover:text-white">FAQ</a>
      </nav>
      <a href="#experimental" className="rounded-full bg-lime-400 px-4 py-2 text-xs font-black uppercase text-black">Aula grátis</a>
    </header>

    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:pb-28 lg:pt-16">
      <div>
        <div className="mb-5 inline-flex rounded-full border border-lime-400/25 bg-lime-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.18em] text-lime-300">Academia 24h · performance sem desculpas</div>
        <h1 className="max-w-3xl text-5xl font-black uppercase leading-[.9] tracking-[-.045em] sm:text-7xl lg:text-[6.7rem]">Seu treino.<br/><span className="text-lime-400">Seu ritmo.</span><br/>Sua evolução.</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">Uma experiência completa para quem quer treinar de verdade: musculação, funcional, aulas coletivas, professores próximos e estrutura para evoluir todos os dias.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href="#experimental" className="rounded-full bg-lime-400 px-6 py-3.5 text-sm font-black text-black">Fazer aula experimental →</a><a href="#planos" className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white">Conhecer planos</a></div>
        <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-6"><div><b className="text-2xl text-lime-400">24h</b><span className="mt-1 block text-[10px] uppercase tracking-widest text-white/40">Aberta</span></div><div><b className="text-2xl text-lime-400">+12 mil</b><span className="mt-1 block text-[10px] uppercase tracking-widest text-white/40">Alunos</span></div><div><b className="text-2xl text-lime-400">4.9★</b><span className="mt-1 block text-[10px] uppercase tracking-widest text-white/40">Avaliação</span></div></div>
      </div>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40"><img src={academiaHero} alt="Treino em academia" className="h-[560px] w-full object-cover sm:h-[680px]"/><div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/65 p-5 backdrop-blur-md"><div className="text-[10px] font-bold uppercase tracking-widest text-lime-400">Experiência RAW/FIT</div><div className="mt-1 text-sm font-semibold">Treine com estrutura, orientação e liberdade.</div></div></div>
    </div>

    <div id="modalidades" className="relative mx-auto max-w-7xl px-6 pb-24"><div className="mb-10 max-w-2xl"><span className="text-[11px] font-bold uppercase tracking-[.2em] text-lime-400">Treine do seu jeito</span><h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">Tudo o que você precisa para evoluir.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{gallery.slice(1,5).map((g,i)=><article key={g.alt} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.04]"><div className="h-52 overflow-hidden"><img src={g.src} alt={g.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/></div><div className="p-5"><span className="text-xs font-bold text-lime-400">0{i+1}</span><h3 className="mt-2 text-lg font-bold">{["Musculação", "Funcional", "Treino de força", "Performance"][i]}</h3><p className="mt-2 text-sm leading-6 text-white/50">Estrutura e orientação para transformar cada treino em progresso.</p></div></article>)}</div></div>

    <div className="relative border-y border-white/10 bg-[#0d100d] py-24"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><span className="text-[11px] font-bold uppercase tracking-[.2em] text-lime-400">Resultados reais</span><h2 className="mt-3 text-4xl font-black uppercase sm:text-6xl">Quem treina,<br/>fala.</h2></div><p className="max-w-lg text-sm leading-6 text-white/50">Avaliações de alunos sobre ambiente, atendimento, estrutura e experiência de treino.</p></div></div><div id="depoimentos" className="mt-12 overflow-hidden"><div className="flex w-max gap-5 animate-[academy-marquee_32s_linear_infinite] hover:[animation-play-state:paused]">{[...reviews,...reviews,...reviews].map((r,i)=><ReviewCard key={i} review={r}/>)}</div></div></div>

    <div id="planos" className="relative mx-auto max-w-7xl px-6 py-24"><div className="mx-auto max-w-2xl text-center"><span className="text-[11px] font-bold uppercase tracking-[.2em] text-lime-400">Escolha seu ritmo</span><h2 className="mt-3 text-4xl font-black uppercase sm:text-6xl">Planos sem complicação.</h2><p className="mt-4 text-sm leading-6 text-white/50">Comece pelo plano que combina com sua rotina e evolua quando quiser.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{[
      {name:"Start",price:"89",items:["1 unidade", "Musculação livre", "Avaliação física", "App de treino"]},
      {name:"Full",price:"149",featured:true,items:["Todas as unidades", "Todas as modalidades", "Personal 2x/mês", "App de treino", "Convidado grátis"]},
      {name:"Pro",price:"299",items:["Tudo do Full", "Personal ilimitado", "Bioimpedância mensal", "Sauna e recovery"]},
    ].map(p=><article key={p.name} className={`relative flex flex-col rounded-[2rem] border p-8 ${p.featured?"border-lime-400 bg-lime-400 text-black":"border-white/10 bg-white/[.04]"}`}>{p.featured&&<span className="absolute -top-3 left-8 rounded-full bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-lime-400">Mais escolhido</span>}<h3 className="text-2xl font-black uppercase">{p.name}</h3><div className="mt-5"><span className="text-5xl font-black">R$ {p.price}</span><span className="text-sm opacity-50">/mês</span></div><ul className="mt-7 flex-1 space-y-3 text-sm">{p.items.map(x=><li key={x} className="flex gap-2"><span className="font-bold">✓</span>{x}</li>)}</ul><a href="#experimental" className={`mt-8 rounded-full py-3 text-center text-sm font-black ${p.featured?"bg-black text-white":"bg-lime-400 text-black"}`}>Quero este plano →</a></article>)}</div></div>

    <div id="experimental" className="relative bg-lime-400 text-black"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><span className="text-[11px] font-black uppercase tracking-[.2em] opacity-60">Primeiro treino por nossa conta</span><h2 className="mt-3 text-4xl font-black uppercase leading-none sm:text-6xl">Experimente antes de decidir.</h2><p className="mt-5 max-w-lg text-sm leading-6 opacity-70">Preencha seus dados e nossa equipe entra em contato para encontrar a melhor unidade e horário para sua aula experimental.</p></div><div className="rounded-[2rem] bg-black p-6 sm:p-8"><LeadForm/></div></div></div>

    <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><span className="text-[11px] font-bold uppercase tracking-[.2em] text-lime-400">Seu próximo treino começa aqui</span><h2 className="mt-3 text-4xl font-black uppercase sm:text-6xl">Fale com a equipe.</h2><p className="mt-5 max-w-xl text-sm leading-6 text-white/50">Quer conhecer a estrutura, tirar dúvidas sobre planos ou encontrar a unidade mais próxima? Deixe seus dados e fale com a gente.</p><div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[.04] p-6"><LeadForm compact/></div></div><div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-8"><div className="text-[10px] uppercase tracking-widest text-lime-400">Atendimento</div><h3 className="mt-2 text-2xl font-black uppercase">Todos os dias</h3><div className="mt-6 space-y-4 text-sm text-white/60"><div><b className="text-white">Segunda a sexta</b><br/>06:00 — 00:00</div><div><b className="text-white">Sábados, domingos e feriados</b><br/>08:00 — 18:00</div><div><b className="text-white">WhatsApp</b><br/>(11) 99999-9999</div></div></div></div>

    <div id="localizacao" className="relative border-t border-white/10 bg-[#0d100d] py-24"><div className="mx-auto max-w-7xl px-6"><div className="mb-10"><span className="text-[11px] font-bold uppercase tracking-[.2em] text-lime-400">Encontre sua unidade</span><h2 className="mt-3 text-4xl font-black uppercase sm:text-6xl">Treine perto de você.</h2></div><div className="grid overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-[.8fr_1.2fr]"><div className="p-8 sm:p-10"><div className="text-sm font-bold text-lime-400">UNIDADE PINHEIROS</div><h3 className="mt-2 text-2xl font-black uppercase">Rua dos Pinheiros, 999</h3><p className="mt-3 text-sm leading-6 text-white/50">Pinheiros · São Paulo — SP<br/>Estacionamento disponível no local.</p><a className="mt-7 inline-flex rounded-full bg-lime-400 px-5 py-3 text-sm font-black text-black" href="https://www.google.com/maps/search/?api=1&query=Rua+dos+Pinheiros+999+Sao+Paulo" target="_blank" rel="noreferrer">Abrir no Google Maps →</a></div><iframe title="Localização da academia" src="https://www.google.com/maps?q=Rua%20dos%20Pinheiros%20999%20Sao%20Paulo&output=embed" className="min-h-[360px] w-full border-0 grayscale-[.15]" loading="lazy" /></div></div></div>

    <div id="faq" className="relative mx-auto max-w-4xl px-6 py-24"><div className="text-center"><span className="text-[11px] font-bold uppercase tracking-[.2em] text-lime-400">Dúvidas</span><h2 className="mt-3 text-4xl font-black uppercase sm:text-5xl">Perguntas frequentes.</h2></div><div className="mt-10 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[.03]">{[
      ["Posso fazer uma aula experimental?","Sim. Preencha o formulário e nossa equipe entra em contato para combinar o melhor horário e unidade."],
      ["Preciso pagar taxa de matrícula?","Não. A proposta desta landing page é trabalhar com planos sem taxa de adesão."],
      ["A academia funciona 24 horas?","A comunicação desta unidade é de academia 24h. Confirme o horário específico da unidade no atendimento."],
      ["Posso trocar de plano depois?","Sim. Nossa equipe pode orientar a melhor opção conforme sua rotina e objetivo."],
      ["O plano inclui avaliação física?","Os benefícios variam por plano. Consulte a tabela acima ou fale com nossa equipe."],
      ["Vocês têm aulas além da musculação?","Sim. A estrutura apresentada inclui funcional, aulas coletivas e opções de performance."],
    ].map(([q,a])=><details key={q} className="group px-6 py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-bold sm:text-base"><span>{q}</span><span className="text-xl text-lime-400 transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">{a}</p></details>)}</div></div>

    <footer className="border-t border-white/10 px-6 py-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-white/35 sm:flex-row"><span>© RAW/FIT · Academia e Performance</span><span>Design de demonstração · Todos os direitos reservados</span></div></footer>
    <style>{`@keyframes academy-marquee{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}`}</style>
  </section>;
}
