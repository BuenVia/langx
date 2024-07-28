import { useEffect, useState } from "react"
import axios from 'axios'
import SubCategory from "./SubCategory"

const Category = (props) => {

    const [subCategories, setSubCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const url = `http://127.0.0.1:8000/api/sub-category/${props.category.id}`
        const getSubCategories = async () => {
            try {
                await axios.get(url).then(res=> setSubCategories(res.data))
                setLoading(true)
            } catch (error) {
                console.error(error)
            }
        }
        getSubCategories()
    }, [])

    return (
        <>
            <div key={props.category.id} className="category__card">
                <div className="category__card__title">
                    <h2>{props.category.name}</h2>
                </div>
                <p className="category__card__desc">{props.category.description}</p>
                {loading ? <div>
                    {subCategories.map(subcat => {
                        return <SubCategory key={subcat.id} subcat={subcat} />
                    })}
                </div> : null}
            </div>
        </>
    )
}

export default Category