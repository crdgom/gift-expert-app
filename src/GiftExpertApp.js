import { useState } from "react";

const GifExpertApp = ({title}) => {

    //const categories = ['Autos', 'Computadoras', 'JavaScript', 'Python'];
    const [categories, setCategories] = useState(['Autos', 'Computadoras', 'JavaScript', 'Python'])
    
    const handleAddCategories = ()=>{
        setCategories([...categories, 'algo'])
    }
    return (
        <>
            <h2>{title}</h2>
            <hr/>
            <button onClick={handleAddCategories}>Add categorie</button>
            <ul>
                {
                categories.map( category =>{
                    return <li key={category}>{category}</li>
                    })
                }
            </ul>
        </>
    );
}

GifExpertApp.defaultProps = {title:'Gift Expert App'}

export default GifExpertApp;