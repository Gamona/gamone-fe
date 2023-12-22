import { Link } from "react-router-dom";
import BackgroundImg from '../../assets/images/header-background.gif';

const Header = () => {
  return (
    <header
      className="h-[120vh] bg-cover bg-top flex items-center relative px-5 md:px-20 m-2 lg:m-8 rounded-xl"
      style={{
        backgroundImage: `url(${BackgroundImg})`
      }}
    >
      <div className="max-w-[900px] -mt-[100%] md:-mt-20">
        <h1 className="text-white text-4xl md:text-6xl mb-4">
          Konsultasi <br /> dengan pengacara jadi lebih <br /> mudah dan efisien
        </h1>
        <p className="text-yellow-400 text-lg md:text-2xl">
          Masalah hukum bisa datang kapan saja.
        </p>
        <p className="text-yellow-400 text-lg md:text-2xl">
          Untungnya ada Mogana yang siap jadi pertolongan pertama dalam
          menghadapi masalah hukum.
        </p>
        <Link to="/login">
          <button className="text-xl font-semibold text-[#fff] px-12 mt-4 rounded-[8px] py-2 bg-[#D6B50E]">
            Konsultasi Sekarang
          </button>
        </Link>
      </div>
      <img
        src="/src/assets/images/neraca.png"
        alt="Neraca"
        className="w-3/4 md:w-1/2 absolute right-0 bottom-20 md:bottom-auto"
      />
    </header>
  );
};

export default Header;
