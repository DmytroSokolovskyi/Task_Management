import cl from "./TaskNavigation.module.scss";
import MyCheckBox from "../UI/myCheckBox/MyCheckBox";
import MyButton from "../UI/myButton/MyButton";
import {useCallback, useState} from "react";
import {useDebounce, useFetch} from "../../hooks";
import {updateManyTask} from "../../services";

export default function TaskNavigation ({clickCreate}) {
    const [checkAll, setCheckAll] = useState(false);
    const {goFetch} = useFetch();

    const checkHandler = useCallback(() => {
        setCheckAll(prevState => !prevState);
        checkTaskDebounce();
    }, [checkAll]);

    const createHandler = () => {
        clickCreate();
    };

    const checkTaskDebounce = useDebounce(async () => {
        console.log(!checkAll);
        await goFetch(updateManyTask({isDone: !checkAll}), true);
    }, 1000);

    return (
        <div className={cl.tasksNav}>
            <MyCheckBox
                checked={checkAll}
                onChange={checkHandler}
            />
            <MyButton onClick={createHandler}>
                {"Create Task"}
            </MyButton>
            <div className={cl.selectDiv}>
                <select className={cl.selectSort} name="selectSort" onChange={(e) => {
                    console.log(e.target.value);
                }}
                >
                    <option value={1}>{"active first"}</option>
                    <option value={2}>{"completed first"}</option>
                    <option value={3}>{"duration asc"}</option>
                    <option value={4}>{"duration desc"}</option>
                    <option value={5}>{"priority desc"}</option>
                    <option value={6}>{"priority desc"}</option>
                </select>

            </div>

        </div>
    );
}
