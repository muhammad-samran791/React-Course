import React from "react";

function Post({ id, title, body }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  );
}

export default Post;
