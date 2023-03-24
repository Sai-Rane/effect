import React, { useState, useEffect } from "react";

const App = () => {
  const [resourceType, setresourceType] = useState("posts");

  const handleClick = () => {
    console.log("1st button was clicked");
    setresourceType("1st button was clicked!!");
  };

  //useEffect with only single parameter
  // useEffect(() => {
  //   console.log("useeffect");
  // });

  // useEffect with 2nd parameter
  useEffect(() => {
    console.log("useeffect");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);

  return (
    <>
      {/* <button onClick={() => setresourceType("You have clicked me!!")}> */}
      <button onClick={handleClick}>Click here!</button>
      <button onClick={() => setresourceType("You have 2nd button!!")}>
        2nd button
      </button>
      <button onClick={() => setresourceType("You have 3rd button!!")}>
        3rd button
      </button>
      <h2>{resourceType}</h2>
    </>
  );
};

export default App;
