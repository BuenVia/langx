const TypeBtn = (props) => {

    const handleChange = (e) => {
        const { value, id } = e.target
        props.handleChange(id, value)
        console.log(typeof(props.id), typeof(props.active));
    }

    return <button id={props.id} className={`test__ans__btn ${props.active === props.id.toString() ? "test__btn__active": null}`} value={props.value} onClick={handleChange}>{props.value}</button>
}

export default TypeBtn