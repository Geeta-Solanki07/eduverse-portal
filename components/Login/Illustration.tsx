import Image from "next/image";
import logo from "../../public/assets/login-3305943-2757111.webp";

export default function Illustration() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <Image
        src={logo}
        width={400}
        height={400}
        alt="Login Illustration"
        className="animate-float"
      />
      <div className="mt-8 text-center text-white z-10">
        <h2 className="text-3xl font-bold">Welcome Back!</h2>
        <p className="mt-2 font-light">Continue your learning journey with Dousoft Eduverse</p>
      </div>

      {/* Decorative circles */}
      <div className="absolute w-72 h-72 bg-white/10 rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-48 h-48 bg-white/10 rounded-full bottom-[-50px] left-[-50px]" />
    </div>
  );
}
