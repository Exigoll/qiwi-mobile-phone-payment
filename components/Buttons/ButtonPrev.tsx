import {FC} from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledButtonPrev = styled.button`
  position: absolute;
  top: 253px;
  left: 100px;
  padding: 10px 25px;
  background-color: rgb(255 255 255);
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  transition: box-shadow 120ms cubic-bezier(0.4, 0.0, 0.2, 1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
  }
`

const ButtonPrev: FC = () => {
  return (
    <Link href="/">
      <StyledButtonPrev>
        <a>
          <svg
            enableBackground="new 0 0 50 50"
            height="30px"
            width="30px"
            viewBox="0 0 50 50">
            <rect fill="none"
                  height="50"
                  width="50"/>
            <polyline fill="none"
                      points="19.946,35.891   9.057,25 19.947,14.11 "
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"/>
            <line fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2" x1="41"
                  x2="9.662"
                  y1="25" y2="25"/>
          </svg>
        </a>
      </StyledButtonPrev>
    </Link>
  );
}

export default ButtonPrev;
