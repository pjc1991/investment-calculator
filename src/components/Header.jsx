import {IconMoneybag} from "@tabler/icons-react";

export default function Header() {
    return (
        <>
            <div className="bg-gray-800 w-screen h-12">
            </div>
            <IconMoneybag className={"w-12 h-12 text-white mx-auto m-4"}/>
            <h1 className="text-3xl font-bold">
                투자 계산기
            </h1>
        </>
    )
}