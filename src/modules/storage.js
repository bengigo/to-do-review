export default function getStorage() {
  let toDos = [];
  toDos = toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
  return toDos;
}
