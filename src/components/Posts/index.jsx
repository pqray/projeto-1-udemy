import { PostCard } from "../PostCard";
import "./styles.css";

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        title={post.title}
        key={post.id}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);
