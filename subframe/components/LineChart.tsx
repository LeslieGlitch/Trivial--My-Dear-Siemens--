"use client";
/*
 * Documentation:
 * Line Chart — https://app.subframe.com/0dfd4f0cae98/library?component=Line+Chart_22944dd2-3cdd-42fd-913a-1b11a3c1d16d
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface LineChartRootProps
  extends React.ComponentProps<typeof SubframeCore.LineChart> {
  className?: string;
}

const LineChartRoot = React.forwardRef<HTMLElement, LineChartRootProps>(
  function LineChartRoot(
    { className, ...otherProps }: LineChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.LineChart
        className={SubframeCore.twClassNames("h-80 w-full", className)}
        ref={ref as any}
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

export const LineChart = LineChartRoot;
