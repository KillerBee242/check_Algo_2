function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // L'élément à insérer
        let j = i - 1;

        // Déplace les éléments de arr[0..i-1], qui sont
        // plus grands que 'key', d'une position vers la droite
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Déplacement de l'élément
            j = j - 1; // On se déplace vers la gauche
        }

        // Insère 'key' dans la bonne position
        arr[j + 1] = key;
    }
    return arr;
}

// Exemple d'utilisation
let array = [5, 2, 9, 1, 5, 6];
console.log("Tableau trié :", insertionSort(array));