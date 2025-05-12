import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Productivity = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 py-16 px-20  items-start justify-items-start">
      <div className="md:pl-10 flex justify-center items-center">
        <Image
          src="/assets/productivity/productivity_1.jpeg"
          alt="astronaut"
          width={300}
          height={300}
          className="rounded-4xl"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold">Boost Productivity</h2>
        <p className="text-sm md:pr-20">
          Build an atmosphere that creates productivity in your organization and
          your company culture.
        </p>
        <ul className="mt-4 space-y-2 text-gray-600 flex flex-col items-center">
          <li className="flex justify-start gap-2 w-[300px] md:w-full">
            <CheckCircleIcon className="h-5 w-5 text-yellow-500 mt-1" />
            <span className="text-xs">Maximize productivity and growth</span>
          </li>
          <li className="flex justify-start gap-2 w-[300px] md:w-full">
            <CheckCircleIcon className="h-5 w-5 text-yellow-500 mt-1" />
            <span className="text-xs">Speed past your competition</span>
          </li>
          <li className="flex justify-start gap-2 w-[300px] md:w-full">
            <CheckCircleIcon className="h-5 w-5 text-yellow-500 mt-1" />
            <span className="text-xs">Learn the top techniques</span>
          </li>
        </ul>
      </div>

      <div className="md:order-2 ">
        <Image
          src="/assets/productivity/productivity_2.jpeg"
          alt="tasks"
          width={300}
          height={300}
          className="rounded-4xl"
        />
      </div>
      <div className="md:pl-10 text-center md:text-left">
        <h2 className="text-xl font-semibold">Automated Tasks</h2>
        <p className="text-sm pr-20">
          Save time and money with our revolutionary services. We are the
          leaders in the industry.
        </p>
        <ul className="mt-4 space-y-2 text-gray-600 flex flex-col items-center">
          <li className="flex justify-start gap-2 w-[300px] md:w-full">
            <CheckCircleIcon className="h-5 w-5 text-yellow-500 mt-1" />
            <span className="text-xs">Automated task management workflow</span>
          </li>
          <li className="flex justify-start gap-2 w-[300px] md:w-full">
            <CheckCircleIcon className="h-5 w-5 text-yellow-500 mt-1" />
            <span className="text-xs">Detailed analytics for your data</span>
          </li>
          <li className="flex justify-start gap-2 w-[300px] md:w-full">
            <CheckCircleIcon className="h-5 w-5 text-yellow-500 mt-1" />
            <span className="text-xs">Some awesome integrations</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Productivity;
