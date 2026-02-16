function Navbar() {
  return (
    <nav className=" shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex  items-center p-4">
        <div className="flex flex-initial justify-end w-100 border">
          <button className="font-bold text-sm rounded-xl shadow-2xl border p-2">First Financial Co.</button>
        </div>

        <div className="hidden md:flex flex-initial md:justify-center md:w-160 border gap-6">
          <a href="#">الرئيسية</a>
          <a href="#">خدماتنا</a>
          <a href="#">من نحن</a>
          <a href="#">المدونة</a>
        </div>

        {/* <div className="flex-initial flex justify-end border"></div> */}

        {/* <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
