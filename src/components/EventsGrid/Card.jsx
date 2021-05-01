import { Typography, Button, makeStyles } from "@material-ui/core";
import { useLanguage } from "../../contexts/language";
import { card, card_en } from "../../constants/copies";
import { card_styles } from "../../styles/card_styles";

const useStyles = makeStyles(card_styles);

const Card = ({ title, description, date, price }) => {
  const currentLanguage = useLanguage();
  const classes = useStyles();

  const { cta } = currentLanguage === "es" ? card : card_en;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          <section>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
          </section>
          <section>
            <Typography variant="h5">{date}</Typography>
            <Typography variant="h5">${price} Total</Typography>
          </section>
        </div>
        <Button variant="contained" color="primary" fullWidth size="large">
          {cta}
        </Button>
      </div>
    </>
  );
};

export default Card;
