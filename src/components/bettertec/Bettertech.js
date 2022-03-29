import React from "react";
import "./better.css";

export default function Bettertech() {
  return (
    <>
      <div className="better-wrapper">
        <div className="better-head">
          <h4>BetterTech Podcast</h4>
          <h5>VIEW ALL EPISOD</h5>
        </div>
        <div className="podcast-wrap">
          <div className="podcast-img">
            <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/Jonathan%20Donaldson%20YT%20LInked%20Thumbnail.jpg" />
          </div>
          <div className="suggest">
            <div className="strong-partner">
              <div className="strong-img">
                <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/play-pc.svg" />
              </div>
              <div class="short">
                <h3>Building a strong partner ecosystem </h3>
                <i class="las la-volume-up"></i> <p>21 Mins Listen</p>{" "}
              </div>
            </div>
            <div className="strong-partner">
              <div className="strong-img">
                <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/play-pc.svg" />
              </div>
              <div class="short">
                {" "}
                <h3>Fintech and financial inclusion in emerging markets </h3>
                <i class="las la-volume-up"></i> <p>21 Mins Listen</p>{" "}
              </div>
            </div>
            <div className="strong-partner">
              <div className="strong-img">
                <img src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-5a0369c/wp-content/themes/tkxel/assets/images/play-pc.svg" />
              </div>
              <div class="short">
                {" "}
                <h3>6 tips for content creation </h3>
                <i class="las la-volume-up"></i> <p>21 Mins Listen</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
