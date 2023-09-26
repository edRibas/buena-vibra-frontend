// Importing the Button component and an image from external files or modules.
import { shoe8 } from "../assets/images";
import { Button } from "../components";

// Define the SuperQuality component as a functional component.
const SuperQuality = () => {
  return (

    // Start rendering the section with an ID 'about-us' and specific CSS classes.
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      {/* Left side: Text content */}
      <div className='flex flex-1 flex-col'>

        {/* Render a heading with specific styles. */}
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You Shoes
          <br />
          <span className='text-fuchsia-900'>From Another World </span>
        </h2>

        {/* Render a paragraph with specific styles. */}
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        {/* Render another paragraph with specific styles. */}
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        {/* Render a button with the label 'View details'. */}
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      {/* Right side: Image */}
      <div className='flex-1 flex justify-center items-center'>

        {/* Render an image of the shoe product with specified dimensions and styles. */}
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

// Export the SuperQuality component as the default export of this module.
export default SuperQuality;
