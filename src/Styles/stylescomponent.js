import styled from "styled-components";

//ESTILOS EDITOR
const FormEditor = styled.div`
  max-width: 600px;
  margin: 1.125rem auto;
`;
const BarraEditor = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  width: 99.2%;
  padding: 0.2rem;
  align-items: center;
  background-color: #4aa3a3;
  border: 1px solid #1d2f2f;
  box-shadow: 1px 1px 20px 2px #484d4d;
  font-family: Russo One;
  font-size: 1rem;
  color: black;
`;
const Editor = styled.textarea`
  cursor: text;
  width: 99%;
  min-height: 200px;
  height: 90%;
  margin-bottom: -5px;
  resize: vertical;
  outline: none;
  padding-left: 5px;
  padding-top: 5px;
  font-size: 1rem;
  background-color: #c0d8d8;
  box-shadow: 1px 1px 20px 2px #484d4d;
  border: 1px solid #1d2f2f;
  border-top: none;
`;
//ESTILOS PREVIEW
const FormPreview = styled.div`
  max-width: 800px;
  margin: 1.25rem auto;
`;
const BarraPreview = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  width: 99%;
  align-items: center;
  background-color: #4aa3a3;
  padding: 0.2rem;
  border: 1px solid #1d2f2f;
  box-shadow: 1px 1px 20px 2px #484d4d;
  font-family: Russo One;
  font-size: 1rem;
  color: black;
`;
const Preview = styled.div`
  min-height: 200px;
  resize: vertical;
  outline: none;
  padding: 1px 1rem;
  font-size: 1rem;
  background-color: #c0d8d8;
  box-shadow: 1px 1px 20px 2px #484d4d;
  border: 1px solid #1d2f2f;
  border-top: none;
`;

export { FormEditor, FormPreview, Preview, BarraEditor, BarraPreview, Editor };
