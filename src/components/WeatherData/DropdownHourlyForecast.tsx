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

import week from "@/data/week.json";

interface DropdownHourlyForecastProps {
  day: string;
  setDay: (value: string) => void;
}

export function DropdownHourlyForecast({
  day,
  setDay,
}: DropdownHourlyForecastProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-WEATHER-neutral-600 hover:bg-WEATHER-neutral-600 text-WEATHER-neutral-200 hover:text-WEATHER-neutral-300 border-WEATHER-neutral-600"
          variant="outline"
        >
          {day}
          <img src="/public/images/icon-dropdown.svg" className="size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-WEATHER-neutral-600 text-WEATHER-neutral-0 border-WEATHER-neutral-600 w-fit border">
        <DropdownMenuRadioGroup value={day} onValueChange={setDay}>
          {week.map((dayItem) => (
            <DropdownMenuRadioItem className="p-2 px-4" value={dayItem}>
              {dayItem}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
