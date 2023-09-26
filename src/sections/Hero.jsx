// Importing required dependencies and data from external files or modules.
import { useState } from "react";
import { shoes, statistics } from "../constants";
import { Button, CollectionCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

// Define the Hero component as a functional component.
const Hero = () => {

  // Define a state variable 'bigShoeImg' using the 'useState' hook to manage the image displayed.
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (

    // Start rendering the hero section.
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container bg-orange-100'
    >
      {/* Left-side content of the hero section */}
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 '>
        <p className='text-xl text-emerald-600'>
          Check out our new Summer items
        </p>

        <h1 className='mt-8 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold '>
          <span className='xl:bg-none xl:whitespace-nowrap relative z-10 pr-10'>
            The Alien Invasion
          </span>
          <br />
          <span className='text-fuchsia-900 inline-block mt-3'>
            Buena Vibra
          </span>
          Collection
        </h1>
        <p className='text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish, comfortable, and high-quality clothing that fits your style.
        </p>

        {/* Render a button with the label 'Shop Now' and an arrow icon. */}
        <Button label='Shop Now' iconURL={arrowRight} />

        {/* Render statistics with values and labels. */}
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-bold'>{stat.value}</p>
              <p className='leading-7 text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right-side content of the hero section */}
      <div className='relative flex-1 flex justify-center items-center 
      xl:min-h-screen max-xl:py-40 bg-center'>

        {/* Render a large image of a shoe collection. */}
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={650}
          height={650}
          className='object-contain relative z-9'
        />

        {/* Render a set of CollectionCard components for individual shoes. */}
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <CollectionCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export the Hero component as the default export of this module.
export default Hero;
