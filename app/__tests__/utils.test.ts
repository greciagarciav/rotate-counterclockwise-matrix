import { rotateImageAntihorario } from '../lib/utils'; 

test('rotateImageAntihorario deberia rota la matriz 90 grados en sentido', () => {
  const inputMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const expectedOutput = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7]
  ];

  const result = rotateImageAntihorario(inputMatrix);
  expect(result).toEqual(expectedOutput);
});
