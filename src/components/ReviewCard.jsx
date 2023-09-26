// Importing the star icon from an external file or module.
import { star } from "../assets/icons";

// Define the ReviewCard component as a functional component that accepts props.
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (

    // Start rendering the card element with specific CSS classes and styles.
    <div className='flex justify-center items-center flex-col'>

      {/* Render an image of the customer with specified dimensions and styles. */}
      <img
        src={imgURL}
        alt='customer'
        className='rounded-2xl object-cover w-[120px] h-[120px]'
      />

      {/* Render the customer's feedback text. */}
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>

      {/* Render the customer's rating with a star icon and rating value. */}
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>

      {/* Render the customer's name. */}
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
};

// Export the ReviewCard component as the default export of this module.
export default ReviewCard;
