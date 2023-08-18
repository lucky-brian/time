import { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // อัปเดตทุก 1 วินาที

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-zinc-900 text-gray-200">
        <div className={`text-[300px] font-bold`}>
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
        </div>

      </div>
    </>
  );
}

export default App;

