import {deleteTask, getAllTasks, updateTask} from "../../services";
import {memo, useCallback, useEffect, useState} from "react";
import Modal from "../UI/modal/Modal";
import Task from "../task/Task";
import TaskForm from "../taskForm/TaskForm";
import TaskNavigation from "../taskNavigation/TaskNavigation";
import cl from "./Tasks.module.scss";
import {useFetch} from "../../hooks";
import {useSelector} from "react-redux";
import MyLoader from "../UI/myLoader/MyLoader";

export default memo(function Tasks () {
    const [activeModal, setActiveModal] = useState(false);
    const [editTask, setEditTask] = useState(undefined);

    console.log("TASKS");
    const {goFetch, loading} = useFetch();
    const {taskReducer} = useSelector(state => state);

    const {tasks} = taskReducer;
    console.log(tasks);

    useEffect(async () => {
        if (!tasks.length) {
            await goFetch(getAllTasks(), true);
        }
        console.log("dddddd");
    }, [tasks]);

    const clickCreate = useCallback(() => {
        setActiveModal(true);
        setEditTask(undefined);
    }, [],
    );

    const clickEdit = useCallback((task) => {
        setEditTask(task);
        setActiveModal(true);
    }, [],
    );

    const clickDelete = useCallback(async (id) => {
        await goFetch(deleteTask(id), true);
    }, [],
    );

    const clickCompleted = useCallback(async (id, check) => {
        await goFetch(updateTask({isDone: check}, id), true);
    }, [],
    );

    if (loading) {
        return <MyLoader/>;
    }
    return (
        <div className={cl.tasksDiv}>
            <div className={cl.tasksContainer}>
                <div className={cl.tasksContent}>
                    <div className={cl.tasksList}>
                        <TaskNavigation clickCreate={clickCreate}/>
                        {
                            tasks.map(item => <Task
                                checked ={item.isDone}
                                clickEdit={clickEdit}
                                clickDelete={clickDelete}
                                clickCompleted={clickCompleted}
                                task={item}
                                key={item.id}/>)
                        }
                        <Modal
                            active={activeModal}
                            setActive={setActiveModal}>
                            <TaskForm setActive={setActiveModal} editTask={editTask} />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
},
);
