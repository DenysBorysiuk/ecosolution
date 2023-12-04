type ImageProps = {
  name: string;
  alt: string;
  folder: string;
};

const ResponsiveImage = ({ name, folder, alt }: ImageProps) => {
  return (
    <picture>
      {/* <!-- desktop screen --> */}
      <source
        media="(min-width: 1280px)"
        srcSet={`
                /images/${folder}/${name}_lg@1x.webp 1x,
                /images/${folder}/${name}_lg@2x.webp 2x
                `}
        type="image/webp"
      />

      {/* tablet screen  */}
      <source
        media="(min-width: 420px)"
        srcSet={`
                /images/${folder}/${name}_md@1x.webp 1x,
                /images/${folder}/${name}_md@2x.webp 2x
                `}
        type="image/webp"
      />

      {/* <!-- mobile screen --> */}

      <source
        media="(max-width: 419px)"
        srcSet={`
                /images/${folder}/${name}_sm@1x.webp 1x,
                /images/${folder}/${name}_sm@2x.webp 2x
  `}
        type="image/webp"
      />

      {/* <!-- fallback --> */}
      <img
        className="h-full w-full object-cover"
        src={`/images/${folder}/${name}_md@1x.webp`}
        alt={alt}
      />
    </picture>
  );
};

export default ResponsiveImage;
