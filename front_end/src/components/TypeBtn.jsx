const TypeBtn = (props) => {

    const handleChange = (e) => {
        const { value, id } = e.target
        props.handleChange(id, value)
    }

    return <button id={props.id} className={`test__ans__btn ${props.active === props.id ? "test__btn__active": null}`} value={props.value} onClick={handleChange}>{props.value}</button>
}

export default TypeBtn