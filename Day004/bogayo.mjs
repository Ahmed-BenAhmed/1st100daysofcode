#! /usr/bin/env node

import {readFile, mkdir, appendFile} from "fs/promises"
import yargs from "yargs";


console.log("hello world!")


const {argv} = yargs(process.argv);
const newDir = process.cwd() + "\\" + Object.entries(argv)[1][0]


const htmlTemp = await readFile(new URL("htmlTemp.html",import.meta.url),"utf-8")
const styleTemp = await readFile(new URL("styleTemp.css",import.meta.url),"utf-8")


mkdir(newDir)
mkdir(newDir+"/assets")
appendFile(newDir + "/index.html",htmlTemp)
appendFile(newDir + "/style.css",styleTemp)
appendFile(newDir + "/result.md","#")
