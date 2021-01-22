import * as useFetchHook from "../../../hooks/useFetch";

import Checkout from "..";
import { FetchResponse } from "../../../hooks/useFetch";
import React from "react";
import cart from "../__mocks__/cart.json";
import { mount } from "enzyme";

jest.mock("../../../hooks/useFetch");

describe("<Checkout/>", () => {
  it("shows products in cart and allows checkout", async () => {
    const mockedUseFetchHook = useFetchHook as jest.Mocked<typeof useFetchHook>;
    mockedUseFetchHook.default.mockImplementation(() => {
      return {
        post: () => {},
        response: {
          isFetching: false,
          statusCode: 200,
          ok: true,
          headers: undefined,
          body: "OK",
          error: undefined,
        },
      };
    });

    const checkoutMock = jest.fn();
    const component = mount(<Checkout token="1234567890" cart={cart} />);

    const cartItems = component.find("li");

    expect(cartItems).toHaveLength(3);
    expect(component.find("li").at(0).text()).toEqual("Honeydew x 2A$4.60");
    expect(component.find("li").at(1).text()).toEqual("Kiwi Fruit x 1A$0.98");

    const checkoutButton = component.find("button").at(1);
    checkoutButton.simulate("click");
    component.update();

    expect(component.find("span").text()).toEqual("Checkout successful!");
  });
});
