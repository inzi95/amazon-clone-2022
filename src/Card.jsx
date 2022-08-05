import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";
import "./Card.css";

export default function MediaCard({ id, title, price, rating, image }) {
  return (
    <Card sx={{ width: "100%", margin: "10px" }} className="main__card">
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <div className="card__content">
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex" }}
          >
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </Typography>
        </CardContent>
        <CardActions className="card__action__buttons">
          <Button
            size="small"
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#f0c14b" }}
            endIcon={<ShoppingBasketSharpIcon />}
          >
            Add to Cart
          </Button>
          <Button size="small" variant="outlined" fullWidth>
            Learn More
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
