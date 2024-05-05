import React, { useEffect, useState } from "react"

const useOnline = () => {
  const [isonline, setIsonline] = useState(true);

  useEffect(() => {
    const handleonline = () => {
      setIsonline(true);
    };
    const handleoffline = () => {
      setIsonline(false);
    };

    window.addEventListener("online", handleonline);
    window.addEventListener("offline", handleoffline);

    return () => {
      window.removeEventListener("online", handleonline);
      window.removeEventListener("offline", handleoffline);
    };
  }, []);

  return isonline;
};

export default useOnline;
