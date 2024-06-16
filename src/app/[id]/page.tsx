import React from "react";

function Page({ params }: { params: { id: string } }) {
  return <div>redirect {params.id}</div>;
}

export default Page;
