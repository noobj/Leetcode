#!/usr/bin/env node
import yargs from 'yargs/yargs';
import fs from 'fs';

const argv = yargs(process.argv.slice(2))
    .usage('Usage: $0 <titles> [options]')
    .example('$0 1. two sum -c DP', '')
    .demandOption(['_'])
    .options({
        e: { type: 'string', default: 'ts', alias: 'extend' },
        c: { type: 'string', default: '.', alias: 'category' },
    })
    .help('h')
    .alias('h', 'help')
    .parseSync();

if (argv._.length == 0) {
    console.log('Need to enter the title of leetcode question');
    process.exit(1);
}

const fileName = `${argv._.map((v) => v.toString().toLowerCase()).join('_')}.${argv.e}`;

const writeStream = fs.createWriteStream(process.cwd() + `/${argv.c}/${fileName}`);
const fileStream = fs.createReadStream(process.cwd() + '/tools/template.ts');
fileStream.pipe(writeStream);

console.log(`${argv.c}/${fileName} created, lets do this!`);
