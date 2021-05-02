import React, { useCallback } from 'react';
import { TFunction } from 'i18next';
import {useDropzone} from 'react-dropzone'
import { parseFileToChartData, validateFileType } from '../../Model/parseCustomData';
import { CustomSeria } from '../../Model/types';


interface Props {
    i18n: TFunction
    updateCustomData: (series: CustomSeria[]) => void
}

const UploadFile:React.FunctionComponent<Props> = (props) => {
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file: Blob) => {
          const reader = new FileReader()
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
            // Do whatever you want with the file contents
            if(validateFileType(file.type)){
              const fileStr = reader.result as string;
              const chartData = parseFileToChartData(fileStr, file.type);
              props.updateCustomData(chartData);
            }else{
              //Show message we don't support this file type
            }
          }
          reader.readAsText(file);
        })
        
      }, [props])
    
    const {getRootProps, getInputProps} = useDropzone({onDrop})


    return (
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
    )
}

export default UploadFile