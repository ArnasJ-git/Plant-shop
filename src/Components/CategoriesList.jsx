import './ComponentsStyle/CategoriesList.scss';
import DataHandler from '../utils/DataHandler';
import CategoryCard from './CategoryCard';
import useCategories from '../hooks/useCategories';


export default function CategoriesList() {

    /*   const { data: categories, loading, error } = useFetch('https://gist.githubusercontent.com/ArnasJ-git/4b935a2e57af668d76dffb5dc124c662/raw/fed518e18891b30e759eb7d9066812f93b3edc58/gistfile1.txt',
          'category',
          'fileName') */
    const { categories, loading, error } = useCategories();


    return (


        <div className='categories-list'>
            <DataHandler
                loading={loading}
                error={error}
            />
            {categories.map(elem => (
                <CategoryCard imageSrc={elem.imageSrc}
                    title={elem.title}
                    key={elem.id}
                    categoryId={elem.id}
                />
            ))}
        </div>
    )
}