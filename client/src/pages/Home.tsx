import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronLeft,
  Globe2,
  Heart,
  Map,
  MapPin,
  Menu,
  Navigation,
  Plus,
  Radio,
  Send,
  Share2,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";

const downloadUrl = "https://lahthamap-zqyg2t3k.manus.space/manus-storage/lahza_77638d4a.apk";

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5" dir="rtl">
      <div className={`brand-mark ${light ? "brand-mark-light" : ""}`}>
        <MapPin size={20} strokeWidth={2.5} />
      </div>
      <span className={`font-display text-[26px] font-black tracking-[-0.04em] ${light ? "text-white" : "text-ink"}`}>لحظة</span>
    </div>
  );
}

function SectionKicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-sand/70" : "text-coral"}`}>
      <span className={`h-px w-8 ${dark ? "bg-sand/60" : "bg-coral"}`} />
      {children}
    </div>
  );
}

function AppDownloadButton({ compact = false, inverted = false }: { compact?: boolean; inverted?: boolean }) {
  return (
    <a
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      download="lahtha.apk"
      className={`${compact ? "px-4 py-2.5 text-sm" : "px-6 py-3.5"} ${inverted ? "bg-sand text-ink hover:bg-white" : "bg-coral text-white hover:bg-coral-deep"} inline-flex items-center justify-center gap-2 rounded-full font-bold shadow-[0_12px_30px_rgba(242,111,74,0.22)] transition duration-200 hover:-translate-y-0.5 active:scale-[0.97]`}
    >
      <Smartphone size={17} />
      تحميل التطبيق
      <ArrowLeft size={16} />
    </a>
  );
}

function MapPreview() {
  return (
    <div className="map-preview relative h-[425px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#17252b] shadow-[0_30px_80px_rgba(7,20,24,0.35)] sm:h-[500px]">
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(30deg, transparent 46%, rgba(238,218,170,.2) 47%, rgba(238,218,170,.2) 48%, transparent 49%), linear-gradient(115deg, transparent 47%, rgba(238,218,170,.13) 48%, rgba(238,218,170,.13) 49%, transparent 50%), linear-gradient(8deg, transparent 48%, rgba(238,218,170,.18) 49%, rgba(238,218,170,.18) 50%, transparent 51%)", backgroundSize: "150px 120px, 180px 160px, 220px 170px" }} />
      <div className="absolute -left-10 top-28 h-56 w-[125%] rotate-[18deg] border-y border-sand/30 bg-sand/5" />
      <div className="absolute -right-20 bottom-14 h-24 w-[120%] -rotate-[26deg] border-y border-coral/40 bg-coral/10" />
      <div className="absolute left-[13%] top-[23%] h-1.5 w-1.5 rounded-full bg-sand shadow-[0_0_14px_5px_rgba(238,218,170,.5)]" />
      <div className="absolute left-[39%] top-[60%] h-1.5 w-1.5 rounded-full bg-sand shadow-[0_0_14px_5px_rgba(238,218,170,.5)]" />
      <div className="absolute right-[21%] top-[37%] h-1.5 w-1.5 rounded-full bg-sand shadow-[0_0_14px_5px_rgba(238,218,170,.5)]" />
      <div className="absolute right-[13%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-sand shadow-[0_0_14px_5px_rgba(238,218,170,.5)]" />
      <div className="absolute left-[17%] top-[39%] map-pin-bubble bg-coral"><MapPin size={17} fill="currentColor" /></div>
      <div className="absolute right-[22%] top-[26%] map-pin-bubble bg-sand text-ink"><ShoppingBag size={16} /></div>
      <div className="absolute right-[15%] bottom-[26%] map-pin-bubble bg-[#9ec7bd] text-ink"><Star size={16} fill="currentColor" /></div>
      <div className="absolute left-[27%] bottom-[17%] map-pin-bubble bg-white text-ink"><Heart size={16} fill="currentColor" /></div>
      <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#17252b]/80 px-4 py-3 text-white backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs text-white/65"><Navigation size={14} className="text-sand" /> حولك الآن</div>
        <div className="flex items-center gap-2 text-xs font-bold"><span className="h-2 w-2 animate-pulse rounded-full bg-coral" /> 128 لحظة جديدة</div>
      </div>
      <div className="absolute bottom-6 right-5 left-5 rounded-2xl border border-white/10 bg-[#102027]/90 p-4 text-white backdrop-blur-md">
        <div className="mb-3 flex items-center gap-2 text-[11px] text-sand"><span className="h-2 w-2 rounded-full bg-coral" /> الآن في حي الياسمين</div>
        <div className="flex items-end justify-between gap-3"><div><h4 className="font-display text-lg font-bold">أجمل غروب اليوم</h4><p className="mt-1 text-xs text-white/55">لحظة من محمد • قبل 4 دقائق</p></div><div className="flex -space-x-2 space-x-reverse"><span className="h-7 w-7 rounded-full border-2 border-[#102027] bg-[#d9967a]" /><span className="h-7 w-7 rounded-full border-2 border-[#102027] bg-[#6d8d80]" /><span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#102027] bg-sand text-[9px] font-bold text-ink">+8</span></div></div>
      </div>
      <div className="absolute right-4 top-[92px] flex flex-col overflow-hidden rounded-xl bg-white text-ink shadow-xl"><button className="p-2.5 hover:bg-black/5"><Plus size={16} /></button><div className="h-px bg-black/10" /><button className="p-2.5 hover:bg-black/5"><span className="block h-0.5 w-3 bg-ink" /></button></div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink" dir="rtl">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="container flex h-[82px] items-center justify-between">
          <a href="#top" onClick={closeMenu} aria-label="العودة إلى الرئيسية"><BrandMark /></a>
          <nav className="hidden items-center gap-8 text-sm font-bold text-ink/65 md:flex">
            <a href="#discover" className="nav-link">اكتشف لحظتك</a>
            <a href="#map" className="nav-link">الخريطة</a>
            <a href="#shops" className="nav-link">متجرك</a>
            <a href="#how" className="nav-link">كيف تعمل؟</a>
          </nav>
          <div className="hidden items-center gap-5 md:flex"><span className="hidden text-[10px] font-bold text-ink/40 lg:block">بتصميم <strong className="text-coral">م. محمد عبدالله شماخ</strong></span><AppDownloadButton compact /></div>
          <button aria-label="فتح القائمة" onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-ink/10 p-2.5 md:hidden">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        {menuOpen && <div className="absolute inset-x-4 top-[72px] rounded-2xl border border-ink/10 bg-white p-4 shadow-2xl md:hidden"><nav className="flex flex-col gap-1 text-right text-sm font-bold"><a href="#discover" onClick={closeMenu} className="rounded-xl p-3 hover:bg-cream">اكتشف لحظتك</a><a href="#map" onClick={closeMenu} className="rounded-xl p-3 hover:bg-cream">الخريطة</a><a href="#shops" onClick={closeMenu} className="rounded-xl p-3 hover:bg-cream">متجرك</a><a href="#how" onClick={closeMenu} className="rounded-xl p-3 hover:bg-cream">كيف تعمل؟</a></nav><div className="mt-3 border-t border-ink/10 pt-3"><p className="mb-3 text-center text-[11px] font-bold text-ink/45">بتصميم <strong className="text-coral">المهندس محمد عبدالله شماخ</strong></p><AppDownloadButton /></div></div>}
      </header>

      <main id="top">
        <section className="relative isolate px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:pb-28 lg:pt-44">
          <div className="hero-glow absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-[#f6c68f]/30 blur-3xl" />
          <div className="hero-grid absolute inset-0 -z-20 opacity-40" />
          <div className="container grid items-center gap-14 lg:grid-cols-[1.03fr_.97fr] lg:gap-20">
            <div className="max-w-xl">
              <div className="reveal inline-flex items-center gap-2 rounded-full border border-coral/20 bg-coral/8 px-4 py-2 text-xs font-bold text-coral"><Sparkles size={14} /> لحظتك تستاهل تنشاف</div>
              <h1 className="reveal reveal-delay-1 mt-6 font-display text-[clamp(3.2rem,7vw,6.5rem)] font-black leading-[0.98] tracking-[-0.065em] text-ink">خلِّ العالم<br /><span className="text-coral">يشوف لحظتك.</span></h1>
              <p className="reveal reveal-delay-2 mt-7 max-w-lg text-lg leading-9 text-ink/60">لحظة هي مساحتك المفتوحة على الخريطة. شارك ما تعيشه، اكتشف ما حولك، وابنِ متجرك الإلكتروني في المكان الذي يبدأ منه كل شيء.</p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-4"><AppDownloadButton /><a href="#discover" className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-ink/65 transition hover:text-coral">اكتشف أكثر <ArrowLeft size={17} className="transition group-hover:-translate-x-1" /></a></div>
              <div className="reveal reveal-delay-4 mt-10 flex items-center gap-5 text-xs font-medium text-ink/50"><div className="flex -space-x-3 space-x-reverse"><span className="avatar bg-[#dda184]" /><span className="avatar bg-[#8ea69d]" /><span className="avatar bg-[#6b8098]" /><span className="avatar flex items-center justify-center bg-sand text-[10px] font-black text-ink">+2k</span></div><span>انضم إلى مجتمع يصنع الفرق كل يوم</span></div>
            </div>
            <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[550px] lg:mr-auto lg:ml-0"><div className="absolute -left-6 bottom-8 z-10 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-[0_18px_45px_rgba(38,48,48,.16)] backdrop-blur-sm sm:-left-10"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff1ec] text-[#378477]"><Globe2 size={20} /></div><div><p className="text-xs font-black text-ink">العالم أقرب مما تتخيل</p><p className="mt-0.5 text-[10px] text-ink/50">اكتشف 24 لحظة حولك</p></div></div><div className="absolute -right-3 top-8 z-10 rounded-2xl border border-white/60 bg-ink px-4 py-3 text-white shadow-[0_18px_45px_rgba(38,48,48,.18)] sm:-right-9"><div className="flex items-center gap-2 text-xs font-bold"><Radio size={15} className="text-coral" /> مباشر الآن</div></div><MapPreview /></div>
          </div>
          <div className="container mt-20 border-t border-ink/10 pt-7"><div className="flex flex-wrap items-center justify-between gap-5 text-xs font-bold text-ink/35"><span>مكان واحد لكل ما يهمك</span><div className="flex gap-7 sm:gap-12"><span className="flex items-center gap-2"><Map size={16} /> خريطة حية</span><span className="flex items-center gap-2"><Share2 size={16} /> مشاركة سهلة</span><span className="flex items-center gap-2"><Store size={16} /> متجر في مكانه</span></div></div></div>
        </section>

        <section id="discover" className="bg-white px-4 py-24 sm:px-6 lg:py-32"><div className="container"><div className="grid items-end gap-8 lg:grid-cols-[.9fr_1.1fr]"><div><SectionKicker>وش هي لحظة؟</SectionKicker><h2 className="font-display text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">مو بس تطبيق.<br /><span className="text-coral">هذه طريقتك تشوف العالم.</span></h2></div><p className="max-w-lg text-base leading-8 text-ink/55 lg:mb-1">من صورة عابرة إلى مكان يستحق الزيارة. من فكرة صغيرة إلى متجر يعرفه الجميع. لحظة تجمع التجارب والأشخاص والأعمال في خريطة واحدة نابضة بالحياة.</p></div><div className="mt-16 grid gap-5 md:grid-cols-3"><article className="feature-card feature-card-dark"><div className="icon-tile bg-coral text-white"><MapPin size={24} /></div><span className="mt-12 block text-xs font-bold tracking-[.16em] text-sand/55">01 / شارك</span><h3 className="mt-4 font-display text-2xl font-bold text-white">لحظتك على الخريطة</h3><p className="mt-4 text-sm leading-7 text-white/55">انشر صورة، فكرة أو تجربة وحدد مكانها. خلّ الناس يعيشون اللحظة معك، في المكان الحقيقي.</p><a href="#map" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-sand">شوف الخريطة <ChevronLeft size={16} /></a></article><article className="feature-card bg-[#f8eee1]"><div className="icon-tile bg-white text-coral"><Users size={24} /></div><span className="mt-12 block text-xs font-bold tracking-[.16em] text-coral/65">02 / تواصل</span><h3 className="mt-4 font-display text-2xl font-bold">ناس قريبين من اهتمامك</h3><p className="mt-4 text-sm leading-7 text-ink/55">تفاعل مع الناس والأماكن من حولك، واكتشف زوايا جديدة لمدينتك من عيون أهلها.</p><a href="#how" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-coral">كيف تبدأ؟ <ChevronLeft size={16} /></a></article><article className="feature-card bg-[#e6f0ec]"><div className="icon-tile bg-white text-[#398375]"><ShoppingBag size={24} /></div><span className="mt-12 block text-xs font-bold tracking-[.16em] text-[#398375]/65">03 / بِع</span><h3 className="mt-4 font-display text-2xl font-bold">متجرك في مكانه</h3><p className="mt-4 text-sm leading-7 text-ink/55">خلّ عملاءك يكتشفونك وهم قريبين منك. أنشئ متجرك، اعرض منتجاتك، وكن جزءًا من الحكاية.</p><a href="#shops" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#398375]">افتح متجرك <ChevronLeft size={16} /></a></article></div></div></section>

        <section id="map" className="relative overflow-hidden bg-ink px-4 py-24 text-white sm:px-6 lg:py-32"><div className="absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-coral/10 blur-3xl" /><div className="container relative"><div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><div className="order-2 lg:order-1"><SectionKicker dark>خريطة تنبض</SectionKicker><h2 className="font-display text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">كل لحظة لها<br /><span className="text-sand">مكان.</span></h2><p className="mt-7 max-w-md text-base leading-8 text-white/55">افتح الخريطة وشوف وش يصير حولك. لحظات حقيقية، من ناس حقيقيين، في أماكن تقدر توصلها الآن.</p><div className="mt-9 grid max-w-md grid-cols-2 gap-3"><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-display text-3xl font-black text-sand">24k<span className="text-coral">+</span></p><p className="mt-1 text-xs text-white/45">لحظة منشورة</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-display text-3xl font-black text-sand">86</p><p className="mt-1 text-xs text-white/45">مدينة حول العالم</p></div></div><a href={downloadUrl} onClick={(e) => { e.preventDefault(); toast("رابط التحميل قيد التجهيز — أرسل لنا الرابط الحقيقي لنفعّله") }} className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-sand transition hover:gap-3">استكشف من التطبيق <ArrowLeft size={17} /></a></div><div className="order-1 lg:order-2"><MapPreview /></div></div></div></section>

        <section id="shops" className="bg-[#f8eee1] px-4 py-24 sm:px-6 lg:py-32"><div className="container"><div className="flex flex-wrap items-end justify-between gap-8"><div><SectionKicker>لأصحاب الأفكار</SectionKicker><h2 className="font-display text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">متجرك،<br /><span className="text-coral">في قلب الحكاية.</span></h2></div><div className="max-w-sm text-left"><p className="text-sm leading-7 text-ink/55">حوّل موقعك إلى فرصة. أنشئ حضورك التجاري على لحظة وخلّ عملاءك يلقونك في المكان والوقت المناسب.</p><a href="#download" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-coral">ابدأ تجارتك <ArrowLeft size={16} /></a></div></div><div className="mt-14 grid gap-5 md:grid-cols-3"><article className="shop-card"><div className="shop-image shop-image-coffee"><div className="shop-badge">مقهى</div><div className="shop-emblem">ق</div></div><div className="p-5"><div className="flex items-center justify-between"><h3 className="font-display text-xl font-bold">قهوة على السريع</h3><span className="flex items-center gap-1 text-xs font-bold text-coral"><Star size={13} fill="currentColor" /> 4.9</span></div><p className="mt-2 text-xs text-ink/45">القهوة المختصة • على بُعد 0.8 كم</p><div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-xs font-bold text-ink/50"><span>12 لحظة حولك</span><ChevronLeft size={16} className="text-coral" /></div></div></article><article className="shop-card"><div className="shop-image shop-image-flower"><div className="shop-badge">منتجات</div><div className="shop-emblem">ن</div></div><div className="p-5"><div className="flex items-center justify-between"><h3 className="font-display text-xl font-bold">نبتة وورد</h3><span className="flex items-center gap-1 text-xs font-bold text-coral"><Star size={13} fill="currentColor" /> 4.8</span></div><p className="mt-2 text-xs text-ink/45">هدايا مصنوعة بحب • على بُعد 1.2 كم</p><div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-xs font-bold text-ink/50"><span>8 لحظات حولك</span><ChevronLeft size={16} className="text-coral" /></div></div></article><article className="shop-card"><div className="shop-image shop-image-clay"><div className="shop-badge">مصنوعات</div><div className="shop-emblem">م</div></div><div className="p-5"><div className="flex items-center justify-between"><h3 className="font-display text-xl font-bold">مِداد</h3><span className="flex items-center gap-1 text-xs font-bold text-coral"><Star size={13} fill="currentColor" /> 5.0</span></div><p className="mt-2 text-xs text-ink/45">فخار وفن • على بُعد 2.4 كم</p><div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-xs font-bold text-ink/50"><span>16 لحظة حولك</span><ChevronLeft size={16} className="text-coral" /></div></div></article></div></div></section>

        <section id="how" className="bg-white px-4 py-24 sm:px-6 lg:py-32"><div className="container"><div className="mx-auto max-w-xl text-center"><SectionKicker>بكل بساطة</SectionKicker><h2 className="font-display text-4xl font-black tracking-[-0.045em] sm:text-5xl">ثلاث خطوات،<br /><span className="text-coral">وتصير جزءًا من اللحظة.</span></h2></div><div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8"><div className="absolute right-[16.5%] left-[16.5%] top-7 hidden h-px border-t border-dashed border-ink/15 md:block" />{[{n:"01", icon:<Smartphone size={22} />, title:"حمّل لحظة", text:"أنشئ حسابك في ثوانٍ وابدأ باستكشاف عالمك."},{n:"02", icon:<MapPin size={22} />, title:"شارك مكانك", text:"انشر لحظتك وحدد مكانها لتصل للناس القريبين."},{n:"03", icon:<Heart size={22} />, title:"عِش أكثر", text:"تفاعل، اكتشف، واصنع لحظات جديدة كل يوم."}].map((step) => <div key={step.n} className="relative text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-coral shadow-sm ring-8 ring-white">{step.icon}</div><p className="mt-7 text-xs font-black tracking-[.18em] text-coral">{step.n}</p><h3 className="mt-3 font-display text-xl font-bold">{step.title}</h3><p className="mx-auto mt-3 max-w-[230px] text-sm leading-7 text-ink/50">{step.text}</p></div>)}</div></div></section>

        <section id="download" className="px-4 pb-24 sm:px-6 lg:pb-32"><div className="container"><div className="download-panel relative overflow-hidden rounded-[2rem] bg-coral px-7 py-14 text-center text-white sm:px-14 lg:py-20"><div className="absolute -left-20 -top-24 h-72 w-72 rounded-full border-[50px] border-white/10" /><div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border-[60px] border-white/10" /><div className="relative mx-auto max-w-2xl"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15"><Send size={23} /></div><h2 className="mt-7 font-display text-4xl font-black tracking-[-0.05em] sm:text-5xl">لحظتك القادمة<br />تبدأ من هنا.</h2><p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/75">حمّل لحظة وخلّ كل يوم يحمل قصة جديدة. التطبيق قريب منك — والرابط المباشر سيظهر هنا فور تزويدنا به.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><AppDownloadButton inverted /><button onClick={() => toast("أرسل رابط التطبيق وسنربطه بهذا الزر مباشرة")} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold transition hover:bg-white/10 active:scale-[.97]"><Store size={17} /> رابط المتجر</button></div><p className="mt-7 text-[11px] text-white/50">متوفر قريبًا على App Store و Google Play</p></div></div></div></section>
      </main>

      <footer className="bg-ink px-4 py-10 text-white sm:px-6"><div className="container"><div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-9 sm:flex-row sm:items-center"><BrandMark light /><div className="flex flex-wrap gap-6 text-xs font-bold text-white/50"><a href="#discover" className="transition hover:text-sand">عن لحظة</a><a href="#shops" className="transition hover:text-sand">للمتاجر</a><a href="#download" className="transition hover:text-sand">تحميل</a><a href="#top" className="transition hover:text-sand">العودة للأعلى <ArrowUpLeft size={13} className="inline" /></a></div></div><div className="flex flex-col justify-between gap-3 pt-7 text-[11px] text-white/35 sm:flex-row"><span>© 2026 لحظة. كل لحظة لها مكان.</span><span>تصميم وتطوير التطبيق والموقع: <strong className="font-bold text-sand">المهندس محمد عبدالله شماخ</strong></span></div></div></footer>
    </div>
  );
}
