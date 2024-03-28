import { Filter } from 'src/app/shared/models/filter';

import { complaint } from 'src/app/shared/models/complaint';

export class FilterUtils {
    public filtra(list: Iterable<complaint>, filter: Filter): Iterable<complaint> {
        let arrayList = [...list];
        let filteredArray: Array<complaint> = [];
        arrayList.forEach(element => {
            if (this.filterItemMeetsCriteria(filter, element)) {
                filteredArray.push(element);
            }
        });
        return filteredArray;
    }

    public filterItemMeetsCriteria(filter: Filter, item: complaint): Boolean {
        let cod_negozioCheck = this.compareValues(filter.codiceNegozio, item.dettaglioReclamo.codiceNegozio);
        let descCheck = this.compareValues(filter.descrizione, null);
        let statoCheck = this.compareValues(filter.stato, item.dettaglioReclamo.stato);
        let gestioneCheck = this.compareValues(filter.gestione, item.dettaglioReclamo.gestione);
        let InDate: boolean;
        if (filter.dataSegnalizione == null || item.dataReclamo == null) {
            InDate = true;
        } else {
            InDate = (filter.dataSegnalizione.getTime() < item.dataReclamo.getTime());
        }
        let areaCheck = this.compareValues(filter.area, null);
        let causaleCheck = this.compareValues(filter.causale, item.causale);
        let idCheck = this.compareValues(filter.idReclamo, item.id);
        let nomeCheck = this.compareValues(filter.nome, item.customer?.nome);
        let cognomeCheck = this.compareValues(filter.cognome, item.customer?.cognome);
        return (cod_negozioCheck && descCheck && statoCheck && gestioneCheck && InDate && areaCheck && causaleCheck && idCheck && nomeCheck && cognomeCheck);
    }

    public compareValues(firstValue: string | String | null | undefined, secondValue: string | String | undefined | null): boolean {
        // If the first value is null or undefined, the check passes
        if (firstValue == null) {
            return true;
        }
        if (secondValue == null) {
            return false;
        }

        // If the first value is not null or undefined, check if the second value contains the first
        return secondValue.toLowerCase().includes(("" + firstValue).toLowerCase());
    }
}