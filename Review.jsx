import React from 'react'

export default function Review() {
  return (
    <div>
      

         {/* review section starts */}
      <div className="review-sec">
        <div className="container review-sec-pc">
          <div className="row justify-content-center">
            <div className="col review-sec-items">
              <div className="review">
                <div className="review-img">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059768/google-logo_qnfy19.svg"
                      width={120}
                      height={30}
                      alt="Google"
                    />
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059772/star-yellow_b1c6tc.svg"
                      width={120}
                      height={30}
                      alt="Rating"
                    />
                  </div>
                </div>
                <div className="rating">
                  <h4>4.4/5</h4>
                </div>
              </div>
            </div>
            <div className="col review-sec-items">
              <div className="review">
                <div className="review-img">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059774/trustpilot-logo_s1dbp4.svg"
                      width={120}
                      height={30}
                      alt="Trustpilot"
                    />
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059770/star-5_fvrvnc.svg"
                      width={120}
                      height={30}
                      alt="Rating"
                    />
                  </div>
                </div>
                <div className="rating">
                  <h4>4.4/5</h4>
                </div>
              </div>
            </div>
            <div className="col review-sec-items">
              <div className="review">
                <div className="review-img">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059767/capterra_abfpvj.svg"
                      width={120}
                      height={30}
                      alt="Capterra"
                    />
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059772/star-yellow_b1c6tc.svg"
                      width={120}
                      height={30}
                      alt="Rating"
                    />
                  </div>
                </div>
                <div className="rating">
                  <h4>4.4/5</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-sec-mob">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="col review-sec-items">
                  <div className="review">
                    <div className="review-img">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059768/google-logo_qnfy19.svg"
                          width={120}
                          height={30}
                          alt="Google"
                        />
                      </div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059772/star-yellow_b1c6tc.svg"
                          width={120}
                          height={30}
                          alt="Rating"
                        />
                      </div>
                    </div>
                    <div className="rating">
                      <h4>4.4/5</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col review-sec-items">
                  <div className="review">
                    <div className="review-img">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059774/trustpilot-logo_s1dbp4.svg"
                          width={120}
                          height={30}
                          alt="Trustpilot"
                        />
                      </div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059770/star-5_fvrvnc.svg"
                          width={120}
                          height={30}
                          alt="Rating"
                        />
                      </div>
                    </div>
                    <div className="rating">
                      <h4>4.4/5</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col review-sec-items">
                  <div className="review">
                    <div className="review-img">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059767/capterra_abfpvj.svg"
                          width={120}
                          height={30}
                          alt="Capterra"
                        />
                      </div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059772/star-yellow_b1c6tc.svg"
                          width={120}
                          height={30}
                          alt="Rating"
                        />
                      </div>
                    </div>
                    <div className="rating">
                      <h4>4.4/5</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* review section ends */} 
    </div>
  )
}
