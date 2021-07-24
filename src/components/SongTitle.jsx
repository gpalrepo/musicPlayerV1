import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";

export default function SongTitle({ songTitle }) {
  const [shouldTick, setShouldTick] = useState(false);

  useEffect(() => {
    if (songTitle && songTitle.length > 20)
      setTimeout(() => {
        setShouldTick(true);
      }, 3500);
  }, [songTitle]);
  return (
    <Ticker mode="await" move={shouldTick}>
      {({ index }) => (
        <h1 className="text-gray-700 font-medium text-2xl whitespace-nowrap mb-2">
          {songTitle}
        </h1>
      )}
    </Ticker>
  );
}
