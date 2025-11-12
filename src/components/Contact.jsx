import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">Contact / Notes</h2>

      <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 text-gray-300">
        <p>If you are the reviewer, please check the README in the repo for detailed steps and commit log.</p>
        <p className="mt-3">Email: <a className="text-blue-400" href="mailto:info@vyomgarud.com">info@vyomgarud.com</a></p>
        <p className="mt-2 text-sm text-gray-500">Notes: Replace placeholder PDF text with exact snippets or screenshots from your original assessment PDF.</p>
      </div>
    </section>
  );
}
