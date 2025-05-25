import type { Component } from 'solid-js'

export interface ProjectProps {
  title: string
  description: string
  technologies: string[]
  github: string
  demo?: string
  featured?: boolean
}

export const ProjectCard: Component<ProjectProps> = (props) => {
  return (
    <div class="border dark:border-gray-800 rounded-lg overflow-hidden">
      <div class="p-5">
        <div class="flex justify-between items-start">
          <h2 class="text-xl font-semibold">{props.title}</h2>
          {props.featured && (
            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>

        <p class="mt-2 text-tertiary">{props.description}</p>

        <div class="flex flex-wrap gap-2 mt-4">
          {props.technologies.map((tech, index) => (
            <span class="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-xs" key={index}>
              {tech}
            </span>
          ))}
        </div>

        <div class="flex gap-4 mt-6">
          <a href={props.github} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-sm">
            <div class="i-bi:github text-5"></div>
            <span>View Source</span>
          </a>

          {props.demo && (
            <a href={props.demo} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-sm">
              <div class="i-lucide-external-link text-4"></div>
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
