

export default function Experience({data}){
    return (
        <div>
            {
                data.map((item, index) => (
                    <div className="experience-container">
                        <div key={index} className="experience-content">
                            <h4>{item.title}</h4>
                            <p>{item.company}</p>
                            <p>{item.date}</p>
                        </div>
                        <span className="material-icons">arrow_outward</span>
                    </div>
                ))
            }
            <style jx>{
                `
                .experience-content h4{
                        font-size: 1.5rem;
                        font-weight: 900;
                        color: var(--warn-color);
                        font-family: 'Roboto', sans-serif;
                }
                .experience-content p{
                        font-size: 1.2rem;
                        font-weight: 400;
                        color: var(--primary-color);
                        font-family: 'Roboto', sans-serif;
                }
                .experience-content p:last-child{
                        color: var(--secondary-color);
                        font-weight: 900;
                }
                .experience-container {
                     display: flex;
                     justify-content: space-between;
                     padding: 1rem;
                     border-bottom: 1px solid #eaeaea;
                }
                .experience-content {
                     display: flex;
                     flex-direction: column;
                }
                .material-icons {
                     font-size: 2.5rem;
                     color: var(--warn-color);
                    align-self: center;
                }
                `
           }
           </style>
        </div>
    )
}
