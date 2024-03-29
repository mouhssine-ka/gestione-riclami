import { Customer } from "./customer";
import { DettaglioReclamo } from "./elencoReclami";

export interface Complaint{
    id?: string;
    dataReclamo?: string;
    causale?: string;
    complaintText?: string;
    shoponline?:boolean;
    regione?: string;
    provinciaReclamo?: string;
    polo?: string;
    customer?: Customer;
    dettaglioReclamo?: DettaglioReclamo;
}