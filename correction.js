// 💰 Cash Machine Functionality

/**
 *  VERSION 1
 * Simule une machine à cash qui distribue de l'argent avec un minimum de billets.
 * @param {number} amount - Montant à retirer.
 * @returns {Object|string} - Un objet contenant le nombre de billets ou un message d'erreur.
 */
function cashMachine(amount) {
    if (amount <= 0) {
        return "Montant invalide"; // Erreur si le montant est ≤ 0
    }

    // Liste des billets disponibles
    const bills = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    const result = {}; // Stocke le nombre de billets nécessaires

    // Calcul des billets nécessaires
    bills.forEach((bill) => {
        if (amount >= bill) {
            result[bill] = Math.floor(amount / bill); // Nombre de billets pour cette valeur
            amount %= bill; // Mise à jour du montant restant
        }
    });

    return result;
}

// Exemple d'utilisation
console.log(cashMachine(786));
// Résultat attendu : { 500: 1, 200: 1, 50: 1, 20: 1, 10: 1, 5: 1, 1: 1 }

console.log(cashMachine(0));
// Résultat attendu : "Montant invalide"

console.log(cashMachine(-50));
// Résultat attendu : "Montant invalide"






/**
 *  VERSION 2
 * Simule une machine à cash qui distribue de l'argent avec un minimum de billets.
 * @param {number} amount - Montant à retirer.
 * @returns {Object|string} - Un objet contenant le nombre de billets ou un message d'erreur.
 */
function cashMachineIf(amount) {
    if (amount <= 0) {
        return "Montant invalide"; // Erreur si le montant est ≤ 0
    }
    
    const result = {}; // Stocke le nombre de billets nécessaires

    // Calcul des billets nécessaires avec des if
    if (amount >= 500) {
        result[500] = Math.floor(amount / 500);
        amount %= 500;
    }
    if (amount >= 200) {
        result[200] = Math.floor(amount / 200);
        amount %= 200;
    }
    if (amount >= 100) {
        result[100] = Math.floor(amount / 100);
        amount %= 100;
    }
    if (amount >= 50) {
        result[50] = Math.floor(amount / 50);
        amount %= 50;
    }
    if (amount >= 20) {
        result[20] = Math.floor(amount / 20);
        amount %= 20;
    }
    if (amount >= 10) {
        result[10] = Math.floor(amount / 10);
        amount %= 10;
    }
    if (amount >= 5) {
        result[5] = Math.floor(amount / 5);
        amount %= 5;
    }
    if (amount >= 2) {
        result[2] = Math.floor(amount / 2);
        amount %= 2;
    }
    if (amount >= 1) {
        result[1] = Math.floor(amount / 1);
        amount %= 1;
    }

    return result;
}

// Exemple d'utilisation
console.log(cashMachineIf(786));
// Résultat attendu : { 500: 1, 200: 1, 50: 1, 20: 1, 10: 1, 5: 1, 1: 1 }

console.log(cashMachineIf(0));
// Résultat attendu : "Montant invalide"

console.log(cashMachineIf(-50));
// Résultat attendu : "Montant invalide"
