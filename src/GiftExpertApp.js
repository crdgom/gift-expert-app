import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

    //const categories = ['Autos', 'Computadoras', 'JavaScript', 'Python'];
    const [categories, setCategories] = useState(['Autos', 'Computadoras', 'JavaScript', 'Python'])
    
    //const handleAddCategories = ()=>{
        //setCategories([...categories, 'algo'])
    //}
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
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