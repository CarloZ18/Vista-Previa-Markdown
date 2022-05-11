import { marked } from "marked";
import { Preview } from "../Styles/stylescomponent";
import hljs from "highlight.js";

marked.setOptions({
  breaks: true,
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code, ["html", "javascript"]).value;
  },
});

const renderer = new marked.Renderer();

export default function PreviewComponent({ markdown }) {
  return (
    <Preview
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
    />
  );
}
