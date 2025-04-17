import React from "react";
import { Address, Form } from "./../components/Contact";
const Contact = () => {
  return (
    <main className="flex justify-center mt-10 mb-20">
      <div className="md:w-[95%] w-full grid lg:grid-cols-2 gap-5">
        <aside className="p-0 m-0">
          <Form />
        </aside>
        <aside className="p-0 m-0">
          <Address />
        </aside>
      </div>
    </main>
  );
};

export default Contact;
