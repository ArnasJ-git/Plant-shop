import { useLocation } from 'react-router-dom';
import usePlants from '../hooks/usePlants';
import DataHandler from '../utils/DataHandler';
import './ComponentsStyle/PlantCardList.scss';
import PlantCard from './PlantCard';

export default function PlantCardList({ filterType = '', limit = 0, selectedCategories = [], priceRange =[0, Infinity] }) {

    const { plants, loading, error } = usePlants();
    const location = useLocation();

    const getFilteredPlants = plants => {
        let filtered = [...plants];

        /* filtravimas pagal kategorijas */

        if(selectedCategories.length > 0 && !selectedCategories.includes('all')) {
            filtered = filtered.filter(plant => 
                selectedCategories.includes(plant.categoryId)
            );

        }

        // Filtravimas pagal kaina //

        filtered = filtered.filter(plant => {
            const discountedPrice = plant.price * ( 1 - plant.discount/100);

            return (discountedPrice >= priceRange[0] &&  discountedPrice <= priceRange[1])
        })

        
        /* rikiavimas, sort */
        if (filterType === 'hot') {
            filtered.sort((a, b) => b.rating - a.rating)

        } else if (filterType === 'deals') {
            filtered.sort((a, b) => b.discount - a.discount);

        } else if (filterType === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);

        } else if (filterType === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        }
        return limit ? filtered.slice(0, limit) : filtered;
    }

    const filteredPlants = getFilteredPlants(plants)

    console.log(filteredPlants);

    const totalPlants = filteredPlants.length;
    const allPlants = plants.length;

    return (
        <>

            {
                location.pathname == '/products' && (
                    <p className='plants-counter'>Showing {totalPlants} from {allPlants} plants</p>
                )
                
            }
            <div className='plant-card-list'>
                <DataHandler loading={loading} error={error}>
                    {
                        filteredPlants.length === 0 ? (
                        <p className='no-results'>Your search did not match any criteria</p>
                        ) : (
                             filteredPlants.map(p => (
                            <PlantCard key={p.id} imageSrc={p.imageSrc} title={p.title} price={p.price} discount={p.discount} plantId={p.id} />
                        ))

                        )       
                    }

                </DataHandler>

            </div>
        </>
    )
}
