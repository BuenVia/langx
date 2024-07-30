const Choice = (props) => {

    const handleClick = (e) => {
        const { value } = e.target
        props.handleChoice(value)
    }

    return (
        <div className="choice_container">
           <p>Choose Verb</p>
            <div className="btn-container">
                {props.dataArr.map(data => {
                    return <button 
                        key={data.id} 
                        className="choice_btn" 
                        value={data.id} 
                        onClick={handleClick}
                        >{data.verb} / {data.infinitive_fre}</button>
                })}
            </div>
        </div>
    )
}

export default Choice