import React from "react";
import { render, screen } from "@testing-library/react";

import Sneaker from "./Sneaker";

describe("<Sneaker />", () => {
  const sneakerData = {
    id: "8bcae5e5-e5d9-4a83-8aed-30aeaf2950a1",
    media: {
      imageUrl:
        "https://stockx.imgix.net/Air-Jordan-5-OG-Grape-1990.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1538080256",
    },
    title: "Jordan 5 OG Grape (1990)",
    retailPrice: "125",
    year: 1990,
  };

  it("it should contain sneaker title, retail price", () => {
    const { container, getByText } = render(<Sneaker data={sneakerData} />);
    const title = container.querySelector('.sneakerTitle').firstChild;
    const retailPrice = getByText('Retail Price: $125');

    expect(title).toBeInTheDocument();
    expect(retailPrice).toBeInTheDocument();
  });

//   it("it should contain two links (Add Sneaker, View More)", () => {
//     expect(
//       screen
//         .getByText("Add Sneaker")
//         .toHaveAttribute(
//           "href",
//           "http://localhost:8080/sneakers/8bcae5e5-e5d9-4a83-8aed-30aeaf2950a1"
//         )
//     );

//     expect(
//       screen
//         .getByText("View More")
//         .toHaveAttribute("href", "http://localhost:8080/#")
//     );
//   });

  // it("When Add Sneaker is clicked, .... ", () => {

  // });

  // it("When View More is clicked, redirected to specific sneaker page ", () => {

  // });
});
