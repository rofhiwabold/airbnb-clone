function HelpCenter() {
  return (
    <div className="help-page">

      <h1>
        Hi, how can we help?
      </h1>


      <div className="help-search">
        <input
          type="text"
          placeholder="Search help"
        />

        <button>
          Search
        </button>
      </div>


      <div className="help-categories">

        <button>Guest</button>

        <button>Home host</button>

        <button>Experience host</button>

        <button>Service host</button>

        <button>Travel admin</button>

      </div>


      <button className="login-help-btn">
        Log in or sign up
      </button>


      <section>

        <h2>
          Guides for getting started
        </h2>

        <div className="help-card">

          <h3>
            AirCover for guests
          </h3>

          <p>
            Learn about protection and support available during your stay.
          </p>

        </div>


        <div className="help-card">

          <h3>
            Essential resources for new hosts
          </h3>

          <p>
            Learn how to create listings, manage guests, and become a successful host.
          </p>

        </div>


        <button>
          Browse all topics
        </button>

      </section>



      <section>

        <h2>
          Top articles
        </h2>


        <div className="articles">


          <div className="article-card">
            <h3>
              Cancel your home reservation as a guest
            </h3>

            <p>
              You can cancel or make changes to your home reservation in your trips.
            </p>
          </div>



          <div className="article-card">

            <h3>
              Change the date or time of your service or experience reservation
            </h3>

            <p>
              When you book a service or experience, you can update the date or time depending on your host’s availability and cancellation policy.
            </p>

          </div>



          <div className="article-card">

            <h3>
              If your host cancels your home reservation
            </h3>

            <p>
              If your reservation is canceled by your host, you’ll get a full refund or help finding another place.
            </p>

          </div>



          <div className="article-card">

            <h3>
              Payment methods accepted
            </h3>

            <p>
              We support different payment methods depending on your location.
            </p>

          </div>



          <div className="article-card">

            <h3>
              Add or remove a payment method
            </h3>

            <p>
              Find out how to manage your payment methods.
            </p>

          </div>



          <div className="article-card">

            <h3>
              When you’ll pay for your reservation
            </h3>

            <p>
              Timing differs depending on your booking type, payment method, and location.
            </p>

          </div>


        </div>

      </section>


    </div>
  );
}

export default HelpCenter;