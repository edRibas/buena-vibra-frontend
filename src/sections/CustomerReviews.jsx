// Importing the ReviewCard component and reviews data from external files or modules.
import { ReviewCard } from "../components";
import { reviews } from "../constants";

// Define the CustomerReviews component as a functional component.
const CustomerReviews = () => {

  return (

    // Start rendering the section with a CSS class 'max-container'.
    <section className='max-container'>

      {/* Render a heading with specific styles. */}
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-fuchsia-900'> Customers </span>
        Say?
      </h3>

      {/* Render a paragraph with specific styles. */}
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      {/* Render a flex container with specific styles, containing individual ReviewCard components. */}
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (

          // Render a ReviewCard component for each review in the 'reviews' array.
          <ReviewCard
            key={index} // Key prop is used to help React efficiently update the component.
            imgURL={review.imgURL} // Pass the review's image URL as a prop.
            customerName={review.customerName} // Pass the customer's name as a prop.
            rating={review.rating} // Pass the customer's rating as a prop.
            feedback={review.feedback} // Pass the customer's feedback as a prop.
          />
        ))}
      </div>
    </section>
  );
};

// Export the CustomerReviews component as the default export of this module.
export default CustomerReviews;
