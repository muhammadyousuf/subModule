import React from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <div>Hey {name}, TypeScript1.</div>
);

export default SayHello;