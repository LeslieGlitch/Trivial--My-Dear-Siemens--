"use client";
/*
 * Documentation:
 * Pie Chart — https://app.subframe.com/0dfd4f0cae98/library?component=Pie+Chart_0654ccc7-054c-4f3a-8e9a-b7c81dd3963c
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface PieChartRootProps
  extends React.ComponentProps<typeof SubframeCore.PieChart> {
  className?: string;
}

const PieChartRoot = React.forwardRef<HTMLElement, PieChartRootProps>(
  function PieChartRoot({ className, ...otherProps }: PieChartRootProps, ref) {
    return (
      <SubframeCore.PieChart
        className={SubframeCore.twClassNames("h-52 w-52", className)}
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

export const PieChart = PieChartRoot;
