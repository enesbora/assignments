/**
 * Bu fonksiyon, gönderilen id'ye gore ilgili Html nesnesini döndürür. 
 * @param {*} pId 
 */
function getElementById(pId) {
    return document.querySelector(`#${pId}`);
}

/**
 * Bu fonksiyon, gönderilen class'a gore ilgili Node List'i döndürür.
 * @param {*} pClass 
 */
function getElementByClassName(pClass) {
    return document.querySelectorAll(`.${pClass}`);
}

/**
 * Bu fonksiyon, 0'dan gönderilen dizinin uzunluguna kadar rastgele bir tamsayi döndürür. 
 * @param {*} pArray 
 */
function getRandomNumber(pArray) {
    return Math.floor(Math.random() * pArray.length);
}

/**
 * 
 * Bu fonksiyon, 0'dan 4'e kadar rastgele bir tamsayi geriye döndürür. 
 */
function getRandomNumberForAnswer() {
    return Math.floor(Math.random() * 4);
}

/**
 * Bu fonksiyon, kelimelerin tutuldugu objeden rastgele bir kelimeyi ve secilen kelimenin 
 * dogru cevabini rastgele bir secenege yazdirir. Yanlis olan 3 secenek ise yine rastgele 
 * olarak secilir ve yazdirilir.
 * @param {*} words 
 * @param {*} activeWords 
 */
function renderWordAndAnswers(words, activeWords) {

    let randomNumberForWordAsked = getRandomNumber(words);
    let wordAsked = words[randomNumberForWordAsked].word;
    let meaning = words[randomNumberForWordAsked].meaning;
    getElementById("word").innerHTML = wordAsked;

    activeWords[randomNumberForWordAsked].isActive = false;

    activeWords = activeWords.filter(item => {
        return item.isActive === true;
    });

    let randomNumberForTrueAnswer = getRandomNumberForAnswer();
    let answers = getElementByClassName("answers");

    for (i = 0; i < 4; i++) {
        if (i === randomNumberForTrueAnswer) {
            answers[randomNumberForTrueAnswer].innerHTML = meaning;
        } else {
            let randomNumberForFalseAnswer = getRandomNumber(activeWords);

            answers[i].innerHTML = activeWords[randomNumberForFalseAnswer].meaning;

            activeWords[randomNumberForFalseAnswer].isActive = false;

            activeWords = activeWords.filter(item => {
                return item.isActive === true;
            });
        }
    }
}

/**
 * Bu fonksiyon, seceneklerden herhangi bir tanesine tiklandiginda sayac degeri 8 olana kadar 1 arttirir. 
 * Soru cevaplandiktan 1 saniye sonra yeni soru ekrana getirilir..
 */
function addEventListenerAnswers() {
    getElementById("answers-container").addEventListener("click", function(e) {
        counter++;
        if (counter < 9) {
            let clickedAnswer = e.target.innerText;
            let wordAsked = getElementById("word").innerText;
            let meaning = words.find((item => {
                return item.word == wordAsked;
            })).meaning;
            if (clickedAnswer === meaning) {
                updateScore(true);
            } else {
                updateScore(false);
            }

            activeWords.forEach(item => {
                item.isActive = true;
            });

            makeGreenAndRedBackgroundColor("add", meaning);

            setTimeout(function() {
                makeGreenAndRedBackgroundColor("remove", meaning);
                renderWordAndAnswers(words, activeWords);
            }, 1000);
        }
    });
}

/**
 * Bu fonksiyon, soru cevaplandiginda seceneklerin arka planini renklendirir
 */
function makeGreenAndRedBackgroundColor(pStatus, pMeaning) {
    if (pStatus === "add") {
        getElementByClassName("answers").forEach(item => {
            if (item.innerText == pMeaning) {
                item.classList.add("green");
            } else {
                item.classList.add("red");
            }
        });
    }
    if (pStatus === "remove") {
        getElementByClassName("answers").forEach(item => {
            if (item.innerText == pMeaning) {
                item.classList.remove("green");
            } else {
                item.classList.remove("red");
            }
        });
    }
}

/**
 * Bu fonksiyon, dogru ve yanlis sayilarini ve skoru güncelleyip ekrana yazdirir.
 */
function updateScore(pStatus) {
    let trueAnswerCount = parseInt(getElementById("tb-info-true").innerText);
    let falseAnswerCount = parseInt(getElementById("tb-info-false").innerText);
    let activeScore = parseInt(getElementById("tb-info-score").innerText);
    if (pStatus) {
        trueAnswerCount++;
    } else {
        falseAnswerCount++;
    }
    getElementById("tb-info-true").innerHTML = trueAnswerCount;
    getElementById("tb-info-false").innerHTML = falseAnswerCount;
    getElementById("tb-info-score").innerHTML = trueAnswerCount * 12.5;
    calculateScore(trueAnswerCount, falseAnswerCount, activeScore);
}

/**
 * Bu fonksiyon, toplam puani hesaplar.
 */
function calculateScore(pTrueAnswerCount, pFalseAnswerCount) {
    let total = pTrueAnswerCount + pFalseAnswerCount;
    if (total === 8) {
        let score = pTrueAnswerCount * 12.5;
        getElementById("gr-score").innerHTML = score;
        getElementById("game-result").classList = "";
    }
}

/**
 * Bu fonksiyon, kullanici eger yeniden bir oturum baslatmak isterse sayfayi yeniler. 
 */
function addEventListenerNewGame() {
    getElementById("start-game").addEventListener("click", function(e) {
        window.location.reload(false);
    });
}