import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReMade - BCN Maker Space",
};

const RootLayout = ({ children }: PropsWithChildren) => children;

export default RootLayout;
