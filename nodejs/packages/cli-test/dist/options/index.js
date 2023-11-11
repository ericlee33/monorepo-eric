"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptOptions = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const promptOptions = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield inquirer_1.default.prompt([
        {
            type: 'list',
            name: '你想用什么 CSS 预处理器?',
            choices: [
                {
                    name: 'less',
                    value: 'less',
                },
                {
                    name: 'scss',
                    value: 'scss',
                },
            ],
        },
        {
            type: 'checkbox',
            name: 'do you nb?',
            choices: [
                {
                    name: 'yes',
                    value: 'yes',
                },
                {
                    name: 'no',
                    value: 'no',
                },
            ],
        },
    ]);
    console.log(res);
});
exports.promptOptions = promptOptions;
