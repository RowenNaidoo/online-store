import * as useFetchHook from "../../../hooks/useFetch";

import { FetchResponse } from "../../../hooks/useFetch";
import Products from "..";
import React from "react";
import { mount } from "enzyme";
import products from "../__mocks__/products.json";

jest.mock("../../../hooks/useFetch");

describe("<Products/>", () => {
  it("shows products which can be added to the cart", async () => {
    const mockedUseFetchHook = useFetchHook as jest.Mocked<typeof useFetchHook>;
    mockedUseFetchHook.default.mockImplementation(() => {
      return {
        get: () => {},
        response: {
          isFetching: false,
          statusCode: 200,
          ok: true,
          headers: undefined,
          body: products,
          error: undefined,
        },
      };
    });

    const addToCartMock = jest.fn();
    const component = mount(
      <Products token="1234567890" cart={[]} addToCart={addToCartMock} />
    );

    const buttons = component.find("button");
    const viewCartButton = component.find("button").at(0);

    expect(buttons).toHaveLength(7);
    expect(viewCartButton.text()).toEqual("View cart (0)");

    const productButton = component.find("button").at(1);
    productButton.simulate("click");

    expect(addToCartMock).toHaveBeenCalledWith(products[0]);
  });
});
