import React from "react";
import {
  FormEditor,
  FormPreview,
  BarraEditor,
  BarraPreview,
  Editor,
} from "../Styles/stylescomponent";
import PreviewComponent from "./Preview";

function MainComponent({ ExpandirE, ExpandirP, text, onchange }) {
  return (
    <div id="container">
      <FormEditor id="formE">
        <BarraEditor>
          Editor
          <i
            id="expandirEditor"
            className="fa fa-arrows-alt fa-lg"
            onClick={ExpandirE}
          />
        </BarraEditor>
        <Editor id="editor" value={text} onChange={onchange} />
      </FormEditor>
      <FormPreview id="formP">
        <BarraPreview>
          Preview
          <i
            id="expandirPreview"
            className="fa fa-arrows-alt fa-lg"
            onClick={ExpandirP}
          />
        </BarraPreview>
        <PreviewComponent markdown={text} />
      </FormPreview>
    </div>
  );
}

export { MainComponent };
