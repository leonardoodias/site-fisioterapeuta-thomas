'use client';

import Image from 'next/image';
import { useState, type CSSProperties } from 'react';
import { exercises, getExercisesByRegion, regions, type RegionConfig, type RegionId } from '../data/exercises';
import { professional } from '../data/professional';

type RegionStyle = CSSProperties & { '--region-color': string; '--region-accent': string };

export default function Home() {
  const [selectedRegionId, setSelectedRegionId] = useState<RegionId>('neck');
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const selectedRegion = regions.find((region) => region.id === selectedRegionId) ?? regions[0];
  const regionExercises = getExercisesByRegion(selectedRegionId);
  const current = regionExercises[exerciseIndex];
  const regionStyle: RegionStyle = { '--region-color': selectedRegion.color, '--region-accent': selectedRegion.accentColor };

  const selectRegion = (regionId: RegionId, scroll = true) => {
    setSelectedRegionId(regionId);
    setExerciseIndex(0);
    setCompleted(false);
    if (scroll) requestAnimationFrame(() => document.getElementById('exercicio')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Fisioterapeuta Dr. Thomas Bressan — início"><span>Fisioterapeuta Dr. Thomas Bressan</span></a>
      <nav aria-label="Navegação principal"><a href="#guia">Guia</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav>
      <a className="button button-small button-muted" href="#contato">Agendar avaliação</a>
      <details className="mobile-menu"><summary aria-label="Abrir menu"><span /><span /><span /></summary><div><a href="#guia">Guia</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a><a className="mobile-menu-cta" href="#contato">Agendar avaliação</a></div></details>
    </header>

    <section id="top" className="hero">
      <div className="hero-copy"><p className="eyebrow"><span /> GUIA INTERATIVO DE ALONGAMENTOS</p><h1>Movimento<br />é <em>cuidado.</em></h1><p className="hero-support">22 exercícios para pequenas pausas de movimento na sua rotina.</p><div className="actions"><a className="button hero-cta" href="#guia">Explorar o guia <span>↓</span></a></div><p className="stat">22 exercícios <i /> 5 regiões corporais</p></div>
      <div className="hero-art"><div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" /><div className="hero-logo"><Image src="/thomas-logo.webp" alt="Logotipo do fisioterapeuta Dr. Thomas de Andrade Bressan" width={920} height={1037} sizes="(max-width: 1000px) 35vw, 360px" priority /></div><p aria-hidden="true">RESPIRE <span>•</span> ALONGUE <span>•</span> MOVA-SE</p></div>
    </section>

    <section className="intro section"><p className="section-number">01 / MOVIMENTO</p><div><h2>Pequenas pausas.<br /><em>Grandes diferenças.</em></h2></div><p>Períodos prolongados na mesma posição e movimentos repetitivos podem gerar desconforto e sensação de tensão. Este guia reúne movimentos simples que podem ser incorporados ao cotidiano.</p></section>

    <section id="guia" className="guide section">
      <div className="guide-heading"><div><p className="section-number">02 / GUIA INTERATIVO</p><h2>Onde você sente<br />mais tensão?</h2></div><p>Escolha uma região para conhecer os exercícios.</p></div>
      <div className="region-grid">
        {regions.map((region) => {
          const active = region.id === selectedRegionId;
          const style: RegionStyle = { '--region-color': region.color, '--region-accent': region.accentColor };
          return <button key={region.id} style={style} className={`region-card ${active ? 'active' : ''}`} onClick={() => selectRegion(region.id)} aria-pressed={active} aria-label={`Abrir ${region.name}, ${region.exerciseCount} exercícios`}>
            <span className="region-icon">{region.icon}</span><span><strong>{region.name}</strong><small>{region.exerciseCount} exercícios</small></span><b>{active ? 'Selecionada' : 'Abrir →'}</b>
          </button>;
        })}
      </div>

      <article id="exercicio" className="exercise-shell" style={regionStyle}>
        <div className="exercise-top"><button onClick={() => document.getElementById('guia')?.scrollIntoView({ behavior: 'smooth' })}>← Voltar às regiões</button><span className="exercise-category">{selectedRegion.name.toUpperCase()}</span>{!completed && <span className="mobile-counter">EXERCÍCIO {exerciseIndex + 1} DE {regionExercises.length}</span>}</div>
        <div className="progress"><span style={{ width: completed ? '100%' : `${((exerciseIndex + 1) / regionExercises.length) * 100}%` }} /></div>
        {completed
          ? <Completion selectedRegion={selectedRegion} onSelect={selectRegion} />
          : <div className="exercise-grid" key={`${selectedRegionId}-${exerciseIndex}`}>
              <ExerciseVisual exercise={current} region={selectedRegion} />
              <div className="exercise-copy">
                <p className="counter">EXERCÍCIO {exerciseIndex + 1} DE {regionExercises.length}</p>
                <h3>{current.title}</h3><p>{current.description}</p>
                <div className="duration"><span>◷</span><div><small>TEMPO SUGERIDO</small><strong>{current.duration}{current.bilateral ? ' de cada lado' : ''}</strong></div></div>
                <div className="mobile-progress" aria-label={`Progresso: exercício ${exerciseIndex + 1} de ${regionExercises.length}`}><span style={{ width: `${((exerciseIndex + 1) / regionExercises.length) * 100}%` }} /></div>
                <div className="exercise-nav">
                  <button disabled={exerciseIndex === 0} onClick={() => setExerciseIndex((value) => value - 1)}>← Anterior</button>
                  <div aria-label={`Progresso: exercício ${exerciseIndex + 1} de ${regionExercises.length}`}>{regionExercises.map((item, index) => <span key={item.id} className={index === exerciseIndex ? 'current' : ''} />)}</div>
                  <button onClick={() => exerciseIndex === regionExercises.length - 1 ? setCompleted(true) : setExerciseIndex((value) => value + 1)}>{exerciseIndex === regionExercises.length - 1 ? 'Concluir região' : 'Próximo →'}</button>
                </div>
              </div>
            </div>}
      </article>
    </section>

    <section className="guidelines section"><div className="guideline-title"><p className="section-number">03 / ORIENTAÇÕES</p><h2>Antes de<br />começar.</h2></div><div className="guideline-list">{[['15–30 segundos', 'Mantenha cada alongamento pelo período indicado.'], ['Devagar', 'Faça movimentos lentos e suaves.'], ['Sem dor', 'Não force movimentos que provoquem dor.'], ['Respire', 'Mantenha a respiração natural.'], ['Escolha consciente', 'Selecione exercícios adequados à região e à atividade realizada.']].map(([title, text], index) => <div className="guideline" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><p className="notice"><strong>Importante:</strong> Este conteúdo possui caráter educativo e não substitui avaliação ou acompanhamento fisioterapêutico individualizado.</p></section>
    <section id="sobre" className="professional section"><div className="professional-photo"><Image src="/dr-thomas-bressan.jpg" alt="Fisioterapeuta Dr. Thomas Bressan durante atendimento" width={150} height={150} sizes="150px" /></div><div><p className="section-number">04 / O PROFISSIONAL</p><h2>Cuidado que vai<br /><em>além do alongamento.</em></h2><div className="identity"><strong>{professional.name}</strong><span>{professional.profession} · {professional.registration}</span></div><p>Atendimento fisioterapêutico voltado às necessidades de cada pessoa, com atuação em fisioterapia geral, Traumato-Ortopédica e ênfase em Terapia Manual.</p><div className="tags"><span>Fisioterapia em geral</span><span>Traumato-Ortopédica</span><span>Terapia Manual</span></div></div></section>
    <section id="contato" className="contact section"><p className="section-number">05 / PRÓXIMO PASSO</p><h2>Está sentindo dor ou<br />alguma limitação?</h2><p>Cada pessoa possui necessidades diferentes. Uma avaliação fisioterapêutica permite compreender melhor suas necessidades e definir uma abordagem individualizada.</p><div className="actions"><a className="button" href="tel:+551639542923">Agendar uma avaliação</a></div></section>
    <section className="clinic section"><div><p className="section-number">06 / ATENDIMENTO</p><h2>Clínica Maffei</h2><div className="tags"><span>Particular</span><span>HapVida</span><span>Unimed</span><span>Atendimento domiciliar</span></div></div><div className="clinic-info"><p>{professional.address.map((line) => <span key={line}>{line}<br /></span>)}</p><a href="tel:+551639542923">{professional.phone}</a></div></section>
    <footer><div><strong>{professional.name}</strong><p>{professional.profession}<br />{professional.registration}</p></div><div className="footer-links"><a href="#guia">Guia</a><a href="#sobre">O profissional</a><a href="#contato">Contato</a></div><div className="footer-bottom"><p>© 2026 Dr. Thomas A. Bressan. Todos os direitos reservados.</p><p>Desenvolvido por Leonardo Dias | Soluções Digitais</p></div></footer><nav className="mobile-dock" aria-label="Acesso rápido"><a href="#guia">Guia interativo ↑</a><a href="#contato">Agendar</a></nav>
  </main>;
}

function ExerciseVisual({ exercise, region }: { exercise: (typeof exercises)[number]; region: RegionConfig }) {
  return <div className={`exercise-visual exercise-visual-${exercise.slug}`}>
    {exercise.image
      ? <div className="exercise-image-frame p-4 md:p-6"><img key={exercise.id} src={exercise.image} alt={exercise.alt} className="w-full h-full object-contain object-center" /></div>
      : <div className="exercise-placeholder" role="img" aria-label={`${exercise.alt}. Ilustração definitiva em preparação.`}><span>{region.icon}</span><strong>{exercise.title}</strong><small>Ilustração em preparação</small></div>}
    <small className="visual-label">{exercise.image ? 'Ilustração do movimento' : 'Placeholder didático'}</small>
  </div>;
}

function Completion({ selectedRegion, onSelect }: { selectedRegion: RegionConfig; onSelect: (id: RegionId, scroll?: boolean) => void }) {
  const alternatives = regions.filter((region) => region.id !== selectedRegion.id);
  return <div className="completion"><span>✓</span><p className="counter">REGIÃO CONCLUÍDA</p><h3>Muito bem!</h3><p>Você concluiu os exercícios para {selectedRegion.name}.</p><h4>Escolha outra região</h4><div className="completion-regions">{alternatives.map((region) => <button key={region.id} style={{ '--region-color': region.color, '--region-accent': region.accentColor } as RegionStyle} onClick={() => onSelect(region.id)}><span>{region.icon}</span><strong>{region.name}</strong><small>{region.exerciseCount} exercícios</small></button>)}</div><button className="button" onClick={() => { document.getElementById('guia')?.scrollIntoView({ behavior: 'smooth' }); }}>Escolher outra região</button></div>;
}








