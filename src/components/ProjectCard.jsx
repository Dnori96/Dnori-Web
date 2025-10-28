
function ProjectCard({ lang, cardInfo }) {
  return(
    <article className="h-44 w-md rounded-xl dark:bg-gray-400 bg-grey-800">
      <h3>Project Name</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, aliquid.</p>
      <div>
        <span>html</span>
        <span>css</span>
        <span>javascript</span>
      </div>
    </article>
  )
}

export default ProjectCard