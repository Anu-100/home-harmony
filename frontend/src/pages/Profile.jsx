import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [uploadError, setUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  const fileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },
      (error) => {
        setUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };
  useEffect(() => {
    if (file) {
      fileUpload(file);
    }
  }, [file]);
  const handleFileChange = (e) => {
    // Reset the upload status and error message
    setFilePercentage(0);
    setUploadError(false);

    // Set the new file
    setFile(e.target.files[0]);
  };

  return (
    <div className="mx-auto max-w-lg p-3">
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={handleFileChange}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={()=>fileRef.current.click()}
          className="rounded-full h-20 w-20 self-center object-cover mt-3 hover:cursor-pointer"
          src={formData.avatar || currentUser.avatar}
          alt="profile"
        />
        <p className="text-sm self-center">
          {uploadError ? (
            <span className="text-red-700">
              There was an error uploading the image!
            </span>
          ) : filePercentage > 0 && filePercentage < 100 ? (
            <span className="text-blue-700">
              {`Uploading ${filePercentage}%...`}
            </span>
          ) : filePercentage === 100 ? (
            <span className="text-green-700">Image uploaded successfully</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="Username"
          id="Username"
          className="border rounded-lg p-3 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          id="Email"
          className="border rounded-lg p-3 focus:outline-none"
        />
        <button className="bg-blue-800 text-white p-3 rounded-lg">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700">Delete Account</span>
        <span className="text-blue-800">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
