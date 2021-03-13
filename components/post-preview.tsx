import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
  tag: string
}

const PostPreview = ({
  title,
  date,
  excerpt,
  slug,
  tag
}: Props) => {
  return (
    <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400"><DateFormatter dateString={date}/></span>
          <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{tag}</a>
      </div>

      <div className="mt-2">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a href="/posts/[slug]" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{title}</a>
        </Link>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{excerpt}</p>
      </div>
    </div>
  )
};

export default PostPreview
