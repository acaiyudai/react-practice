import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(prevState => {
            return prevState + 1;
        });
    };

    const countDown = () => {
        setCount(prevState => {
            return prevState - 1;
        });
    };

    // レンダリングが行われた直後に行いたい処理をuseEffectに記述する.
    // 下の場合, propsやstateの更新をトリガーにした再レンダリングが行われる際,
    // useEffect内のconsole.logが実行される.

    // 毎回実行される
    // useEffect(() => {
    //     console.log('Current count is...', count);
    // });
    // // 初回レンダリング後のみ実行される
    // useEffect(() => {
    //     console.log('Current count is...', count);
    // }, []);

    // // triggerが変更されるたびに実行される
    // useEffect(() => {
    //     console.log('Current count is...', count);
    // },[trigger]);

    // // trigger1かtrigger2が変更されるたびに実行される
    // useEffect(() => {
    //     console.log('Current count is...', count);
    // }, [trigger1, trigger2]);

    // countの変更後にのみ実行される
    useEffect(() => {
        console.log('Current count is...', count);
    }, [count]);



    return (
        <div>
            <p>現在のカウント数: {count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
};
export default Counter;