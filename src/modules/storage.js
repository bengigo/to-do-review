export function getStorage() {
  console.log("GET is succesfull");
  let toDos = [];
  toDos = toDos = JSON.parse(localStorage.getItem("toDos") || "[]");
  return toDos;
}

export function setStorage() {
  console.log("test SET");
  //   return localStorage.setItem("toDos", JSON.stringify(toDos));
}
