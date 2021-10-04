import { getDefaultNormalizer } from "@testing-library/dom"
import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {


    const [categories, setCategorias] = useState(['Ourense'])


    return (<>
    <h2>GifExpertApp</h2>
    <AddCategory setCategorias={setCategorias} categories={categories}/>
    <hr></hr>

    
    <ol>
        {
            categories.map( category => (
                <GifGrid  key={category} category={category}/>
            ))
        }
    </ol>
    
    </>
    )


}

export default GifExpertApp;