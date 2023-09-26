// Importing the star icon from an external file or module.
import { star } from "../assets/icons";

// Define the PopularProductCard component as a functional component that accepts props.
const PopularProductCard = ({ imgURL, name, price }) => {
  return (

    // Start rendering the card element with specific CSS classes and styles.
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>

      {/* Render an image of the product with specified dimensions and styles. */}
      <img src={imgURL} alt={name} className='w-[320px] h-[320px] object-contain' />

      {/* Render a rating section with a star icon and rating value. */}
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='text-xl leading-normal text-slate-gray'>(4.8)</p>
      </div>

      {/* Render the product name. */}
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>

      {/* Render the product price. */}
      <p className='mt-2 font-semibold text-fuchsia-900 text-2xl leading-normal'>{price}</p>
    </div>
  );
};

// Export the PopularProductCard component as the default export of this module.
export default PopularProductCard;
