const ResponsiveImage = () => {
  return (
    <picture>
      {/* <!-- desktop screen --> */}
      <source
        media="(min-width: 1280px)"
        srcSet="
                /images/main/main_lg@1x.webp 1x,
                /images/main/main_lg@2x.webp 2x
                "
        type="image/webp"
      />
      {/* tablet screen  */}
      <source
        media="(min-width: 420px)"
        srcSet="
                /images/main/main_md@1x.webp 1x,
                /images/main/main1_md@2x.webp 2x
                "
        type="image/webp"
      />
      {/* <!-- mobile screen --> */}
      <source
        media="(max-width: 419px)"
        srcSet="
                /images/main/main_sm@1x.webp 1x,
                /images/main/main_sm@2x.webp 2x
                  "
        type="image/webp"
      />
      {/* <!-- fallback --> */}
      <img
        className="object-cover w-full h-full"
        src="/images/main/main_sm@1x.jpg"
        alt="wind turbine"
      />
    </picture>
  );
};

export default ResponsiveImage;
