import React from 'react';

const loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <img
        src="https://www.blogger.com/img/logo_blogger_40px_2x.png"
        className="h-[8rem] w-[10rem]"
        alt="Blog Logo"
      />
      <span className="self-center text-[#c66646] text-2xl mt-[2rem] font-semibold whitespace-nowrap dark:text-white">
        Event Organizer Project
      </span>
      <br />
      <div>
        <span className="mt-1 loading loading-spinner loading-lg"></span>
      </div>
    </div>
  );
};

export default loading;
