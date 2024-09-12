/* eslint-disable react/prop-types */
import CategoryItem from "../category.item/category.component";
import "../directory/directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div>
      <div className="directory-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
