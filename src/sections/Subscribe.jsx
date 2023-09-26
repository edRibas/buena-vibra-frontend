// Importing the Button component from an external file or module.
import { Button } from "../components";

// Define the Subscribe component as a functional component.
const Subscribe = () => {
  return (

    // Start rendering the section with an ID 'contact-us' and specific CSS classes.
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      {/* Render the heading with specific styles. */}
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-bold'>
        Sign Up for
        <span className='text-fuchsia-900'> Updates </span>& Newsletter
      </h3>

      {/* Render the container for the email input and Sign Up button. */}
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5  rounded-full'>

        {/* Render the email input field with a placeholder. */}
        <input type='text' placeholder='subscribe@mail.com' className='input' />

        {/* Render the Button component with the label 'Sign Up' and fullWidth property. */}
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

// Export the Subscribe component as the default export of this module.
export default Subscribe;
