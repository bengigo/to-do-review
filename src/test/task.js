export const addToList = (description, completed = false) => {
    const task = [];
    const newToList = {
      description,
      completed,
      index: task.length
    };
    task.push(newToList);
    return task.length;
  };
  
  export const deleteToList = (index) => {
    const task = [
        {
            description: 'firstTask',
            completed: false,
            index: 0,    
        },
        {
            description: 'secondTask',
            completed: false,
            index: 1,  
        },
        {
            description: 'thirdTask',
            completed: false,
            index: 2,  
        },
    ];

    return task.filter((item) => item.index !== index);
  };
  
  export function updateToList(index, description, completed) {
    const task = [
        {
            description: 'firstTask',
            completed: false,
            index: 0,    
        },
        {
            description: 'secondTask',
            completed: false,
            index: 1,  
        },
        {
            description: 'thirdTask',
            completed: false,
            index: 2,  
        },
    ];
const itemIndex = task.findIndex((todo) => todo.index === Number(index));
    task[itemIndex] = { ...task[itemIndex], description, completed };
    return task[itemIndex];
  };
  
  export const removeToList = (list) => list.filter((todo) => todo.completed === false);