"use client";

import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-pager.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgPager from "lightgallery/plugins/pager";
import Image from "next/image";

const Galery = () => {
  return (
    <LightGallery
      speed={500}
      plugins={[lgZoom, lgThumbnail, lgAutoPlay, lgPager]}
      elementClassNames="max-w-md mx-auto grid grid-cols-2 gap-x-4 gap-y-6"
      mode="lg-fade">
      <a href="/images/aset7.jpg">
        <Image
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          alt="foto praweding"
          src={`/images/aset7.jpg`}
          width={500}
          height={500}
          className="object-cover object-center w-56 h-56 rounded-lg"
        />
      </a>
      <a href="/images/aset8.jpg">
        <Image
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          alt="foto praweding"
          src={`/images/aset8.jpg`}
          width={500}
          height={500}
          className="object-cover object-center w-56 h-56 rounded-lg"
        />
      </a>
      <a href="/images/aset6.jpg">
        <Image
          data-aos="flip-left"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          alt="foto praweding"
          src={`/images/aset6.jpg`}
          width={500}
          height={500}
          className="object-cover object-center w-56 h-56 rounded-lg"
        />
      </a>
      <a href="/images/aset4.jpg">
        <Image
          data-aos="flip-left"
          data-aos-delay="400"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          alt="foto praweding"
          src={`/images/aset4.jpg`}
          width={500}
          height={500}
          className="object-cover object-center w-56 h-56 rounded-lg"
        />
      </a>
      <a href="/images/aset4.jpg">
        <Image
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          alt="foto praweding"
          src={`/images/aset4.jpg`}
          width={500}
          height={500}
          className="object-cover object-center w-56 h-56 rounded-lg"
        />
      </a>
      <a href="/images/aset2.jpg">
        <Image
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
          alt="foto praweding"
          src={`/images/aset2.jpg`}
          width={500}
          height={500}
          className="object-cover object-center w-56 h-56 rounded-lg"
        />
      </a>
    </LightGallery>
  );
};

export default Galery;
