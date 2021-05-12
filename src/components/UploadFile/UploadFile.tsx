import './UploadFile.scss';

import React, { useCallback } from 'react';
import { TFunction } from 'i18next';
import {useDropzone} from 'react-dropzone'
import { isXlsxFile, parseFileToChartData, validateFileType } from '../../Model/parseCustomData';
import { CustomSeria } from '../../Model/types';
import image_file_example from '../../images/custom_file_example.png';


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
          
          if(isXlsxFile(file.type)){
              reader.readAsBinaryString(file);
          }else{
              reader.readAsText(file);
          }          
        })
        
      }, [props])
    
    const {getRootProps, getInputProps} = useDropzone({onDrop})


    return (
      <div className='upload-page'>
        <div {...getRootProps({className: 'dropzone'})}>
            <div className='active-zone'>
              <input {...getInputProps()} />
              <p>{props.i18n('drag_and_drop_file')}</p>
            </div>
        </div>
        <div className='description'>
          <div className='text'>
            <h2>{props.i18n("upload_description_title")}</h2>
            <h3>{props.i18n("upload_description_formats")}: .csv, .xlsx, .xls</h3>
            <ul>
              <li>{props.i18n("upload_description_rule_1")}</li>
              <li>{props.i18n("upload_description_rule_2")}</li>
          </ul>
          </div>
          <img src={image_file_example} alt="File example"/>
        </div>
      </div>
    )
}

export default UploadFile