const Finish = (props) => {
    
    const results = props.results

    return (
        <div className="finish__container">
            <h3>Result</h3>
            <div className="finish__card">
                {results.map(res => {
                    const ansStyle = res.result === "false" ? "finish__item__incorrect" : "finish__item__correct"
                    return (
                        <div key={res.id} className={`finnis__item ${ansStyle}`}>
                            <p className="finish__question">{res.question}</p>
                            {res.result === "false" ? <p className="finish__answer">{res.answer}</p> : <p style={{fontSize: "12px"}}>Correct</p>}
                        </div>
                    )
                })}
            </div>
            <a className="finish__btn" href="/">Finish</a>
        </div>
    )
}

export default Finish