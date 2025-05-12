import Image from "next/image";

interface BlogPost {
  image: string;
  tag?: string;
  title: string;
  description: string;
  color1: string;
  color2: string;
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className=" bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div
        className="flex items-center justify-center h-[60%]"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${post.color1}, ${post.color2})`,
        }}
      >
        <Image
          src={post.image}
          alt={post.title}
          width={150}
          height={150}
          objectFit="contain"
        />
      </div>
      <div className="p-6 h-[40%]" style={{ backgroundColor: post.color1 }}>
        <p
          className=" text-[7px] font-semibold absolute bg-white rounded-full p-1"
          style={{
            color: `${post.color2}`,
            top: "60%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {post.tag}
        </p>
        <h2 className="text-white text-3xl font-semibold">{post.title}</h2>
        <p className="text-gray-300 text-xs mt-2 pb-10">{post.description}</p>
        <div className="mb-10"></div>
      </div>
    </div>
  );
};

export default BlogCard;
