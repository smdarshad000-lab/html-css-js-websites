import axios from "axios";

export default async function BlogPost({ params }: any) {
    console.log(params);

    const postId = params.blogId;

    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    const data = response.data;

    return (
        <div>
            Blog page {postId}

            <br />
            title - {data.title}
            body - {data.body}
        </div>
    );
}