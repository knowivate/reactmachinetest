import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const clockRefreshInterval = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(clockRefreshInterval);
    };
  });

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">time:</h1>
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">{date.toLocaleTimeString()}</h1>
          </div>
        </div>
      </section>
    </>
  );
}
