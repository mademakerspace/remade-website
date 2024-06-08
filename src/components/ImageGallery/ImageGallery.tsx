import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

export const ImageGallery: FunctionComponent<{ images: StaticImageData[] }> = ({
  images,
}) => (
  <div className="-mx-10 max-sm:!mx-0 hidden">
    {images.map((image, index) => (
      <Image
        key={index}
        src={image}
        alt={`Photo ${index}`}
        className="w-full rounded-xl"
      />
    ))}
  </div>
);
