"use client";

import dynamic from "next/dynamic";
import Loading from "../loading";

export const Canvas = dynamic(() => import("./wrapper"), {
  loading: () => <Loading />,
  ssr: false,
});
