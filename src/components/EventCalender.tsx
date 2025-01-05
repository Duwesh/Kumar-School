"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Math",
    time: "12:00 PM - 02:00 PM",
    description: "Lorem ipsum dolar",
  },
  {
    id: 2,
    title: "Math",
    time: "12:00 PM - 02:00 PM",
    description: "Lorem ipsum dolar",
  },
  {
    id: 3,
    title: "Math",
    time: "12:00 PM - 02:00 PM",
    description: "Lorem ipsum dolar",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-kumarSky even:border-t-kumarPurple"
          >
            <div className="flex  items-center justify-between">
              <h1 className="text-gray-600 font-semibold">{event.title}</h1>
              <span className="text-sm text-gray-300">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-100 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
