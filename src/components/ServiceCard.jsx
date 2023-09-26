// Define the ServiceCard component as a functional component that accepts props.
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (

    // Start rendering the card element with specific CSS classes and styles.
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>

      {/* Render a circular icon container with specific dimensions and styles. */}
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>

        {/* Render an image inside the circular icon container. */}
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>


      {/* Render the label or title of the service. */}
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
        {label}
      </h3>

      {/* Render a subtext or description of the service. */}
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        {subtext}
      </p>
    </div>
  );
};

// Export the ServiceCard component as the default export of this module.
export default ServiceCard;
