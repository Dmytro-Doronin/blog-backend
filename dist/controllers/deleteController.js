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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllDataController = void 0;
const deleteAllData_1 = require("../repositories/mutationRepositories/deleteAllData");
const removeAllDataController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield deleteAllData_1.deleteAllDataMutation.deleteAllDataFromDb();
    res.sendStatus(204);
    return;
});
exports.removeAllDataController = removeAllDataController;
