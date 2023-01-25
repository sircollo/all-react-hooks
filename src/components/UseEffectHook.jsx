import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function UseEffectHook() {
    const [data, setData] = useState("")
    // mainly used for api functions
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>
    <h1>useEffect Hook</h1>
    <p>{data}</p>
  </div>;
}
