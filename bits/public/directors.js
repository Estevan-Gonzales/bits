import fs from 'fs';
import { parse } from 'csv-parse';

const parser = parse({columns: true}, (err, records) => {
    console.log("hello")
    console.log(records);
});

fs.createReadStream('./oscars_directing_noms.csv').pipe(parser);

