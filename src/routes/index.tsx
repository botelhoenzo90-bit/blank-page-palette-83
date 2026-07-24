import { createFileRoute } from "@tanstack/react-router";
import dentalHero from "@/assets/dental-hero.jpg";
import solarHero from "@/assets/solar-hero.jpg";
import advogadoHero from "@/assets/advogado-hero.jpg";
import esteticaHero from "@/assets/estetica-hero.jpg";
import esteticaLaser from "@/assets/estetica-laser.jpg";
import esteticaSkincare from "@/assets/estetica-skincare.jpg";
import esteticaCryo from "@/assets/estetica-cryo.jpg";
import manicureHero from "@/assets/manicure-hero.jpg";
import academiaHero from "@/assets/academia-hero.jpg";
import arcondHero from "@/assets/arcond-hero.jpg";
import arcondFilter from "@/assets/arcond-filter.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Portfólio de Landing Pages · 7 nichos premium" },
      { name: "description", content: "Coletânea de landing pages de alta conversão para odontologia, energia solar, advocacia, estética, manicure, academia e limpeza de ar condicionado." },
    ],
  }),
});

function Index() {
  return (
    <main className="w-full overflow-x-hidden">
      <Dental />
      <Solar />
      <Advogado />
      <Estetica />
      <Manicure />
      <Academia />
      <ArCondicionado />
    </main>
  );
}

/* Small helpers */
function Nav({ brand, letter, links, cta }: { brand: string; letter: string; links: string[]; cta: string }) {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 pt-8">
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>{letter}</div>
        <span className="truncate text-base font-semibold tracking-tight">{brand}</span>
      </div>
      <nav className="hidden gap-7 text-sm md:flex" style={{ color: "var(--t-muted)" }}>
        {links.map((l) => <a key={l} href="#" className="hover:opacity-70">{l}</a>)}
      </nav>
      <a href="#" className="t-btn shrink-0" style={{ padding: "0.55rem 1.1rem", fontSize: "0.82rem" }}>{cta}</a>
    </header>
  );
}

/* ============================================================
   1. ODONTOLOGIA — clean medical modern
   ============================================================ */
function Dental() {
  return (
    <section className="theme theme-dental">
      <Nav brand="Sorriso Clínica" letter="S" links={["Tratamentos", "Equipe", "Depoimentos", "Contato"]} cta="Agendar" />

      {/* HERO */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium" style={{ background: "var(--t-surface)", color: "var(--t-accent)", border: "1px solid var(--t-border)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--t-accent)" }} />
            Nova unidade em Moema · Zona Sul SP
          </div>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            O sorriso que você merece começa com uma <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>avaliação gratuita</em>.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: "var(--t-muted)" }}>
            Referência em odontologia estética, implantes e alinhadores invisíveis. Mais de 8.000 sorrisos transformados em 15 anos com tecnologia digital de última geração.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Agendar avaliação →</a>
            <a href="#" className="t-btn-outline">Ver antes e depois</a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t pt-6" style={{ borderColor: "var(--t-border)" }}>
            <div><div className="text-2xl font-bold sm:text-3xl">8.000+</div><div className="mt-1 text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Pacientes</div></div>
            <div><div className="text-2xl font-bold sm:text-3xl">15 anos</div><div className="mt-1 text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>De história</div></div>
            <div><div className="flex items-center gap-1 text-2xl font-bold sm:text-3xl">4.9<span style={{ color: "var(--t-accent)" }}>★</span></div><div className="mt-1 text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Google</div></div>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={dentalHero} alt="Consulta odontológica" className="h-[520px] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[240px] rounded-2xl p-5 shadow-xl sm:block" style={{ background: "var(--t-surface)" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Convênios</div>
            <div className="mt-2 text-sm font-semibold">Amil · Bradesco · SulAmérica + 20</div>
          </div>
          <div className="absolute -top-4 -right-4 hidden rounded-full px-4 py-2 text-xs font-semibold shadow-lg sm:block" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>
            1ª consulta grátis
          </div>
        </div>
      </div>

      {/* SERVIÇOS */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">Tratamentos</div>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl">Cuidado completo,<br/>sob o mesmo teto.</h2>
          </div>
          <a href="#" className="hidden text-sm underline underline-offset-4 md:block" style={{ color: "var(--t-muted)" }}>Ver todos os tratamentos →</a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "01", tag: "Mais procurado", t: "Implantes Dentários", d: "Reposição de dentes com titânio guiado por computador. Cirurgia em 40 min.", p: "12x R$ 380" },
            { n: "02", t: "Clareamento a Laser", d: "Até 6 tons mais brancos em uma sessão de 60 minutos, sem sensibilidade.", p: "R$ 890" },
            { n: "03", t: "Alinhadores Invisíveis", d: "Correção estética com alinhadores transparentes. Resultados em 6 a 12 meses.", p: "12x R$ 690" },
            { n: "04", t: "Facetas de Porcelana", d: "Design de sorriso personalizado, minimamente invasivo com projeção digital.", p: "R$ 2.400/dente" },
            { n: "05", t: "Ortodontia Fixa", d: "Aparelhos convencionais, estéticos e safira. Acompanhamento mensal incluso.", p: "12x R$ 240" },
            { n: "06", t: "Odontopediatria", d: "Atendimento lúdico especializado. Sala infantil com brinquedos e TV.", p: "R$ 180/sessão" },
          ].map((s) => (
            <div key={s.n} className="flex flex-col rounded-2xl p-6" style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: "var(--t-accent)" }}>{s.n}</span>
                {s.tag && <span className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>{s.tag}</span>}
              </div>
              <h3 className="mt-4 text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--t-muted)" }}>{s.d}</p>
              <div className="mt-6 flex items-end justify-between border-t pt-4" style={{ borderColor: "var(--t-border)" }}>
                <div>
                  <div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>a partir de</div>
                  <div className="text-lg font-bold">{s.p}</div>
                </div>
                <a href="#" className="text-sm font-semibold" style={{ color: "var(--t-accent)" }}>Agendar →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. ENERGIA SOLAR — azul/branco/laranja
   ============================================================ */
function Solar() {
  return (
    <section className="theme theme-solar">
      <Nav brand="SolarBrasil" letter="☀" links={["Como funciona", "Projetos", "Simulador", "Contato"]} cta="Simular grátis" />

      {/* HERO */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold" style={{ background: "var(--t-surface)", color: "var(--t-second)" }}>
            <span>⚡</span> +2.400 residências economizando no Brasil
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Sua conta de luz nunca mais será a <span style={{ color: "var(--t-accent)" }}>vilã</span> do seu mês.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: "var(--t-muted)" }}>
            Economize até 95% na conta de energia com um sistema solar completo. Instalação em 30 dias, garantia de 25 anos e retorno em até 4 anos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Simular economia →</a>
            <a href="#" className="t-btn-outline" style={{ color: "var(--t-second)" }}>Falar no WhatsApp</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "var(--t-muted)" }}>
            {["Sem entrada", "Financiamento 84x", "Instalação em 30 dias", "Garantia 25 anos"].map((f) => (
              <span key={f} className="flex items-center gap-2"><span style={{ color: "var(--t-accent)" }}>✓</span>{f}</span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl p-8 shadow-2xl" style={{ background: "var(--t-fg)", color: "#fff" }}>
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>Simulador rápido</div>
          <h3 className="mt-2 text-2xl font-bold text-white">Quanto você pode economizar?</h3>
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-xs opacity-70">Sua conta de luz média</label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3">
                <span className="text-sm opacity-70">R$</span>
                <input defaultValue="450" className="w-full bg-transparent text-2xl font-bold outline-none" />
                <span className="text-xs opacity-70">/mês</span>
              </div>
            </div>
            <div>
              <label className="text-xs opacity-70">Tipo de imóvel</label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {["Casa", "Comércio", "Rural"].map((t, i) => (
                  <button key={t} className={`rounded-lg py-2.5 text-sm font-medium ${i===0?"":"bg-white/5"}`} style={i===0?{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }:{}}>{t}</button>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,122,26,0.12)", border: "1px solid rgba(255,122,26,0.3)" }}>
              <div className="text-[10px] uppercase tracking-widest opacity-80">Economia estimada</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-bold" style={{ color: "var(--t-accent)" }}>R$ 128.400</span>
                <span className="text-xs opacity-80">em 25 anos</span>
              </div>
              <div className="mt-1 text-xs opacity-80">Payback: 3 anos e 8 meses</div>
            </div>
            <button className="w-full rounded-full py-3 font-semibold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>Quero receber orçamento →</button>
          </div>
        </div>
      </div>

      {/* PASSOS + IMAGEM */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-[2rem]">
          <img src={solarHero} alt="Painéis solares em telhado" className="h-[380px] w-full object-cover" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Simulação gratuita", d: "Análise da sua conta e projeto sob medida em 24h, sem compromisso." },
            { n: "02", t: "Projeto e aprovação", d: "Engenheiros dimensionam o sistema e cuidam da homologação com a concessionária." },
            { n: "03", t: "Instalação em 3 dias", d: "Equipe própria certificada instala painéis e inversor com garantia total." },
            { n: "04", t: "Você começa a economizar", d: "Ativação e acompanhamento pelo app. Economia já no primeiro mês." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl p-6" style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
              <div className="text-3xl font-bold" style={{ color: "var(--t-accent)" }}>{s.n}</div>
              <div className="mt-3 text-lg font-bold">{s.t}</div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--t-muted)" }}>{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 rounded-3xl p-8 sm:grid-cols-4" style={{ background: "var(--t-fg)", color: "#fff" }}>
          {[
            { k: "95%", l: "de economia mensal" },
            { k: "25 anos", l: "de garantia" },
            { k: "R$ 128mil", l: "economia média em 25 anos" },
            { k: "+2.400", l: "clientes atendidos" },
          ].map((m) => (
            <div key={m.l}>
              <div className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--t-accent)" }}>{m.k}</div>
              <div className="mt-1 text-xs opacity-80">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. ADVOGADO — noir & gold editorial
   ============================================================ */
function Advogado() {
  return (
    <section className="theme theme-advogado">
      <Nav brand="Machado & Associados" letter="M" links={["Áreas", "Escritório", "Casos", "Contato"]} cta="Consulta" />

      {/* HERO com imagem de fundo */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div className="min-w-0">
            <div className="eyebrow" style={{ color: "var(--t-accent)" }}>Advocacia · Direito empresarial e tributário</div>
            <h1 className="mt-6 text-4xl leading-[1.02] sm:text-5xl lg:text-[4.5rem]">
              A defesa dos seus <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>interesses</em>, com a discrição que sua causa exige.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed" style={{ color: "var(--t-muted)" }}>
              Escritório fundado em 1998, com 27 anos de atuação nas cortes superiores. Direito empresarial, tributário, sucessório e contencioso cível para famílias e empresas de alto patrimônio.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#" className="t-btn">Agendar consulta reservada →</a>
              <a href="#" className="t-btn-outline">Áreas de atuação</a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t pt-8" style={{ borderColor: "var(--t-border)" }}>
              <div><div className="text-3xl" style={{ color: "var(--t-accent)" }}>27</div><div className="mt-1 text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Anos de história</div></div>
              <div><div className="text-3xl" style={{ color: "var(--t-accent)" }}>+1.200</div><div className="mt-1 text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Causas conduzidas</div></div>
              <div><div className="text-3xl" style={{ color: "var(--t-accent)" }}>93%</div><div className="mt-1 text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Êxito judicial</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img src={advogadoHero} alt="Dr. Machado — Advocacia" className="h-[600px] w-full object-cover" style={{ filter: "brightness(0.85) contrast(1.05)" }} />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl p-5 backdrop-blur" style={{ background: "rgba(13,13,13,0.75)", border: "1px solid var(--t-border)" }}>
              <div className="text-xs uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>Dr. Roberto Machado</div>
              <div className="mt-1 text-sm" style={{ color: "var(--t-fg)" }}>Sócio-fundador · OAB/SP 128.442 · Mestre em Direito Tributário pela USP</div>
            </div>
          </div>
        </div>
      </div>

      {/* ÁREAS + DEPOIMENTO */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 border-t pt-16 md:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "var(--t-border)" }}>
          {[
            { t: "Empresarial", d: "M&A, societário, contratos e compliance para empresas em crescimento.", tags: ["Societário", "M&A", "Contratos"] },
            { t: "Tributário", d: "Planejamento, contencioso administrativo e recuperação de créditos fiscais.", tags: ["Planejamento", "CARF", "Créditos"] },
            { t: "Sucessões e Família", d: "Holdings patrimoniais, testamentos e sucessão familiar de alta complexidade.", tags: ["Holdings", "Sucessão", "Inventário"] },
            { t: "Contencioso Cível", d: "Atuação em ações de alta complexidade nas cortes superiores.", tags: ["STJ", "STF", "Arbitragem"] },
          ].map((a) => (
            <div key={a.t}>
              <h3 className="text-2xl">{a.t}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--t-muted)" }}>{a.d}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {a.tags.map((tag) => (
                  <span key={tag} className="rounded-full px-3 py-1 text-xs" style={{ background: "var(--t-surface)", color: "var(--t-fg)", border: "1px solid var(--t-border)" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-20 max-w-3xl text-center">
          <div className="text-4xl" style={{ color: "var(--t-accent)" }}>“</div>
          <p className="mt-2 text-2xl leading-relaxed" style={{ fontFamily: "var(--t-display)" }}>
            Contratamos o Dr. Machado em uma disputa societária de altíssima complexidade. Estratégia impecável, execução cirúrgica. Resultado obtido em tempo recorde.
          </p>
          <div className="mt-6 text-xs uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Ricardo Almeida · CEO Grupo AL Investimentos</div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. ESTÉTICA — luxo + carrossel horizontal
   ============================================================ */
function Estetica() {
  const protocolos = [
    { img: esteticaLaser, tag: "Rejuvenescimento", t: "Laser Fracionado CO₂", d: "Renovação profunda da pele: cicatrizes, manchas e textura em uma única sessão.", p: "R$ 1.890" },
    { img: esteticaSkincare, tag: "Harmonização", t: "Harmonização Facial", d: "Botox, ácido hialurônico e bioestimuladores com abordagem natural e proporcional.", p: "R$ 890" },
    { img: esteticaCryo, tag: "Corpo", t: "Criolipólise Premium", d: "Redução de gordura localizada com aplicadores importados e resultado visível.", p: "R$ 690/área" },
    { img: esteticaHero, tag: "Skincare", t: "Limpeza Profunda Deluxe", d: "Ritual completo com peeling ultrassônico, máscara LED e drenagem facial.", p: "R$ 420" },
  ];
  return (
    <section className="theme theme-estetica">
      <Nav brand="Belle Estética" letter="B" links={["Protocolos", "Espaço", "Profissionais", "Contato"]} cta="Agendar" />

      {/* HERO */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <div className="eyebrow">Clínica de estética avançada · Jardins</div>
          <h1 className="mt-4 text-5xl leading-[1] sm:text-6xl lg:text-7xl">
            A beleza<br/>que <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>revela</em><br/>você.
          </h1>
          <div className="mt-8 h-px w-20" style={{ background: "var(--t-accent)" }} />
          <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: "var(--t-muted)" }}>
            Um santuário urbano onde tecnologia médica encontra o cuidado artesanal. Protocolos exclusivos assinados pela Dra. Beatriz Alencar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Agendar avaliação</a>
            <a href="#" className="t-btn-outline">Conhecer o espaço</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span style={{ color: "var(--t-accent)" }}>★★★★★</span>
              <span className="text-sm font-semibold">4.98/5</span>
              <span className="text-xs" style={{ color: "var(--t-muted)" }}>· 1.240 avaliações</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img src={esteticaHero} alt="Clínica de estética" className="h-[560px] w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 left-8 hidden rounded-2xl px-6 py-4 shadow-xl sm:block" style={{ background: "var(--t-surface)" }}>
            <div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Localização</div>
            <div className="mt-1 text-sm font-semibold">Rua Oscar Freire, 902 · Jardins</div>
          </div>
        </div>
      </div>

      {/* CARROSSEL DE PROTOCOLOS */}
      <div className="pb-24">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-6">
          <div>
            <div className="eyebrow">Nossos protocolos</div>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl">
              Cada protocolo, uma <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>experiência</em>.
            </h2>
          </div>
          <div className="hidden text-xs uppercase tracking-widest md:block" style={{ color: "var(--t-muted)" }}>← arraste para o lado →</div>
        </div>
        <div className="mt-10 snap-carousel px-6" style={{ scrollPaddingLeft: "1.5rem" }}>
          {protocolos.map((p) => (
            <article key={p.t} className="overflow-hidden rounded-3xl" style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.t} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>{p.tag}</div>
                <h3 className="mt-2 text-2xl">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--t-muted)" }}>{p.d}</p>
                <div className="mt-6 flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--t-border)" }}>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>a partir de</div>
                    <div className="text-lg font-bold">{p.p}</div>
                  </div>
                  <a href="#" className="text-sm font-semibold" style={{ color: "var(--t-accent)" }}>Agendar →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. CURSO DE MANICURE
   ============================================================ */
function Manicure() {
  return (
    <section className="theme theme-manicure">
      <Nav brand="Nail Pro Academy" letter="N" links={["Curso", "Módulos", "Depoimentos", "Inscrição"]} cta="Quero me inscrever" />

      {/* HERO */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>
            ⚡ Turma de fevereiro · Vagas limitadas
          </div>
          <h1 className="mt-6 text-5xl leading-[1] sm:text-6xl lg:text-7xl">
            Do zero ao <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>salão próprio</em> em 90 dias.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: "var(--t-muted)" }}>
            Formação profissionalizante em manicure, pedicure, alongamento em fibra, gel e nail art com metodologia que já formou <strong>+3.200 alunas</strong> em todo o Brasil.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Garantir minha vaga →</a>
            <a href="#" className="t-btn-outline">Baixar ementa</a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["#e88aab", "#c9877a", "#f2c8b0", "#9c7d7a"].map((c) => (
                <div key={c} className="h-9 w-9 rounded-full border-2 border-white" style={{ background: c }} />
              ))}
            </div>
            <div>
              <div className="text-sm" style={{ color: "var(--t-accent)" }}>★★★★★ 4.9/5</div>
              <div className="text-xs" style={{ color: "var(--t-muted)" }}>+3.200 alunas formadas</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={manicureHero} alt="Turma de manicure em aula" className="h-[560px] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden max-w-[240px] rounded-2xl p-5 shadow-xl sm:block" style={{ background: "var(--t-surface)" }}>
            <div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Renda média após curso</div>
            <div className="mt-1 text-2xl font-bold" style={{ color: "var(--t-accent)" }}>R$ 4.800/mês</div>
          </div>
        </div>
      </div>

      {/* GRADE + INSCRIÇÃO */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="eyebrow">Grade curricular</div>
            <h2 className="mt-2 text-3xl sm:text-4xl">6 módulos, 90 dias de formação prática.</h2>
            <div className="mt-8 space-y-3">
              {[
                { n: "01", t: "Fundamentos e biossegurança", d: "Anatomia da unha, esterilização, protocolos sanitários e ergonomia.", h: "12h" },
                { n: "02", t: "Manicure clássica e spa", d: "Cutilagem, esmaltação perfeita, tratamentos hidratantes.", h: "20h" },
                { n: "03", t: "Esmaltação em gel e blindagem", d: "Duração de 30 dias, remoção segura e diagnóstico de fragilidade.", h: "24h" },
                { n: "04", t: "Alongamento em fibra e gel", d: "Molde superior, fibra de vidro, gel construtor e acabamento.", h: "32h" },
                { n: "05", t: "Nail art e decoração autoral", d: "Francesinha moderna, encapsulados, decorações 3D e stickers.", h: "20h" },
                { n: "06", t: "Marketing e gestão de agenda", d: "Instagram, precificação, fidelização e abertura de espaço próprio.", h: "12h" },
              ].map((m) => (
                <div key={m.n} className="grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded-2xl p-5" style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
                  <div className="text-2xl font-bold" style={{ color: "var(--t-accent)" }}>{m.n}</div>
                  <div className="min-w-0">
                    <div className="text-base font-semibold">{m.t}</div>
                    <div className="mt-1 text-sm" style={{ color: "var(--t-muted)" }}>{m.d}</div>
                  </div>
                  <div className="shrink-0 text-xs" style={{ color: "var(--t-muted)" }}>{m.h}</div>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl p-8 shadow-xl" style={{ background: "var(--t-fg)", color: "#fff" }}>
            <div className="text-xs uppercase tracking-widest opacity-70">Turma de fevereiro</div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-sm line-through opacity-50">R$ 2.400</span>
              <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold">-40% hoje</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold" style={{ color: "var(--t-accent)" }}>12x R$ 119</span>
            </div>
            <div className="mt-1 text-sm opacity-80">ou R$ 1.440 à vista (-15%)</div>
            <ul className="mt-8 space-y-3 text-sm">
              {["Kit profissional Nail Pro (incluso)", "Certificado reconhecido MEC", "Acesso vitalício às aulas online", "Suporte 1:1 pós-formação", "Grupo VIP com vagas de emprego"].map((b) => (
                <li key={b} className="flex items-start gap-2"><span style={{ color: "var(--t-accent)" }}>✓</span>{b}</li>
              ))}
            </ul>
            <a href="#" className="mt-8 flex w-full items-center justify-center rounded-full py-4 font-semibold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>Garantir vaga com 40% OFF →</a>
            <div className="mt-4 text-center text-[11px] opacity-70">7 dias de garantia · cancela quando quiser</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. ACADEMIA — high energy
   ============================================================ */
function Academia() {
  return (
    <section className="theme theme-academia">
      <Nav brand="RAW/FIT" letter="R" links={["Modalidades", "Planos", "Unidades", "App"]} cta="Aula grátis" />

      {/* HERO com imagem lateral */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14 lg:py-24">
        <div className="min-w-0">
          <div className="eyebrow" style={{ color: "var(--t-accent)" }}>Academia 24h · 6 unidades em SP</div>
          <h1 className="mt-4 text-[3.5rem] leading-[0.95] sm:text-[5rem] lg:text-[7rem]" style={{ letterSpacing: "-0.03em" }}>
            SUA MELHOR<br/>
            <span style={{ color: "var(--t-accent)" }}>VERSÃO</span><br/>
            COMEÇA AQUI.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: "var(--t-muted)", fontFamily: "var(--t-body)" }}>
            Musculação, cross training, boxe, yoga e pilates em um só lugar. Sem taxa de adesão, sem fidelidade, com professores acompanhando você desde a primeira série.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Fazer aula experimental →</a>
            <a href="#" className="t-btn-outline">Ver unidades</a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div><div className="text-3xl font-bold" style={{ color: "var(--t-accent)", fontFamily: "var(--t-display)" }}>6</div><div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Unidades</div></div>
            <div><div className="text-3xl font-bold" style={{ color: "var(--t-accent)", fontFamily: "var(--t-display)" }}>24h</div><div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Aberto</div></div>
            <div><div className="text-3xl font-bold" style={{ color: "var(--t-accent)", fontFamily: "var(--t-display)" }}>+12mil</div><div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Alunos ativos</div></div>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img src={academiaHero} alt="Atleta em treino" className="h-[620px] w-full object-cover" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl p-5" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)", border: "1px solid var(--t-border)" }}>
            <div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>Aluno em destaque</div>
            <div className="mt-1 text-sm text-white">João Silva · -18kg em 6 meses</div>
          </div>
        </div>
      </div>

      {/* MODALIDADES + PLANOS */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { i: "🏋", t: "Musculação" },
            { i: "🥊", t: "Boxe / Muay Thai" },
            { i: "🔥", t: "Cross Training" },
            { i: "🧘", t: "Yoga / Pilates" },
            { i: "🚴", t: "Ciclismo Indoor" },
          ].map((m) => (
            <div key={m.t} className="flex items-center gap-3 rounded-2xl p-5" style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
              <div className="text-2xl">{m.i}</div>
              <div className="text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--t-display)", letterSpacing: "0.05em" }}>{m.t}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { t: "Start", p: "R$ 89", d: "/mês", f: ["1 unidade", "Musculação livre", "Avaliação física", "App de treino"], cta: "Assinar" },
            { t: "Full", p: "R$ 149", d: "/mês", f: ["Todas as unidades", "Todas as modalidades", "Personal 2x/mês", "Nutricionista incluso", "Convidado grátis"], cta: "Mais escolhido", h: true },
            { t: "Pro", p: "R$ 299", d: "/mês", f: ["Tudo do Full", "Personal ilimitado", "Bioimpedância mensal", "Sauna e recovery"], cta: "Elite" },
          ].map((pl) => (
            <div key={pl.t} className="relative flex flex-col rounded-3xl p-8" style={pl.h ? { background: "var(--t-accent)", color: "var(--t-accent-fg)" } : { background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
              {pl.h && <div className="absolute -top-3 left-8 rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">Mais escolhido</div>}
              <div className="text-2xl uppercase tracking-widest" style={{ fontFamily: "var(--t-display)" }}>{pl.t}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold">{pl.p}</span>
                <span className="text-sm opacity-70">{pl.d}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {pl.f.map((f) => <li key={f} className="flex items-start gap-2"><span>✓</span>{f}</li>)}
              </ul>
              <a href="#" className={`mt-8 flex w-full items-center justify-center rounded-full py-3 font-semibold ${pl.h?"bg-black text-white":""}`} style={pl.h?{}:{ background: "var(--t-fg)", color: "#fff" }}>{pl.cta} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. LIMPEZA DE AR CONDICIONADO
   ============================================================ */
function ArCondicionado() {
  return (
    <section className="theme theme-arcond">
      <Nav brand="AirPure Serviços" letter="A" links={["Serviços", "Preços", "Cobertura", "Contato"]} cta="Orçar agora" />

      {/* HERO */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:py-24">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>
            ✦ Atendimento em 24h · Toda São Paulo
          </div>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Ar puro em casa,<br/><span style={{ color: "var(--t-accent)" }}>saúde para sua família.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: "var(--t-muted)" }}>
            Higienização profissional de ar condicionado split, cassete e piso-teto. Removemos mofo, bactérias e alérgenos com produtos hospitalares certificados pela ANVISA.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Orçamento em 5 min →</a>
            <a href="#" className="t-btn-outline">Chamar no WhatsApp</a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "+8mil", l: "Serviços realizados" },
              { k: "4.9★", l: "Avaliação Google" },
              { k: "24h", l: "Atendimento" },
              { k: "90d", l: "Garantia" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold" style={{ color: "var(--t-accent)" }}>{s.k}</div>
                <div className="text-[10px] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={arcondHero} alt="Higienização de ar condicionado" className="h-[520px] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl px-6 py-4 shadow-xl sm:block" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>
            <div className="text-[10px] uppercase tracking-widest opacity-80">Higienização completa</div>
            <div className="mt-1 text-2xl font-bold">a partir de R$ 149</div>
          </div>
        </div>
      </div>

      {/* ANTES/DEPOIS + ORÇAMENTO */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <div className="eyebrow">Você sabia?</div>
            <h2 className="mt-2 text-3xl sm:text-4xl">O ar do seu split pode estar até <span style={{ color: "var(--t-accent)" }}>30x mais poluído</span> que o ar externo.</h2>
            <div className="mt-8 overflow-hidden rounded-3xl">
              <img src={arcondFilter} alt="Filtro antes e depois" className="h-[340px] w-full object-cover" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { t: "Rinite e alergia", d: "Bactérias acumuladas nos filtros causam crises respiratórias frequentes." },
                { t: "Odor desagradável", d: "Mofo e umidade geram cheiro característico que retorna após poucos dias." },
                { t: "Conta de luz maior", d: "Aparelho sujo consome até 25% mais energia para atingir a mesma temperatura." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl p-5" style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
                  <div className="text-sm font-bold">{c.t}</div>
                  <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--t-muted)" }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl p-8 shadow-xl lg:sticky lg:top-8" style={{ background: "var(--t-fg)", color: "#fff" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>Orçamento em 5 minutos</div>
            <div className="mt-2 text-2xl font-bold text-white">Quantos aparelhos?</div>
            <div className="mt-6 space-y-3">
              <div className="grid grid-cols-4 gap-2">
                {["1", "2", "3", "4+"].map((n, i) => (
                  <button key={n} className="rounded-xl border py-3 font-semibold" style={i===1?{ background: "var(--t-accent)", color: "var(--t-accent-fg)", borderColor: "var(--t-accent)" }:{ borderColor: "rgba(255,255,255,0.2)" }}>{n}</button>
                ))}
              </div>
              <div>
                <label className="text-xs opacity-70">Tipo de aparelho</label>
                <select className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm">
                  <option>Split até 12.000 BTUs</option>
                  <option>Split 18.000 - 24.000 BTUs</option>
                  <option>Cassete / Piso-teto</option>
                </select>
              </div>
              <div>
                <label className="text-xs opacity-70">Bairro</label>
                <input placeholder="Ex.: Pinheiros" className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none" />
              </div>
              <div className="rounded-2xl p-5" style={{ background: "rgba(8,145,178,0.15)", border: "1px solid rgba(8,145,178,0.4)" }}>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Valor estimado</div>
                <div className="mt-1 text-3xl font-bold" style={{ color: "var(--t-second)" }}>R$ 298</div>
                <div className="text-xs opacity-80">2 aparelhos · higienização completa</div>
              </div>
              <button className="w-full rounded-full py-3 font-semibold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>Agendar higienização →</button>
              <div className="text-center text-[11px] opacity-70">Sem taxa de deslocamento · Pagamento na conclusão</div>
            </div>
          </aside>
        </div>
      </div>

      {/* footer */}
      <div className="border-t px-6 py-10" style={{ borderColor: "var(--t-border)" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs" style={{ color: "var(--t-muted)" }}>
          <span>© Portfólio de Landing Pages · 7 nichos premium</span>
          <span>Design & desenvolvimento · Lovable</span>
        </div>
      </div>
    </section>
  );
}