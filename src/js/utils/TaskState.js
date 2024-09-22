/*
 * TaskState object that defines the possible states of a task.
 * This includes:
 * - PENDING: Represents a task that has not yet been completed.
 * - COMPLETE: Represents a task that has been finished.
 */
const TaskState =  {
    PENDING: 0,
    COMPLETE: 1
};

Object.freeze(TaskState);

export default TaskState;