"use client";

import { FunctionComponent } from "react";
import { useDictionary } from "@/hooks/useDictionary";
import {
  IconBrandTelegram,
  IconBuildingWarehouse,
  IconHammer,
} from "@tabler/icons-react";
import { Markdown } from "@/components/Markdown/Markdown";
import { ContentSection } from "@/components/ContentSection/ContentSection";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { Button } from "@/components/Button/Button";
import homeGallery from "@/content/galleries/home.json";
import { useLocale } from "@/hooks/useLocale";

const HomePage: FunctionComponent = () => {
  const dict = useDictionary();
  const locale = useLocale();
  const gallery = homeGallery[locale];

  return (
    <>
      <ContentSection
        icon={IconBuildingWarehouse}
        title={dict.home?.space?.title}
      >
        <Markdown className="mb-6">{dict.home?.space?.content}</Markdown>

        <ImageGallery images={gallery.images} />
      </ContentSection>

      <ContentSection icon={IconHammer} title={dict.home?.getInvolved?.title}>
        <Markdown className="mb-6">{dict.home?.getInvolved?.content}</Markdown>

        <div className="flex justify-center">
          <Button
            href="https://t.me/+ZfAwT8CPnr8wMmE0"
            external
            iconLeft={IconBrandTelegram}
          >
            Telegram
          </Button>
        </div>
      </ContentSection>
    </>
  );
};

export default HomePage;
