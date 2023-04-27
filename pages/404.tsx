import HtmlHead from "@/components/html-head";
import {Button} from "flowbite-react";
import Link from "next/link";

export default function Custom404Page() {
    return <>
        <HtmlHead title={"404 | Neo Chen"}/>

        <div className={"w-[100vw] h-[100vh] flex items-center"}>
            <div className={"w-full flex flex-col items-center gap-8"}>
                <h1 className={"text-9xl font-bold"}>404</h1>
                <h2 className={"text-xl"}>This page does not exist</h2>
                <Link href={"/"}>
                    <Button gradientDuoTone={"greenToBlue"} outline={true}>
                        <div className={"flex flex-row"}>
                            Take me home!
                        </div>
                    </Button>
                </Link>
            </div>
        </div>
    </>
}

