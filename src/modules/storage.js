export default function getStorage() {
  const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
  return toDos;
}
