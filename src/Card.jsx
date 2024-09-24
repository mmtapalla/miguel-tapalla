function Card({
    year = "",
    image = "",
    projectLink = "",
    heading = "",
    subheading = "",
    info = "",
    tags = [],
    badge = "",
}) {
    return (
        <>
            <div className="year">
                {year && <span>{year}</span>}
                {image && projectLink ? (
                    <a href={projectLink}>
                        <img src={image} className="image" alt={heading} />
                    </a>
                ) : (
                    image && <img src={image} className="image" alt={heading} />
                )}
            </div>
            <div className="info">
                {heading && <h3>{heading}</h3>}
                {subheading && <h4>{subheading}</h4>}
                {info && <p dangerouslySetInnerHTML={{ __html: info }}></p>}
                {tags.length > 0 && (
                    <ul>
                        {tags.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))}
                    </ul>
                )}
            </div>
            {badge && (
                <div className="badge">
                    <img src={badge} alt="badge" />
                </div>
            )}
        </>
    );
}

function Tag({ tag }) {
    return (
        <li>
            <div>{tag}</div>
        </li>
    );
}

export default Card;
