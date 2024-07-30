
const FinishFlash = (props) => {
    
    const handleActive = () => {
        props.handleActive()
    }
    
    return (
        <div className="results_container">
            <p className="results_title">Results</p>
            <p className="results_verb">{props.verb}</p>
            {props.results.map(result => {
                return (
                    <div key={result.id} className={`results_box ${result.ans === "true" ? "results_correct" : "results_incorrect"}`}>
                        <p className="results_eng">{result.eng}</p>
                        <p className="results_fre">{result.fre}</p> 
                    </div>
                )
            })}
            <button className="finish_btn" onClick={handleActive}>Finish</button>
        </div>
    )
}

export default FinishFlash