import { CustomSeria, DataLine } from "./types";

export const validateFileType = (type: string) => {
    // Here we should define and validate what filetype do we support
    // is there any lib for that? It looks like http header content-type: text/csv
    // see internet media type
    // return true/false

    console.log(type)

    return true;
}

export const parseFileToChartData = (fileStr: string, type: string): CustomSeria[] => {
    if(type === "text/csv"){
        return parseCSVFile(fileStr);
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
    const result: CustomSeria[] = matrix[0].slice(1).map((seriaName, i) => {
        return {
            name: seriaName,
            data: generateDataLine(matrix.slice(1), i + 1)
        }
    });
    console.log(matrix);
    console.log(result);

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
