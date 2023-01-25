import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect, useMemo } from "react";
export default function UseMemoHook() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const findLongestName = (comments) => {
    if(!comments) return null;

    let longestName = ""
    for(let i = 0; i < comments.length; i++){
        let currentName = comments[i].name
        if(currentName.length > longestName.length){
            longestName = currentName;
        }
    }
    console.log(longestName);
    return longestName
  }
  const getLongestName = useMemo(()=>findLongestName(data), [data])
  return <div>
        <h1>useMemo Hook</h1>
        <div>{getLongestName}</div>
    </div>;
}
