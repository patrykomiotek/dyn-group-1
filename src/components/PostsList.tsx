interface PostDto {
  id: number;
  title: string;
  content: string;
}

interface PostsListDto {
  records: PostDto[];
}

const data: PostsListDto = {
  records: [
    {
      id: 1,
      title: "Lorem",
      content: "ipsum",
    },
    {
      id: 2,
      title: "Sit dolor",
      content: "amit",
    },
  ],
};

export function PostsList() {
  return (
    <div>
      <h2 className="text-3xl">React posts</h2>
      {data.records.map((elem) => (
        <div key={elem.id}>
          <h2 className="text-2xl">{elem.title}</h2>
          <p>{elem.content}</p>
        </div>
      ))}
    </div>
  );
}
