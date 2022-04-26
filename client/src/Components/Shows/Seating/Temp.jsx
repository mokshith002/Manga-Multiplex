<>
  <div className="row text-center">
    <h2 className="mb-5 _heading">Select Seats</h2>

    <div className="col-12">
      <div className="btn-dark btn">Book Seats</div>
    </div>
  </div>
  <body
    class="u-body d-flex justify-content-center align-items-center _body"
    style={{
      width: "fit-content",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 100,
    }}
  >
    <section class="u-section-3" id="carousel_4b5e" style={{ margin: "auto" }}>
      <div className="_outer-div">
        <div className="_inner-div">
          <img class="u-image u-image-1" src={bg} />
          <p class="u-large-text u-text u-text-body-alt-color u-text-default u-text-variant u-text-1">
            TICKET ID: {ticketId}
          </p>
          <img
            class="u-image u-image-default u-image-2"
            src={poster}
            alt=""
            data-image-width="720"
            data-image-height="900"
          />
          <p class="u-large-text u-text u-text-body-alt-color u-text-default u-text-variant u-text-2">
            Date: 26-4-2022
            <br />
            Time: {time}
            <br />
            Hall No: {hallno}
            <br />
            Seats: {bookedSeats}
            <br />
          </p>
          <p class="u-align-center u-large-text u-text u-text-body-alt-color u-text-variant u-text-3 _p">
            Thank you for booking with us. Hope you have a<br /> fantastic
            experience.
          </p>
        </div>
      </div>
    </section>
  </body>
</>;
