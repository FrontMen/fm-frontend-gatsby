import * as React from 'react';
import { ReactElement } from 'react';

type Props = {
  color: string;
};

const SizeConst: { [key: string]: string } = {
  width: '140px',
  height: '186px',
};

export const Polygon: React.FC<Props> = ({ color }: Props) =>
  (
    <svg
      width={SizeConst.width}
      height={SizeConst.height}
      viewBox="0 0 140 186"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
        <g transform="translate(-42.000000, -704.000000)" fillRule="nonzero">
          <polygon points="112.121466 704 42 744.63826 42 849.349987 111.948955 890 182 849.073805 182 744.63826" />
        </g>
      </g>
    </svg>
  ) as ReactElement;
