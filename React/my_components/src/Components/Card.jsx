import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <div>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="src/assets/1.webp"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Walter White
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chief Executive Officer
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="src/assets/1.webp"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Walter White
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chief Executive Officer
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="src/assets/1.webp"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Walter White
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chief Executive Officer
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
