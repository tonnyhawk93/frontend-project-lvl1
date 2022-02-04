#!/usr/bin/env node
import {askName, showWelcomeMessage} from '../src/cli.js';
import {gameEven} from '../src/game-even.js';

showWelcomeMessage();
const name = askName();
gameEven(name);