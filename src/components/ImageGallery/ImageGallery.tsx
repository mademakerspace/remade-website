import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FunctionComponent, useEffect, useRef, useState } from "react";

export const ImageGallery: FunctionComponent<{
  images: { image: StaticImageData; description?: string }[];
}> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const shownImage = images[current % images.length];
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    const observer = new ResizeObserver(() => setHeight(el.clientHeight));

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="-mx-10 max-md:!-mx-6 max-lg:mx-3 relative">
      <div
        style={{ height: `${height}px` }}
        className="transition-[height] overflow-hidden"
      >
        <div className="h-[999px]">
          <div ref={containerRef} className="flex flex-col gap-6 items-center">
            <Image
              src={shownImage.image}
              alt={`Photo ${current}`}
              className="max-h-full max-w-full w-auto max-h-[720px] md:rounded-xl mx-auto"
            />

            {!!shownImage.description && (
              <p className="bg-spacegray/50 px-6 py-3 w-1/2 text-center rounded-lg">
                {shownImage.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-6 mt-6 mx-6 max-lg:gap-1 max-lg:mx-3">
          {images.map(({ image }, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={clsx(
                "flex-1 aspect-[4/3] relative focus:outline-0 overflow-hidden rounded-xl group transition-transform",
                index === current ? "pointer-events-none" : "hover:scale-[1.1]",
              )}
            >
              <Image
                src={image}
                alt={`Photo ${index}`}
                className={clsx(
                  "w-full h-full object-cover transition-opacity border-4 rounded-xl border-deep",
                  current === index && "opacity-50",
                )}
              />

              <div
                className={clsx(
                  "absolute inset-0 border-2 rounded-xl border-contrast z-1 transition-opacity",
                  index === current ? "opacity-100" : "opacity-0",
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
