import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Blockquote from "./Blockquote";
import CustomImage from "./CustomImage";
import Highlight from "./Highlight";
import { Button } from "@/components/ui/button";
import Link from "./Link";
import { LinkIcon } from "lucide-react";

const components = {
  h1: (props: any) => (
    <div className="pt-10 pb-2">
      <h1 {...props} className="text-4xl font-bold">
        {props.children}
      </h1>
    </div>
  ),

  h2: (props: any) => (
    <div className="sm:mt-[85px] pb-[20px] mt-[40px]">
      <h2 {...props} className="sm:text-3xl font-bold text-xl">
        {props.children}
      </h2>
    </div>
  ),
  h3: (props: any) => (
    <div className="pt-5 pb-2">
      <h3 {...props} className="sm:text-2xl font-bold text-lg">
        {props.children}
      </h3>
    </div>
  ),
  h4: (props: any) => (
    <div className="pt-3 pb-2">
      <h4 {...props} className="sm:text-xl font-bold text-medium">
        {props.children}
      </h4>
    </div>
  ),
  li: (props: any) => (
    <li className="list-disc" {...props}>
      {props.children}
    </li>
  ),
  a: (props: any) => (
    <a className="text-blue-400 underline text-[12px] sm:text-[16px]" target="_blank" {...props}>
      {props.children}
    </a>
  ),
  hr: (props: any) => (
    <hr className="mt-7" {...props}>
      {props.children}
    </hr>
  ),
  blockquote: (props: any) => <Blockquote text={props.children} />,
  Highlight,
  CustomImage,
  Link,
  Button,
  LinkIcon,
};

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
};

export function CustomMDX(props: any) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} options={options} />;
}
