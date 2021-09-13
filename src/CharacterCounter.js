import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { charCountState } from "./atoms/charCountState";
import { textState } from "./atoms/textState";

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};

export default CharacterCounter;

// useRecoilState : 상태를 읽고 쓰기 위한 것
// useRecoilValue: 상태를 읽을때 씀
