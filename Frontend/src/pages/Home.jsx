import React, { useState, useEffect } from "react";
import { Card, FormField, Loader } from "../components";

function Home() {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("testing");

  return (
    <section>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images generated by Dall-E AI
        </p>
      </div>
      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {/*If loading is true, show Loader SVG, else show the content.*/}
        {/*If search text is not empty, displaying "Showing results for" text before loading contentn*/}
        {loading ? (
          <div className="flex justify-center items-center">
            {" "}
            <Loader />{" "}
          </div>
        ) : (
          searchText && (
            <h2 className="font-medium text-[#666e75] text-xl mb-3">
              Showing result for{" "}
              <span className="text-[#222328]"> {searchText}</span>
            </h2>
          )
        )}
      </div>
    </section>
  );
}

export default Home;
