/** Adatok lekérése az API -tól.
 * @param {string} url, az adatforrás címe
 * @param {function} callback, a függvény ami megkapja az adatokat
 */
function getJson(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);

    xhr.onload = function (ev) {
        var serverData = JSON.parse(ev.target.response);
        callback(serverData);
    };
    xhr.send();
}

/** Adatok küldése az API -nak.
 * @param {string} url, a végpont címe
 * @param {Object} data, a küldendő adatok
 * @param {function} callback, a függvény ami megkapja a választ
 */
function postData(url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("post", url);

    xhr.onload = function (ev) {
        var serverData = JSON.parse(ev.target.response);
        callback(serverData);
    };

    if (typeof data !== "string") {
        data = JSON.stringify(data);
    }
    xhr.send(data);
}

/*
// Példák:
// Teljes tábla lekérésére.
getJson("api/customers", function(customers) {
    console.log(customers);
});

// Egy record lekérése.
getJson("api/customers/2", function(customers) {
    console.log(customers);
});

// Record frissítése.
var customer = {
    customer_name: "Happy Chapman",
    contact_name: "Mother", 
    address: "126 street",
    city: "New York", 
    postcode: "US3214",
    country: "USA"
};
postData('api/customers/update/1', customer, function(response) {
    console.log(response);
});

// Record beszúrása.
var customer = {
    customer_name: "Happy Chapman",
    contact_name: "Mother", 
    address: "126 street",
    city: "New York", 
    postcode: "US3214",
    country: "USA"
};
postData('api/customers/insert', customer, function(response) {
    console.log(response);
});
*/

document.querySelector("#table1-btn").addEventListener("click", function () {
    var database = document.querySelector("#database").value;
    getJson(("api/" + database), function (database) {
        var table = "";
        var tablehead = "";
        var th = "";
        var keyindex = "";
        for (var i in Object.keys(database[0])) {
            keyindex = Object.keys(database[0])[i];
            th += "<th><input type='button' onclick='sorting(this)' value=" + keyindex + ">" +
                "</th>";
            console.log(keyindex);
        }
        tablehead += th;
        document.querySelector("#tablehead").innerHTML = tablehead;
        for (var k in database) {
            var tr = "<tr>";
            for (var j in database[k]) {
                tr += "<td>" + database[k][j] + "</td>";
            }
            tr += "</tr>";
            table += tr;
        }
        document.querySelector("#tablebody").innerHTML = table;
    });

});

function sorting(objButton) {
    var database = document.querySelector("#database").value;
    console.log(database);
    var btnvalue = objButton.value
    var tableData = document.querySelector("tr").innerHTML;
    console.log(btnvalue);
    console.log(tableData);
}