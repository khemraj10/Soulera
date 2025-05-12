import Image from "next/image";

const brands = ["disney", "google", "hubspot", "youtube", "slack", "shopify"];

const Trusted_Brands = () => {
  return (
    <section className="flex flex-wrap flex-col justify-center items-center gap-4 py-4 px-4">
      {" "}
      <p className="text-xs font-semibold ">
        TRUSTED BY TOP-LEADING COMPANIES.
      </p>{" "}
      <div className="flex gap-8">
        {brands.map((brand) => (
          <div key={brand} className=" flex">
            <Image
              src={`/assets/brands/${brand}_logo_icon.png`}
              alt={`${brand} logo`}
              width={80}
              height={40}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trusted_Brands;
