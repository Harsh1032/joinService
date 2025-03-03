import React from "react";

const AdminNavbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full backdrop-blur-[12.5px] bg-white border-b border-b-[#8E8E8E] flex px-5 lg:px-8 lg:py-3 py-2 items-center relative gap-x-4">
        <img
          src="/Logo.png"
          alt="company logo"
          className="lg:w-[131px] lg:h-[69px] w-[67px] h-[36px]"
        />
      </nav>
    </div>
  );
};

export default AdminNavbar;
