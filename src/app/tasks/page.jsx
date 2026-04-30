import { AddTasks } from '@/components/AddTasks';
import TasksCard from '@/components/TasksCard';
import { CreateATask } from '@/lib/CreateATask';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {

    const tasks = await getTasks();
    return (
        <div className='container mx-auto gap-5'>
            <h2>Tasks: {tasks.length}</h2>


            <AddTasks CreateATaskreateATask={CreateATask}/>
            <div className='grid grid-cols-3 gap-5 py-4'>

                {
                    tasks.map((task) => <TasksCard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default TasksPage;