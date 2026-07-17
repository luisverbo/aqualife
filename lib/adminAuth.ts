/** Comparação de senha em tempo ~constante (uso só no servidor). */
export function passwordOk(provided: string, expected: string): boolean {
  if (!expected) return false;
  if (provided.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= provided.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}
