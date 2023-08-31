import { useEffect } from "react";
const User = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Set Interval Initiated");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Set Interval Stopped");
    };
  }, []);
  return (
    <div>
      <h1>User Function Component</h1>
    </div>
  );
};

export default User;
