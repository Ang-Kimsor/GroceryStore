import React from "react";
import { Address, Form } from "./../components/Contact";
const Contact = () => {
  return (
    <main className="flex justify-center mt-10 mb-20">
      <div className="w-[95%] grid lg:grid-cols-2 gap-5">
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
