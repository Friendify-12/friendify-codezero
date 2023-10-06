import React, { useState } from "react";
import Calendar from "react-calendar";

const MainContent = () => {
    const [date, setDate] = useState(new Date());
    const [today, setToday] = useState(new Date());

    // Function to handle date change
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    const goToToday = () => {
        setDate(today);
    };
    return (
        <div>
            <div className="flex flex-grow">
                {/* Left Side */}
                <div className="w-1/3">
                    {/* Top Part of Left Side: calander */}
                    <div className="bg-white rounded-lg shadow px-3 py-1">
                        <Calendar
                            onChange={setDate}
                            value={date}
                            className="mx-auto text-center"
                            tileClassName={({ date, view }) => {
                                // if todays date:
                                if (view === "month" && date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
                                    return "bg-blue-300 text-white font-bold rounded-full";
                                }
                            }}
                        />
                    </div>
                    {/* Bottom Part of Left Side: interests */}
                    <div className="h-2/3 ">
                        <div className="bg-gray-200 p-4"> {/* outside box */}
                            <span className="justify-center items-center flex font-bold text-xl mb-3 tracking-wider">Your Interests</span>
                            <div className="bg-white p-4 rounded-lg shadow"> {/* inside box */}
                                <div className="space-y-2 h-[32rem] overflow-y-auto tracking-wider">
                                    <span className="block">❖ personInterest</span>
                                    <span className="block">❖ personInterest</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: events  */}
                <div className="w-2/3 p-4">
                    <h2 className="text-xs md:text-md italic font-bold mb-4">Your Upcoming Events</h2>
                    <div className="h-[48rem] overflow-y-auto">
                        <div className="mb-4">
                            <div className="mb-2 md: sm:flex-col">
                                {/* Date and Image (top on small screens) */}
                                <div className="mb-4 sm:mb-2">
                                    <span className="block mb-2 text-xs">10/01/2023</span>
                                    <img
                                        src="https://i.ibb.co/Zf7610z/Screenshot-2023-10-06-at-10-30-44-AM.png"
                                        alt="Event"
                                        className="w-32 h-32 object-cover rounded mr-4 sm:mb-2"
                                    />
                                </div>

                                {/* Description (below date and image on small screens) */}
                                <div>
                                    <p className="mb-2 tracking-tighter">
                                        Our goal for the event isn&apos;t can we build a project in a month as much as it is building soft skills essential for the workplace. You will also find your group/team # listed below. These may change during our first meeting depending on projects that are chosen. Looking forward to seeing you all at the first meeting. Remember that each group consists of Coding Dojo Alumni from across the globe and programs. You may have a Data Science developer in your group or someone that graduated from the Chile Dojo. Find each other&apos;s strengths and use them. But also have some fun.
                                    </p>
                                </div>
                            </div>
                            <hr className="my-4 border-t-2 border-gray-300" />
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 md: sm:flex-col">
                                {/* Date and Image (top on small screens) */}
                                <div className="mb-4 sm:mb-2">
                                <span className="block mb-2 text-xs">10/01/2023</span>
                                    <img
                                        src="https://us.123rf.com/450wm/tsuguliev/tsuguliev2110/tsuguliev211000517/176072645-a-crowded-concert-hall-with-scene-stage-green-lights-rock-show-performance-with-people-silhouette.jpg?ver=6"
                                        alt="Event"
                                        className="w-32 h-32 object-cover rounded mr-4 sm:mb-2"
                                    />
                                </div>

                                {/* Description (below date and image on small screens) */}
                                <div>
                                    <p className="mb-2 tracking-tighter">
                                    Our goal for the event isn&apos;t can we build a project in a month as much as it is building soft skills essential for the workplace. You will also find your group/team # listed below. These may change during our first meeting depending on projects that are chosen. Looking forward to seeing you all at the first meeting. Remember that each group consists of Coding Dojo Alumni from across the globe and programs. You may have a Data Science developer in your group or someone that graduated from the Chile Dojo. Find each other&apos;s strengths and use them. But also have some fun.
                                    </p>
                                </div>
                            </div>
                            <hr className="my-4 border-t-2 border-gray-300" />
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 md: sm:flex-col">
                                {/* Date and Image (top on small screens) */}
                                <div className="mb-4 sm:mb-2">
                                <span className="block mb-2 text-xs">10/01/2023</span>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBPo_d5M9PICdgxg_54Jrjr9tt5zKa6vQhQ&usqp=CAU"
                                        alt="Event"
                                        className="w-32 h-32 object-cover rounded mr-4 sm:mb-2"
                                    />
                                </div>

                                {/* Description (below date and image on small screens) */}
                                <div>
                                    <p className="mb-2 tracking-tighter">
                                    Our goal for the event isn&apos;t can we build a project in a month as much as it is building soft skills essential for the workplace. You will also find your group/team # listed below. These may change during our first meeting depending on projects that are chosen. Looking forward to seeing you all at the first meeting. Remember that each group consists of Coding Dojo Alumni from across the globe and programs. You may have a Data Science developer in your group or someone that graduated from the Chile Dojo. Find each other&apos;s strengths and use them. But also have some fun.
                                    </p>
                                </div>
                            </div>
                            <hr className="my-4 border-t-2 border-gray-300" />
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 md: sm:flex-col">
                                {/* Date and Image (top on small screens) */}
                                <div className="mb-4 sm:mb-2">
                                <span className="block mb-2 text-xs">10/01/2023</span>
                                    <img
                                        src="https://i.ibb.co/jZCgpsr/pexels-pixabay-46148.jpg"
                                        alt="Event"
                                        className="w-32 h-32 object-cover rounded mr-4 sm:mb-2"
                                    />
                                </div>

                                {/* Description (below date and image on small screens) */}
                                <div>
                                    <p className="mb-2 tracking-tighter">
                                        Our goal for the event isn&apos;t can we build a project in a month as much as it is building soft skills essential for the workplace. You will also find your group/team # listed below. These may change during our first meeting depending on projects that are chosen. Looking forward to seeing you all at the first meeting. Remember that each group consists of Coding Dojo Alumni from across the globe and programs. You may have a Data Science developer in your group or someone that graduated from the Chile Dojo. Find each other&apos;s strengths and use them. But also have some fun.
                                    </p>
                                </div>
                            </div>
                            <hr className="my-4 border-t-2 border-gray-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent