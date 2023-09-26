// Importing components and sections from their respective files or modules.
import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
} from "./sections";

// Define the App component as a functional component.
const App = () => {
  return (
    // Start rendering the main content of the application with a background color.
    <main className='relative bg-orange-100'>
      {/* Render the navigation component (Nav). */}
      <Nav />

      {/* Render the Hero section. */}
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>

      {/* Render the PopularProducts section. */}
      <section className='padding'>
        <PopularProducts />
      </section>

      {/* Render the SuperQuality section. */}
      <section className='padding'>
        <SuperQuality />
      </section>

      {/* Render the Services section. */}
      <section className='padding-x py-10'>
        <Services />
      </section>

      {/* Render the CustomerReviews section. */}
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>

      {/* Render the Subscribe section. */}
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>

      {/* Render the Footer section. */}
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

// Export the App component as the default export of this module.
export default App;
