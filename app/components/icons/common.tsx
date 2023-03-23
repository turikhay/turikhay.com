import { HTMLProps, SVGAttributes } from "react";

type ElementProps = HTMLProps<SVGSVGElement> & SVGAttributes<SVGSVGElement>;

export type SVGElementProps = ElementProps;

export type SVGIconFactory = (props: SVGElementProps) => JSX.Element;

export type SVGIconProps = {
  viewBox: string;
  children: JSX.Element | JSX.Element[];
  props: SVGElementProps;
};

export function SVGIcon({ viewBox, props, children }: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      {...props}
      viewBox={viewBox}
    >
      {children}
    </svg>
  );
}
