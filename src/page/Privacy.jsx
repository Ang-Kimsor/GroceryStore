import React from "react";
import { Privacy as Data } from "../data/Term-Condition";
import List from "../components/Term-Condition-Policy/List";
const Privacy = () => {
  return (
    <main className="w-full md:h-[380px] flex justify-center md:items-center mt-5 mb-20">
      <div className="w-[95%] ">
        {Data.map(({ title, list }, index) => (
          <List key={index} title={title} list={list} />
        ))}
      </div>
    </main>
  );
};

export default Privacy;
