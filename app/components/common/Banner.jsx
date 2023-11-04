import Marquee from "react-fast-marquee";

const BannerMini = ({ cta }) => {
  return (
    <div className="fixed top-0 left-0 p-1 text-sm bg-white/10 backdrop-blur-xl border-b border-white/10 z-20 select-none shadow">
      <Marquee autoFill speed={40}>
        {cta}
      </Marquee>
    </div>
  );
};

export default BannerMini;
