import Link from "next/link";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="text-center py-20 px-4">
      <h1 className="text-5xl font-black pb-5">
        Start Crafting Your <br />{" "}
        <span className="text-[#525ae7]">Next Great Idea</span>
      </h1>
      <p className="mt-4 text-gray-600">
        Simplifying the creation of landing pages, blog pages,
        <br /> application pages and so much more!
      </p>
      <div className="mt-6 flex flex-col justify-center items-center">
        <div className="relative">
          <div className="-top-4 -right-8 rounded-full bg-green-400 text-xs text-white px-2 py-1 absolute">
            only $15/mo
          </div>
          <Button className="bg-[#525ae7] text-white rounded-4xl">
            Purchase Now
          </Button>
        </div>

        <Link href="#" className="text-gray-500 text-sm pt-1">
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default Hero;
