import { useRef } from "react";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    const formattedBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      .trim()
      .replace(/\n\s*\n/g, "\n\n");

    const mailtoLink = `mailto:luxcars.enquiries@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(formattedBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
          Contact Us
        </h1>

        <section className="mb-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Visit Our Showroom
          </h2>
          <p className="text-sm">
            Luxury Car Showroom <br />
            Mon-Sat 9:00 AM - 6:00 PM <br />
            123 Prestige Drive, Melbourne, VIC 3000
          </p>
        </section>

        <section className="mb-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Call Our Team
          </h2>
          <p className="text-sm">
            (03) 1234 5678 <br /> Mon-Sat 9:00 AM - 6:00 PM
          </p>
        </section>

        <section className="mb-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Email Us
          </h2>
          <p className="text-sm">
            For inquiries, reach out via the form below or email us at{" "}
            <a
              href="mailto:luxcars.enquiries@example.com"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              luxcars.enquiries@example.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                ref={nameRef}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                ref={emailRef}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                ref={subjectRef}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                ref={messageRef}
                required
                rows={6}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-gray-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-purple-700 focus:ring-2 focus:ring-purple-500"
            >
              Send Message
            </button>
          </form>
        </section>

        <p className="text-center mt-10 text-sm">
          For further assistance, call us at{" "}
          <span className="text-purple-600 dark:text-purple-400">
            1300 294 328
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
