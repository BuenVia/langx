import TestButtons from "../components/TestButtons";

const SubCategory = (props) => {
    return (
        <>
            <div key={props.subcat.id} className="card">
                <div className="">
                    <h2>{props.subcat.name}</h2>
                </div>
                <div className="card__test__btns">
                    <TestButtons testId={props.subcat.id} />
                </div>
            </div>
        </>
    )
}

export default SubCategory