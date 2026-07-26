import axios from "axios";

export default async function BlogPost({ params }: any) {
  const blogId = params.blogId;

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );

  const data = response.data;

  return (
    <div>
      <h1>Blog Page {blogId}</h1>
      <h2>Title: {data.title}</h2>
      <p>Body: {data.body}</p>
    </div>
  );
}