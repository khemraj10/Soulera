// import Image from "next/image";

import MemberCard from "../Blog/MemberCard";

const teamMembers = [
  {
    name: "Freddy Smith",
    title: "CEO and Founder",
    imageUrl: "/assets/members/man-1.jpg",
    twitterUrl: "https://twitter.com/",
    githubUrl: "https://github.com/",
  },
  {
    name: "Carl Jones",
    title: "CTO and Co-Founder",
    imageUrl: "/assets/members/man-2.jpg",
    twitterUrl: "https://twitter.com/",
    githubUrl: "https://github.com/",
  },
  {
    name: "Susan Peterson",
    title: "Marketing Directory",
    imageUrl: "/assets/members/woman-3.jpg",
    twitterUrl: "https://twitter.com/",
    githubUrl: "https://github.com/",
  },
  {
    name: "Tommy Barnes",
    title: "Designer",
    imageUrl: "/assets/members/man-3.jpg",
    twitterUrl: "https://twitter.com/",
    githubUrl: "https://github.com/",
  },
  {
    name: "Ron Jenson",
    title: "Senior Developer",
    imageUrl: "/assets/members/man-4.jpg",
    twitterUrl: "https://twitter.com/",
    githubUrl: "https://github.com/",
  },
  {
    name: "Pete Tompkins",
    title: "Web Developer",
    imageUrl: "/assets/members/man-5.jpg",
    twitterUrl: "https://twitter.com/",
    githubUrl: "https://github.com/",
  },
  {
    name: "Kelly Richards",
    title: "Sales Manager",
    imageUrl: "/assets/members/woman-1.jpg",
    twitterUrl: "https://twitter.com/",
    githubUrl: "https://github.com/",
  },
  {
    name: "Alexis Jordan",
    title: "Affiliate Manager",
    imageUrl: "/assets/members/woman-2.jpg",
    twitterUrl: "https://twitter.com/",
    githubUrl: "https://github.com/",
  },
];

const Team = () => {
  return (
    <section className="py-16 px-20">
      <p className="text-[#248ddd]">OUR TEAM</p>
      <h2 className="text-3xl font-medium mb-8 w-100">
        An incredible team of amazing individuals
      </h2>
      {/* <div className="grid md:grid-cols-4 gap-6"> */}
      <div className="justify-center grid md:grid-cols-4 gap-10 flex-wrap">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
