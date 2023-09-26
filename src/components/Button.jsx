// Define the Button component as a functional component that accepts props.
const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (

    // Start rendering the button element with various CSS classes and styles.
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}` // Conditionally apply background, text, and border colors.
          : "bg-emerald-500 text-black font-bold" // Default background and text color.
        } rounded-full ${fullWidth && "w-full"}`} // Conditionally make the button full-width.
    >
      {label} {/* Render the button label (text). */}

      {/* Conditionally render an icon next to the label if an icon URL is provided. */}
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

// Export the Button component as the default export of this module.
export default Button;
