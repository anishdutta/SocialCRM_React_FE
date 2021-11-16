/* eslint-disable no-unused-vars */
import React from 'react';
import {useDropzone} from 'react-dropzone';

function CsvDnD(props) {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'text/csv'
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone container p-2 rounded', style: { backgroundColor: "#e9e9e9" } })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.csv file will be accepted)</em>
        <ul>{acceptedFileItems}</ul>
      </div>
    </section>
  );
}
export default CsvDnD