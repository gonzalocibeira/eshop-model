import React, {useState, useEffect} from 'react'
import Item from "./Item"

export default function ItemList() {

    const mockList = [
        {id:"1", title:"Awesome component", desc:"An awesome React component that does xxxx stuff", price:"15", picUrl:"https://www.drupal.org/files/styles/grid-3-2x/public/project-images/web-components-logo-256x256.png?itok=wqGktHNf"},
        {id:"2", title:"ABCD component", desc:"A React component to use on ABCD cases", price:"20", picUrl:"https://www.drupal.org/files/styles/grid-3-2x/public/project-images/web-components-logo-256x256.png?itok=wqGktHNf"},
        {id:"3", title:"YYY component", desc:"A React component handy for YYY projects", price:"30", picUrl:"https://www.drupal.org/files/styles/grid-3-2x/public/project-images/web-components-logo-256x256.png?itok=wqGktHNf"}
    ];

    const mockPromise = new Promise(resolve => setTimeout(()=>resolve(mockList), 2000));

    const [products, setProducts] = useState([]);

    useEffect(() => {
        mockPromise.then(data => {
            setProducts(data);
        })
    
    }, []);    

    return (
        <div classname="itemListContainer" style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {products.map(el => <Item key={el.id} title={el.title} desc={el.desc} price={el.price} picUrl={el.picUrl}/>)}
        </div>
    )
}
