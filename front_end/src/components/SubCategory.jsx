import TestButtons from "../components/TestButtons";

const SubCategory = (props) => {
    return (
        <>
            <div key={props.subcat.id} className="card">
                <div className="">
                    <h2>{props.subcat.name}</h2>
                </div>
                <div className="card__test__container">
                    <div className="card__test__learn">
                        <h3>Learn</h3>
                        <a className="card__test__btn" href={`blogs/${props.subcat.id}`}>{props.subcat.name}</a>
                    </div>
                    <div className="card__test__btns">
                        <h3>Practice</h3>
                        <TestButtons testId={props.subcat.id} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubCategory