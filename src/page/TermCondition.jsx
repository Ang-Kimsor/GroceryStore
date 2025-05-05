import React from "react";
import { Data } from "../data/Term-Condition";
import List from "../components/Term-Condition-Policy/List";
const TermCondition = () => {
  return (
    <main className="w-full h-fit  flex justify-center mt-5 mb-20">
      <div className="w-[95%] ">
        {Data.map(({ title, list }, index) => (
          <List key={index} title={title} list={list} />
        ))}
      </div>
    </main>
  );
};

export default TermCondition;
