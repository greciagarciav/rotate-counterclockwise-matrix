const swap = (matrix: number[][], g: number, h: number, i: number, j: number) => {
    let temp = matrix[g][h];
    matrix[g][h] = matrix[i][j];
    matrix[i][j] = temp;
}

export const rotateImageAntihorario = (matrix: number[][]) => {
    if (matrix.length > 1) {
        let topRow = 0, bottomRow = matrix.length - 1, leftCol = topRow, rightCol = bottomRow;

        while (topRow < bottomRow && leftCol < rightCol) {
        swap(matrix, topRow, leftCol, bottomRow, leftCol);
        swap(matrix, topRow, leftCol, bottomRow, rightCol);
        swap(matrix, topRow, leftCol, topRow, rightCol);

        for (let i = topRow + 1, j = bottomRow - 1; i < bottomRow && j > topRow; i++, j--) {
            swap(matrix, topRow, i, j, leftCol);
            swap(matrix, topRow, i, bottomRow, j);
            swap(matrix, topRow, i, i, rightCol);
        }

        topRow++; leftCol++;
        bottomRow--; rightCol--;
        }
    }

    return matrix;
}