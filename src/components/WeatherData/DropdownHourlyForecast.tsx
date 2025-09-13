"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function DropdownHourlyForecast() {
  const [position, setPosition] = React.useState(week[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-WEATHER-neutral-600 hover:bg-WEATHER-neutral-600 text-WEATHER-neutral-200 hover:text-WEATHER-neutral-300 border-WEATHER-neutral-600"
          variant="outline"
        >
          {position}
          <img src="/public/images/icon-dropdown.svg" className="size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-WEATHER-neutral-600 text-WEATHER-neutral-0 border-WEATHER-neutral-600 w-fit border">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {week.map((day) => (
            <DropdownMenuRadioItem className="p-2 px-4" value={day}>
              {day}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
