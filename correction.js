// 💰 Cash Machine Functionality

/**
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
