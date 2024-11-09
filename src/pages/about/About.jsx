import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-400">
      <div className="container mx-auto max-w-5xl px-6 md:px-8 py-16 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-gray-100">
          About Us
        </h1>
        <section className="mb-12 text-center">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
            Crafting Excellence in Luxury Automobiles
          </h2>
          <p className="mb-4 leading-relaxed">
            At <strong>LuxeDrive’s Cars</strong>, we’re committed to redefining
            luxury on the road. With an exclusive selection of high-performance
            vehicles from iconic brands, we offer a tailored buying experience
            that matches the quality of our cars. Whether you&apos;re searching
            for the elegance of a sedan or the thrill of a sports car, our range
            promises a vehicle as extraordinary as your lifestyle.
          </p>
          <p className="mb-4 leading-relaxed">
            Our vehicles are curated with precision, featuring top brands like
            Aston Martin, Porsche, Mercedes-Benz, and BMW. Each car is certified
            and thoroughly inspected to ensure it exceeds your expectations,
            whether it’s a modern masterpiece or a timeless classic.
          </p>
        </section>
        <section className="mb-12 text-center">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
            Passionate About Automotive Craftsmanship
          </h2>
          <p className="mb-4 leading-relaxed">
            LuxeDrive&apos;s Cars was founded with a passion for performance and
            a love for automotive artistry. For over a decade, we’ve been driven
            to offer a superior selection of vehicles that set the highest
            standards. We’re here to create a community of enthusiasts who
            appreciate every detail, every line, and every roar of a finely
            tuned engine.
          </p>
          <p className="mb-4 leading-relaxed">
            From sleek coupes to commanding SUVs, our inventory is handpicked to
            offer something unique to every driver. We believe that choosing a
            luxury vehicle should be an experience of passion, not pressure.
          </p>
        </section>
        <section className="mb-12 text-center">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
            Personalized and Hassle-Free Buying Experience
          </h2>
          <p className="mb-4 leading-relaxed">
            Purchasing a luxury car should be as exciting as driving it. That’s
            why our team offers a streamlined, personalized buying journey from
            start to finish. We provide complete transparency, expert guidance,
            and a no-pressure approach, ensuring you feel fully confident in
            your decision.
          </p>
          <p className="mb-4 leading-relaxed">
            With flexible return options and a comprehensive warranty plan, you
            can drive away with peace of mind, supported every mile of the
            journey.
          </p>
        </section>
        <section className="mb-12 text-center">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
            Exceptional Service, Every Step of the Way
          </h2>
          <p className="mb-4 leading-relaxed">
            Our commitment to service doesn’t end once you drive off the lot.
            With round-the-clock support and priority maintenance scheduling, we
            ensure your vehicle remains as exceptional as the day you bought it.
            We offer same-day delivery options in select areas for the ultimate
            convenience.
          </p>
        </section>
        <section className="text-center">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">
            Meet the Experts Behind Your Dream Car
          </h2>
          <p className="mb-4 leading-relaxed">
            <strong>Devendra</strong>, our Founder and CEO, brings over 15 years
            of automotive expertise to the table. His passion for luxury cars is
            matched only by his commitment to providing the best possible
            customer experience.
          </p>
          <p className="text-lg text-purple-600 font-semibold mt-8">
            Ready to experience the thrill of a premium vehicle?{" "}
            <Link to="/products" className="text-purple-600 hover:underline">
              Discover your perfect car.
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
