import axios from "axios";
import React, { useState, useEffect } from "react";

function FloorPlans({ floorplans, setFloorplans, uploadImage }) {
  const [url, setUrl] = useState("");

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

    const base64 = await convertBase64Floorplan(files[0]);
    setFloorplans((prev) => [...prev, base64]);

    // setLoading(false);
    // setFinished(true);
  };

  return (
    <div>
      <input type="file" onChange={uploadFloorplan} name="" id="" />
    </div>
  );
}

export default FloorPlans;
