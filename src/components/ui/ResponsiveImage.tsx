type ImageProps = {
  name: string;
  alt: string;
  sm: boolean;
};

const ResponsiveImage = ({ name, alt, sm }: ImageProps) => {
  return (
    <picture>
      {/* <!-- desktop screen --> */}
      <source
        media="(min-width: 1280px)"
        srcSet={`
                /images/${name}/${name}_lg@1x.webp 1x,
                /images/${name}/${name}_lg@2x.webp 2x
                `}
        type="image/webp"
      />

      {/* tablet screen  */}
      <source
        media="(min-width: 420px)"
        srcSet={`
                /images/${name}/${name}_md@1x.webp 1x,
                /images/${name}/${name}_md@2x.webp 2x
                `}
        type="image/webp"
      />

      {/* <!-- mobile screen --> */}
      {sm && (
        <source
          media="(max-width: 419px)"
          srcSet={`
                /images/${name}/${name}_sm@1x.webp 1x,
                /images/${name}/${name}_sm@2x.webp 2x
  `}
          type="image/webp"
        />
      )}

      {/* <!-- fallback --> */}
      <img
        className="h-full w-full object-cover"
        src={`/images/${name}/${name}_md@1x.webp`}
        alt={alt}
      />
    </picture>
  );
};

export default ResponsiveImage;
