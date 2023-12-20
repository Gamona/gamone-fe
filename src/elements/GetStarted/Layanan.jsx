const Layanan = () => {
  return (
    <section className="py-20 container mx-auto mb-20">
      <h2 className="text-center text-4xl font-bold">Ada Masalah Hukum?</h2>
      <h2 className="text-center text-4xl font-bold">
        Mogana Siap Bantu Cari Solusinya!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-10 justify-items-center">
        <div className="p-4 rounded border border-slate-300 text-center max-w-sm aspect-square">
          <img
            src="src/assets/images/konsultasi.png"
            alt="Konsultasi"
            className="w-full max-w-xs mx-auto"
          />
          <div className="text-2xl font-semibold mt-4">Konsultasi Instan</div>
        </div>
        <div className="p-4 rounded border border-slate-300 text-center max-w-sm aspect-square">
          <img
            src="src/assets/images/secret.png"
            alt="Secret"
            className="w-full max-w-xs mx-auto"
          />
          <div className="text-2xl font-semibold mt-4">
            Kerahasiaan Terjamin
          </div>
        </div>
        <div className="p-4 rounded border border-slate-300 text-center max-w-sm aspect-square">
          <img
            src="src/assets/images/advokat.png"
            alt="Advokat"
            className="w-full max-w-xs mx-auto"
          />
          <div className="text-2xl font-semibold mt-4">Advokat Terpercaya</div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
