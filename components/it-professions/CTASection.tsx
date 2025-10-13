export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-16 px-6 relative rounded-xl max-w-6xl mx-auto my-16 flex flex-col md:flex-row items-center justify-around">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-2xl md:text-3xl font-semibold">Get in Touch :</h3>
        <p className="text-xl font-bold">info@dousoft.com</p>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold">Call Us Via:</h3>
        <p className="text-xl font-bold">+01 523 456 789</p>
      </div>

      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center">
        <span className="text-orange-500 font-bold text-2xl">Or</span>
      </div>
    </section>
  );
}
