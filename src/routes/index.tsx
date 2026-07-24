import { createFileRoute } from "@tanstack/react-router";
import dentalHero from "@/assets/dental-hero.jpg";
import solarHero from "@/assets/solar-hero.jpg";
import advogadoHero from "@/assets/advogado-hero.jpg";
import esteticaHero from "@/assets/estetica-hero.jpg";
import esteticaLaser from "@/assets/estetica-laser.jpg";
import esteticaMassagem from "@/assets/estetica-massagem.jpg";
import esteticaSkincare from "@/assets/estetica-skincare.jpg";
import esteticaCryo from "@/assets/estetica-cryo.jpg";
import manicureHero from "@/assets/manicure-hero.jpg";
import academiaHero from "@/assets/academia-hero.jpg";
import arcondHero from "@/assets/arcond-hero.jpg";
import arcondFilter from "@/assets/arcond-filter.jpg";

export const Route = createFileRoute("/")({
  component: Index,
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

/* ============================================================
   1. CLÍNICA ODONTOLÓGICA
   ============================================================ */
function Dental() {
  return (
    <section className="theme theme-dental">
      {/* nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full text-lg font-bold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>S</div>
          <span className="text-lg font-semibold tracking-tight">Sorriso Clínica</span>
        </div>
        <nav className="hidden gap-8 text-sm md:flex" style={{ color: "var(--t-muted)" }}>
          <a href="#">Tratamentos</a><a href="#">Equipe</a><a href="#">Depoimentos</a><a href="#">Contato</a>
        </nav>
        <a href="#" className="t-btn hidden md:inline-flex" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>Agendar</a>
      </header>

      {/* Hero: split with floating cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium" style={{ background: "var(--t-surface)", color: "var(--t-accent)", border: "1px solid var(--t-border)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--t-accent)" }} />
            Nova unidade em Moema · Zona Sul SP
          </div>
          <h1 className="mt-6 text-5xl leading-[1] sm:text-6xl lg:text-7xl">
            O sorriso que você merece começa com uma <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>avaliação gratuita</em>.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: "var(--t-muted)" }}>
            Somos referência em odontologia estética, implantes e alinhadores invisíveis. Mais de 8.000 sorrisos transformados em 15 anos com tecnologia digital de última geração.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Agendar avaliação gratuita →</a>
            <a href="#" className="t-btn-outline">Ver antes e depois</a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: "var(--t-border)" }}>
            <div>
              <div className="text-3xl font-bold">8.000+</div>
              <div className="mt-1 text-xs uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Pacientes</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15 anos</div>
              <div className="mt-1 text-xs uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>De história</div>
            </div>
            <div>
              <div className="text-3xl font-bold flex items-center gap-1">4.9<span style={{ color: "var(--t-accent)" }}>★</span></div>
              <div className="mt-1 text-xs uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Google reviews</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem]" style={{ background: "var(--t-accent)", opacity: 0.12 }} />
          <img src={dentalHero} alt="Dentista atendendo paciente" width={1600} height={1400}
            className="relative w-full rounded-[2rem] object-cover shadow-2xl" style={{ aspectRatio: "4/5" }} />
          {/* Floating card top-left */}
          <div className="absolute -left-4 top-8 rounded-2xl p-4 shadow-xl lg:-left-10" style={{ background: "var(--t-surface)" }}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2" style={{ background: `hsl(${160 + i * 15} 30% ${70 - i * 8}%)`, borderColor: "var(--t-surface)" }} />
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold">+1.240 atendimentos</div>
                <div className="text-xs" style={{ color: "var(--t-muted)" }}>somente este mês</div>
              </div>
            </div>
          </div>
          {/* Floating card bottom-right */}
          <div className="absolute -right-4 bottom-10 max-w-[220px] rounded-2xl p-5 shadow-xl lg:-right-8" style={{ background: "var(--t-surface)" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>Convênios aceitos</div>
            <div className="mt-2 text-sm font-semibold leading-tight">Amil · Bradesco · SulAmérica + 20 planos</div>
          </div>
        </div>
      </div>

      {/* Section 2: Treatments grid + testimonials */}
      <div className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="eyebrow">Especialidades</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">
              Tratamentos completos, <br />sob o mesmo teto.
            </h2>
          </div>
          <a href="#" className="t-btn-outline w-fit">Ver todos os tratamentos →</a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Implantes Dentários", d: "Reposição de dentes com implantes de titânio guiados por computador. Cirurgia em 40 minutos.", p: "12x R$ 380", tag: "Mais procurado" },
            { t: "Clareamento a Laser", d: "Até 6 tons mais brancos em uma única sessão de 60 minutos, sem sensibilidade.", p: "R$ 890" },
            { t: "Alinhadores Invisíveis", d: "Correção estética com alinhadores transparentes. Resultados em 6 a 12 meses.", p: "12x R$ 690" },
            { t: "Facetas de Porcelana", d: "Design de sorriso personalizado, minimamente invasivo, com projeção digital antes.", p: "R$ 2.400/dente" },
            { t: "Ortodontia Fixa", d: "Aparelhos convencionais, estéticos e safira. Acompanhamento mensal incluso.", p: "12x R$ 240" },
            { t: "Odontopediatria", d: "Atendimento lúdico especializado. Sala infantil dedicada com brinquedos e TV.", p: "R$ 180/sessão" },
          ].map((s, i) => (
            <div key={s.t} className="group relative rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
              {s.tag && (
                <div className="absolute -top-3 right-6 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>
                  {s.tag}
                </div>
              )}
              <div className="text-sm font-medium" style={{ color: "var(--t-accent)" }}>0{i + 1}</div>
              <h3 className="mt-3 text-2xl">{s.t}</h3>
              <p className="mt-3 min-h-[4rem] text-[0.95rem] leading-relaxed" style={{ color: "var(--t-muted)" }}>{s.d}</p>
              <div className="mt-6 flex items-center justify-between border-t pt-5" style={{ borderColor: "var(--t-border)" }}>
                <div>
                  <div className="text-xs" style={{ color: "var(--t-muted)" }}>a partir de</div>
                  <div className="text-lg font-bold">{s.p}</div>
                </div>
                <span className="text-sm font-medium transition-transform group-hover:translate-x-1" style={{ color: "var(--t-accent)" }}>Agendar →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial strip */}
        <div className="mt-16 rounded-3xl p-10 lg:p-14" style={{ background: "var(--t-fg)", color: "var(--t-bg)" }}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div>
              <div className="text-6xl leading-none" style={{ color: "var(--t-accent)", fontFamily: "var(--t-display)" }}>“</div>
              <div className="mt-4 text-sm uppercase tracking-widest opacity-70">Mariana R. · Paciente há 3 anos</div>
            </div>
            <p className="text-2xl leading-relaxed lg:text-3xl" style={{ fontFamily: "var(--t-display)" }}>
              Coloquei facetas e transformou minha autoestima. O Dr. Gustavo é um perfeccionista e a equipe é encantadora. Recomendo de olhos fechados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. ENERGIA SOLAR — azul / branco / laranja
   ============================================================ */
function Solar() {
  return (
    <section className="theme theme-solar">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-md font-bold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>☀</div>
          <span className="text-lg font-semibold tracking-tight">SolarBrasil</span>
        </div>
        <nav className="hidden gap-8 text-sm md:flex" style={{ color: "var(--t-muted)" }}>
          <a href="#">Como funciona</a><a href="#">Projetos</a><a href="#">Simulador</a><a href="#">Contato</a>
        </nav>
        <a href="#" className="t-btn hidden md:inline-flex" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>Simular grátis</a>
      </header>

      {/* Hero with calculator card */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium"
            style={{ borderColor: "var(--t-border)", color: "var(--t-second)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--t-accent)" }} />
            +2.400 residências economizando no Brasil
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
            Sua conta de luz nunca mais será a{" "}
            <span style={{ background: "linear-gradient(135deg, var(--t-second) 0%, var(--t-accent) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              mesma.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: "var(--t-muted)" }}>
            Economize até 95% na conta de energia com um sistema solar completo. Instalação em 30 dias, garantia de 25 anos e retorno em até 4 anos.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Simular economia agora →</a>
            <a href="#" className="t-btn-outline">Falar no WhatsApp</a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm" style={{ color: "var(--t-muted)" }}>
            {["Sem entrada", "Financiamento em 84x", "Instalação em 30 dias", "Garantia 25 anos"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span style={{ color: "var(--t-accent)" }}>✓</span>{t}
              </div>
            ))}
          </div>
        </div>

        {/* Simulator card */}
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full" style={{ background: "var(--t-accent)", opacity: 0.15 }} />
          <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full" style={{ background: "var(--t-second)", opacity: 0.15 }} />
          <div className="relative rounded-3xl p-8 shadow-2xl lg:p-10" style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>Simulador rápido</div>
            <h3 className="mt-2 text-2xl font-bold">Quanto você pode economizar?</h3>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium" style={{ color: "var(--t-muted)" }}>Sua conta de luz média</label>
                <div className="mt-2 flex items-center rounded-xl px-4 py-3" style={{ background: "var(--t-bg)", border: "1px solid var(--t-border)" }}>
                  <span className="text-sm font-semibold" style={{ color: "var(--t-muted)" }}>R$</span>
                  <input defaultValue="450" className="ml-2 w-full bg-transparent text-xl font-bold outline-none" />
                  <span className="text-xs" style={{ color: "var(--t-muted)" }}>/mês</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium" style={{ color: "var(--t-muted)" }}>Tipo de imóvel</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {["Casa", "Comércio", "Rural"].map((t, i) => (
                    <button key={t} className="rounded-xl py-3 text-sm font-medium"
                      style={{ background: i === 0 ? "var(--t-second)" : "var(--t-bg)", color: i === 0 ? "#fff" : "var(--t-fg)", border: "1px solid var(--t-border)" }}>{t}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl p-5" style={{ background: "linear-gradient(135deg, var(--t-second), #1e40af)", color: "#fff" }}>
              <div className="text-xs uppercase tracking-widest opacity-80">Sua economia estimada</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-4xl font-bold">R$ 128.400</span>
                <span className="text-sm opacity-80">em 25 anos</span>
              </div>
              <div className="mt-1 text-sm opacity-90">Payback estimado: 3 anos e 8 meses</div>
            </div>
            <a href="#" className="mt-6 flex w-full items-center justify-center rounded-xl px-6 py-4 font-bold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>
              Quero receber orçamento →
            </a>
          </div>
        </div>
      </div>

      {/* Section 2: How it works + hero image + banner CTA */}
      <div className="relative">
        <img src={solarHero} alt="Painéis solares" width={1600} height={1200} loading="lazy"
          className="h-[45vh] w-full object-cover" />
        <div className="absolute inset-0 flex items-end p-6 lg:p-12"
          style={{ background: "linear-gradient(to top, rgba(10,37,64,0.85) 0%, transparent 60%)" }}>
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-2xl text-white">
              <div className="text-sm uppercase tracking-[0.3em] opacity-80">Do orçamento à instalação</div>
              <h2 className="mt-3 text-4xl font-bold lg:text-6xl">Do sol ao seu bolso em 4 passos.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Simulação gratuita", d: "Análise da sua conta e projeto sob medida em 24h, sem compromisso." },
            { n: "02", t: "Projeto e aprovação", d: "Nossos engenheiros dimensionam o sistema e cuidam da homologação com a concessionária." },
            { n: "03", t: "Instalação em 3 dias", d: "Equipe própria certificada instala painéis e inversor com garantia total do serviço." },
            { n: "04", t: "Você começa a economizar", d: "Ativação do sistema e acompanhamento da produção pelo app. Economia já no primeiro mês." },
          ].map((s, i) => (
            <div key={s.n} className="relative rounded-2xl p-8" style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
              <div className="text-6xl font-black leading-none"
                style={{ color: "var(--t-accent)", opacity: 0.35 }}>{s.n}</div>
              <h3 className="mt-4 text-xl font-bold" style={{ color: "var(--t-second)" }}>{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--t-muted)" }}>{s.d}</p>
              {i < 3 && <div className="absolute -right-3 top-1/2 hidden text-2xl lg:block" style={{ color: "var(--t-accent)" }}>→</div>}
            </div>
          ))}
        </div>

        {/* Big data banner */}
        <div className="mt-16 grid grid-cols-1 gap-8 rounded-3xl p-10 lg:grid-cols-4 lg:p-14"
          style={{ background: "linear-gradient(135deg, var(--t-second) 0%, #082f6a 100%)", color: "#fff" }}>
          {[
            { n: "95%", t: "de economia mensal" },
            { n: "25 anos", t: "de garantia dos painéis" },
            { n: "R$ 128mil", t: "economia média em 25 anos" },
            { n: "+2.400", t: "clientes atendidos" },
          ].map((b) => (
            <div key={b.n} className="border-l pl-6" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
              <div className="text-5xl font-bold" style={{ color: "var(--t-accent)" }}>{b.n}</div>
              <div className="mt-2 text-sm opacity-90">{b.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. ADVOGADO — noir, gravitas, lawyer portrait background
   ============================================================ */
function Advogado() {
  return (
    <section className="theme theme-advogado">
      {/* Full-bleed hero with portrait */}
      <div className="relative min-h-[100vh] overflow-hidden">
        <img src={advogadoHero} alt="Advogado" width={1200} height={1400}
          loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.55) 55%, rgba(13,13,13,0.25) 100%)" }} />

        {/* Top bar */}
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-10">
          <div className="flex items-center gap-2">
            <div className="text-xs uppercase tracking-[0.4em]" style={{ color: "var(--t-accent)" }}>M &amp; A</div>
            <span className="text-sm tracking-widest">Machado &amp; Advogados Associados</span>
          </div>
          <div className="hidden text-xs uppercase tracking-[0.3em] md:block" style={{ color: "var(--t-muted)" }}>
            OAB/SP · Desde 1998
          </div>
        </div>

        {/* Main content */}
        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            <div className="h-px w-24" style={{ background: "var(--t-accent)" }} />
            <div className="mt-6 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--t-accent)" }}>
              Advocacia · Direito Empresarial e Tributário
            </div>
            <h1 className="mt-8 text-5xl leading-[1] lg:text-7xl" style={{ fontWeight: 400 }}>
              A defesa dos seus <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>interesses</em>, com a discrição que você merece.
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed" style={{ color: "var(--t-muted)" }}>
              Escritório boutique dedicado a empresários, famílias e patrimônios de alta complexidade. Estratégia jurídica com resultados mensuráveis há mais de 26 anos.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#" className="t-btn">Agendar consulta reservada</a>
              <a href="#" className="t-btn-outline">Áreas de atuação</a>
            </div>

            {/* Trust marks */}
            <div className="mt-16 grid max-w-md grid-cols-3 gap-8 border-t pt-8" style={{ borderColor: "var(--t-border)" }}>
              <div>
                <div className="text-3xl" style={{ fontFamily: "var(--t-display)", color: "var(--t-accent)" }}>26+</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Anos de atuação</div>
              </div>
              <div>
                <div className="text-3xl" style={{ fontFamily: "var(--t-display)", color: "var(--t-accent)" }}>R$ 2bi</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Em causas defendidas</div>
              </div>
              <div>
                <div className="text-3xl" style={{ fontFamily: "var(--t-display)", color: "var(--t-accent)" }}>98%</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Casos favoráveis</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 hidden text-xs uppercase tracking-[0.4em] md:block" style={{ color: "var(--t-muted)" }}>
          Role para descobrir ↓
        </div>
      </div>

      {/* Section 2: Practice areas + testimonial quote */}
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid grid-cols-1 gap-4 border-b pb-10 md:grid-cols-[auto_1fr] md:items-end md:gap-16" style={{ borderColor: "var(--t-border)" }}>
          <div className="text-xs uppercase tracking-[0.4em]" style={{ color: "var(--t-accent)" }}>Áreas / 04</div>
          <h2 className="text-5xl lg:text-7xl" style={{ fontWeight: 400 }}>
            Expertise construída em <em style={{ fontStyle: "italic" }}>duas décadas</em> de conquistas.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 divide-y md:grid-cols-2 md:divide-y-0 md:divide-x" style={{ borderColor: "var(--t-border)" }}>
          {[
            { n: "01", t: "Direito Empresarial", d: "Estruturação societária, fusões e aquisições, contratos complexos e governança corporativa para empresas de médio e grande porte.", tags: ["M&A", "Contratos", "Societário"] },
            { n: "02", t: "Direito Tributário", d: "Planejamento fiscal estratégico, defesas administrativas, recuperação de créditos e contencioso em todas as instâncias.", tags: ["Planejamento", "CARF", "Créditos"] },
            { n: "03", t: "Sucessões e Família", d: "Holdings patrimoniais, testamentos, planejamento sucessório e proteção de patrimônio familiar de alta complexidade.", tags: ["Holdings", "Sucessão", "Inventário"] },
            { n: "04", t: "Contencioso Cível", d: "Atuação estratégica em ações de alta complexidade, com histórico comprovado em cortes superiores.", tags: ["STJ", "STF", "Arbitragem"] },
          ].map((s) => (
            <div key={s.n} className="p-10 first:pt-0 md:p-12">
              <div className="flex items-baseline gap-4">
                <div className="text-xs tracking-[0.3em]" style={{ color: "var(--t-accent)" }}>{s.n}</div>
                <h3 className="text-3xl lg:text-4xl" style={{ fontWeight: 400 }}>{s.t}</h3>
              </div>
              <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed" style={{ color: "var(--t-muted)" }}>{s.d}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: "var(--t-border)", color: "var(--t-muted)" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial quote */}
        <figure className="mt-20 border-t pt-20 text-center" style={{ borderColor: "var(--t-border)" }}>
          <div className="mx-auto text-8xl leading-none" style={{ color: "var(--t-accent)", fontFamily: "var(--t-display)" }}>“</div>
          <blockquote className="mx-auto mt-6 max-w-3xl text-3xl leading-[1.3] lg:text-4xl" style={{ fontFamily: "var(--t-display)", fontWeight: 400 }}>
            Contratamos o Dr. Machado em uma disputa societária de altíssima complexidade. Estratégia impecável, execução cirúrgica. Resultado obtido em tempo recorde.
          </blockquote>
          <figcaption className="mt-10 text-sm uppercase tracking-[0.3em]" style={{ color: "var(--t-muted)" }}>
            Ricardo Almeida · CEO Grupo AL Investimentos
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ============================================================
   4. CLÍNICA DE ESTÉTICA — hero + horizontal carousel
   ============================================================ */
function Estetica() {
  const services = [
    { img: esteticaLaser, t: "Laser CO2 Fracionado", d: "Rejuvenescimento profundo, textura e manchas", p: "R$ 2.400", d2: "sessão única" },
    { img: esteticaHero, t: "Harmonização Facial", d: "Botox, ácido hialurônico e bioestimuladores", p: "a partir R$ 890", d2: "resultado imediato" },
    { img: esteticaSkincare, t: "Limpeza Premium", d: "Hidrolimpeza, peeling e máscara de ouro 24k", p: "R$ 380", d2: "90 minutos" },
    { img: esteticaMassagem, t: "Massagem Relaxante", d: "Pedras quentes, aromaterapia e cromoterapia", p: "R$ 260", d2: "90 minutos" },
    { img: esteticaCryo, t: "Criolipólise", d: "Redução de gordura localizada não-invasiva", p: "R$ 1.200", d2: "por área" },
    { img: esteticaLaser, t: "Depilação a Laser", d: "Diodo de última geração para todos os fototipos", p: "a partir R$ 190", d2: "por região" },
  ];
  return (
    <section className="theme theme-estetica">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-2">
          <div className="text-2xl" style={{ fontFamily: "var(--t-display)", color: "var(--t-accent)", fontStyle: "italic" }}>Belle</div>
          <span className="text-sm tracking-[0.3em]" style={{ color: "var(--t-muted)" }}>ESTÉTICA</span>
        </div>
        <nav className="hidden gap-8 text-sm md:flex" style={{ color: "var(--t-muted)" }}>
          <a href="#">Protocolos</a><a href="#">Espaço</a><a href="#">Profissionais</a><a href="#">Contato</a>
        </nav>
        <a href="#" className="t-btn hidden md:inline-flex" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>Agendar</a>
      </header>

      {/* Hero: elegant split */}
      <div className="grid grid-cols-1 lg:min-h-[85vh] lg:grid-cols-[1.05fr_1fr]">
        <div className="flex items-center px-6 py-20 lg:px-16">
          <div>
            <span className="eyebrow" style={{ color: "var(--t-accent)" }}>Clínica de Estética Avançada</span>
            <h1 className="mt-8 text-6xl leading-[0.95] lg:text-8xl" style={{ fontWeight: 300 }}>
              A beleza <br />
              que <em style={{ color: "var(--t-accent)", fontStyle: "italic" }}>revela</em> <br />
              você.
            </h1>
            <div className="mt-8 h-px w-24" style={{ background: "var(--t-accent)" }} />
            <p className="mt-8 max-w-md text-lg leading-relaxed" style={{ color: "var(--t-muted)" }}>
              Um santuário urbano onde tecnologia médica encontra o cuidado artesanal. Protocolos exclusivos assinados pela Dra. Beatriz Alencar, em um ambiente digno das melhores clínicas europeias.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#" className="t-btn">Agendar avaliação</a>
              <a href="#" className="t-btn-outline">Conhecer o espaço</a>
            </div>
            <div className="mt-14 flex items-center gap-4" style={{ color: "var(--t-muted)" }}>
              <div className="flex text-lg" style={{ color: "var(--t-accent)" }}>★★★★★</div>
              <span className="text-sm"><strong style={{ color: "var(--t-fg)" }}>4.98 / 5</strong> em 1.240 avaliações</span>
            </div>
          </div>
        </div>
        <div className="relative min-h-[60vh] lg:min-h-full">
          <img src={esteticaHero} alt="Clínica de estética luxuosa" width={1600} height={1400} loading="lazy"
            className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute bottom-6 right-6 max-w-[220px] rounded-2xl p-5 shadow-xl backdrop-blur-md"
            style={{ background: "rgba(255,255,255,0.85)" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>Localização</div>
            <div className="mt-1 text-sm font-semibold leading-tight" style={{ color: "var(--t-fg)" }}>Rua Oscar Freire, 902 · Jardins · SP</div>
          </div>
        </div>
      </div>

      {/* Section 2: Horizontal carousel of services */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="eyebrow" style={{ color: "var(--t-accent)" }}>Nossos protocolos</span>
              <h2 className="mt-4 text-5xl lg:text-6xl" style={{ fontWeight: 400 }}>
                Cada protocolo, uma <em style={{ fontStyle: "italic" }}>experiência</em>.
              </h2>
            </div>
            <div className="hidden items-center gap-3 text-sm md:flex" style={{ color: "var(--t-muted)" }}>
              <span className="uppercase tracking-widest">Arraste para o lado →</span>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-14 pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <div className="snap-carousel">
            {services.map((s, i) => (
              <article key={i} className="group overflow-hidden rounded-3xl shadow-lg transition-transform hover:-translate-y-1"
                style={{ background: "var(--t-surface)" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <img src={s.img} alt={s.t} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 40%)" }} />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>
                    Protocolo {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl" style={{ fontWeight: 400 }}>{s.t}</h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--t-muted)" }}>{s.d}</p>
                  <div className="mt-6 flex items-end justify-between border-t pt-5" style={{ borderColor: "var(--t-border)" }}>
                    <div>
                      <div className="text-lg font-semibold" style={{ color: "var(--t-accent)", fontFamily: "var(--t-display)", fontStyle: "italic" }}>{s.p}</div>
                      <div className="text-xs" style={{ color: "var(--t-muted)" }}>{s.d2}</div>
                    </div>
                    <a href="#" className="rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors group-hover:bg-[color:var(--t-accent)] group-hover:text-white group-hover:border-transparent"
                      style={{ borderColor: "var(--t-border)" }}>Agendar</a>
                  </div>
                </div>
              </article>
            ))}
            <div className="w-6 shrink-0" />
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mx-auto mt-16 max-w-7xl px-6">
          <div className="flex flex-col items-center gap-6 rounded-3xl p-10 text-center lg:flex-row lg:justify-between lg:text-left"
            style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>
            <div>
              <h3 className="text-3xl lg:text-4xl" style={{ fontWeight: 400 }}>Primeira avaliação por conta da casa.</h3>
              <p className="mt-1 opacity-90">Análise facial completa + protocolo personalizado.</p>
            </div>
            <a href="#" className="rounded-full px-8 py-4 font-semibold" style={{ background: "var(--t-fg)", color: "var(--t-bg)" }}>Reservar horário →</a>
          </div>
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
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full font-bold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>N</div>
          <span className="text-lg font-semibold tracking-tight">Nail Pro Academy</span>
        </div>
        <nav className="hidden gap-8 text-sm md:flex" style={{ color: "var(--t-muted)" }}>
          <a href="#">Curso</a><a href="#">Módulos</a><a href="#">Depoimentos</a><a href="#">Inscrição</a>
        </nav>
        <a href="#" className="t-btn hidden md:inline-flex" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>Quero me inscrever</a>
      </header>

      {/* Hero */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
            style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>
            ⚡ Turma de fevereiro · Vagas limitadas
          </div>
          <h1 className="mt-6 text-5xl leading-[1] lg:text-7xl">
            Do zero ao <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>salão próprio</em> em 90 dias.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: "var(--t-muted)" }}>
            Formação profissionalizante em manicure, pedicure, alongamento em fibra, gel e nail art com a metodologia que já formou <strong style={{ color: "var(--t-fg)" }}>+3.200 alunas</strong> em todo o Brasil.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Garantir minha vaga →</a>
            <a href="#" className="t-btn-outline">Baixar ementa completa</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm" style={{ color: "var(--t-muted)" }}>
            <div className="flex -space-x-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2" style={{ background: `hsl(${340 + i * 6} 55% ${72 - i * 4}%)`, borderColor: "var(--t-bg)" }} />
              ))}
            </div>
            <div>
              <div className="flex text-base" style={{ color: "var(--t-accent)" }}>★★★★★</div>
              <div className="text-xs">Avaliação 4.9/5 · +3.200 alunas formadas</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full" style={{ background: "var(--t-accent)", opacity: 0.2 }} />
          <div className="absolute -left-6 bottom-16 h-24 w-24 rounded-full" style={{ background: "#fde68a" }} />
          <img src={manicureHero} alt="Curso de manicure" width={1600} height={1400} loading="lazy"
            className="relative w-full rounded-[2rem] object-cover shadow-2xl" style={{ aspectRatio: "4/5" }} />
          {/* Floating income card */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl px-6 py-4 shadow-xl" style={{ background: "var(--t-surface)" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Renda média</div>
            <div className="text-2xl font-bold" style={{ color: "var(--t-accent)" }}>R$ 4.800/mês</div>
            <div className="text-xs" style={{ color: "var(--t-muted)" }}>de nossas alunas em 2025</div>
          </div>
          {/* Floating certificate */}
          <div className="absolute -right-4 top-16 rounded-2xl px-4 py-3 shadow-xl" style={{ background: "var(--t-fg)", color: "var(--t-bg)" }}>
            <div className="text-xs font-bold">🏆 Certificado</div>
            <div className="text-[0.65rem] opacity-80">reconhecido MEC</div>
          </div>
        </div>
      </div>

      {/* Section 2: Curriculum + investment */}
      <div className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          {/* Modules list */}
          <div>
            <span className="eyebrow" style={{ color: "var(--t-accent)" }}>Grade curricular · 12 módulos</span>
            <h2 className="mt-4 text-4xl lg:text-5xl">
              Tudo o que você precisa <em style={{ fontStyle: "italic" }}>dominar</em> a profissão.
            </h2>

            <div className="mt-10 space-y-3">
              {[
                { m: "01", t: "Anatomia da unha e biossegurança", h: "6h" },
                { m: "02", t: "Manicure clássica e russa", h: "8h" },
                { m: "03", t: "Spa dos pés e pedicure premium", h: "6h" },
                { m: "04", t: "Esmaltação em gel e efeito espelho", h: "10h" },
                { m: "05", t: "Alongamento em fibra de vidro", h: "12h" },
                { m: "06", t: "Alongamento em gel e molde", h: "12h" },
                { m: "07", t: "Nail art: francesinha, encapsulada, 3D", h: "10h" },
                { m: "08", t: "Blindagem e fortalecimento", h: "4h" },
                { m: "09", t: "Precificação e gestão de clientes", h: "6h" },
                { m: "10", t: "Marketing no Instagram para manicures", h: "6h" },
                { m: "11", t: "Como montar seu espaço/estúdio", h: "4h" },
                { m: "12", t: "Aula prática presencial (opcional)", h: "16h" },
              ].map((m) => (
                <div key={m.m} className="grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded-2xl px-6 py-4"
                  style={{ background: "var(--t-surface)" }}>
                  <div className="text-sm font-bold" style={{ color: "var(--t-accent)" }}>M{m.m}</div>
                  <div className="text-[0.95rem]">{m.t}</div>
                  <div className="text-xs" style={{ color: "var(--t-muted)" }}>{m.h}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Investment / pricing card */}
          <aside className="sticky top-8 h-fit rounded-3xl p-8 shadow-2xl"
            style={{ background: "var(--t-fg)", color: "var(--t-bg)" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>Investimento único</div>
            <div className="mt-4 text-sm line-through opacity-60">De R$ 1.997</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-lg">12x</span>
              <span className="text-6xl font-bold" style={{ color: "var(--t-accent)" }}>R$ 97</span>
            </div>
            <div className="mt-1 text-sm opacity-80">ou R$ 897 à vista (10% off)</div>

            <div className="mt-8 space-y-3 text-sm">
              <div className="font-semibold uppercase tracking-widest opacity-80">Inclui:</div>
              {[
                "12 módulos + 96h de aulas gravadas",
                "Kit físico enviado para sua casa",
                "Certificado reconhecido MEC",
                "Grupo VIP de alunas + tira-dúvidas",
                "3 masterclasses ao vivo com a Nayara",
                "Bônus: modelos de contrato e ficha de cliente",
                "Suporte por 12 meses",
              ].map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <span className="mt-0.5" style={{ color: "var(--t-accent)" }}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <a href="#" className="mt-8 flex w-full items-center justify-center rounded-full px-6 py-4 font-bold"
              style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>Garantir minha vaga →</a>
            <div className="mt-4 text-center text-xs opacity-70">🔒 Garantia de 7 dias · 100% de dinheiro de volta</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. ACADEMIA
   ============================================================ */
function Academia() {
  return (
    <section className="theme theme-academia">
      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
        <div className="text-2xl uppercase tracking-tight" style={{ fontFamily: "var(--t-display)" }}>
          Iron<span style={{ color: "var(--t-accent)" }}>Fit</span>
        </div>
        <nav className="hidden gap-8 text-sm uppercase tracking-widest md:flex" style={{ color: "var(--t-muted)" }}>
          <a href="#">Modalidades</a><a href="#">Planos</a><a href="#">Estrutura</a><a href="#">Contato</a>
        </nav>
        <a href="#" className="t-btn hidden md:inline-flex" style={{ padding: "0.6rem 1.25rem", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>Treino grátis</a>
      </header>

      {/* Hero: massive type over image */}
      <div className="relative overflow-hidden">
        <img src={academiaHero} alt="Academia" width={1600} height={1400} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, var(--t-bg) 0%, rgba(19,19,19,0.4) 60%, transparent 100%)" }} />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.4em]" style={{ color: "var(--t-accent)" }}>
              <span className="inline-block h-px w-8" style={{ background: "var(--t-accent)" }} />
              Aberta 24h · Todos os dias
            </div>
            <h1 className="mt-6 text-7xl leading-[0.85] lg:text-[11rem]" style={{ fontFamily: "var(--t-display)", textTransform: "uppercase" }}>
              Sem <br />
              <span style={{ color: "var(--t-accent)" }}>desculpas.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed" style={{ color: "var(--t-muted)" }}>
              1.800m² de estrutura completa: musculação, funcional, crossfit, boxe, spinning, yoga e piscina semi-olímpica. Sem taxa de matrícula em fevereiro.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#" className="t-btn">Agendar treino grátis</a>
              <a href="#" className="t-btn-outline">Ver planos</a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative mx-auto max-w-7xl border-t px-6 py-8" style={{ borderColor: "var(--t-border)", background: "rgba(19,19,19,0.75)" }}>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { n: "24h", t: "Aberta todos os dias" },
              { n: "1.800m²", t: "De estrutura" },
              { n: "+80", t: "Aparelhos de última geração" },
              { n: "+40", t: "Aulas coletivas na semana" },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-4xl" style={{ color: "var(--t-accent)", fontFamily: "var(--t-display)" }}>{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Modalidades + planos */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* Modalidades */}
          <div>
            <div className="text-xs uppercase tracking-[0.4em]" style={{ color: "var(--t-accent)" }}>Modalidades</div>
            <h2 className="mt-4 text-5xl lg:text-6xl" style={{ fontFamily: "var(--t-display)", textTransform: "uppercase" }}>
              Treine do <br />seu <span style={{ color: "var(--t-accent)" }}>jeito</span>.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { i: "🏋️", t: "Musculação" },
                { i: "🔥", t: "Crossfit" },
                { i: "🥊", t: "Boxe" },
                { i: "🚴", t: "Spinning" },
                { i: "🧘", t: "Yoga" },
                { i: "🏊", t: "Natação" },
                { i: "💪", t: "Funcional" },
                { i: "🎯", t: "Personal" },
              ].map((m) => (
                <div key={m.t} className="flex items-center gap-3 rounded-lg p-4"
                  style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
                  <div className="text-2xl">{m.i}</div>
                  <div className="text-sm font-semibold uppercase tracking-widest">{m.t}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Planos */}
          <div>
            <div className="text-xs uppercase tracking-[0.4em]" style={{ color: "var(--t-accent)" }}>Planos</div>
            <h2 className="mt-4 text-5xl" style={{ fontFamily: "var(--t-display)", textTransform: "uppercase" }}>Escolha seu.</h2>

            <div className="mt-10 space-y-4">
              {[
                { n: "Start", p: "89", d: "Musculação e cardio livre", f: ["Acesso 24h", "App de treinos", "Avaliação física"] },
                { n: "Full", p: "149", d: "Todas as modalidades", f: ["Tudo do Start", "Aulas coletivas ilimitadas", "Nutricionista incluso", "Personal 1x/mês"], hot: true },
                { n: "Elite", p: "289", d: "Experiência premium completa", f: ["Tudo do Full", "Personal ilimitado", "Sauna e spa", "Convidados livres"] },
              ].map((plan) => (
                <div key={plan.n} className="relative rounded-2xl p-8"
                  style={{
                    background: plan.hot ? "var(--t-accent)" : "var(--t-surface)",
                    color: plan.hot ? "var(--t-accent-fg)" : "var(--t-fg)",
                    border: plan.hot ? "none" : "1px solid var(--t-border)",
                  }}>
                  {plan.hot && (
                    <div className="absolute -top-3 right-6 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest"
                      style={{ background: "var(--t-fg)", color: "var(--t-bg)" }}>Mais escolhido</div>
                  )}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="text-2xl uppercase" style={{ fontFamily: "var(--t-display)" }}>{plan.n}</div>
                      <div className="text-sm opacity-80">{plan.d}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-80">R$/mês</div>
                      <div className="text-4xl font-bold leading-none">{plan.p}</div>
                    </div>
                  </div>
                  <ul className="mt-6 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                    {plan.f.map((f) => (
                      <li key={f} className="flex items-center gap-2"><span>→</span>{f}</li>
                    ))}
                  </ul>
                  <a href="#" className="mt-6 flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-widest"
                    style={{
                      background: plan.hot ? "var(--t-fg)" : "var(--t-accent)",
                      color: plan.hot ? "var(--t-bg)" : "var(--t-accent-fg)",
                    }}>Quero este plano →</a>
                </div>
              ))}
            </div>
          </div>
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
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg font-bold" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>❄</div>
          <span className="text-lg font-semibold tracking-tight">Ar Puro Serviços</span>
        </div>
        <nav className="hidden gap-8 text-sm md:flex" style={{ color: "var(--t-muted)" }}>
          <a href="#">Serviços</a><a href="#">Planos</a><a href="#">Empresas</a><a href="#">Contato</a>
        </nav>
        <a href="#" className="t-btn hidden md:inline-flex" style={{ padding: "0.6rem 1.25rem", fontSize: "0.85rem" }}>Solicitar visita</a>
      </header>

      {/* Hero: split with technician + problem stats */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
            style={{ borderColor: "var(--t-accent)", color: "var(--t-accent)" }}>
            🚨 Ar sujo = risco à saúde
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-[1] sm:text-6xl lg:text-7xl">
            Ar condicionado <span style={{ color: "var(--t-accent)" }}>limpo</span> em <br />60 minutos.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: "var(--t-muted)" }}>
            Higienização completa com produtos bactericidas, remoção de mofo, fungos e ácaros. Seu aparelho gelando mais e sua família respirando ar puro.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Agendar limpeza →</a>
            <a href="#" className="t-btn-outline">📱 (11) 9 9999-9999</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm" style={{ color: "var(--t-muted)" }}>
            {["Técnicos certificados", "Garantia 90 dias", "Todos os modelos"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full text-xs" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>✓</span>{t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 h-40 w-40 rounded-full" style={{ background: "var(--t-second)", opacity: 0.25 }} />
          <img src={arcondHero} alt="Técnico limpando ar condicionado" width={1600} height={1200} loading="lazy"
            className="relative w-full rounded-3xl object-cover shadow-2xl" style={{ aspectRatio: "5/4" }} />
          {/* Warning card */}
          <div className="absolute -bottom-6 -left-4 max-w-[260px] rounded-2xl p-5 shadow-xl lg:-left-10"
            style={{ background: "var(--t-fg)", color: "var(--t-bg)" }}>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--t-second)" }}>Sabia que?</div>
            <div className="mt-2 text-sm leading-snug">Ar-condicionado sujo pode conter <strong>+400 tipos</strong> de fungos e bactérias.</div>
          </div>
        </div>
      </div>

      {/* Section 2: Serviços + before/after + form */}
      <div className="mx-auto max-w-7xl px-6 pb-28">
        {/* Services grid */}
        <div className="text-center">
          <span className="eyebrow" style={{ color: "var(--t-accent)" }}>Nossos serviços</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">Cuidado completo para o seu ar-condicionado.</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { i: "🧼", t: "Limpeza Higiênica", d: "Lavagem completa da unidade interna e externa com produtos bactericidas.", p: "R$ 149" },
            { i: "🔧", t: "Manutenção Preventiva", d: "Checagem de gás, componentes elétricos, dreno e vedação.", p: "R$ 189" },
            { i: "❄", t: "Recarga de Gás", d: "Recarga de R-410A ou R-32 com detecção de vazamentos.", p: "R$ 290" },
            { i: "🏢", t: "Contrato Empresarial", d: "Manutenção mensal ou trimestral para escritórios e comércios.", p: "sob consulta" },
            { i: "🛠", t: "Instalação Completa", d: "Instalação de splits novos com garantia estendida de 1 ano.", p: "a partir R$ 350" },
            { i: "🚨", t: "Reparo Emergencial", d: "Atendimento em até 4h para aparelhos que pararam de funcionar.", p: "R$ 180 + peças" },
          ].map((s, i) => (
            <div key={s.t} className="rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
              <div className="text-3xl">{s.i}</div>
              <div className="mt-4 text-xs uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>Serviço 0{i + 1}</div>
              <h3 className="mt-1 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--t-muted)" }}>{s.d}</p>
              <div className="mt-4 flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--t-border)" }}>
                <div>
                  <div className="text-[0.65rem] uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>a partir de</div>
                  <div className="font-bold" style={{ color: "var(--t-accent)" }}>{s.p}</div>
                </div>
                <a href="#" className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>Agendar →</a>
              </div>
            </div>
          ))}
        </div>

        {/* Before / after + quick contact */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl">
            <img src={arcondFilter} alt="Comparação antes e depois" width={1200} height={1200} loading="lazy"
              className="h-full w-full object-cover" style={{ minHeight: "380px" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,32,50,0.9), transparent 50%)" }} />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-80">Antes</div>
                  <div className="text-2xl font-bold">Sujo & contaminado</div>
                </div>
                <div className="text-3xl opacity-60">→</div>
                <div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: "var(--t-second)" }}>Depois</div>
                  <div className="text-2xl font-bold">Novo em folha</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick contact card */}
          <div className="rounded-3xl p-8 shadow-xl" style={{ background: "var(--t-fg)", color: "var(--t-bg)" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--t-second)" }}>Orçamento em 3 minutos</div>
            <h3 className="mt-2 text-3xl font-bold">Solicite sua visita técnica.</h3>
            <div className="mt-6 space-y-3">
              <input placeholder="Seu nome" className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/50" />
              <input placeholder="WhatsApp" className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/50" />
              <select className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm outline-none">
                <option>Quantos aparelhos?</option><option>1 aparelho</option><option>2 aparelhos</option><option>3+ aparelhos</option>
              </select>
              <button className="mt-2 flex w-full items-center justify-center rounded-xl px-6 py-4 font-bold"
                style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>
                Solicitar orçamento →
              </button>
            </div>
            <div className="mt-6 flex items-center justify-between border-t pt-4 text-xs" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <div className="opacity-70">Resposta em até 15 minutos</div>
              <div className="flex items-center gap-1" style={{ color: "var(--t-second)" }}>★★★★★ <span className="opacity-80">4.9</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}