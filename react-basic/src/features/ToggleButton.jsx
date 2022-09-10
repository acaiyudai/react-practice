import { useEffect, useState } from "react";
const ToggleButton = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(prevState => !prevState);
    };

    useEffect(() => {
        // console.log('Current state is', open);
        if (open) {
            // console.log('Subscribe database...');
        }
        // 下はクリーンアップ関数
        // 再レンダリングが実行される直前に必ず実行される.
        // データベースやAPIの購読を行う際に用いる.
        return () => {
            // console.log('Unsubscribe database!');
        };
    });

    return (
        <button onClick={toggle}>
            {open ? 'OPEN':'CLOSE'}
        </button>
    );
}
export default ToggleButton;