import React from "react";

const Header = () => {
  const videoStyles = {
    // Mobile and tablet: show full video with proper aspect ratio
    width: "100%",
    height: "auto",
    aspectRatio: "16/9",

    // Large screens: fill entire viewport (your working solution)
    "@media (min-width: 1024px)": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "max(100vw, 177.78vh)",
      height: "max(100vh, 56.25vw)",
      aspectRatio: "unset",
    },
  };

  return (
    <div className="w-full fixed top-8 md:top-0 left-0 overflow-hidden bg-black">
      <div className="relative w-full h-auto lg:h-screen flex items-center justify-center">
        <iframe
          src="https://player.vimeo.com/video/1005956748?autoplay=1&muted=1&autopause=0&controls=0&loop=1&quality=1080p&background=1"
          className="w-full lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
          style={videoStyles}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Vimeo Video"
        />
      </div>
    </div>
  );
};

export default Header;
