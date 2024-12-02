"use client";
/*
 * Documentation:
 * Bar Chart — https://app.subframe.com/0dfd4f0cae98/library?component=Bar+Chart_4d4f30e7-1869-4980-8b96-617df3b37912
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface BarChartRootProps
  extends React.ComponentProps<typeof SubframeCore.BarChart> {
  stacked?: boolean;
  className?: string;
}

const BarChartRoot = React.forwardRef<HTMLElement, BarChartRootProps>(
  function BarChartRoot(
    { stacked = false, className, ...otherProps }: BarChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.BarChart
        className={SubframeCore.twClassNames("h-80 w-full", className)}
        ref={ref as any}
        stacked={stacked}
        colors={[
          "#a71873",
          "#501b3f",
          "#d6409f",
          "#601d48",
          "#e34ba9",
          "#7a1d5a",
        ]}
        dark={true}
        {...otherProps}
      />
    );
  }
);

export const BarChart = BarChartRoot;
