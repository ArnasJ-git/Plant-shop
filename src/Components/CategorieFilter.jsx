import { useState } from 'react';
import useCategories from '../hooks/useCategories';
import './ComponentsStyle/CategorieFilter.scss';


export default function CategorieFilter({ onCategoryChange,selectedCategories }) {

  const { categories } = useCategories();

  const [selectedcategories, setSelectedCategories] = useState([]);

  const handleChange = categoryId => {
    if (categoryId === 'all') {
      setSelectedCategories([]);
      onCategoryChange([]);

      return;
    }
    const updateCategories = selectedcategories.includes(categoryId)
    ? selectedcategories.filter(id => id !== categoryId)
    : [...selectedcategories, categoryId];

    setSelectedCategories(updateCategories);
    onCategoryChange(updateCategories);

  }

  return (
    <div className='category-filter'>
      <details>
        <summary>By categories</summary>
        <div className='category-dropdown'>
          <label>
            <input type="checkbox"
              checked={selectedcategories.length === 0}
              onChange={() => handleChange('all')}
            />
            All
          </label>

          {categories.map(category => (
            <label key={category.id}>
              <input type="checkbox"
                checked={selectedcategories.includes(category.id)}
                onChange={() => handleChange(category.id)}
              />
              {category.title}
            </label>
          ))}
        </div>
      </details>
    </div>
  )
}
