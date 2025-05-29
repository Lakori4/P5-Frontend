import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact/src/index.d.ts";


const ChangeColor:FunctionComponent = () => {

    const [time, setTime] = useState<number>();

    while (1) {
        const date = new Date()
        const epoch = date.getTime()/1000;
        setTime(epoch)
    }

    useEffect(() => {}, [time] )

}