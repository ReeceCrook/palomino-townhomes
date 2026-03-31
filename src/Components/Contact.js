import "../css/Contact.css"
import jimPhoto from "../assets/mainPics/jim.jpg"
import mbLogo from "../assets/mainPics/MB-logo.png"
import facebookLogo from "../assets/mainPics/Facebook_Logo_Primary.png"

function Contact() {
  return (
    <div className='aboutUsPage'>
      <div className='contactUsWrapper'>
        <img src={mbLogo} alt='Masterbilt-Logo' className='mbLogo aboutUsMainLogo' />
        <div className="about-us">
          <h2 className="about-us-title">Welcome to Palomino Ranch <br /> Crafted with Pride by MasterBilt Homes</h2>

          <div className="about-us-card">
            <p>
              At MasterBilt Homes, we are proud to bring our signature quality and craftsmanship to the Palomino Ranch community. As a locally owned and operated builder serving El Paso County
              since 1991, we design every home with the same commitment to integrity, functionality, and lasting value that has defined the nearly 1,000 homes we’ve built over the years.
            </p>

            <p>
              Palomino Ranch features thoughtfully designed floorplans with modern finishes and open, functional layouts to fit a variety of lifestyles. The main level offers a bright and spacious
              living area with 9-foot ceilings, luxury vinyl plank flooring, recessed lighting, and a seamless open-concept flow into the kitchen — creating the perfect space for both everyday living
              and entertaining.
            </p>

            <p>
               Our kitchens are designed with both style and practicality in mind, featuring Aristokraft 42" cabinetry, stainless steel appliances, generous counter space, and a convenient dining area.
              Several floorplans are available, including options with the primary bedroom, ensuite bath, and laundry all conveniently located on the main level. A versatile main-level bonus room provides
              flexibility for a home office, playroom, or media space.
            </p>

            <p>
              Upstairs, you’ll find comfortable bedrooms filled with natural light. The unfinished basement offers endless possibilities for future expansion, additional living space, or storage — allowing
              you to personalize your home as your needs grow.
            </p>

            <p>
              Located in a growing neighborhood with easy access to shopping, dining, parks, and major commuter routes, Palomino Ranch offers both convenience and community. Detached garages are included,
              providing added functionality and storage.
            </p>

            <p className="about-us-emphasis">
              We invite you to experience the quality, craftsmanship, and thoughtful design that define every MasterBilt home. Palomino Ranch is more than a place to live — it’s a place to call home.
            </p>
          </div>
        </div>
       
        <div className="businessCardWrapper">
          <a
            href="https://www.bbb.org/us/co/palmer-lake/profile/building-contractors/masterbilt-homes-0785-5281152/#sealclick"
            target="_blank"
            rel="noopener noreferrer"
            className="bbbRating"
          >
            <img src="https://seal-southerncolorado.bbb.org/seals/darkgray-seal-200-65-bbb-5281152.png" alt="Masterbilt Homes BBB Review" />
          </a>

          <aside className='businessCard'>
            <img src={mbLogo} alt='Masterbilt-Logo' className='mbLogo businessCardLogo' />
            <img src={jimPhoto} alt="Jim's Masterbilt Profile" />
            <h2>James A. Stiltner</h2>
            <a href='tel:7199643526'>719-964-3526</a> <br />
            <a href='mailto:jim@masterbilt.com'>jim@masterbilt.com</a>
          </aside>

          <a
            href='https://www.facebook.com/MasterbiltHomes'
            target='_blank'
            rel="noopener noreferrer"
            className="facebookButton"
          >
            <img src={facebookLogo} alt="Masterbilt Townhomes Facebook Logo" className="facebookLogo" />
            <span>Visit Our Facebook Page</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
