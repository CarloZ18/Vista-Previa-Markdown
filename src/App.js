import { React, useState } from "react";
import "./App.css";
import {MainComponent} from "./Components/Editor";
import $ from "jquery";
import {placeholder} from "./Placeholder/placeholder";


function App() {
  
const [text, setText] = useState(placeholder);
const [ampliado, setAmpliado] = useState(false);

  function ExpandirE() {
    if (ampliado === false) {
      $("#editor").css("min-height", "95vh");
      $("#editor").css("resize", "none");
      $("#formP").addClass("form-hide");
      $("#expandirEditor").removeClass("fa fa-arrows-alt");
      $("#expandirEditor").addClass("fa fa-compress");
      setAmpliado(true);
    } else {
      $("#editor").css("min-height", "200px");
      $("#editor").css("resize", "vertical");
      $("#formP").removeClass("form-hide");
      $("#expandirEditor").removeClass("fa fa-compress");
      $("#expandirEditor").addClass("fa fa-arrows-alt");
      setAmpliado(false);
    }
  }

  function ExpandirP() {
    if (ampliado === false) {
      $("#preview").css("min-height", "95vh");
      $("#formE").addClass("form-hide");

      $("#expandirPreview").removeClass("fa fa-arrows-alt");
      $("#expandirPreview").addClass("fa fa-compress");
      setAmpliado(true);
    } else {
      $("#preview").css("min-height", "200px");
      $("#formE").removeClass("form-hide");
      $("#expandirPreview").removeClass("fa fa-compress");
      $("#expandirPreview").addClass("fa fa-arrows-alt");
      setAmpliado(false);
    }
  }
  return (
    <MainComponent
      {...{
        ExpandirE,
        ExpandirP,
        text,
        onchange:(e) => setText(e.target.value)
      }}
    />
  );
}

export default App;
