import Card from "./ui/Card";
import CardContent from "./ui/CardContent";
import { TbFileCertificate } from "react-icons/tb";
import { FaBullhorn } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { TbLego } from "react-icons/tb";
import { LuTicket } from "react-icons/lu";

const features = [
  {
    icon: (
      <div className="flex items-center justify-center bg-[#525ae7] rounded-full w-8 h-8">
        <TbFileCertificate className="text-white" size={16} />
      </div>
    ),
    title: "Certifications",
    description:
      "Each of our plan will provide you and your team with certifications.",
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-[#525ae7] rounded-full w-8 h-8">
        <FaBullhorn className="text-white" size={16} />
      </div>
    ),
    title: "Notifications",
    description:
      "Send out notificatiions to all your customers to keep them engaged.",
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-[#525ae7] rounded-full w-8 h-8">
        <LuPackage className="text-white" size={16} />
      </div>
    ),

    title: "Bundles",
    description: "High-quality bundles of awesome tools to help you out.",
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-[#525ae7] rounded-full w-8 h-8">
        <HiOutlineCommandLine className="text-white" size={16} />
      </div>
    ),
    title: "Developer Tools",
    description:
      "Developer tools to help grow your application and keep it up-to-date.",
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-[#525ae7] rounded-full w-8 h-8">
        <TbLego className="text-white" size={16} />
      </div>
    ),

    title: "Building Blocks",
    description:
      "The right kind of building blocks to take your company to the next level.",
  },
  {
    icon: (
      <div className="flex items-center justify-center bg-[#525ae7] rounded-full w-8 h-8">
        <LuTicket className="text-white" size={16} />
      </div>
    ),
    title: "Coupons",
    description:
      "Coupons system to provide special offers and discounts for your app.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-20 ">
      <h2 className="text-center text-2xl font-bold">Our Features</h2>
      <p className="text-center text-xs font-normal mb-8">
        Check out our list of awesome features below.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="text-center p-4">
            <CardContent>
              <div className="flex justify-center">{feature.icon}</div>
              <div className="text-md font-semibold mb-2">{feature.title}</div>
              <p className="text-gray-600 text-xs">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
