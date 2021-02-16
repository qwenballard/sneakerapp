import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

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
    const title = container.querySelector(".sneakerTitle").firstChild;
    const retailPrice = getByText("Retail Price: $125");

    expect(title).toBeInTheDocument();
    expect(retailPrice).toBeInTheDocument();
  });

  it("it should contain two links (Add Sneaker, View More)", () => {
    const { container, getByText } = render(<Sneaker data={sneakerData} />);
    
    expect(screen.getByText("Add Sneaker")).toBeInTheDocument();
    expect(screen.getByText("View More")).toBeInTheDocument();
  });

//   xit("When Add Sneaker is clicked and a user isn't logged in, they are redirected to login ", async () => {
//     const button = await getByText('Add Sneaker');
//     fireEvent.click(button)
//   });

//   xit("When Add Sneaker is clicked and a user is logged in, the wishlist increments by 1", async () => {
//     const button = await getByText("Add Sneaker");
//   });

//   xit("When View More is clicked, redirected to specific sneaker page ", () => {
//   });
});
