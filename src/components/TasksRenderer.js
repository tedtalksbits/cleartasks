import React from "react";
import { CardGrid } from "./PageComponents";
import { Task } from "./Task";
export const TasksRenderer = ({ tasks }) => {
   if (tasks?.length === 0) {
      return (
         <>
            <p className="custom-text">
               Click the + button to add a new set of tasks
            </p>
         </>
      );
   }

   return (
      tasks && (
         <>
            <CardGrid>
               {tasks.map((task, key) => (
                  <Task
                     key={key}
                     link={`/cleartasks/tasks/${task._id}/${task.tasksName}`}
                     text={task.tasksName}
                     taskId={task._id}
                  />
               ))}
            </CardGrid>
         </>
      )
   );
};
