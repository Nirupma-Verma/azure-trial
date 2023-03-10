"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmrm = require("azure-pipelines-task-lib/mock-run");
const path = require("path");
const fs_1 = require("fs");
console.log(path.join(__dirname, '..', 'test/apikey.txt'));
const file = (0, fs_1.readFileSync)(path.join(__dirname, '..', 'test/apikey.txt'), 'utf-8');
console.log(file);
let taskPath = path.join(__dirname, '..', 'index.js');
console.log("index", taskPath);
let tmr = new tmrm.TaskMockRunner(taskPath);
tmr.setInput('conjurapplianceurl', 'https://localhost');
tmr.setInput('conjuraccount', 'myaccount');
tmr.setInput('conjurusername', 'admin');
tmr.setInput('conjurapikey', file.replace(/\s/g, ''));
tmr.setInput('secretsyml', path.join(__dirname, '..', 'test/test-secrets.yml'));
tmr.run();
