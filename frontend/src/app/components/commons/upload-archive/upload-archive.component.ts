import { 
  Component, 
  ElementRef, 
  OnInit, 
  ViewChild
} from '@angular/core';

import * as XLSX              from 'xlsx';
import * as assertions        from '../../../utils/assertionConcern'
import * as alert             from '../../../utils/alerts'
import * as message           from '../../../utils/consts'

@Component({
  selector: 'app-upload-archive',
  templateUrl: './upload-archive.component.html',
  styleUrls: ['./upload-archive.component.css']
})
export class UploadArchiveComponent implements OnInit {

  data: any;
  pathName: any;
  document: any;
  lines = 0;
  
  @ViewChild('inputXls') inputXls: ElementRef;

  constructor() { }

  ngOnInit(): void {}

  
    showArchiveName(event: any) {
      if (event.target.files && event.target.files[0]) 
        this.pathName = event.target.files[0].name;
        this.document = event
    }

  onUploadArchive() {
    var target: DataTransfer = <DataTransfer>(this.document.target);
    if (target.files.length !== 1) throw new Error('Selecione apenas um documento');

    var awaitAlert = alert.aMessageAwait(message.AWAIT_LOADING, message.AWAIT_END_DATA_PROCESSING)
    alert.aMessageAwait(message.AWAIT_LOADING, message.AWAIT_END_DATA_PROCESSING)

    var reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      var bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = <XLSX.SheetAOAOpts>(XLSX.utils.sheet_to_json(ws, {header: 1}));
      this.lines = this.data.length

      this.stateDocumentVerify(this.data)
    };

    reader.readAsBinaryString(target.files[0]);
    
  }

  stateDocumentVerify(data){
    var errors = []
    
    data.forEach((element, index) => {
      index++
      
      errors.push(assertions.assertArgumentNotEmpty(element[0], `na linha: ${index} a coluna id não pode possuir o campo vazio.`))
      errors.push(assertions.assertArgumentNotEmpty(element[1], `na linha: ${index} a coluna data de nascimento não pode possuir o campo vazio.` ))  
      errors.push(assertions.assertArgumentNotEmpty(element[2], `na linha: ${index} a coluna renda não pode possuir o campo vazio.` ))   
      errors.push(assertions.assertArgumentNotEmpty(element[3], `na linha: ${index} a coluna latitude não pode possuir o campo vazio.` )) 
      errors.push(assertions.assertArgumentNotEmpty(element[4], `na linha: ${index} a coluna longitude não pode possuir o campo vazio.` ))   

    });

    errors = errors.filter(x=> x !== undefined );
    if(errors.length > 0) {
      this.clearFields()
      var x = errors.map(r=>`${r}<br />`);
      var m = `<div > ${x} </div>`;
      alert.aMessage(message.ICON_ERROR, message.ERROR_DATA_PROCESSING, m, message.CHECK_YOU_WORKSHEET, 'teste');
    } else {
      alert.aMessageClose(message.ICON_SUCCESS, message.SUCCESS, message.SUCCESS_DATA_PROCESSING)
    }
  }

  clearFields() {
    this.inputXls.nativeElement.value = ''
    this.data = [];
    this.lines = 0
  }

}
