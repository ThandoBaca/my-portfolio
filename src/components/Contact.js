import React from "react";


const Card = ({ children }) => (
  <div className="bg-secondary p-6 rounded-lg shadow-md">
    {children}
  </div>
);

const Contact = () => {
  return (
    <section className="bg-primary text-white py-16" id="contact">
      <div className="container mx-auto min-h-screen text-center">
        <h2 className="text-4xl font-bold mb-8 border-b-4 border-indigo-600 pb-2 inline-block">
          Contact Me
        </h2>

        <Card>
          <p className="text-lg mb-6">
            I am currently open for a fulltime Frontend Developer role. If you
            want to discuss that, feel free to email me or give me a call.
          </p>

          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="flex items-center py-2">
              <span className="font-bold mr-2">Email:</span>
              <a
                href="217085067@mycput.ac.za"
                className="text-blue-500 hover:underline"
              >
                217085067@mycput.ac.za
              </a>
            </p>
            <p className="flex items-center py-2">
            <span className="font-bold mr-2">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/thando-baca-51249913b"
                className="text-blue-500 hover:underline"
              >
                Thando Baca
              </a>
            </p>
            <p className="flex items-center py-2">
              <span className="font-bold mr-2">Phone:</span>
              <span>+062 049 8411</span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
