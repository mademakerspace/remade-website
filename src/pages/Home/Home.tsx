"use client";

import { FunctionComponent } from "react";
import { useDictionary } from "@/hooks/useDictionary";
import { IconBuildingWarehouse } from "@tabler/icons-react";
import { Markdown } from "@/components/Markdown/Markdown";
import { ContentSection } from "@/components/ContentSection/ContentSection";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";

const HomePage: FunctionComponent = () => {
  const dict = useDictionary();

  return (
    <ContentSection
      icon={IconBuildingWarehouse}
      title={dict.home?.space?.title}
    >
      <Markdown className="text-center mb-6">
        {dict.home?.space?.content}
      </Markdown>

      <ImageGallery
        images={[
          require("./assets/nave@2x.jpg"),
          require("./assets/space-01@2x.jpg"),
          require("./assets/space-02@2x.jpg"),
          require("./assets/space-03@2x.jpg"),
          require("./assets/space-04@2x.jpg"),
        ]}
      />
    </ContentSection>
  );
};

export default HomePage;
