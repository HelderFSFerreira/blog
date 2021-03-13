import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <section>
      <div className="space-y-6">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            tag={post.tag}
          />
        ))}
      </div>
    </section>
  )
};

export default Posts;
