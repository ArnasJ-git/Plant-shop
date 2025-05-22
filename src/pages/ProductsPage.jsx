import { useEffect, useState } from "react";
import PlantCardList from "../Components/PlantCardList";
import SecondTitle from "../Components/SecondTitle";
import './pagesStyle/ProductsPage.scss';
import CategorieFilter from "../Components/CategorieFilter";
import PriceFilter from "../Components/PriceFilter";
import { useSearchParams } from "react-router-dom";


export default function ProductsPage(onCategoryChange, selectedCategories) {

const [sortType, setSortType] = useState('deals');
/* const [selectedCategories, setSelectedCategories] = useState([]); */

const [priceRange, setPriceRange] = useState([0, Infinity]);
const handlePriceChange = range => {
  setPriceRange(range);
}


const [searchParams, setSearchParams] = useSearchParams();
useEffect(() => {
  const category = searchParams.get('category');

  if(category && !selectedCategories.includes(category)) {
    setSelectedCategories([Number(category)])
  }

}, [searchParams])


const handleSortChange = (e) => {
 setSortType(e.target.value);
}

const handleCategoryChange = (categories) => {
  setSelectedCategories(categories || [])
  setSearchParams({category: categories[0] || ''});
}



  return (
    <>
      <SecondTitle big='Shop' small='Find the perfect plant for your space' />
      <div className="wrapper products-container">
        <aside className="aside">
          <CategorieFilter onCategoryChange = {handleCategoryChange} />
          <PriceFilter 
          onPriceChange={handlePriceChange}
          
          />
        </aside>

        <div className="cards-container">
          <div className="sort-block">
            <label htmlFor="sort">Sort by</label>
            <select className="sort" id="sort" value={sortType} onChange={handleSortChange}>
              <option value="hot">Popular</option>
              <option value="deals">Biggest discount</option>
              <option value="price-high">Price(high to low)</option>
              <option value="price-low">Price(low to high)</option>
            </select>
          </div>
          <PlantCardList
           filterType={sortType} 
           selectedCategories={selectedCategories}
           priceRange={priceRange}
           />
        </div>

      </div>
    </>


  )
}
