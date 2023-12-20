import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="bg-[#D6B50ECC] rounded-xl px-6 py-8 flex items-center mb-20 max-w-4xl mx-auto gap-10">
      <div className="md:pl-20">
        <h4 className="text-2xl mb-4 font-bold">
          Siapapun Bisa Konsultasi Hukum
        </h4>
        <p>
          Dengan kami, semua masyarakat dapat mengakses layanan hukum
          berkualitas tanpa dipungut biaya apa pun.
        </p>
      </div>
      <Link to="/">
        <button className="font-semibold text-slate-900 px-4 mt-4 rounded-[8px] py-2 bg-white whitespace-nowrap">
          Mulai Konsultasi
        </button>
      </Link>
    </section>
  );
};

export default GetStarted;
