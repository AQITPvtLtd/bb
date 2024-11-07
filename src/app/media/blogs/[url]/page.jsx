import React from "react";
import Detailedblog from "./Detailedblog";

const page = ({ params }) => {
  const id = params.url;
  return (
    <div>
      <Detailedblog id={id} />
    </div>
  );
};

export default page;
