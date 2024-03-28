import { Customer } from "./customer";
import { DettaglioReclamo } from "./elencoReclami";

export interface Complaint{
    id?: string;
    dataReclamo?: Date;
    causale?: string;
    complaintText?: string;
    shoponline?:boolean;
    regione?: string;
    provincia?: string;
    polo?: string;
    customer?: Customer;
    dettaglioReclamo?: DettaglioReclamo;
}