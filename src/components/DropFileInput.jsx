import React, {  useState } from 'react';
import PropTypes from 'prop-types';
import {useDropzone} from 'react-dropzone'
import {DropFile,Input,Label,Preview} from './Styled'
import uploadImg from '../assets/cloud-upload-regular-240.png';

const DropFileInput = () => {

    const [yourImage, setImage] = useState([]);
    const {getRootProps,getInputProps} = useDropzone({
        accept :".png, .jpg, .jpeg",
        onDrop : (acceptedFiles) => {
            setImage(
                acceptedFiles.map((upFile) =>Object.assign(upFile, {
                    preview : URL.createObjectURL(upFile)
                }) )
            )
        }
    });

    return (
        <>
            <DropFile
            >
                <Label {...getRootProps()} >
                    <img style={{ width: '100px'}} src={uploadImg} alt="" />
                    <p>Arrastra tu imagen</p>
                </Label>
                <Input type="file" value="" {...getInputProps()}/>
            </DropFile>
            <div>
                {yourImage.map((upFile,i) =>{
                    return(
                        <Preview key={i}>
                            <img src={upFile.preview} style={{width: '400px',height:'300px'}} alt="imagen"/>
                            <img src={upFile.preview} style={{width: '160px',height:'120px'}} alt="imagen"/>
                            <img src={upFile.preview} style={{width: '120px',height:'120px'}} alt="imagen"/>
                        </Preview>
                    )
                })}
            </div>
        </>
    );
}

DropFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default DropFileInput;
