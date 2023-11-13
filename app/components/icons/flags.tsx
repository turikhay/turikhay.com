import { SVGElementProps, SVGIcon, SVGIconProps } from "./common";

export function RussianFlag(props: SVGElementProps) {
  return (
    <FlagIcon region="Russian Federation" viewBox="0 0 9 6" props={props}>
      <path fill="#fff" d="M0 0h9v3H0z" />
      <path fill="#DA291C" d="M0 3h9v3H0z" />
      <path fill="#0032A0" d="M0 2h9v2H0z" />
    </FlagIcon>
  );
}

export function TatarstanFlag(props: SVGElementProps) {
  return (
    <FlagIcon region="Tatarstan" viewBox="0 0 600 300" props={props}>
      <rect fill="#008000" width="600" height="140" />
      <rect fill="#FFF" width="600" height="20" y="140" />
      <rect fill="#F00" width="600" height="140" y="160" />
    </FlagIcon>
  );
}

function FlagIcon(p: SVGIconProps & { region: string }) {
  return (
    <SVGIcon
      {...p}
      props={{
        alt: `Flag of ${p.region}`,
        ...p.props,
        style: { boxShadow: "0 0 5px rgba(0, 0, 0, .25)", ...p.props.style },
      }}
    />
  );
}
