import TasksCard from '@/components/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {

    const tasks = await getTasks();
    return (
        <div className='container mx-auto gap-5'>
            <h2>Tasks: {tasks.length}</h2>
            <div>
                {
                    tasks.map((task) => <TasksCard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default TasksPage;