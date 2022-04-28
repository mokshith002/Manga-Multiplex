import React from "react";

export default function ManagerOnly() {
  return (
    <div
      class="col"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div class="row">
        <h1>Error: You are not Authorized, Manager Access only</h1>
      </div>
    </div>
  );
}
