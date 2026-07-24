import { createFileRoute } from "@tanstack/react-router";
import dentalImg from "@/assets/theme-dental.jpg";
import esteticaImg from "@/assets/theme-estetica.jpg";
import solarImg from "@/assets/theme-solar.jpg";
import advogadoImg from "@/assets/theme-advogado.jpg";
import carrosImg from "@/assets/theme-carros.jpg";
import manicureImg from "@/assets/theme-manicure.jpg";
import academiaImg from "@/assets/theme-academia.jpg";
import restauranteImg from "@/assets/theme-restaurante.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="w-full overflow-x-hidden">
      <Dental />
      <Estetica />
      <Solar />
      <Advogado />
      <Carros />
      <Manicure />
      <Academia />
      <Restaurante />
    </main>
  );
}

/* ============================================================
   1. ODONTOLOGIA — clean, medical, mint accent
   ============================================================ */
function Dental() {
  return (
    <section className="theme theme-dental">
      {/* Hero */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div>
          <span className="eyebrow">Clínica Odontológica</span>
          <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Sorrisos que <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>transformam</em> a sua confiança.
          </h1>
          <p className="mt-6 max-w-md text-lg" style={{ color: "var(--t-muted)" }}>
            Odontologia estética e funcional com tecnologia de ponta e atendimento humanizado. Agende sua avaliação em 2 minutos.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Agendar avaliação</a>
            <a href="#" className="t-btn-outline">Ver tratamentos</a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm" style={{ color: "var(--t-muted)" }}>
            <div><div className="text-2xl font-semibold" style={{ color: "var(--t-fg)" }}>+8.000</div>pacientes</div>
            <div><div className="text-2xl font-semibold" style={{ color: "var(--t-fg)" }}>15 anos</div>de história</div>
            <div><div className="text-2xl font-semibold" style={{ color: "var(--t-fg)" }}>4.9★</div>avaliação</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem]" style={{ background: "var(--t-accent)", opacity: 0.15 }} />
          <img src={dentalImg} alt="Consultório odontológico moderno" width={1600} height={1200}
            className="relative w-full rounded-[2rem] object-cover shadow-2xl" style={{ aspectRatio: "4/5" }} />
        </div>
      </div>

      {/* Services */}
      <div className="mx-auto max-w-7xl px-6 pb-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Nossos serviços</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">Cuidado completo para o seu sorriso</h2>
          </div>
          <a href="#" className="t-btn-outline">Ver todos</a>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Implantes Dentários", d: "Implantes de titânio com tecnologia guiada por computador." },
            { t: "Clareamento", d: "Até 6 tons mais brancos em uma única sessão." },
            { t: "Alinhadores Invisíveis", d: "Correção discreta com resultados em 6 a 12 meses." },
            { t: "Facetas de Porcelana", d: "Desenho de sorriso personalizado, minimamente invasivo." },
            { t: "Ortodontia", d: "Aparelhos convencionais e estéticos para todas as idades." },
            { t: "Odontopediatria", d: "Atendimento lúdico e especializado para crianças." },
          ].map((s, i) => (
            <div key={s.t} className="group rounded-2xl p-8 transition-all hover:-translate-y-1"
              style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
              <div className="text-sm font-medium" style={{ color: "var(--t-accent)" }}>0{i + 1}</div>
              <h3 className="mt-4 text-2xl">{s.t}</h3>
              <p className="mt-3 text-[0.95rem]" style={{ color: "var(--t-muted)" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. CLÍNICA DE ESTÉTICA — luxury spa
   ============================================================ */
function Estetica() {
  return (
    <section className="theme theme-estetica">
      {/* Hero: split-screen */}
      <div className="grid grid-cols-1 lg:min-h-screen lg:grid-cols-2">
        <div className="flex items-center px-6 py-24 lg:px-16 lg:py-0">
          <div>
            <span className="eyebrow">Clínica de Estética Avançada</span>
            <h1 className="mt-8 text-6xl leading-[0.95] lg:text-8xl" style={{ fontWeight: 300 }}>
              A beleza que <br />
              <em style={{ color: "var(--t-accent)", fontStyle: "italic" }}>revela</em> você.
            </h1>
            <p className="mt-8 max-w-md text-lg" style={{ color: "var(--t-muted)" }}>
              Protocolos exclusivos de rejuvenescimento, harmonização e bem-estar em um ambiente digno das melhores clínicas europeias.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#" className="t-btn">Agendar consulta</a>
              <a href="#" className="t-btn-outline">Nossos protocolos</a>
            </div>
          </div>
        </div>
        <div className="relative min-h-[70vh] lg:min-h-full">
          <img src={esteticaImg} alt="Clínica de estética luxuosa" width={1600} height={1200}
            loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>

      {/* Services — editorial list */}
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="text-center">
          <span className="eyebrow">Menu de tratamentos</span>
          <h2 className="mt-6 text-5xl lg:text-6xl" style={{ fontWeight: 400 }}>
            Uma experiência <em style={{ fontStyle: "italic" }}>sensorial</em>
          </h2>
        </div>
        <div className="mt-16 divide-y" style={{ borderColor: "var(--t-border)" }}>
          {[
            { t: "Harmonização Facial", d: "Ácido hialurônico, botox e bioestimuladores", p: "a partir R$ 890" },
            { t: "Limpeza de Pele Premium", d: "Hidrolimpeza, peeling e máscara de ouro", p: "R$ 380" },
            { t: "Drenagem Linfática", d: "Modeladora + relaxante, 90 minutos", p: "R$ 260" },
            { t: "Criolipólise", d: "Redução de gordura localizada não-invasiva", p: "R$ 1.200/área" },
            { t: "Laser CO2 Fracionado", d: "Rejuvenescimento e textura da pele", p: "R$ 2.400" },
            { t: "Ritual Day Spa", d: "Meio dia de cuidados exclusivos", p: "R$ 1.680" },
          ].map((s) => (
            <div key={s.t} className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[1fr_auto] md:items-center" style={{ borderTop: "1px solid var(--t-border)" }}>
              <div>
                <h3 className="text-3xl" style={{ fontWeight: 400 }}>{s.t}</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--t-muted)" }}>{s.d}</p>
              </div>
              <div className="text-lg" style={{ color: "var(--t-accent)", fontFamily: "var(--t-display)", fontStyle: "italic" }}>{s.p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. ENERGIA SOLAR — deep blue, technical
   ============================================================ */
function Solar() {
  return (
    <section className="theme theme-solar">
      {/* Hero: image-bg */}
      <div className="relative overflow-hidden">
        <img src={solarImg} alt="Painéis solares" width={1600} height={1200} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--t-bg) 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-40 lg:pt-48">
          <span className="eyebrow" style={{ color: "var(--t-accent)" }}>Energia Solar Fotovoltaica</span>
          <h1 className="mt-8 max-w-4xl text-6xl leading-[1] lg:text-8xl" style={{ fontWeight: 700 }}>
            Reduza até 95% da sua conta de luz.
          </h1>
          <p className="mt-8 max-w-xl text-lg" style={{ color: "var(--t-muted)" }}>
            Sistemas fotovoltaicos completos com garantia de 25 anos, instalação em até 30 dias e retorno do investimento em 4 anos.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Simular economia grátis</a>
            <a href="#" className="t-btn-outline">Falar com engenheiro</a>
          </div>
        </div>
      </div>

      {/* Benefits — data-driven */}
      <div className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "95%", t: "de economia", d: "na conta de luz mensal desde o primeiro mês" },
            { n: "25 anos", t: "de garantia", d: "nos painéis e 10 anos no inversor" },
            { n: "4 anos", t: "de retorno", d: "payback médio do investimento" },
            { n: "0", t: "de emissão", d: "energia 100% limpa e renovável" },
          ].map((b) => (
            <div key={b.n} className="rounded-lg p-8" style={{ background: "var(--t-surface)", border: "1px solid var(--t-border)" }}>
              <div className="text-5xl lg:text-6xl" style={{ color: "var(--t-accent)", fontFamily: "var(--t-display)", fontWeight: 700 }}>{b.n}</div>
              <div className="mt-4 text-lg font-semibold">{b.t}</div>
              <p className="mt-2 text-sm" style={{ color: "var(--t-muted)" }}>{b.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-2xl p-10 lg:p-14 lg:flex lg:items-center lg:justify-between lg:gap-8" style={{ background: "var(--t-accent)", color: "var(--t-accent-fg)" }}>
          <div>
            <h3 className="text-3xl lg:text-4xl" style={{ fontWeight: 700 }}>Simulação gratuita em 30 segundos</h3>
            <p className="mt-2 opacity-80">Descubra quanto você pode economizar com apenas o valor da sua conta.</p>
          </div>
          <a href="#" className="mt-6 inline-flex rounded-full px-8 py-4 font-semibold lg:mt-0" style={{ background: "var(--t-bg)", color: "var(--t-fg)" }}>Simular agora →</a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. ADVOCACIA — noir & gold, editorial gravitas
   ============================================================ */
function Advogado() {
  return (
    <section className="theme theme-advogado">
      {/* Hero: centered editorial */}
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-24 text-center">
        <div className="mx-auto h-px w-24" style={{ background: "var(--t-accent)" }} />
        <span className="eyebrow mt-8 inline-block" style={{ color: "var(--t-accent)" }}>Advocacia · Desde 1998</span>
        <h1 className="mx-auto mt-8 max-w-4xl text-6xl leading-[1] lg:text-8xl" style={{ fontWeight: 400 }}>
          A defesa dos seus direitos, com a discrição que você merece.
        </h1>
        <p className="mx-auto mt-10 max-w-2xl text-lg" style={{ color: "var(--t-muted)" }}>
          Escritório boutique especializado em direito empresarial, tributário e sucessões para famílias e empresas de alto patrimônio.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a href="#" className="t-btn">Consulta reservada</a>
          <a href="#" className="t-btn-outline">Áreas de atuação</a>
        </div>
      </div>
      <div className="relative">
        <img src={advogadoImg} alt="Escritório de advocacia" width={1600} height={1200} loading="lazy"
          className="mx-auto h-[70vh] w-full max-w-6xl object-cover" />
      </div>

      {/* Practice areas */}
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="eyebrow" style={{ color: "var(--t-accent)" }}>Áreas de atuação</span>
            <h2 className="mt-6 text-5xl" style={{ fontWeight: 400 }}>Expertise construída em mais de duas décadas.</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {[
              { t: "Direito Empresarial", d: "Estruturação societária, M&A, contratos e governança corporativa." },
              { t: "Direito Tributário", d: "Planejamento fiscal, defesas administrativas e recuperação de créditos." },
              { t: "Sucessões e Família", d: "Holdings patrimoniais, testamentos e planejamento sucessório." },
              { t: "Contencioso Cível", d: "Atuação em ações de alta complexidade em todas as instâncias." },
            ].map((s, i) => (
              <div key={s.t}>
                <div className="text-xs tracking-widest" style={{ color: "var(--t-accent)" }}>0{i + 1} / 04</div>
                <h3 className="mt-3 text-2xl" style={{ fontWeight: 400 }}>{s.t}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "var(--t-muted)" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. ALUGUEL DE CARROS — brutalist black + neon red
   ============================================================ */
function Carros() {
  return (
    <section className="theme theme-carros">
      {/* Hero: massive type */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-12">
          <div className="flex items-center justify-between text-xs" style={{ color: "var(--t-muted)", letterSpacing: "0.2em" }}>
            <span>DRIVE / 001</span>
            <span>SP · RJ · BH · POA</span>
          </div>
          <h1 className="mt-12 text-[18vw] leading-[0.85] lg:text-[14rem]" style={{ fontFamily: "var(--t-display)", textTransform: "uppercase" }}>
            RENT.<br /><span style={{ color: "var(--t-accent)" }}>DRIVE.</span><br />OWN THE ROAD.
          </h1>
        </div>
        <div className="relative">
          <img src={carrosImg} alt="Carro esportivo" width={1600} height={1200} loading="lazy"
            className="h-[60vh] w-full object-cover lg:h-[80vh]" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] lg:items-end">
              <p className="max-w-lg text-lg" style={{ color: "var(--t-fg)" }}>
                Frota premium para quem não aceita o comum. Esportivos, SUVs e sedãs de luxo com entrega em qualquer lugar do Brasil.
              </p>
              <a href="#" className="t-btn justify-center">Reservar agora →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet grid */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-6" style={{ borderColor: "var(--t-border)" }}>
          <h2 className="text-5xl lg:text-6xl" style={{ fontFamily: "var(--t-display)", textTransform: "uppercase" }}>Frota / 2026</h2>
          <div className="flex gap-3 text-xs" style={{ color: "var(--t-muted)", letterSpacing: "0.2em" }}>
            <span>ESPORTIVO</span><span>·</span><span>LUXO</span><span>·</span><span>SUV</span>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3" style={{ background: "var(--t-border)" }}>
          {[
            { m: "Porsche 911", c: "Esportivo", p: "R$ 2.890/dia" },
            { m: "Range Rover", c: "SUV Luxo", p: "R$ 1.490/dia" },
            { m: "BMW M4 Comp.", c: "Esportivo", p: "R$ 1.890/dia" },
            { m: "Mercedes S-Class", c: "Sedã Luxo", p: "R$ 1.690/dia" },
            { m: "Audi RS6", c: "Perua Esportiva", p: "R$ 2.190/dia" },
            { m: "Lamborghini Urus", c: "Super SUV", p: "R$ 4.900/dia" },
          ].map((car, i) => (
            <div key={car.m} className="group relative p-8" style={{ background: "var(--t-bg)" }}>
              <div className="flex items-start justify-between">
                <div className="text-xs" style={{ color: "var(--t-muted)", letterSpacing: "0.2em" }}>0{i + 1}</div>
                <div className="text-xs" style={{ color: "var(--t-accent)", letterSpacing: "0.2em" }}>DISPONÍVEL</div>
              </div>
              <h3 className="mt-16 text-3xl uppercase" style={{ fontFamily: "var(--t-display)" }}>{car.m}</h3>
              <div className="mt-2 text-sm" style={{ color: "var(--t-muted)" }}>{car.c}</div>
              <div className="mt-6 flex items-end justify-between">
                <div className="text-2xl font-semibold">{car.p}</div>
                <span className="text-xs uppercase tracking-widest transition-colors group-hover:text-[color:var(--t-accent)]">Reservar →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. CURSO DE MANICURE — blush, warm, feminine
   ============================================================ */
function Manicure() {
  return (
    <section className="theme theme-manicure">
      {/* Hero */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <span className="eyebrow" style={{ color: "var(--t-accent)" }}>Curso Profissionalizante</span>
          <h1 className="mt-6 text-5xl leading-[1] lg:text-7xl">
            Do zero ao <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>salão próprio</em> em 90 dias.
          </h1>
          <p className="mt-8 max-w-lg text-lg" style={{ color: "var(--t-muted)" }}>
            Aprenda manicure, pedicure, alongamento em fibra, gel e nail art com quem forma as profissionais mais bem pagas do mercado.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#" className="t-btn">Quero começar</a>
            <a href="#" className="t-btn-outline">Baixar ementa</a>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm" style={{ color: "var(--t-muted)" }}>
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-9 w-9 rounded-full border-2" style={{ background: `hsl(${340 + i * 8} 60% ${75 - i * 5}%)`, borderColor: "var(--t-bg)" }} />
              ))}
            </div>
            <span><strong style={{ color: "var(--t-fg)" }}>+3.200 alunas</strong> formadas em 2025</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full" style={{ background: "var(--t-accent)", opacity: 0.2 }} />
          <img src={manicureImg} alt="Manicure profissional" width={1600} height={1200} loading="lazy"
            className="relative rounded-[2rem] object-cover shadow-2xl" style={{ aspectRatio: "4/5" }} />
          <div className="absolute -bottom-6 -left-6 rounded-2xl px-6 py-4 shadow-xl" style={{ background: "var(--t-surface)" }}>
            <div className="text-xs uppercase tracking-widest" style={{ color: "var(--t-muted)" }}>Renda média</div>
            <div className="text-2xl font-bold">R$ 4.800/mês</div>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="mx-auto max-w-6xl px-6 pb-28">
        <div className="text-center">
          <span className="eyebrow" style={{ color: "var(--t-accent)" }}>O que você vai aprender</span>
          <h2 className="mt-4 text-5xl">12 módulos, resultado real</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { m: "Módulo 01", t: "Anatomia da unha e higienização" },
            { m: "Módulo 02", t: "Manicure clássica e russa" },
            { m: "Módulo 03", t: "Spa dos pés e pedicure premium" },
            { m: "Módulo 04", t: "Esmaltação em gel e efeito espelho" },
            { m: "Módulo 05", t: "Alongamento em fibra e gel" },
            { m: "Módulo 06", t: "Nail art: francesinha, encapsulada, 3D" },
            { m: "Módulo 07", t: "Precificação e gestão de clientes" },
            { m: "Módulo 08", t: "Marketing no Instagram para manicures" },
          ].map((m) => (
            <div key={m.m} className="flex items-center gap-6 rounded-2xl p-6" style={{ background: "var(--t-surface)" }}>
              <div className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>{m.m}</div>
              <div className="text-lg">{m.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. ACADEMIA — high-energy orange on charcoal
   ============================================================ */
function Academia() {
  return (
    <section className="theme theme-academia">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <img src={academiaImg} alt="Academia" width={1600} height={1200} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--t-bg) 0%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-48">
          <div className="max-w-3xl">
            <span className="eyebrow" style={{ color: "var(--t-accent)" }}>Academia · 24h</span>
            <h1 className="mt-6 text-7xl leading-[0.9] lg:text-9xl" style={{ fontFamily: "var(--t-display)", textTransform: "uppercase" }}>
              Sua melhor <span style={{ color: "var(--t-accent)" }}>versão</span> começa hoje.
            </h1>
            <p className="mt-8 max-w-lg text-lg" style={{ color: "var(--t-muted)" }}>
              Musculação, funcional, crossfit, boxe e yoga em uma estrutura de 1.800m² aberta 24 horas por dia. Sem taxa de matrícula em janeiro.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#" className="t-btn">Treino grátis</a>
              <a href="#" className="t-btn-outline">Ver planos</a>
            </div>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-6xl lg:text-7xl" style={{ fontFamily: "var(--t-display)", textTransform: "uppercase" }}>Planos</h2>
          <div className="text-sm" style={{ color: "var(--t-muted)" }}>Sem fidelidade · Cancele quando quiser</div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            { n: "Start", p: "89", d: "Musculação e cardio", f: ["Acesso 24h", "App de treinos", "Avaliação física"] },
            { n: "Full", p: "149", d: "Todas as modalidades", f: ["Tudo do Start", "Aulas coletivas", "Nutricionista", "Personal 1x/mês"], hot: true },
            { n: "Elite", p: "289", d: "Experiência completa", f: ["Tudo do Full", "Personal ilimitado", "Sauna e spa", "Convidados livres"] },
          ].map((plan) => (
            <div key={plan.n} className="relative rounded-lg p-10" style={{
              background: plan.hot ? "var(--t-accent)" : "var(--t-surface)",
              color: plan.hot ? "var(--t-accent-fg)" : "var(--t-fg)",
              border: "1px solid var(--t-border)",
            }}>
              {plan.hot && (
                <div className="absolute -top-3 left-10 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest" style={{ background: "var(--t-fg)", color: "var(--t-bg)" }}>
                  Mais escolhido
                </div>
              )}
              <div className="text-3xl uppercase" style={{ fontFamily: "var(--t-display)" }}>{plan.n}</div>
              <div className="mt-1 text-sm opacity-80">{plan.d}</div>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-sm">R$</span>
                <span className="text-7xl font-bold leading-none">{plan.p}</span>
                <span className="mb-2 text-sm opacity-80">/mês</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {plan.f.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span>→</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-8 flex w-full items-center justify-center rounded-full px-6 py-3 font-semibold uppercase tracking-widest" style={{
                background: plan.hot ? "var(--t-fg)" : "var(--t-accent)",
                color: plan.hot ? "var(--t-bg)" : "var(--t-accent-fg)",
              }}>Quero este</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. RESTAURANTE — warm editorial burgundy
   ============================================================ */
function Restaurante() {
  return (
    <section className="theme theme-restaurante">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-12">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="eyebrow">Restaurante · Cozinha de autor</span>
            <h1 className="mt-6 text-6xl leading-[1] lg:text-8xl" style={{ fontWeight: 400 }}>
              Uma <em style={{ fontStyle: "italic", color: "var(--t-accent)" }}>refeição</em> que se torna memória.
            </h1>
          </div>
          <div className="max-w-xs text-right lg:text-left">
            <p style={{ color: "var(--t-muted)" }}>Chef Renato Alencar · Estrela Michelin 2024 · Menu degustação em 7 tempos.</p>
            <a href="#" className="t-btn mt-6">Reservar mesa</a>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={restauranteImg} alt="Prato de restaurante" width={1600} height={1200} loading="lazy"
          className="h-[70vh] w-full object-cover" />
      </div>

      {/* Menu */}
      <div className="mx-auto max-w-5xl px-6 py-28">
        <div className="text-center">
          <span className="eyebrow">Menu de degustação</span>
          <h2 className="mt-6 text-5xl lg:text-6xl" style={{ fontWeight: 400 }}>
            <em style={{ fontStyle: "italic" }}>Sete tempos</em>, uma jornada
          </h2>
          <div className="mx-auto mt-6 h-px w-16" style={{ background: "var(--t-accent)" }} />
        </div>
        <div className="mt-14 space-y-10">
          {[
            { n: "I", t: "Amuse-bouche", d: "Espuma de tucupi, tapioca crocante e cebola-roxa em conserva" },
            { n: "II", t: "Entrada fria", d: "Vieira selada, purê de couve-flor defumada e caviar de limão-siciliano" },
            { n: "III", t: "Entrada quente", d: "Ravioli de rabada, jus de vinho tinto e queijo canastra 12 meses" },
            { n: "IV", t: "Peixe", d: "Robalo, beurre blanc de maracujá, alho-poró grelhado e ovas de truta" },
            { n: "V", t: "Carne", d: "Filé mignon maturado 45 dias, purê de mandioquinha e demi-glace de café" },
            { n: "VI", t: "Pré-sobremesa", d: "Sorbet de manjericão e limão-taiti, azeite e flor de sal" },
            { n: "VII", t: "Sobremesa", d: "Textura de chocolate 70%, praliné de cacau e sorvete de baunilha de Madagascar" },
          ].map((c) => (
            <div key={c.n} className="grid grid-cols-[auto_1fr] gap-8 border-b pb-8" style={{ borderColor: "var(--t-border)" }}>
              <div className="text-3xl" style={{ color: "var(--t-accent)", fontFamily: "var(--t-display)", fontStyle: "italic" }}>{c.n}</div>
              <div>
                <h3 className="text-2xl" style={{ fontWeight: 400 }}>{c.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed" style={{ color: "var(--t-muted)" }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <div className="text-lg" style={{ color: "var(--t-muted)" }}>Menu degustação · R$ 480 por pessoa</div>
          <div className="text-sm" style={{ color: "var(--t-muted)" }}>Harmonização de vinhos + R$ 280</div>
          <a href="#" className="t-btn mt-8">Reservar experiência</a>
        </div>
      </div>
    </section>
  );
}
