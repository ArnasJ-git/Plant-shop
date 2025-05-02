import Title from "./Title";
import './ComponentsStyle/SectionCategories.scss';
import CategoriesList from "./CategoriesList";

export default function SectionCategories() {




    return (
        <>
        <section className="wrapper section-category">
         <Title text1 = 'Shop' text2 = 'By Category' showLink={false} />
         <CategoriesList />
        </section>
        </>
    )
}
