import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h3>Something went wrong!</h3>
      <h3>{error?.error?.message}</h3>
      <h4>{error?.status + " " + error?.statusText}</h4>
    </div>
  );
};

export default Error;
