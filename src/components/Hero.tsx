import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Master Startups, Tech, Business, Sports
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={
                  "https://www.beingguru.com/wp-content/uploads/2025/01/Four-Pakistani-Banks-in-Asia-Pacifics-Top-10-for-2024-758x426.png"
                }
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://www.beingguru.com/wp-content/uploads/2025/01/No-Fact-Checks-No-Limits-Metas-New-Internet-Philosophy.png"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://www.beingguru.com/wp-content/uploads/2025/01/WhatsApp-Rolls-Out-Event-Feature-for-One-on-One-Chats-758x426.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://startuppakistan.com.pk/wp-content/uploads/2025/01/307-696x392.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://startuppakistan.com.pk/wp-content/uploads/2025/01/images-2025-01-10T142806.531-696x391.jpeg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://propakistani.pk/wp-content/uploads/2025/01/Google-Wallet.jpg.avif"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
