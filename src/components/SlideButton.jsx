"use client";
import * as Switch from "@radix-ui/react-switch";
import { useState } from "react";

export default function SlideButton() {
  const [checked, setChecked] = useState(false);

  function handleChange(isChecked) {
    setChecked(isChecked);
    // do stuff here
  }

  const orderIsOn = checked ? "Is On" : "Is Off";

  return (
    <div className="flex justify-center  items-center">
      <label className="m-3 pr-[15px] text-[15px] " htmlFor="OrderMode">
        Order
      </label>
      <Switch.Root
        checked={checked}
        onCheckedChange={handleChange}
        className="relative h-[25px] w-[42px] cursor-default rounded-full bg-blackA6 shadow-[0_2px_10px] shadow-green-500 outline-none focus:shadow-[0_0_0_2px] focus:shadow-yellow-200 data-[state=checked]:bg-green-500"
        id="OrderMode"
        // style={{ "-webkit-tap-highlight-color": "rgb(255,0,0,0)" }} // this caused an error -> error gone now!
      >
        {/* not going to lie this className was copied and pasted from the radix-ui example took too long to type out the last one and I have a dead line! */}
        <Switch.Thumb className="block size-[21px] translate-x-0.5 rounded-full bg-amber-300 shadow-[0_2px_2px] shadow-blue-700 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
      <div className="m-3">{orderIsOn}</div>
    </div>
  );
}
