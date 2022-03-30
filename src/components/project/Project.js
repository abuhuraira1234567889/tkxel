import React from "react";
import "./project.css";

export default function Project() {
  return (
    <>
      <div className="project-wrapper">
        <div className="project-main">
          <div className="build-team">
            <div className="build-main">
              <div className="build-txt">
                <div className="dedicated-txt">
                  <h2>Build Your Dedicated team</h2>
                </div>
                <div className="team-service">
                  <div className="team-text">
                    <h4>Our Team at your service</h4>
                    <p>
                      Get your projects fast-tracked with best technical and{" "}
                      <br />
                      management talent. Increase quality and efficiency, and
                      retain
                      <br />
                      complete control of teams
                    </p>
                    <button>Build Your team</button>
                  </div>
                </div>
              </div>
              <div className="team-img">
                <img
                  alt="Dedicated Teams"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/embd-dt-placeholder.webp"
                />
              </div>
            </div>
          </div>
          <div className="fixed-price">
            <div className="fixed-main">
              <div className="dedicated-txt">
                <h2>Fixed Price Project</h2>
              </div>
              <div className="team-service">
                <div className="team-text">
                  <h4>We design and develop your vision</h4>
                  <p>
                    Get a comprehensive product development experience from{" "}
                    <br />
                    design to delivery with reduced development costs.
                  </p>
                  <button>Develop Your Product</button>
                </div>
              </div>
            </div>
            <div className="team-img">
              <img
                alt="Fixed Price"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/fp-placeholder-img.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
