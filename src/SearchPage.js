import React from "react";
import "./SearchPage.css";

import SearchResult from "./SearchResult";

import { Button } from "@material-ui/core";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays - 26 august to 30 august - 2 guest</p>
        <h1>stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        imgSrc="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg"
        location="Private Room in Center of London"
        title="Stay at this Spacious Edwardian House"
        description="2 guest 1 bedroom 1 bed 1.5 shared bathroom Wifi Kitchen Free parking Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$600 total"
      />
      <SearchResult
        imgSrc="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg"
        location="Private Room in Center of London"
        title="Stay at this Spacious Edwardian House"
        description="2 guest 1 bedroom 1 bed 1.5 shared bathroom Wifi Kitchen Free parking Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$600 total"
      />
    </div>
  );
}

export default SearchPage;
