import { HTMLProps, SVGAttributes, ReactElement } from "react";

type ElementProps = HTMLProps<SVGSVGElement> & SVGAttributes<SVGSVGElement>;

export type SVGElementProps = ElementProps;

export type SVGIconFactory = (props: SVGElementProps) => ReactElement;

export type SVGIconProps = {
  viewBox: string;
  children: ReactElement | ReactElement[];
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
