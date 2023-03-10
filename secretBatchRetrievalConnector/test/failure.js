"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmrm = require("azure-pipelines-task-lib/mock-run");
const path = require("path");
let taskPath = path.join(__dirname, '..', 'index.js');
let tmr = new tmrm.TaskMockRunner(taskPath);
tmr.setInput('conjurapplianceurl', 'http://localhos');
tmr.setInput('conjuraccount', 'myConjurAccount');
tmr.setInput('conjurusername', 'host/BotApp/myDemoApp');
tmr.setInput('conjurapikey', '3ded3pp1x1w3ak3ter2kj22532mx2xfk51z2p28');
tmr.setInput('secretsyml', '/Users/Nirupma.Verma/projects/conjur-azure-devops-extension/files/test-secrets.yml');
tmr.run();
