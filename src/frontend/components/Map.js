import React from 'react';

const Map = () => {
  return (
    <div className="map max-w-7xl flex mx-auto my-8 h-[420px] sm:rounded-2xl overflow-hidden">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="Google Maps"
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=victoria falls waterfall&t=k&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            allowFullScreen=""
          ></iframe>
          <style>
            {`
              .mapouter {
                position: relative;
                text-align: right;
                height: 100%;
                width: 100%;
              }
            `}
          </style>
          <style>
            {`
              .gmap_canvas {
                overflow: hidden;
                background: none!important;
                height: 100%;
                width: 100%;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Map;
