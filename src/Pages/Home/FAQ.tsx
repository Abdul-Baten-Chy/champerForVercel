const FAQ = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">What is a champer shop?</summary>
            <p className="mt-2">
              A: A champer shop specializes in workspace solutions, offering
              high-quality furniture and accessories designed to enhance
              productivity and comfort.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">
              Q: What types of products do you offer?
            </summary>
            <p className="mt-2">
              A: We offer ergonomic chairs, spacious desks, stylish storage
              solutions, ambient lighting, and various tech gadgets.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">
              Q: Do you offer customization options?
            </summary>
            <p className="mt-2">
              A: Yes, we provide customization options to tailor furniture to
              your specific needs and preferences.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">
              Q: Can I see the products in person before purchasing?
            </summary>
            <p className="mt-2">
              A: Absolutely! You can visit our showroom to see and experience
              our products firsthand.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded">
            <summary className="font-semibold">
              Can I custom order a piece?
            </summary>
            <p className="mt-2">
              Yes, we offer custom orders for special pieces. Please contact us
              for more details.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
