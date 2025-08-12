import React from "react";
import Detailedblog from "./Detailedblog";

const page = ({ params }) => {
  const url = params.url;
  return (
    <div>
      <Detailedblog url={url} />
    </div>
  );
};

export default page;
