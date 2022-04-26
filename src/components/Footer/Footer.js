import React, { useContext } from "react";
import "./Footer.css";
import CoinContext from "../../contexts/CoinContext";
import { format } from "date-fns";
import Button from "../Button/Button";

const Footer = () => {
  const context = useContext(CoinContext);
  const date = context.date;

  const handleRefresh = () => {
    context.reRenderParent(context.reRenderValue + 1);
    // is this a good way to rerender the parent element?
  };

  return (
    <>
      {context.updated ? (
        <div className="footer">
          Last updated:
          {date
            ? ` ${format(date, "do MMMM Y")} at ${date
                .getHours()
                .toString()
                .padStart(2, 0)}:${date.getMinutes().toString().padStart(2, 0)}`
            : ""}
          <Button handleClick={handleRefresh} classes="refreshButton">
            Refresh
          </Button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Footer;
