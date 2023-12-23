import { MissionSmall } from "../../../types"

interface SmallMissionsProps {
    missions : MissionSmall[]
}

const SmallMissionComponent = ({missions} : SmallMissionsProps) => {
    return (
        <div className="flex flex-wrap w-full">
            {
                missions.map(mission => (
                    <div className="w-fit h-fit border border-solid border-zinc-500 rounded-xl m-1 p-2" key={mission.name}>
                        <div>Name : {mission.name}</div>
                        <div>Flight : {mission.flight}</div>
                    </div>
                ))

            }
        </div>
    )
}

export default SmallMissionComponent;