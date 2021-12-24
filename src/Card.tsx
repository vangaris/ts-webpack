import React from "react";

function card() {
  return (
    <div
      id="container"
      style={{
        width: "50%",
        border: "1px solid black",
        margin: "auto auto",
      }}
    >
      <div
        id="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "30%",
            flexWrap: "wrap",
          }}
        >
          <div>logo</div>
          <div>
            <div>twitter</div>
            <div>title</div>
          </div>
        </div>

        <div style={{ marginRight: 10 }}> small logo</div>
      </div>
      <div style={{ padding: 10, display: "flex", flexDirection: "column" }}>
        <h5 style={{}}> {process.env.name}</h5>
        <h5 style={{}}> What is Lorem Ipsum? </h5>
        <h5 style={{}}> What is Lorem Ipsum? </h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}

export default card;
