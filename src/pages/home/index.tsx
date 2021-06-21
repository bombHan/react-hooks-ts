import { useState, useEffect, useMemo } from 'react'
import {Button} from 'antd';

const Home = () => {
    const [num, setNum] = useState<number>(0);
    const changeNum = (changeNum:number) => {
        setNum(num + changeNum)
    }
    return (
        <div className="home">
            Home
            <div>
                {num}
            </div>
            <div>
                <Button onClick={()=>changeNum(1)} style={{marginRight: '20px'}}>+1</Button>
                <Button onClick={()=>changeNum(-1)}>-1</Button>
            </div>
        </div>
    )
}

export default Home
