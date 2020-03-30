import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.js";

const movie = {
  title: `Kiki's Delivery Service`,
  poster: `img/midnight-special.jpg`,
  id: 36,
  previewMp4: `https://coverr.co/videos/norway-road-f0J1etTrcQ`,
  previewWebm: `https://coverr.co/videos/morning-sunshine-Of9KYVXN1C`
};

it(`VideoPlayer renders correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer film={movie}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
