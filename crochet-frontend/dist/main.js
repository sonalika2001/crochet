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
function fetchMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Use fetch() to send a GET request to the backend at port 5500
            const response = yield fetch('http://localhost:5500/');
            // Convert the response text
            const message = yield response.text();
            // Find the paragraph element by its ID and update its content with the fetched message
            const messageElement = document.getElementById('message');
            if (messageElement) {
                messageElement.innerText = message;
            }
        }
        catch (error) {
            console.error('Error!!', error);
        }
    });
}
fetchMessage();
