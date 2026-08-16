import React, { useEffect, useState } from "react";
const URL = "https://jsonplaceholder.typicode.com/posts";

function FetchDataExample() {
  const [jsonItems, setJsonItems] = useState([]);

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setJsonItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          {jsonItems.map((jsonItem) => {
            return (
              <tr key={jsonItem.id}>
                <td>{jsonItem.id}</td>
                <td>{jsonItem.title}</td>
                <td>{jsonItem.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default FetchDataExample;
