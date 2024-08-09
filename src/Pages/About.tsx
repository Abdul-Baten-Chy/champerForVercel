function About() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="py-12 px-4 mt-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-gray-800 mb-8 text-center">
            At Champer Shop, our mission is to redefine vehicle comfort by
            offering exceptional luxury accessories that enhance every journey.
            We strive to provide our customers with the highest quality
            products, meticulously designed to combine comfort, style, and
            functionality. Whether it's premium seat covers, custom-fit floor
            mats, or innovative storage solutions, we are committed to exceeding
            expectations and ensuring unparalleled customer satisfaction. Our
            mission extends beyond products; it encompasses a dedication to
            reliability, innovation, and continuous improvement in all aspects
            of our business.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-center">Our Vision</h2>
          <p className="text-lg text-gray-800 mb-8 text-center">
            Our vision at Champer Shop is to lead the industry as the foremost
            provider of luxury vehicle comfort solutions. We envision a future
            where every vehicle owner can experience the ultimate in comfort and
            style through our innovative products. By focusing on innovation,
            quality craftsmanship, and customer care, we aim to set new
            standards in the automotive accessory market. We aspire to be
            recognized not only for our products but also for our commitment to
            sustainability and ethical business practices. Through strategic
            growth and a relentless pursuit of excellence, we aim to build
            enduring relationships with our customers and become synonymous with
            luxury and reliability in the automotive industry.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Location</h2>
        <div className="rounded-lg overflow-hidden">
          {/* Replace with your map component or embed code */}
          <iframe
            className="w-full h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12763.016347329427!2d-73.98025140951894!3d40.75921168344823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA5JzI1LjAiTiA3M8KwNDgnMzguMCJX!5e0!3m2!1sen!2sus!4v1628601810989!5m2!1sen!2sus"
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Connect with Us</h2>
        <div className="flex space-x-4">
          {/* Replace with your social links */}
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Facebook
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Twitter
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Instagram
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
