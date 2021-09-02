import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    //const categories = ['Autos', 'Computadoras', 'JavaScript', 'Python'];
    const [categories, setCategories] = useState([''])
    
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
                categories.map( category =>
                    <GifGrid 
                        key ={category}
                        category={category}

                    />
                )
                }
            </ul>
        </>
    );
}

GifExpertApp.defaultProps = {title:'Gift Expert App'}

export default GifExpertApp;