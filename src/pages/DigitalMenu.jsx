import { useParams } from "react-router-dom";

import FooterDigitalMenu from "../components/FooterDigitalMenu";
import Category from "../components/menu-itens/Category";
import Subcategory from "../components/menu-itens/Subcategory";
import MenuItem from "../components/menu-itens/MenuItem";

import MenuData from "../mocks/MenuData"; 

function DigitalMenu(){
    let {id} = useParams();    
    return (
        <div>
            <h1>Menu for {id} </h1>
            {MenuData.map((category, index) => (
                <div key={index}>
                <Category name={category.category} />
                {category.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex}>
                    <Subcategory name={subcategory.name} />
                    {subcategory.items.map((item, itemIndex) => (
                        <MenuItem
                        key={itemIndex}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        />
                    ))}
                    </div>
                ))}
                </div>
            ))}
            <FooterDigitalMenu />
        </div>
    )
}

export default DigitalMenu