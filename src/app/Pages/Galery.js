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

const Galery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <LightGallery
      onInit={onInit}
      speed={500}
      plugins={[lgZoom, lgThumbnail, lgAutoPlay, lgPager]}
      elementClassNames="max-w-md mx-auto grid grid-cols-2 gap-x-4 gap-y-6"
      mode="lg-fade">
      <a href="/images/aset7.jpg">
        <img src={`/images/aset7.jpg`} className="object-cover object-center w-56 h-56 rounded-lg" />
      </a>
      <a href="/images/aset4.jpg">
        <img src={`/images/aset4.jpg`} className="object-cover object-center w-56 h-56 rounded-lg" />
      </a>
      <a href="/images/aset6.jpg">
        <img src={`/images/aset6.jpg`} className="object-cover object-center w-56 h-56 rounded-lg" />
      </a>
      <a href="/images/aset8.jpg">
        <img src={`/images/aset8.jpg`} className="object-cover object-center w-56 h-56 rounded-lg" />
      </a>
      <a href="/images/aset4.jpg">
        <img src={`/images/aset4.jpg`} className="object-cover object-center w-56 h-56 rounded-lg" />
      </a>
      <a href="/images/aset2.jpg">
        <img src={`/images/aset2.jpg`} className="object-cover object-center w-56 h-56 rounded-lg" />
      </a>
    </LightGallery>
  );
};

export default Galery;
