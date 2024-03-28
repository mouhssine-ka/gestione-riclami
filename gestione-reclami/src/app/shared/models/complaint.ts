import { Customer } from "./customer";
import { DettaglioReclamo } from "./elencoReclami";

export interface complaint{
    id?: String;
    dataReclamo?: Date;
    causale?: String;
    complaintText?: String;
    regione?: String;
    provincia?: String;
    polo?: String;
    customer?: Customer;
    dettaglioReclamo: DettaglioReclamo;
}