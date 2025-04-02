// Implementação do método slice
Array.prototype.slice = function(start = 0, end = this.length) {
  // Lidar com índices negativos
  if (start < 0) {
    start = this.length + start;
    if (start < 0) {
      start = 0;
    }
  }

  if (end < 0) {
    end = this.length + end;
    if (end < 0) {
      end = 0;
    }
  }

  // Garantir que os índices não estejam fora dos limites
  start = Math.min(start, this.length);
  end = Math.min(end, this.length);

  // Criar um novo array para os elementos fatiados
  const result = [];

  // Percorrer o array e adicionar os elementos ao novo array
  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }

  return result;
};

// Exemplo de uso
const numbers = [5, 6, 1, 4, 2, 5];
console.log(numbers.slice(1, 4)); // [6, 1, 4]
console.log(numbers.slice(-4, -1)); // [1, 4, 2]
console.log(numbers.slice(2)); // [1, 4, 2, 5]
console.log(numbers.slice()); // [5, 6, 1, 4, 2, 5]
