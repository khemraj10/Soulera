import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface MemberCardProps {
  name: string;
  title: string;
  imageUrl: string;
  twitterUrl: string;
  githubUrl: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  title,
  imageUrl,
  twitterUrl,
  githubUrl,
}) => {
  const backgroundColor =
    title === "CEO and Founder" || title === "Affiliate Manager"
      ? "#e6f59c"
      : title === "CTO and Co-Founder" || title === "Sales Manager"
      ? "#D1FAE5"
      : title === "Marketing Directory" || title === "Web Developer"
      ? "#FAD9D9"
      : "#30d9e6";

  const lightBackgroundColor =
    title === "CEO and Founder" || title === "Affiliate Manager"
      ? "#e6f59c62"
      : title === "CTO and Co-Founder" || title === "Sales Manager"
      ? "#D1FAE562"
      : title === "Marketing Directory" || title === "Web Developer"
      ? "#FAD9D962"
      : "#30d9e662";
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className=" relative w-37 h-37 rounded-bl-full rounded-br-full rounded-tl-full flex justify-center items-center"
        style={{ backgroundColor: lightBackgroundColor }}
      >
        <div
          className="relative w-32 h-32  z-10 rounded-full"
          style={{ backgroundColor }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 relative">
              <Image
                src={imageUrl}
                alt={name}
                fill
                sizes="96px"
                className="rounded-full shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <h3 className="font-normal text-sm">{name}</h3>
      <p className="text-[#248ddd] font-medium text-xs">{title}</p>
      <div className="flex space-x-2 mt-2">
        <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-300" size={16} />
        </Link>
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-300" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;
