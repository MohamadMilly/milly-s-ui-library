import type { JSX } from "react";
import "./App.css";
import { ButtonContainer } from "./components/Button/Button";
import {
  ComponentSection,
  type ComponentProperty,
} from "./components/ComponentSection";
import { InputContainer } from "./components/Input/Input";
import { TextareaContainer } from "./components/Textarea/Textarea";
import { DropdownMenu } from "./components/Dropdown_menu/Dropdown_menu";

const buttonConfig: ComponentProperty[] = [
  {
    name: "variant",
    values: ["primary", "danger", "success"],
    value: "primary",
    interfaceType: "select",
  },
  {
    name: "size",
    values: ["small", "medium", "large"],
    value: "medium",
    interfaceType: "select",
  },
];

const inputConfig: ComponentProperty[] = [
  {
    name: "size",
    values: ["small", "medium", "large"],
    value: "medium",
    interfaceType: "select",
  },
  {
    name: "variant",
    values: ["primary"],
    value: "primary",
    interfaceType: "select",
  },
];

const TextareaConfig: ComponentProperty[] = [
  {
    name: "size",
    values: ["small", "medium", "large"],
    value: "medium",
    interfaceType: "select",
  },
  {
    name: "variant",
    values: ["primary"],
    value: "primary",
    interfaceType: "select",
  },
];

function App(): JSX.Element {
  return (
    <main>
      <h1>Welcome to my UI library</h1>
      <ComponentSection config={buttonConfig} name="Button">
        <ButtonContainer
          style={{}}
          onClick={() => alert("I have been clicked !")}
        >
          Download
        </ButtonContainer>
      </ComponentSection>

      <ComponentSection config={inputConfig} name="Input">
        <InputContainer style={{}} onChange={() => {}} value="" type="text" />
      </ComponentSection>

      <ComponentSection config={TextareaConfig} name="Textarea">
        <TextareaContainer
          onChange={() => {}}
          inputLike={false}
          value=""
          style={{ maxHeight: "120px" }}
        />
      </ComponentSection>

      <ComponentSection config={[]} name="Dropdown menu">
        <DropdownMenu toggleButtonStyle={{}} menuStyle={{}} title="menu">
          <ul
            style={{
              listStyle: "none",
            }}
          >
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </DropdownMenu>
      </ComponentSection>
    </main>
  );
}

export default App;
