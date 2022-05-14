import type { Transformer } from "unified";
import visit from "unist-util-visit";
import type { Heading, Literal } from "mdast";

type PluginOptions = {
  name?: string;
};

export default function plugin(options: PluginOptions = {}): Transformer {
  const name = options.name || "docusaurus-plugin-mermaid";

  return (root) => {
    visit(root, "heading", (child: Heading, index, parent) => {
      // const value = toString(child);
      // if (parent !== root || !value || child.depth < 2) {
      //   return;
      // }
      // headings.push({
      //   value: toValue(child),
      //   id: child.data!.id as string,
      //   level: child.depth,
      // });
    });
  };
}
