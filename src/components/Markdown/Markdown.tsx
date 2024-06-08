import clsx from "clsx";
import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";

export const Markdown: FunctionComponent<{
  children?: string;
  className?: string;
}> = ({ children, className }) => (
  <ReactMarkdown className={clsx("space-y-3", className)}>
    {children}
  </ReactMarkdown>
);
