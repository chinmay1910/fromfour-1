

import motorImage from '../assets/motor.jpg'
import { ProgressCircle } from '../common/ProgressCircle'
import { Card } from './Card'
import { Tracker } from './Tracker'
const AssetProfile = () => {

    const data = [
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-rose-600", tooltip: "Breakdown" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-rose-600", tooltip: "Breakdown" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-amber-400", tooltip: "Warning" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
        { color: "bg-emerald-500", tooltip: "Normal" },
    ]


    return (
        <div>
        <Card>
        <div className="flex gap-4 flex-grow">
                <div className="flex gap-3 w-[45%]">
                    <div className="flex gap-7">
                        <div>
                            <img src={motorImage} alt="Motor" style={{ height: '140px' }} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <h4>Asset Performance Indicators</h4>
                                <p className="p-light text-xs">July 24 2024 to September 24 2024</p>
                            </div>
                            <div className='flex gap-5 mt-3'>
                                <ProgressCircle variant="error" value={72} radius={28} strokeWidth={5}>
                                    <span className="text-xs font-medium text-gray-900 dark:text-gray-50">OEE</span>
                                </ProgressCircle>
                                <ProgressCircle variant="warning" value={90} radius={28} strokeWidth={5}>
                                    <span className="text-xs font-medium text-gray-900 dark:text-gray-50">Temp</span>
                                </ProgressCircle>
                                <ProgressCircle variant="success" value={24} radius={28} strokeWidth={5}>
                                    <span className="text-xs font-medium text-gray-900 dark:text-gray-50">MTBF</span>
                                </ProgressCircle>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col flex-grow mr-5">
                    <div className=" flex flex-col flex-grow items-end gap-2" >
                        <span className="font-medium text-gray-400 dark:text-gray-300">
                            Uptime 36%
                        </span>
                        <Tracker data={data} hoverEffect={true} />
                    </div>

                    <div className='flex gap-9 items-center'>
                        <div className='flex-col gap-3'>
                            <p className="p-light text-xs">
                                Downtime
                            </p>
                            <h3>
                                04:30
                            </h3>
                        </div>
                        <div className='h-5 border '>
                        </div>
                        <div className='flex-col gap-3'>
                            <p className="p-light text-xs">
                                Downtime
                            </p>
                            <h3>
                                04:30
                            </h3>
                        </div>
                        <div className='h-5 border '>
                        </div>
                        <div className='flex-col gap-3'>
                            <p className="p-light text-xs">
                                Downtime
                            </p>
                            <h3>
                                04:30
                            </h3>
                        </div>
                        <div className='h-5 border '>
                        </div>
                        <div className='flex-col gap-3'>
                            <p className="p-light text-xs">
                                Downtime
                            </p>
                            <h3>
                                04:30
                            </h3>
                        </div>
                        <div className='h-5 border '>
                        </div>
                        <div className='flex-col gap-3'>
                            <p className="p-light text-xs">
                                Downtime
                            </p>
                            <h3>
                                04:30
                            </h3>
                        </div>
                        <div className='h-5 border '>
                        </div>
                        <div className='flex-col gap-3'>
                            <p className="p-light text-xs">
                                Downtime
                            </p>
                            <h3>
                                04:30
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        
        </Card>
           

        </div>

    )
}

export default AssetProfile
