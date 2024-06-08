"use client";

import { FunctionComponent } from "react";
import { ContentSection } from "./ContentSection";
import { useDictionary } from "@/hooks/useDictionary";
import { IconBuildingWarehouse } from "@tabler/icons-react";

export const HomePage: FunctionComponent = () => {
  const dict = useDictionary();

  return (
    <ContentSection icon={IconBuildingWarehouse} title={dict.home.space.title}>
      {dict.home.space.content}
    </ContentSection>
  );
};
