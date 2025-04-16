import React from "react";
import { Address, Form } from "./../components/Contact";
const Contact = () => {
  return (
    <main className="flex justify-center bg-blue-500 mt-10 mb-32">
      <div className="lg:w-[95%] w-full grid lg:grid-cols-2 gap-5">
        <aside>
          <Form />
        </aside>
        <aside>
          <Address />
        </aside>
      </div>
    </main>
  );
};

export default Contact;
