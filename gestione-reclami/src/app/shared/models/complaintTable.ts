export interface ComplaintTable{
  idReclamo?: String;
  dataSegnalazione?: Date;
  dataPresoInCarico?: Date;
  dataChiusura?: Date;
  codiceNegozio?: String;
  manager?: String;
  cliente?: String;
  stato?: String;
  gestione?: String;
  causaleReclamo?: String;
  soddisfazione?: boolean;
  
}