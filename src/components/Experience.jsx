export default function Experience({ data }) {
    return (
        <ul className="timeline">
            {data.map((item, index) => (
                <li key={index} className="timeline-item">
                    <span className="timeline-marker"></span>
                    <div className="timeline-content">
                        <div className="experience-header">
                            <div className="experience-title-group">
                                <h4>{item.title}</h4>
                                <h5>{item.company}</h5>
                            </div>
                            <span className="experience-date">{item.date}</span>
                        </div>
                        {item.responsibilities && item.responsibilities.length > 0 && (
                            <ul className="experience-list">
                                {item.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        )}
                        {item.achievements && item.achievements.length > 0 && (
                            <div className="achievements-section">
                                <ul className="experience-list achievements-list">
                                    {item.achievements.map((ach, idx) => (
                                        <li key={idx}>{ach}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </li>
            ))}
            <style jx>{`
                .timeline {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    position: relative;
                }
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 9px;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: var(--color-border);
                }
                .timeline-item {
                    margin-bottom: 2rem;
                    position: relative;
                    padding-left: 2rem;
                }
                .timeline-marker {
                    position: absolute;
                    left: 0;
                    top: 5px;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: var(--color-primary);
                    border: 4px solid var(--color-surface);
                    box-shadow: 0 0 0 2px var(--color-border);
                }
                .timeline-content {
                    background-color: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-card);
                    padding: 1.5rem;
                }
                .experience-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                }
                .experience-title-group h4 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--color-text);
                    margin: 0 0 0.25rem 0;
                }
                .experience-title-group h5 {
                    font-size: 1rem;
                    font-weight: 500;
                    color: var(--color-accent);
                    margin: 0;
                }
                .experience-date {
                    font-size: 0.9rem;
                    color: var(--color-text-secondary);
                }
                .experience-list {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin: 0.5rem 0;
                }
                .achievements-section {
                    margin-top: 1rem;
                    padding-top: 0.5rem;
                    border-top: 1px dashed var(--color-border);
                }
            `}</style>
        </ul>
    );
}
