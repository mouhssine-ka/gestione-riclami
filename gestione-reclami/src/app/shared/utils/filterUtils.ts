import { Filter } from 'src/app/shared/models/filter';

import { Complaint } from 'src/app/shared/models/complaint';

export class FilterUtils {
    public filtra(list: Complaint[], filter: Filter): Complaint[] {
        let arrayList = [...list];
        let filteredArray: Array<Complaint> = [];
        arrayList.forEach(element => {
            if (this.filterItemMeetsCriteria(filter, element)) {
                filteredArray.push(element);
            }
        });
        return filteredArray;
    }

    public filterItemMeetsCriteria(filter: Filter, item: Complaint): Boolean {
        let cod_negozioCheck = this.compareValues(filter.codiceNegozio, item.dettaglioReclamo?.codiceNegozio);
        let descCheck = this.compareValues(filter.descrizione, null);
        let statoCheck = this.compareValues(filter.stato, item.dettaglioReclamo?.stato);
        let gestioneCheck = this.compareValues(filter.gestione, item.dettaglioReclamo?.gestione);
        let InDate: boolean;
        if (filter.dataSegnalizione == null || item.dataReclamo == null) {
            InDate = true;
        } else {
            let n = this.ParseDate(filter.dataSegnalizione);
            let n2 = this.ParseDate(item.dataReclamo);
            InDate = (n.getTime() < n2.getTime());
        }
        let areaCheck = this.compareValues(filter.area, null);
        let causaleCheck = this.compareValues(filter.causale, item.causale);
        let idCheck = this.compareValues(filter.idReclamo, item.id);
        let nomeCheck = this.compareValues(filter.nome, item.customer?.nome);
        let cognomeCheck = this.compareValues(filter.cognome, item.customer?.cognome);
        return (cod_negozioCheck && descCheck && statoCheck && gestioneCheck && InDate && areaCheck && causaleCheck && idCheck && nomeCheck && cognomeCheck);
    }

    public compareValues(firstValue: string | null | undefined, secondValue: string | undefined | null): boolean {
        // If the first value is null or undefined, the check passes
        if (firstValue === null) {
            return true;
        }
        if (secondValue === null) {
            return false;
        } 
        // If the first value is not null or undefined, check if the second value contains the first
        return secondValue?.toLowerCase().includes(("" + firstValue).toLowerCase()) ?? false;
        
    }

    private ParseDate(str: string | String): Date {
        str = ''+str;
        let c: string[] = str.split("/");
        let n: number[] = [];
        c.forEach(element => {
            n.push(parseInt(element));
        });
        return new Date(n[0], n[1], n[2]);
    }
}