"use client";

import { FunctionComponent } from "react";
import { useDictionary } from "@/hooks/useDictionary";
import { IconBuildingWarehouse } from "@tabler/icons-react";
import { Markdown } from "@/components/Markdown/Markdown";
import { ContentSection } from "@/components/ContentSection/ContentSection";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";

export const HomePage: FunctionComponent = () => {
  const dict = useDictionary();

  return (
    <ContentSection icon={IconBuildingWarehouse} title={dict.home.space.title}>
      <Markdown className="text-center mb-6">
        {dict.home.space.content}
      </Markdown>

      <ImageGallery images={[require("./assets/nave.png")]} />
    </ContentSection>
  );
};
