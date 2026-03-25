import React, { useRef, useState } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePhotoSelector = ({image, setImage}) => {

  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl ] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files(0);
    if (file) {
      setImage(file);
      
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    
  }
};

  const handleRemoveImage =() => {
    setImage(null);
    setPreviewUrl(null);
    };
  
  const onChooseFile =() =>{
    inputRef.current.click();
  }

  return (
<div>hello</div>
  )
  
}

export default ProfilePhotoSelector