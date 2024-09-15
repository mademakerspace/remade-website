import clsx from "clsx";
import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import classNames from "./Markdown.module.scss";

export const Markdown: FunctionComponent<{
  children?: string | (string | undefined)[];
  className?: string;
}> = ({ children, className }) => (
  <ReactMarkdown className={clsx("space-y-3", classNames.content, className)}>
    {Array.isArray(children) ? children.join("\n\n") : children}
  </ReactMarkdown>
);
