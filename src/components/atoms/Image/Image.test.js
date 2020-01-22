import React from "react";
import renderer from "react-test-renderer";
import Image from "./Image";

it("simple image renders correctly", () => {
    const tree = renderer
        .create(<Image src="https://image.tmdb.org/t/p/w500/wB58wlBAr6484Wm6VyFDqSD8VOJ.jpg" title="image"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it("image without src renders correctly", () => {
    const tree = renderer
        .create(<Image title="image"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});