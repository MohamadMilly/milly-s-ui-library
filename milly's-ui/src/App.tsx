import type { JSX } from "react";
import "./App.css";
import { ButtonContainer } from "./components/Button/Button";
import { ComponentSection } from "./components/ComponentSection";
import { InputContainer } from "./components/Input/Input";
import { TextareaContainer } from "./components/Textarea/Textarea";
import { DropdownMenu } from "./components/Dropdown_menu/Dropdown_menu";

function App(): JSX.Element {
  return (
    <main>
      <h1>Welcome to my UI library</h1>
      <ComponentSection
        variants={["primary", "danger", "success"]}
        name="Button"
      >
        <ButtonContainer
          style={{}}
          onClick={() => alert("I have been clicked !")}
        >
          Download
        </ButtonContainer>
      </ComponentSection>

      <ComponentSection variants={["primary"]} name="Input">
        <InputContainer style={{}} onChange={() => {}} value="" type="text" />
      </ComponentSection>

      <ComponentSection variants={["primary"]} name="Textarea">
        <TextareaContainer
          onChange={() => {}}
          inputLike={false}
          value=""
          style={{ maxHeight: "120px" }}
        />
      </ComponentSection>

      <ComponentSection variants={["primary"]} name="Dropdown menu">
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
