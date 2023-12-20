const Achievement = () => {
  return (
    <section className="-translate-y-1/4 md:-translate-y-1/2 rounded-lg bg-slate-300 px-4 py-6 flex items-center justify-center mx-5 md:mx-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
        <div className="text-center">
          <div className="text-4xl font-bold text-slate-900">3000</div>
          <div className="text-lg text-slate-900">Konsultasi Selesai</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-slate-900">100+</div>
          <div className="text-lg text-slate-900">Advokat Terdaftar</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-slate-900">20+</div>
          <div className="text-lg text-slate-900">Kota Dijangkau</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-slate-900">4.8/5</div>
          <div className="text-lg text-slate-900">Kepuasan Klien</div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;

