import React from "react";
import Card from "./Card";
import { makeStyles } from "@material-ui/styles";
import { event_grid_styles } from "../../styles/event_grid_styles";
import { Events } from "../eventsdata/eventsdate";

const useStyles = makeStyles(event_grid_styles);

const EventGrid = () => {
  const classes = useStyles(event_grid_styles);

  const renderEvents = () => {
    return Events.map((card, index) => {
      return (
        <Card
          title={card.title}
          description={card.description}
          date={card.date}
          price={card.price}
          key={index}
        />
      );
    });
  };

  return (
    <>
      <div className={classes.container}>{renderEvents()}</div>
    </>
  );
};

export default EventGrid;
