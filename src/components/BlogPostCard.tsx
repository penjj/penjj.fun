import type { Component } from 'solid-js'

export interface BlogPostProps {
  title: string
  date: Date | string
  url: string
  description?: string
  tags?: string[]
}

export const BlogPostCard: Component<BlogPostProps> = (props) => {
  const formattedDate = () => {
    if (typeof props.date === 'string') {
      return new Date(props.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }

    return props.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <a href={props.url} class="block p-5 rounded-lg border dark:border-gray-800 hover:shadow-md transition-all">
      <h3 class="text-xl font-semibold">{props.title}</h3>
      <time class="text-tertiary text-sm block mt-1">{formattedDate()}</time>

      {props.description && <p class="mt-3 line-clamp-2">{props.description}</p>}

      {props.tags && props.tags.length > 0 && (
        <div class="flex flex-wrap gap-2 mt-4">
          {props.tags.map((tag, index) => (
            <span class="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-xs" key={index}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  )
}
