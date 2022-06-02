import React from "react";

import ImageUploading from "react-images-uploading";

export function UploadBtn(props) {
let obj={}
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList) => {
    setImages(imageList);
  };


  // async function submit() {
  //   let imageBlob = await new Promise(resolve => obj['image'].toBlob(resolve, 'image/png'));

  //   let formData = new FormData();
  //   formData.append("image", imageBlob, "image.png");

  //   let response = await fetch('/article/formdata/post/image-form', {
  //     method: 'POST',
  //     body: formData
  //   });
  //   let result = await response.json();
  //   alert(result.message);
  // }
  return (
    <div>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({imageList, onImageUpload }) => (
          <div>
            <button
              style={
                props.inputTest === false && !!props.value
                  ? {
                      borderColor: "#CB3D40",
                      borderWidth: "2px",
                      height: "56px",
                    }
                  : null
              }
              className="upload-btn"
              onClick= {onImageUpload}

            >
              Upload
            </button>

            {imageList.map((image)=>obj['image']= image.data_url)}
           
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

