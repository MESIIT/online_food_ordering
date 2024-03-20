import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
const IndexPage = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <h2>About Me</h2>
      <p>
        My name is Tsegazeab Wondimagegn, an Msc student at ACT. and i love reading about new technologies.
      </p>
      <h2>My Project</h2>
      <div>
        <h3>Project 1</h3>
        <p>
        It is a process of recognizing the context of an image and annotating it with relevant captions using deep learning and computer vision. It uses English keywords to label the images with the help of datasets provided during model training. Xception dataset is used to extract image features. These extracted features will be fed to the LSTM model, which generates the image caption.
        </p>
      </div>
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me at fishw624@gmail.com
      </p>
    </div>
  );
};

export default IndexPage;