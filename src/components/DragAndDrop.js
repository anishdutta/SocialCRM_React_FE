/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
// import { storage } from "../firebase";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function DragAndDrop({ url, seturl }) {
  const dbuseruid = localStorage.getItem("dbuseruid");
  // const [files, setFiles] = useState([]);
  // const [prog, setprog] = useState(0);
  // const imagesRef = ref(storage, `posts/${dbuseruid}`);
  // const storageRef = ref(storage, `posts/${dbuseruid}`);
  // const metadata = {
  //   contentType: "image/jpeg , image/png",
  // };
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: "image/jpeg, image/png",
      onDrop: (acceptedFiles) => {
        // setFiles(acceptedFiles[0]);
        console.log(acceptedFiles[0]);
        // console.log("file accepted");
        uploadimage(acceptedFiles[0]);
      },
    });

  const uploadimage = async (file) => {
    // const storageRef = ref(storage, `posts/${dbuseruid}/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // // const uploadTask = storage.ref(`posts/${dbuseruid}/${file.name}`).put(file);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const prog = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     setprog(prog);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //       seturl(url);
    //       console.log(url);
    //     });
    //   }
    // );
    const data = new FormData();
    data.append("image", file);
    console.log(file);
    console.log(data);
    axios
      .post("https://sociophin.herokuapp.com/image-upload", data)
      .then((res) => {
        console.log(res);
        seturl(res.data.imageUrl);
      });
  };

  // const acceptedFileItems = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //     <ul>
  //       {errors.map((e) => (
  //         <li key={e.code}>{e.message}</li>
  //       ))}
  //     </ul>
  //   </li>
  // ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some file here, or click to select file</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside>
        {/* <h4>Accepted files</h4>
        <ul>{acceptedFileItems ? acceptedFileItems : "No Files"}</ul> */}
        {/* {acceptedFiles.length ? <h3> Uploaded {prog} %</h3> : ""} */}
        {url && <img src={url} alt="post" />}
        <br />
        {url}
        {/* <h4>Rejected files</h4>
        <ul>{fileRejectionItems ? fileRejectionItems : "No Files"}</ul> */}
      </aside>
      {/* {files.map(({ path }) => (
        <img src={path} alt="pics" />
      ))} */}
    </section>
  );
}
export default DragAndDrop;
