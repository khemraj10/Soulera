import Image from "next/image";

interface SubBlogPost {
  image: string;
  tag?: string;
  title: string;
  description: string;
  color: string;
}

interface SubBlogCardProps {
  post: SubBlogPost;
  index?: number;
}

const SubBlogCard: React.FC<SubBlogCardProps> = ({ post }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white relative">
      <div className="relative w-full h-36">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t"
        />
      </div>

      <div className="px-6 py-4">
        {post.tag && (
          <span
            className="text-[7px] font-normal px-1.5 py-1 rounded-full  text-white absolute"
            style={{
              top: "62%",
              left: "20%",
              transform: "translate(-50%, -50%)",
              backgroundColor: `${post.color}`,
            }}
          >
            {post.tag}
          </span>
        )}
        <h2 className="font-bold text-sm mb-2">{post.title}</h2>
        <p className="text-gray-600 text-[9px]">{post.description}</p>
      </div>
    </div>
  );
};

export default SubBlogCard;
