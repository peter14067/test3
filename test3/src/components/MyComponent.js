import React from "react";
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper
import Gold1 from './pc4.jpg';
import Gold2 from './pc5.jpg';
function MyComponent() {
  return (
    <div className="MyComponent">
      <SRLWrapper>
        <a href="link/to/the/full/width/image.jpg" data-attribute="SRL">
          <img src="src/for/the/thumbnail/image.jpg" alt="Umbrella" />
        </a>
        <a href="link/to/the/full/width/image_two.jpg" data-attribute="SRL">
          <img src="src/for/the/thumbnail/image_two.jpg" alt="Umbrella" />
        </a>
        // More images...
      </SRLWrapper>
    </div>
  );
}
 
export default MyComponent;