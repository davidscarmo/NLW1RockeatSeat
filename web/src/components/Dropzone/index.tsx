import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload} from 'react-icons/fi';
import './styles.css'; 


interface Props 
{
  onFileUploaded: (file: File) => void;
}
const Dropzone: React.FC<Props> = ({onFileUploaded}) => {
const [selectedFileUrl, setSelectedFileUrl] = useState(''); 

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]; 
    
    const fileUrl = URL.createObjectURL(file);
    
    setSelectedFileUrl(fileUrl); 
    onFileUploaded(file); 
  }, [])
  const {getRootProps, getInputProps} = useDropzone({
      onDrop, 
      accept: 'image/*'
    })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {
          selectedFileUrl ? 
          <img src={selectedFileUrl} alt="Point Thumbnail"/>
           : (
            <p>
            <FiUpload />
            Clique ou arraste a imagem do estabelecimento aqui.
        </p>
          )
      }
     
    </div>
  )
}

export default Dropzone; 