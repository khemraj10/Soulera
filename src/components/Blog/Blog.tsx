// import Image from "next/image";
import BlogCard from "./BlogCard.";
import SubBlogCard from "./SubBlogCard";

const blogPost = [
  {
    id: 1,
    title: "Refreshing Designs",
    tag: "RESOURCES",
    description:
      "Quench satisfying designs to help you stir up emotion and tell a story.",
    image: "/assets/blog/drink.png",
    color1: "#7417b6",
    color2: "#5210bc",
  },
  {
    id: 2,
    title: "Healthier Lifestyle",
    tag: "LIFESTYLE",
    description:
      "Living a healthier lifestyle will help with your productivity and your mind-set.",
    image: "/assets/blog/apple.png",
    color1: "#05c4f9",
    color2: "#1668e4",
  },
  {
    id: 3,
    title: "Gaming Evolution",
    tag: "ENTERTAINMENT",
    description:
      "Learn about the evolution of gaming and how it started a revolution.",
    image: "/assets/blog/controller.png",
    color1: "#eab516f1",
    color2: "#ead308fa",
  },
];

const subBlogPost = [
  {
    id: 1,
    title: "Best Workstations of the year",
    tag: "INSPIRATION",
    description:
      "Check out these inspiring workstations to get ideas on how to level-up your workstations.",
    image: "/assets/subBlog/computer.jpg",
    color: "#7c2ce5",
  },
  {
    id: 2,
    title: "Eating for Productivity",
    tag: "FOOD",
    description:
      "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
    image: "/assets/subBlog/eat.jpg",
    color: "#ff575a",
  },
  {
    id: 3,
    title: "A Design Mind-set",
    tag: "RESOURCES",
    description:
      "What does it mean to have a design mind-set? Learn how to improve your eye for design",
    image: "/assets/subBlog/book.jpg",
    color: "#6407de",
  },
];

const Blog = () => {
  return (
    <section className="pb-1 pt-12 px-20 bg-gray-50">
      <h1 className="text-4xl font-bold">The Project Blog</h1>
      <p className="mb-10 text-gray-600">
        Designs and layouts to help you with your app
      </p>
      <div className="grid md:grid-cols-3 gap-10 mb-6">
        {blogPost.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-10 ">
        {subBlogPost.map((post, index) => (
          <SubBlogCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
