import React, { useState } from "react";
import { imageSrcContainer, buttonSliderAction } from "../../data";
import MyButton from "../MyButton/MyButton";
import MyImage from "../MyImage/MyImage";
import app from './App.module.css';

function App() {
  const [imageIndex, setImageIndex] = useState(0);

  const onButtonClick = (action) => {
      if (action === buttonSliderAction.increase) {
          if (imageIndex < imageSrcContainer.length - 1) {
              setImageIndex(imageIndex + 1);
          }
      } else {
          if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
          }
      }
  }

  return (
    <div className={app.layout}>
      {/*left*/}
      <MyButton
          action={buttonSliderAction.decrease}
          onClick={onButtonClick}
          curIndex={imageIndex}
          limit={0}
      />
      {/*image object*/}
      <MyImage imageSrc={imageSrcContainer[imageIndex]}/>
      {/*right*/}
      <MyButton
          action={buttonSliderAction.increase}
          onClick={onButtonClick}
          curIndex={imageIndex}
          limit={imageSrcContainer.length - 1}
      />
    </div>
  );
}

export default App;
