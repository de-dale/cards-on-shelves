import FileSaver from 'file-saver';

export default function save(fileName, content) {
    const blob = new Blob([ JSON.stringify(content) ], { type: 'text/json;charset=utf-8' });
    FileSaver.saveAs(blob, fileName);
}