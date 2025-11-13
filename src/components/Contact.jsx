import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-10">
          Get in <span className="text-vyom-orange">Touch</span>
        </h2>

        <div className="bg-gray-950 p-6 sm:p-10 rounded-2xl border border-gray-800 shadow-lg text-gray-300 text-base sm:text-lg">
          <p className="mb-4">
            Have questions or want to collaborate? Reach out to our team anytime.
          </p>

          <p className="mt-3">
            Email:{" "}
            <a
              href="mailto:info@vyomgarud.com"
              className="text-vyom-orange hover:text-white transition duration-300 font-medium"
            >
              info@vyomgarud.com
            </a>
          </p>

          <p className="mt-2 text-sm text-gray-500">
            We’ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
