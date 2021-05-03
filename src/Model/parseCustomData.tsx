import { CustomSeria, DataLine } from "./types";
import * as XLSX from 'xlsx';


const acceptedFileTypes = [
    "text/csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel"
];

export const validateFileType = (type: string) => {
    // Here we should define and validate what filetype do we support
    // is there any lib for that? It looks like http header content-type: text/csv
    // see internet media type
    // return true/false
    
    console.log(type)

    return acceptedFileTypes.includes(type);
}

export const isXlsxFile = (type: string): Boolean => {
    if(type === acceptedFileTypes[1] || type === acceptedFileTypes[2]){
            return true;
        }
    return false;
}

export const parseFileToChartData = (fileStr: string, type: string): CustomSeria[] => {
    if(type === acceptedFileTypes[0]){
        return parseCSVFile(fileStr);
    }else if(isXlsxFile(type)){
        return parseXlsxFile(fileStr);
    }else{
        return[{
            name: "name",
            data:[]
        }]
    }
}

const parseCSVFile = (fileStr: string): CustomSeria[] => {
    // warning this methog handle USA/UK CSV format with 
    // , as column separator and
    // . decimal separator
    // There is also European CSV format with
    // ; as column separator and
    // , as decimal separator
    // how to differentiate them?
    const lines = fileStr.split('\n');
    const headersLength = lines[0].split(",").length;
    let matrix = lines.map(line => {
        const columns = line.split(",");
        if(columns.length > headersLength){ //if user add more data in row then series in header
            return columns.slice(0, headersLength);
        }else {
            return columns;
        }
    
    })
    matrix = matrix.filter(arr => arr.length > 1);
    console.log(".csv data parsing result", matrix);
    const result: CustomSeria[] = matrix[0].slice(1).map((seriaName, i) => {
        return {
            name: seriaName,
            data: generateDataLine(matrix.slice(1), i + 1)
        }
    });

    return result;
}

const parseXlsxFile = (fileStr: string): CustomSeria[] => {
    const workbook = XLSX.read(fileStr, {type:'binary'});
    let matrix = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {header:1}) as any[];
    matrix = matrix.filter(arr => arr.length > 1);
    const headersLength = matrix[0].length;

    matrix = matrix.map(row => {
        if(row.length > headersLength){ //if user add more data in row then series in header
            return row.slice(0, headersLength);
        }else {
            return row;
        }
    
    })
    console.log(".xls data parsing result", matrix);
    const result: CustomSeria[] = matrix[0].slice(1).map((seriaName:string, i: number) => {
        return {
            name: seriaName,
            data: generateDataLine(matrix.slice(1), i + 1)
        }
    });

    return result;
}

const generateDataLine = (matrix: string[][], titlePosition: number): DataLine[] => {
    const data: DataLine[] = [];
    matrix.forEach(row => {  
        const intValue = parseInt(row[titlePosition]);
        if(intValue){
            data.push({
                date: row[0],
                price: intValue
            })
        }        
    })
    return data;
}
