import React from "react";

export default function Billboard() {
  return (
    <div>
      <section id="billboard" className="overflow-hidden">
        <button className="button-prev">
          <i className="icon icon-chevron-left"></i>
        </button>
        <button className="button-next">
          <i className="icon icon-chevron-right"></i>
        </button>
        <div className="swiper main-swiper">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url('images/banner1.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="banner-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="banner-title">Summer Collection</h2>
                      <p>
                        A Summer Collection can be a vibrant celebration of the
                        season, offering a refreshing mix of fashion, home
                        decor, beauty, food, and lifestyle essentials. For
                        fashion, think lightweight fabrics like cotton and
                        linen, with bright colors and playful patterns featured
                        in flow dresses, casual shorts, and stylish swimwear.
                        Accessories like oversized sunglasses, beach bags, and
                        straw hats add flair.
                      </p>
                      <div className="btn-wrap">
                        <a
                          href="shop.html"
                          className="btn btn-light btn-medium d-flex align-items-center"
                          tabIndex="0"
                        >
                          Shop it now <i className="icon icon-arrow-io"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url('images/banner2.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="banner-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="banner-title">Casual Collection</h2>
                      <p>
                        A casual collection is a curated assortment of clothing
                        and accessories designed for everyday wear. The focus is
                        on comfort, simplicity, and versatility, offering pieces
                        that can easily be mixed and matched for a laid-back,
                        stylish look. This collection typically features relaxed
                        fits, soft fabrics, and timeless styles that cater to
                        various occasions, from lounging at home to casual
                        outings with friends or family. Whether it's cozy
                        sweatshirts, stylish jeans, or versatile sneakers, a
                        casual collection provides easy options for effortless
                        fashion that suits modern, on-the-go lifestyles.
                      </p>
                      <div className="btn-wrap">
                        <a
                          href="shop.html"
                          className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center"
                          tabIndex="0"
                        >
                          Shop it now <i className="icon icon-arrow-io"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
