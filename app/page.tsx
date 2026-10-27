"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Menu, MoveUpRight, ShieldCheck, Sparkles, X, Zap } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease: "easeOut" } } };
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [interest, setInterest] = useState("Bireysel satın alma");
  const [sent, setSent] = useState(false);
  return <main>
    <div className="announcement"><span className="status-dot"/> EVRON CONTROL <span className="announce-divider">/</span> YENİ NESİL MOBİL AYDINLATMA KONSEPTİ</div>
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="EVRON ana sayfa"><span className="brand-symbol"><Image src="/evron-emblem.jpg" alt="EVRON metalik amblem" fill priority sizes="50px"/></span><span className="brand-word">EVRON<span className="brand-dot">.</span><small>ENGINEERED FOR THE UNKNOWN</small></span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#concept" onClick={()=>setMenuOpen(false)}>Konsept</a><a href="#technology" onClick={()=>setMenuOpen(false)}>Teknoloji</a><a href="#specs" onClick={()=>setMenuOpen(false)}>Özellikler</a><a href="#contact" onClick={()=>setMenuOpen(false)}>İletişim</a>
      </nav>
      <a className="nav-cta" href="#contact">Erken erişim <ArrowRight size={15}/></a>
      <button className="menu-toggle" aria-label="Menüyü aç/kapat" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    <section className="hero" id="top">
      <div className="hero-grid"/>
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{opacity:0,x:-14}} animate={{opacity:1,x:0}} transition={{delay:.2}}><span/> EVRON LABS <span className="eyebrow-line"/> PROJECT 001</motion.div>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.25}}>Karanlığın ötesini<br/><em>kontrol et.</em></motion.h1>
        <motion.p className="hero-lede" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.4}}>Sıradan bir ışıktan fazlası. Hareketi, kontrolü ve aydınlatmayı tek bir mobil deneyimde buluşturan yeni bir yaklaşım.</motion.p>
        <motion.div className="hero-actions" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:.55}}><a href="#concept" className="button button-light">EVRON Control'ı keşfet <ArrowRight size={16}/></a><a href="#technology" className="text-link">Nasıl çalışır? <MoveUpRight size={15}/></a></motion.div>
        <motion.div className="hero-footnote" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.9}}><span className="footline"/> TASARIMDAN GERÇEĞE <span>EVR / 001</span></motion.div>
      </div>
      <motion.div className="hero-visual" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:1.1,delay:.3}}>
        <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="visual-glow"/>
        <div className="visual-label label-top"><span>01 / FORM</span><i/></div>
        <div className="product-render" aria-label="EVRON Control ürün konsepti">
          <div className="render-back"/><div className="render-body"><div className="render-top"/><div className="render-side"/><div className="render-front"><div className="lens-ring"><div className="lens-core"/><div className="lens-glint"/></div><div className="render-mark">E<span>V</span></div></div><div className="render-seam"/><div className="render-base"><span/><span/><span/></div></div>
          <div className="render-beam"/>
        </div>
        <div className="visual-label label-bottom"><span>EVR / 001</span><span>CONTROL CONCEPT</span></div>
        <div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div>
      </motion.div>
      <div className="hero-side-note">MOBİL AYDINLATMA <span>—</span> 2026</div>
      <a href="#concept" className="scroll-cue"><span>KEŞFET</span><ArrowDownRight size={17}/></a>
    </section>
    <section className="ticker" aria-label="EVRON değerleri"><div className="ticker-track">{[0,1,2,3].map(n=><span key={n}>BUILT TO CONTROL <i>✳</i> ENGINEERED FOR THE UNKNOWN <i>✳</i> EVRON TECHNOLOGY <i>✳</i></span>)}</div></section>
    <section className="intro section-pad" id="concept">
      <motion.div className="section-kicker" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}><span>01</span> / ÖNE ÇIKAN ÜRÜN</motion.div>
      <div className="intro-grid"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}><h2>Sadece ışık değil.<br/><span>Yeni bir kontrol biçimi.</span></h2></motion.div><motion.div className="intro-description" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}} transition={{delay:.12}}><p>EVRON Control, mobil kullanım için tasarlanan motorlu yönlendirme ve uzaktan kontrol fikri etrafında geliştirilen yeni nesil aydınlatma konseptidir.</p><a className="underlined-link" href="#technology">Yaklaşımımızı keşfet <ArrowRight size={15}/></a></motion.div></div>
      <motion.div className="product-card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}>
        <div className="product-card-info"><span className="tiny-label">EVRON / 001</span><h3>EVRON<br/><i>Control</i></h3><p>Hareketli. Uzaktan kontrol edilebilir. Yeni bir aydınlatma deneyimi için tasarlandı.</p><div className="product-status"><span className="status-dot"/> ÜRÜN GELİŞTİRME AŞAMASINDA</div><a href="#contact" className="circle-link" aria-label="Ürün hakkında bilgi al"><ArrowRight/></a></div>
        <div className="product-card-art"><div className="art-grid"/><div className="art-number">001</div><div className="mini-product"><div className="mini-head"><div className="mini-lens"/></div><div className="mini-neck"/><div className="mini-base"/></div><div className="art-caption">CONTROL / CONCEPT RENDER</div></div>
      </motion.div>
    </section>
    <section className="technology section-pad" id="technology"><div className="section-kicker"><span>02</span> / TASARIM FELSEFESİ</div><div className="tech-heading"><h2>Kontrol sende.<br/><span>Odak ışıkta.</span></h2><p>İşlevsel mühendislik, sade tasarım ve kullanıcı kontrolü. Her ayrıntı, gerçek kullanım senaryoları düşünülerek geliştiriliyor.</p></div>
      <div className="feature-grid" id="specs">{[{num:"01",icon:<Zap/>,title:"Hassas yönlendirme",text:"Işığı ihtiyacın olan noktaya yönlendirmek için tasarlanan motorlu hareket konsepti."},{num:"02",icon:<ShieldCheck/>,title:"Kontrol odaklı",text:"Uzaktan kontrol fikriyle daha pratik ve kullanıcı odaklı bir aydınlatma deneyimi."},{num:"03",icon:<Sparkles/>,title:"Modüler yaklaşım",text:"Farklı kullanım alanlarına uyum sağlayabilmesi için geliştirilen ürün mimarisi."}].map((f)=><motion.article className="feature" key={f.num} variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}><div className="feature-top"><span>{f.num} / 03</span>{f.icon}</div><h3>{f.title}</h3><p>{f.text}</p><div className="feature-line"/></motion.article>)}</div>
    </section>
    <section className="manifesto"><div className="manifesto-mark"><Image src="/evron-emblem.jpg" alt="EVRON amblemi" fill sizes="120px"/></div><p>“İyi tasarım, karmaşıklığı azaltır.<br/><span>Kontrolü kullanıcıya bırakır.”</span></p><span className="manifesto-signature">EVRON / DESIGN PRINCIPLE 01</span></section>
    <section className="contact section-pad" id="contact"><div className="section-kicker"><span>03</span> / BİZİMLE BAĞLANTI KUR</div><div className="contact-grid"><div><h2>Bir sonraki<br/><span>adımda buluşalım.</span></h2><p>EVRON Control'ın gelişim sürecini takip etmek veya iş birliği hakkında konuşmak için bize ulaş.</p><div className="contact-note"><span className="status-dot"/> İLK ÜRÜN GELİŞTİRME SÜRECİNDE</div></div><form className="contact-form" onSubmit={(e)=>{e.preventDefault();setSent(true)}}><label>İLGİ ALANI<select value={interest} onChange={e=>setInterest(e.target.value)}><option>Bireysel satın alma</option><option>Kurumsal / filo kullanımı</option><option>Toptan satış ve distribütörlük</option><option>İş birliği</option></select><ChevronDown className="select-chevron" size={16}/></label><label>E-POSTA<input type="email" placeholder="ornek@eposta.com" required/></label><label>MESAJIN<input type="text" placeholder="Bize kısaca ne düşündüğünü anlat..." required/></label><button className="button button-light submit-button" type="submit">{sent ? <>Talebin hazır <Check size={16}/></> : <>İlgi bildirimi oluştur <ArrowRight size={16}/></>}</button><p className="form-disclaimer">Bu form şu an demo arayüzüdür; gönderim henüz bir sunucuya kaydedilmez.</p></form></div></section>
    <footer className="footer"><a className="footer-brand" href="#top">EVRON<span>.</span></a><span>ENGINEERED FOR THE UNKNOWN</span><span>© 2026 EVRON TECHNOLOGY</span><a href="#top" className="back-top">YUKARI DÖN ↑</a></footer>
  </main>;
}
