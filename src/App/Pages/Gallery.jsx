import React from 'react'
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { GalleryDiv } from '../AppStyles';

export default function Gallery({ iw }) {

  const images = [
    "spawn",
    "oasis",
    "armor_shop",
    "spawn_leaves",
    "mine_stairs",
    "tree_swing",
    "spawn_dark",
    "campfire",
    "cabo",
    "swimming_pond2",
    "swimming_pond",
    "spawn_window",
    "diamond_woman",
    "fountain",
    "desert",
    "spawn_message_board",
    "foggy_bridge",
    "village",
    "glowing_sea",
    "good_bois",
    "lighthouse",
    "nasa",
    "pepe_bilboard",
    "plaza_daytime",
    "pond",
    "mine",
    "rainbow",
    "zuzuzu"
  ]

  const imgSrces = images.map((image) => {
    return { source: require(`../../assets/images/${image}.png`) };
  });
  
  return (
    <GalleryDiv w={iw}>
      <h1>Server Gallery</h1>
      <AwesomeSlider media={imgSrces} />
    </GalleryDiv>
  )
}
