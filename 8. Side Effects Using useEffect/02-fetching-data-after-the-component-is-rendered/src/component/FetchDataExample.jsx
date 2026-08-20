import React, { useEffect, useState } from "react";
import Post from "./Post";
const URL = "https://jsonplaceholder.typicode.com/postss";

function FetchDataExample() {
  const [jsonItems, setJsonItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setJsonItems(data);

    if (!(response.status >= 200 && response.status <= 299)) {
      setIsError(true);
      setErrorMsg("Something Went Wrong");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }

  if (isError) {
    return <h1>{ErrorMsg}</h1>;
  }

  // useEffect(() => {
  //   fetch(URL)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setJsonItems(data);
  //     });
  // }, []);

  console.log(jsonItems);
  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Post Title</th>
            <th>Post Description</th>
          </tr>
        </thead>
        <tbody>
          {jsonItems.map((jsonItem) => (
            <Post key={jsonItem.id} {...jsonItem} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FetchDataExample;
