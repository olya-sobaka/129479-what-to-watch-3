import React from "React";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMore from "./show-more";

Enzyme.configure({
  adapter: new Adapter()
});

it(`ShowMore should be pressed`, () => {
  const onShowMoreClick = jest.fn();

  const showMore = shallow(
      <ShowMore onShowMoreClick={onShowMoreClick}/>
  );

  const showMoreButton = showMore.find(`.catalog__button`);

  showMoreButton.props().onClick();

  expect(onShowMoreClick.mock.calls.length).toBe(1);
});
