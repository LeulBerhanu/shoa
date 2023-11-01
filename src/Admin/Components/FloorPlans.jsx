import axios from "axios";
import React, { useState, useEffect } from "react";

function FloorPlans({ floorplans, setFloorplans }) {
  //   const [url, setUrl] = useState("");

  const convertBase64Floorplan = (file) => {
    return new Promise((resolve, reject) => {
      const filesReader = new FileReader();
      filesReader.readAsDataURL(file);

      filesReader.onload = () => {
        resolve(filesReader.result);
      };

      filesReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadFloorplan = async (event) => {
    // setLoading(true);
    const files = event.target.files;
    const maxSizeInBytes = 500 * 1024; // 500KB

    if (files && files[0].size > maxSizeInBytes) {
      alert(
        "File size exceeds the maximum allowed limit (500KB). Please choose a smaller file."
      );
      event.target.value = null; // Reset the input field
    } else {
      const base64 = await convertBase64Floorplan(files[0]);
      setFloorplans((prev) => [...prev, base64]);
    }
    // setLoading(false);
    // setFinished(true);
  };

  return (
    <div>
      <div>
        <input type="file" onChange={uploadFloorplan} name="" id="" />
      </div>
    </div>
  );
}

export default FloorPlans;
