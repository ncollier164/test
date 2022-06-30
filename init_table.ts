import { Table, TableStore, Name } from "proton-tsc"

@table("myrows")
export class MyRow extends Table {
    constructor (
       public id: u64 = 0,
       public from: Name = new Name(),
       public to: Name | null = null,
    ) {
        super();
    }

    @primary
    get primary(): u64 {
        return this.id;
    }
}
