import MyFooter from "@/components/footer";
import HtmlHead from "@/components/html-head";
import Navigation from "@/components/navigation";
import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import React, {ReactElement} from "react";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function PageContainer({title, index, elements}: {
    title: string,
    index: number,
    elements: ReactElement
}) {
    return (
        <>
            <HtmlHead title={title}/>

            <main className={"flex flex-col justify-between items-center"}>
                <div className={"h-full w-full"}>
                    <Navigation active={index}/>

                    {elements}

                    <MyFooter/>
                </div>
            </main>
        </>
    )

}
