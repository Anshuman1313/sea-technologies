"use client";
import React, { ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";
import GradientText from "./GradientText";
import { ShimmeringText } from "./Shimmering-text";

export default function BlurryCursorSection() {
    const mouse = useRef({ x: 0, y: 0 });
    const delayedMouse = useRef({ x: 0, y: 0 });
    const rafId = useRef(0);

    const circle = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const size = 250;

    const lerp = (x: number, y: number, a: number) =>
        x * (1 - a) + y * a;

    const manageMouseMove = (e: MouseEvent) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;

        mouse.current = {
            x: e.clientX - rect.left, // relative x
            y: e.clientY - rect.top, // relative y
        };
    };

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.08),
            y: lerp(y, mouse.current.y, 0.08),
        };

        moveCircle(delayedMouse.current.x, delayedMouse.current.y);

        rafId.current = requestAnimationFrame(animate);
    };

    const moveCircle = (x: number, y: number) => {
        gsap.set(circle.current, {
            x,
            y,
            xPercent: -50,
            yPercent: -50,
            opacity: 1,
        });
    };

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleMouseEnter = () => {
            animate(); // start animation
            gsap.to(circle.current, { opacity: 1, duration: 0.3 });
        };

        const handleMouseLeave = () => {
            cancelAnimationFrame(rafId.current);
            gsap.to(circle.current, { opacity: 0, duration: 0.3 });
        };

        section.addEventListener("mousemove", manageMouseMove);
        section.addEventListener("mouseenter", handleMouseEnter);
        section.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            section.removeEventListener("mousemove", manageMouseMove);
            section.removeEventListener("mouseenter", handleMouseEnter);
            section.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <>
            <div className="flex-col items-center space-y-2 justify-center font-sans ">




                <h1 className='text-5xl font-semibold text-foreground text-center' >
                    Our Development <span className='text-blue-500'>Stack</span>
                </h1>

                <h3 className="text-base w-2/3 mx-auto text-center text-foreground/60">A robust, future-ready stack that enables secure, scalable, and high-performance digital products.</h3>
            </div>
            <section
                ref={sectionRef}
                className="relative h-[100vh] w-full overflow-hidden bg-background text-foreground"
            >
                <div
                    ref={circle}
                    className="absolute rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(59,130,246,0.6),rgba(59,130,246,0))] opacity-0 z-20"
                    style={{
                        width: size,
                        height: size,
                    }}
                />

                {/* Your Landing Page Section Content */}
                <div className="relative z-40 flex items-center justify-center h-full">
                    <div className="h-full w-full absolute ">
                        <div className="absolute inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-chart-3/30 to-transparent top-[10%]"></div>
                        <div className="absolute inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-chart-3/30 to-transparent top-[50%] z-40"></div>
                        <div className="absolute inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-chart-3/30 to-transparent top-[90%]"></div>
                        <div className="absolute inset-y-0 w-px h-full bg-gradient-to-b from-transparent via-chart-3/30 to-transparent z-10 left-[10%] top-0"></div>
                        <div className="absolute inset-y-0 w-px h-full bg-gradient-to-b from-transparent via-chart-3/30 to-transparent z-10 left-[26%] top-0"></div>
                        <div className="absolute inset-y-0 w-px h-full bg-gradient-to-b from-transparent via-chart-3/30 to-transparent z-10 left-[42%] top-0"></div>
                        <div className="absolute inset-y-0 w-px h-full bg-gradient-to-b from-transparent via-chart-3/30 to-transparent z-10 left-[58%] top-0"></div>
                        <div className="absolute inset-y-0 w-px h-full bg-gradient-to-b from-transparent via-chart-3/30 to-transparent z-10 left-[74%] top-0"></div>
                        <div className="absolute inset-y-0 w-px h-full bg-gradient-to-b from-transparent via-chart-3/30 to-transparent z-10 left-[90%] top-0"></div>

                        <div className="absolute inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-chart-3/30 to-transparent top-[10%]"></div>
                    </div>


                    <div className="h-full w-full flex ">
                        <div className="h-full w-[10%] bg-background">

                        </div>
                        <div className="flex-1 flex-col  ">
                            <div className="h-[10%] w-full bg-background"></div>



                            {/* <h1 className="text-5xl w-full font-bold bg-black  ">Section with Custom Cursor</h1> */}
                            <div className=" flex-1  h-[80%] py-px  ">

                                <div className="flex flex-wrap px-px  w-full h-full  ">

                                    {
                                        stackData.map((e, i) => (
                                            <div key={e.id} className="basis-1/5   p-px flex flex-col gap-px">
                                                <div className="h-full w-full backdrop-blur-3xl   bg-primary-background/80 flex justify-center items-center">
                                                    <div className="flex flex-col items-center gap-2 ">


                                                        <div className=" h-20 w-20 text-blue-500 ">

                                                            {e.icon}
                                                        </div>
                                                        <div className="text-center">

                                                            {e.title}
                                                        </div>
                                                    </div>


                                                </div>
                                                {/* <div className="h-[30%]  w-full  bg-primary-foreground/80">
                                                    {e.description}
                                                </div> */}

                                            </div>
                                        ))
                                    }
                                </div>
                                {/* <div className="flex flex-wrap px-px  w-full h-full  ">

                                    {
                                        Array.from({ length: 8 }).map((_, i) => (
                                            <div key={i} className="basis-1/4  backdrop-blur-3xl p-px flex flex-col gap-px">
                                                <div className="h-[70%] w-full  bg-primary-foreground/80">
                                                    hi heelo
                                                </div>
                                                <div className="h-[30%]  w-full  bg-primary-foreground/80">
                                                    hi heelo
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div> */}

                                {/* <div className="flex flex-wrap  w-full h-full px-1">

                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="basis-1/4 backdrop-blur-2xl h-1/2"
                                        >
                                            <div className="h-full w-full bg-red-600/80">
                                                hi
                                            </div>
                                        </div>
                                    ))}

                                </div> */}

                            </div>
                            {/* <h1 className="text-5xl w-full  font-bold bg-black ">Section with Custom Cursor</h1> */}
                            <div className="h-full w-full bg-background"></div>


                        </div>
                        <div className="h-full w-[10%] bg-background">

                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}
export type TechStack = {
    id: number;
    title: string;
    description: string;
    icon: ReactElement;
};

export const stackData: TechStack[] = [
    {
        id: 1,
        title: "React",
        description: "A fast, scalable library for building modern web interfaces.",
        icon: (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" preserveAspectRatio="none" className="h-full w-full " xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>)
    },
    {
        id: 2,
        title: "Angular",
        description: "A robust framework for building enterprise-grade applications.",
        icon: (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" preserveAspectRatio="none" className="h-full w-full "><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>)
    },
    {
        id: 3,
        title: "Vue",
        description: "A flexible, progressive framework for fast web interfaces.",
        icon: (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" preserveAspectRatio="none" className="h-full w-full "><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path></svg>)
    },
    {
        id: 4,
        title: ".NET",
        description: "Microsoft’s framework for scalable and secure enterprise applications.",
        icon: (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" preserveAspectRatio="none" className="h-full w-full "><path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"></path></svg>)
    },
    {
        id: 5,
        title: "Python",
        description: "A powerful language for backend, automation, AI, and data science.",
        icon: (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" preserveAspectRatio="none" className="h-full w-full "><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"></path></svg>)
    },
    {
        id: 6,
        title: "Node.js",
        description: "A JavaScript runtime for building high-performance backend services.",
        icon: (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" preserveAspectRatio="none" className="h-full w-full "><path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path></svg>)
    },
    {
        id: 7,
        title: "SQL",
        description: "Core database language used for managing relational data.",
        icon: (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" preserveAspectRatio="none" className="h-full w-full "><path d="M48,118a6,6,0,0,0,6-6V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v18a6,6,0,1,0,12,0V88a6,6,0,0,0-1.76-4.25l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72A6,6,0,0,0,48,118ZM158,46.48,193.52,82H158ZM226,208a6,6,0,0,1-6,6H192a6,6,0,0,1-6-6V152a6,6,0,0,1,12,0v50h22A6,6,0,0,1,226,208ZM89.83,196a18.85,18.85,0,0,1-8.3,13.82C76.71,213.05,70.66,214,65.16,214a58.87,58.87,0,0,1-14.67-2,6,6,0,0,1,3.23-11.56c3.71,1,15.58,3.11,21.19-.62a6.85,6.85,0,0,0,3-5.34c.57-4.43-2.08-6.26-14.2-9.76-9.31-2.69-23.37-6.75-21.57-20.94a18.61,18.61,0,0,1,8.08-13.54c11.11-7.49,29.18-3,31.2-2.48a6,6,0,1,1-3.06,11.6c-3.79-1-15.85-2.95-21.44.84a6.59,6.59,0,0,0-2.88,5.08c-.41,3.22,2.14,4.78,13,7.91C76.93,176.08,91.85,180.39,89.83,196ZM136,146c-16.54,0-30,15.25-30,34s13.45,34,30,34a27.32,27.32,0,0,0,16.15-5.37l3.61,3.61a6,6,0,1,0,8.49-8.48l-3.91-3.91A36.94,36.94,0,0,0,166,180C166,161.24,152.55,146,136,146Zm0,56c-9.92,0-18-9.87-18-22s8.07-22,18-22,18,9.87,18,22a25.58,25.58,0,0,1-2.45,11.06l-3.3-3.3a6,6,0,0,0-8.49,8.48l3.75,3.75A15.32,15.32,0,0,1,136,202Z"></path></svg>)
    },
    {
        id: 8,
        title: "AWS",
        description: "Amazon’s cloud platform for scalable, global infrastructure.",
        icon: (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" preserveAspectRatio="none" className="h-full w-full "><path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"></path></svg>)
    },
    {
        id: 9,
        title: "Azure",
        description: "Microsoft’s cloud services for enterprise-grade applications.",
        icon: (<svg viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M3 18l7-14 3 5-6 9z" /><path fill="currentColor" d="M14 4l7 14h-9l2-5-3-4z" /></svg>)
    },
    {
        id: 10,
        title: "Docker",
        description: "A platform for building and deploying containerized applications.",
        icon: (<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="12" width="3" height="3" fill="currentColor" /><rect x="7" y="12" width="3" height="3" fill="currentColor" /><rect x="11" y="12" width="3" height="3" fill="currentColor" /><rect x="11" y="8" width="3" height="3" fill="currentColor" /><path d="M20 14c-.5 2-2 4-6 4H6" stroke="currentColor" strokeWidth="2" /></svg>)
    },
    //   {
    //     id: 11,
    //     title: "Kubernetes",
    //     description: "Container orchestration for scaling and managing distributed systems.",
    //     icon: (<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#326CE5" strokeWidth="2"/><path stroke="#326CE5" strokeWidth="2" d="M12 6v12M6 12h12M8 8l8 8M16 8l-8 8"/></svg>)
    //   }
];

