"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getLongDate } from "@/utils/date";

interface DropdownHourlyForecastProps {
  data: string[] | undefined;
  day: string;
  setDay: (value: string) => void;
}

export function DropdownHourlyForecast({
  data,
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
          {getLongDate(day)}
          <img src="/public/images/icon-dropdown.svg" className="size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-WEATHER-neutral-800 text-WEATHER-neutral-0 border-WEATHER-neutral-600 w-fit border">
        <DropdownMenuRadioGroup value={day} onValueChange={setDay}>
          {data?.map((dayItem) => (
            <DropdownMenuRadioItem
              key={dayItem}
              className="hover:!bg-WEATHER-neutral-700 hover:!text-WEATHER-neutral-0 p-2 px-4"
              value={dayItem}
            >
              {getLongDate(dayItem)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
