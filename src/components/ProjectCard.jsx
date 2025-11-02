function ProjectCard({ cardInfo }) {
	return (
		<article className="flex flex-col justify-between resize-card-box border-2 dark:bg-grey-800 bg-grey-300 dark:border-grey-700 border-grey-400 dark:hover:border-grey-600 hover:border-grey-500 transition-colors duration-100 rounded-md p-4">
			<h3 className="text-lg font-bold dark:text-grey-400 text-grey-800">{cardInfo.name}</h3>
			<p className="text-balance font-medium resize-card-desc dark:text-grey-400 text-grey-700">{cardInfo.desc}</p>
			<div className="flex gap-2 text-sm">
				{cardInfo.tech.map((p, i) => (
					<span key={i} className="float-desc-card">
						{p}
					</span>
				))}
			</div>
			<div className="flex gap-4 dark:text-grey-500 text-grey-800">
				<a href={cardInfo.github} aria-label="Link to the project in github" className="card-links" target="blank">
					Github
				</a>
				<a href={cardInfo.website} aria-label="Link to the project website" className="card-links" target="blank">
					Website
				</a>
			</div>
		</article>
	);
}

export default ProjectCard;
