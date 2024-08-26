// src/ArticleList.jsx
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

// Sample articles data
const articles = [
  {
    id: 1,
    title: "the israel-hazebollah escalation has arrived.what next for middle-east?",
    description: "the group had delayed its response to commander Shukr’s assassination in order to allow negotiations to continue, and had no intention of targeting civilian infrastructure.said Nasrallah.",
    thumbnail: " https://image.cnbcfm.com/api/v1/image/108019740-1723558101216-gettyimages-2166050344-AFP_36E94U6.jpeg?v=1723558126&w=740&h=416&ffmt=webp&vtcrop=y"
  },
  {
    id: 2,
    title: " Hamas’ new political leader Yahya Sinwar is seen as more extreme",
    description: "  Hamas appointed Yahya Sinwar as the leader of its political wing following the assassination of its former political chief, Ismail Haniyeh. This makes Sinwar — a man known for his ruthlessness",
    thumbnail: "https://image.cnbcfm.com/api/v1/image/108017079-1722970378604-gettyimages-1245603927-AA_14122022_988748.jpeg?v=1722970463&w=600&h=338&ffmt=webp&vtcrop=y "
  },
  {
    id: 3,
    title: " Diseases spread in Gaza as sewage contaminates camps and coast",
    description: "Satellite images show the impact of the damage to Gaza's critical water and sanitation systems.A local official told BBC Arabic displaced people in nearby camps are sending their sewage straight to sea.",
    thumbnail: " https://ichef.bbci.co.uk/news/640/cpsprodpb/0d26/live/1e2676e0-639c-11ef-966d-d350b1c7ad45.jpg.webp"
  },
  {
    id: 4,
    title: "Dam bursts in war-torn Sudan killing  60",
    description: "After being ravaged by 16 months of civil war, Sudan is now experiencing torrential rains and floods that have killed dozens and forced tens of thousands from their homes. ",
    thumbnail: 
      "https://ichef.bbci.co.uk/news/480/cpsprodpb/d46c/live/9757d380-639f-11ef-b43e-6916dcba5cbf.jpg"
  }
];

const ArticleList = () => {
   return (
      <Grid container spacing={2} padding={2}>
        {articles.map(article => (
          <Grid item xs={12} sm={6} md={3} key={article.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={article.thumbnail}
                alt={`Thumbnail for ${article.title}`}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };



export default ArticleList;
