import BgGradient from "@/components/common/bg-gradient";
import Banner from "@/components/home/banner";
import Divider from "@/components/home/divider";
import HowItWorks from "@/components/home/howitworks";
import Pricing from "@/components/home/pricing";

export default function Home() {
  return (
    <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <BgGradient>
      <Banner />
      <Divider />
      <HowItWorks />
      <Divider />
      <Pricing />
      <Divider />
      </BgGradient>
      <footer className="bg-gray-200/20 flex h-20 py-24 px-12 z-20 flex-col gap-2 items-center">
        <p>All Rights Reserved, {new Date().getFullYear()}</p>
        <a href="https://x.com/@bshalmoktan" target="_blank">
          Built by Bishal 🚀
        </a>
      </footer>
    </main>
  );
}
