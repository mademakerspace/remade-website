import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

export const ImageGallery: FunctionComponent<{ images: StaticImageData[] }> = ({
  images,
}) => (
  <div className="-mx-10 max-md:!-mx-6 max-lg:mx-3">
    {images.map((image, index) => (
      <Image
        key={index}
        src={image}
        alt={`Photo ${index}`}
        className="w-full md:rounded-xl"
      />
    ))}
  </div>
);
