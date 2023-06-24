async function getPosts() {
  const res = await fetch(`${process.env.baseUrl}api/post`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page() {
  const posts = await getPosts();
  return (
    <div className="m-5">
      <h1>Post</h1>
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Content</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr className="border-b" key={post.id}>
              <td className="px-6 py-2">{post.title}</td>
              <td className="px-6 py-2">{post.content}</td>
              <td className="px-6 py-2">
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
