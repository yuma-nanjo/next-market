import { useState } from "react";

const ImgInput = (props) => {
  const [imageFile, setImageFile] = useState("");

  const handleClick = async () => {
    try {
      const data = new FormData();
      data.append("file", imageFile);
      data.append("upload_preset", "x8vozuo7");
      data.append("cloud_name", "umanoc");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/umanoc/image/upload",
        { method: "POST", body: data }
      );
      const jsonData = await response.json();
      await props.setImage(jsonData.url);
      alert("画像アップロード成功");
    } catch (err) {
      alert("画像アップロード失敗");
    }
  };

  return (
    <div className="img-input">
      <input
        type="file"
        onChange={(e) => setImageFile(e.target.files[0])}
        accept="image/png,image/jpg"
      ></input>
      <button onClick={handleClick} disabled={!imageFile}>
        画像Upload
      </button>
    </div>
  );
};

export default ImgInput;
