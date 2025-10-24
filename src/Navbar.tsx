import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 px-6 py-4 transition-colors duration-300 ${
        scrolled ? "bg-black text-white" : "bg-black text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <img src="/logo.png" alt="logo" className="ml-6 h-8" />

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* เมนู Desktop */}
        <div className="hidden md:flex gap-24 absolute left-1/2 transform -translate-x-1/2 p-4">
          <a href="#">Home</a>
          <a href="#car1">About</a>
          <a href="#">Contact Us</a>
          <a href="#">More</a>
        </div>

      <div className="hidden md:flex items-center gap-6 mr-6">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </div>

      {/* เมนู Mobile */}
      {menuOpen && (
        <div className="flex flex-col md:hidden mt-4 gap-2">
          <a href="#">Home</a>
          <a href="#car1">About</a>
          <a href="#">Contact Us</a>
          <a href="#">More</a>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
