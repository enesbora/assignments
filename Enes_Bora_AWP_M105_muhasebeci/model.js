let sortFirstNameStatus = true;
let sortLastNameStatus = true;
let sortCantonStatus = true;

class Canton {
    constructor() {
        this.cantons = [{
                name: "Vaud"
            },
            {
                name: "Bern"
            },
            {
                name: "Luzern"
            },
            {
                name: "Uri"
            },
            {
                name: "Schwyz"
            },
            {
                name: "Obwalden"
            },
            {
                name: "Nidwalden"
            },
            {
                name: "Glarus"
            },
            {
                name: "Zug"
            },
            {
                name: "Fribourg"
            },
            {
                name: "Solothurn"
            },
            {
                name: "Basel-Stadt"
            },
            {
                name: "Basel-Landschaft"
            },
            {
                name: "Schaffhausen"
            },
            {
                name: "Appenzell Ausserrhoden"
            },
            {
                name: "Appenzell Innerrhoden"
            },
            {
                name: "St. Gallen"
            },
            {
                name: "Graubünden"
            },
            {
                name: "Aargau"
            },
            {
                name: "Thurgau"
            },
            {
                name: "Ticino"
            },
            {
                name: "Zürich"
            },
            {
                name: "Wallis"
            },
            {
                name: "Neuchatel"
            },
            {
                name: "Cenevre"
            },
            {
                name: "Jura"
            },
        ]
    }


    /***
     * Bu fonksiyon, dropdownlist'e tüm kanton isimlerini render eder.
     */

    renderCantons() {
        let container = dom.getElementById("canton");
        let cantonItems = this.cantons.map(item => {
            return `<option value="${item.name}">${item.name}</option>`
        }).join();
        container.innerHTML = cantonItems

    }
}

class Person {
    constructor(firstName, lastName, canton) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.canton = canton;
        this.persons = [];
    }

    /**
     * Bu fonksiyon, kaydet butonuna tiklandiginda formdaki bilgileri yeni bir kisi olarak kaydeder. Kayit sonrasi formu temizler ve kaydedilen kisileri tabloda listeler.
     */

    addNewPerson() {
        let saveButton = dom.getElementById("submit");
        saveButton.addEventListener("click", function() {
            let firstName = dom.getElementById("firstName").value;
            let lastName = dom.getElementById("lastName").value;
            let canton = dom.getElementById("canton").value;
            let newPerson = new Person(firstName, lastName, canton);
            this.persons.push(newPerson);
            this.clearForm();
            this.renderPersons(this.persons);
        }.bind(this));
    }



    /**
     * Bu fonksiyon, formdaki bilgileri kayit sonrasi temizler.
     */
    clearForm() {
        dom.getElementById("firstName").value = "";
        dom.getElementById("lastName").value = "";
        dom.getElementById("canton").value = "Vaud";
    }

    /**
     * Bu fonksiyon, sagdaki tabloda tüm kayitli kisileri listeler.
     * @param {*} pPersons 
     */
    renderPersons(pPersons) {
        let container = dom.getElementById("tbody");
        let personItems = pPersons.map(item => {
            return `<tr><td>${item.firstName}</td><td>${item.lastName}</td><td>${item.canton}</td></tr>`
        }).join("");
        container.innerHTML = personItems;
    }
}

class Sort {
    /**
     * Bu fonksiyon, isme, soyisme ve kantona göre a'dan z'ye ve z'den a'ya siralama yapan fonksiyonu cagirir.
     */
    sortTable() {
        let table = dom.getElementById("table");
        table.addEventListener("click", function(e) {
            if (e.target.id === "sortFirstName") {
                sortFirstNameStatus ? this.sortByFirstNameAZ() : this.sortByFirstNameZA();
                sortFirstNameStatus = !sortFirstNameStatus;
            }
            if (e.target.id === "sortLastName") {
                sortLastNameStatus ? this.sortByLastNameAZ() : this.sortByLastNameZA();
                sortLastNameStatus = !sortLastNameStatus;
            }
            if (e.target.id === "sortCanton") {
                sortCantonStatus ? this.sortByCantonAZ() : this.sortByCantonZA();
                sortCantonStatus = !sortCantonStatus;
            }

        }.bind(this));
    }

    /**
     * Bu fonksiyon, tablodaki kisi isimlerini a'dan z'ye siralar.
     */
    sortByFirstNameAZ() {
        person.persons = person.persons.sort(function(a, b) {
            let x = a.firstName.toLowerCase();
            let y = b.firstName.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
        person.renderPersons(person.persons);
    }

    /**
     * Bu fonksiyon, tablodaki kisi isimlerini z'den a'ya siralar.
     */
    sortByFirstNameZA() {
        person.persons = person.persons.sort(function(a, b) {
            let x = b.firstName.toLowerCase();
            let y = a.firstName.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
        person.renderPersons(person.persons);
    }

    /**
     * Bu fonksiyon, tablodaki kisi soyisimlerini a'dan z'ye siralar.
     */
    sortByLastNameAZ() {
        person.persons = person.persons.sort(function(a, b) {
            let x = a.lastName.toLowerCase();
            let y = b.lastName.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
        person.renderPersons(person.persons);
    }

    /**
     * Bu fonksiyon, tablodaki kisi soyisimlerini z'den a'ya siralar.
     */
    sortByLastNameZA() {
        person.persons = person.persons.sort(function(a, b) {
            let x = b.lastName.toLowerCase();
            let y = a.lastName.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
        person.renderPersons(person.persons);
    }

    /**
     * Bu fonksiyon, tablodaki kanton isimlerini a'dan z'ye siralar.
     */
    sortByCantonAZ() {
        person.persons = person.persons.sort(function(a, b) {
            let x = a.canton.toLowerCase();
            let y = b.canton.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
        person.renderPersons(person.persons);
    }

    /**
     * Bu fonksiyon, tablodaki kanton isimlerini z'den a'ya siralar.
     */
    sortByCantonZA() {
        person.persons = person.persons.sort(function(a, b) {
            let x = b.canton.toLowerCase();
            let y = a.canton.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
        person.renderPersons(person.persons);
    }
}

class Filter {

    /**
     * Bu fonksiyon, arama kutusuna yazilan kelimelere göre isim ve soyisim sütunlarinda filtreleme yapar.
     */
    filterTable() {
        let searchIcon = dom.getElementById("tt-right");

        searchIcon.addEventListener("click", function(e) {
            if (e.target.className === "fas fa-search") {
                let filterText = dom.getElementById("filterText").value.toLowerCase();
                let filterPersons = person.persons.filter(item => {
                    let firstName = item.firstName.toLowerCase();
                    let lastName = item.lastName.toLowerCase();
                    return firstName.includes(filterText) || lastName.includes(filterText);
                });
                person.renderPersons(filterPersons);
            }

        });
    }
}

class DOM {
    /**
     * Bu fonksiyon, parametre olarak gönderilen id'ye iliskin HTML elementini secer.
     * @param {*} pId 
     */
    getElementById(pId) {
        return document.querySelector(`#${pId}`);
    }
}

class Manager {
    start() {
        canton.renderCantons();
        person.addNewPerson();
        sort.sortTable();
        filter.filterTable();
    }
}