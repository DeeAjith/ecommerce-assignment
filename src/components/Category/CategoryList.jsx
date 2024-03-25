import React, { useState } from "react";

const CategoryList = ({ categories }) => {
  const [categoriesData, _] = useState(categories);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {categoriesData ? (
        categoriesData?.map((item, idx) => {
          const { id, image, name } = item;
          return <div
            key={id}
            aria-label="card-item-v3"
            className="flex flex-col p-5 bg-white border border-[#c1c1c1] rounded-xl"
          >
            <div className="relative flex-shrink-0 mb-5 h-[250px]">
              <img
                src={image}
                alt={name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="mb-3 text-lg font-bold text-center">{name}</h3>
            </div>
          </div>;
        })
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default CategoryList;
