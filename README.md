# 💰 Cash Machine

## Objectif
Créer une machine à cash qui simule la distribution d'argent sous forme de billets pour un montant donné. L'objectif est de fournir le montant en utilisant le moins de billets possibles.

---

## Spécifications

1. Écrivez une fonction appelée `cashMachine` qui prend une seule entrée :
    - `amount` (number) : le montant d'argent que l'utilisateur veut retirer.

2. La fonction doit retourner un objet indiquant le nombre de billets nécessaires pour composer le montant.

3. Les billets disponibles dans la machine sont :
    - 500 €
    - 200 €
    - 100 €
    - 50 €
    - 20 €
    - 10 €
    - 5 €
    - 2 €
    - 1 €

4. Si le montant est inférieur ou égal à 0, la fonction doit retourner un message d'erreur : `"Montant invalide"`.

---

## Contraintes

- Essayez d'utiliser des structures comme des boucles pour éviter la répétition de code.
- Le résultat doit toujours minimiser le nombre total de billets nécessaires.

---

## Exemple

```javascript
cashMachine(786);
// Résultat attendu :
// {
//   500: 1,
//   200: 1,
//   50: 1,
//   20: 1,
//   10: 1,
//   5: 1,
//   1: 1
// }

cashMachine(0);
// Résultat attendu : "Montant invalide"

cashMachine(-50);
// Résultat attendu : "Montant invalide"
```

---

## Étapes suggérées

<details>
<summary>Cliquez pour afficher les étapes - Astuces - Tips</summary>

1. Déclarez un tableau contenant les valeurs des billets disponibles, par exemple : `[500, 200, 100, 50, 20, 10, 5, 2, 1]`.
2. Initialisez un objet vide pour stocker le nombre de billets nécessaires.
3. Utilisez une boucle pour parcourir les billets disponibles et calculez combien de chaque billet est nécessaire.
4. Gérez les cas où le montant est invalide (≤ 0).
5. Testez votre fonction avec différents montants pour vérifier sa fiabilité.

</details>

---

## Bonus

1. Ajoutez une vérification pour simuler une limite de billets disponibles dans la machine (par exemple : "La machine ne contient que 5 billets de 500 €").
2. Ajoutez une interface utilisateur simple en ligne de commande pour que l'utilisateur puisse entrer un montant et voir les résultats.
