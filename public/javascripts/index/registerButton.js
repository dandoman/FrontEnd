/**
 * Created by dinamix on 11/20/15.
 */
/*jslint browser:true*/
/*global Promise*/
"use strict";

var documentName = document.documentURI + "register";

var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    //Do not perform typical form post
    event.preventDefault();

    //Store email as a cookie for future use
    //document.cookie = 'email=' + form.elements.email.value + '; path=/login';

    //Send promise POST request
    var options = {
        url: documentName,
        //TODO put this in separate models folder, maybe use dynamic loading
        params: {
            organizationName: form.elements.organizationName.value,
            organizationAddress: form.elements.organizationAddress.value,
            contactName: form.elements.contactName.value,
            contactPhoneNumber: form.elements.contactPhoneNumber.value,
            contactEmail: form.elements.contactEmail.value,
            password: form.elements.password.value,
            accountType: form.elements.accountType.value,
            billingName: form.elements.billingName.value,
            billingAddress: form.elements.billingAddress.value,
            expiryMonth: form.elements.expiryMonth.value,
            expiryYear: form.elements.expiryYear.value,
            cvsCode: form.elements.cvsCode.value,
            creditCardNumber: form.elements.creditCardNumber.value
        }
    };
    promiseJSONPOST(options).then(function (fulfilled) {
        console.log(fulfilled);
        //window.location.replace(documentName);
    }, function (rejected) {
        console.log(rejected);
    });
});

//TODO put this in separate helper folder
function promiseJSONPOST(opts) {
    return promisePOST(opts).then(JSON.parse);
}

function promisePOST(opts) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", opts.url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        if (opts.headers) {
            Object.keys(opts.headers).forEach(function (key) {
                xhr.setRequestHeader(key, opts.headers[key]);
            });
        }
        var params = opts.params;
        // We'll need to stringify if we've been given an object
        // If we have a string, this is skipped.
        if (params && typeof params === 'object') {
            params = JSON.stringify(params);
        }
        xhr.send(params);
    });
}
