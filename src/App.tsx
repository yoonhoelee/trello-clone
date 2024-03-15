import React from 'react';
import {useRecoilState} from "recoil";
import {hourSelector, minuteState} from "./atoms";

function App() {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const [hours, setHours] = useRecoilState(hourSelector);
    const onMinutesChage = (event: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value);
    };
    const onHoursChage = (event: React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    };
    return (
        <div>
            <input value={minutes} onChange={onMinutesChage} type="number" placeholder="Minutes"></input>
            <input value={hours} onChange={onHoursChage} type="number" placeholder="Hours"></input>
        </div>
    );
}

export default App;
