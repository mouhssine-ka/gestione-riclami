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
        let cod_negozioCheck = this.compareValues(filter.codiceNegozio, item.id);
        let descCheck = this.compareValues(filter.descrizione, item.causale);
        let statoCheck = this.compareValues(filter.stato, null);
        let gestioneCheck = this.compareValues(filter.gestione, null);
        let InDate: boolean;
        if (filter.dataSegnalizione == null || item.dataReclamo == null) {
            InDate = true;
        } else {
            InDate = (filter.dataSegnalizione.getTime() < item.dataReclamo.getTime());
        }
        let areaCheck = this.compareValues(filter.area, null);
        let causaleCheck = this.compareValues(filter.causale, null);
        let idCheck = this.compareValues(filter.idReclamo, null);
        let nomeCheck = this.compareValues(filter.nome, null);
        let cognomeCheck = this.compareValues(filter.cognome, null);
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
        return secondValue.includes(("" + firstValue));
    }
}