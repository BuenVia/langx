const Finish = (props) => {
    
    const results = props.results

    return (
        <div>
            <p>Finsished!</p>
            {results.map(res => {
                return (
                    <div key={res.id}>
                        <p>{res.question}</p>
                        <p>{res.result === "false" ? res.answer : "Correct"}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Finish