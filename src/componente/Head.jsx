import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/contents";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSerchSugsestion, setShowSearchSugsestion] = useState(false);
  //   console.log(searchQuery);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchQuerySugsestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchQuerySugsestions = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestion(json[1]);
    // console.log(json[1]);
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8"
          alt="menu"
          src="data:image/png;base64,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"
        />
        <img
          className="h-8 mx-4"
          alt="youtube-logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="col-span-10 px-40">
        <div>
          <input
            className="w-1/2 border border-gray-500 p-2 px-5 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchSugsestion(true)}
            onBlur={() => setShowSearchSugsestion(false)}
          />
          <button className="border border-gray-500 p-2 rounded-r-full px-5 py-2 bg-gray-200 ">
            🔍︎
          </button>
        </div>
        <div className="fixed bg-white w-48 px-2 py-2 shadow-lg rounded-lg">
          {showSerchSugsestion && (
            <ul>
              {searchSuggestion.map((s) => (
                <li key={s} className="shadow-sm hover:bg-gray-100 py-2 px-3">
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <img
          className="col-span-1 h-8"
          alt="User-icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAAAD////4+Pjm5ub09PSXl5egoKBjY2OysrLb29vJycn7+/sfHx+/v7/T09Pp6em4uLg7OzswMDCCgoJaWlomJiYYGBiPj48RERFFRUV6enqsrKxAQEBUVFRvb28rKytpG4vvAAAFKElEQVR4nO2c65KiMBCFEQIISkS8IqPz/m+5UrszNeTG6aQNTtWe/zv1bQh9PZisArWTTX7ru3Ny3Xb9IW/kLvQvrlZJ0L/O8vIjUdSXRShXAFQ2dCrQN1gbxOUNJfK9DWnUR5FGhxKFi+iv1pu4UFK7SSbdq5hQBwRpVB4NKitRpiR5eF14OlSFIz3VZTGg6i0JKtnL10PVNKRR9OtOhKqvdKiOTEWDot2nL22pt50ElUHhSddRvBCKEAumur0OCkgtNq1fBVV5XPIvfZKuFQHq7s/0DO2vgWpDmJKEEkNhKNGHQZWE+gqGasKYSEcFQ1lLX1R3fiiPnKcKzzYoFFzX2YVXfCCUCH56lGQDQslwJsLzA6FyDig414BQzh4P1ZEXSnxyQH3yQskzBxRc7GFQgXnvn65oUMegAiqpn2pZoS48UMM7QhWsUAxJZhSaaKJCXf5DgeJ9fG/59jHFKTQjY1BrHqiaFcpn2KLrjA7QMKjdiQPqhHZZYD3FUA0nSQ8yoVA3Dig0y6BQwa3oKLgdBaF2DDd9z93NbB7hUAeUCW5GGWpPNErhUCK4Sj/BTPiAIzjToLUwBWpH3DSo+iBMiPFJXuBRUUaxOFQadFR7AhNlEBsUQElrIwJUSKzCYxQRapV6p2U4FdOhvKdUJ+Iei7bF8ozr1D0kcd/nNTxD+wVfKB8qMhN9h0zutuDSLgCK2tk0dCYfX0JL6CL2eL0SBrWq4CVb6WcO8rKVpDlUHZ89rpM/1DOMHueZHr7+G3//VDODVXrdpkCo1aZxLN8fAUiBnjxRHA05el8OAS6zYKinqiYvu59Aee3jA/KCEpms26FYV2ZLm9hVUlY72wEJORRDK2UGniACJdaH+9dypvR4pZr79zleoAA/CyVaJVRSA2KlbMAe9ayBcA5q0KN3R/KIXPQ4Oxst3FCNuQA+ws+wMe/kSnfZ54LaWMuUE1YjpdY/cHb+AQdU5to89sBhNa4MWTo6ZjuUekHV/+thpg+fc146XhgrFOB0u9hPK63nm0T7EM0GVSE93va4NoZDkUMV18NGZYHCN9m3dhrlhVzDLjmbqcoCRZkGn/pH3srqKTlcyp4yXbO8g2Yopl3MrCyrbiNUFonJNiEyQjGMglEZy3gTFINXCtanqfoyQXn6Xv1kWuEaoFhWHrgMgV2HSoHuiVOGo9KhYt6oUVv9VulQkQ/K9AJqUBnLZpaibh4qVjD/IS2sq1AiyLbsJ22erUL5fTAQJq2wUqEWeHr681Ohor97o9T3T4EKXaD5SV1IKFCRU8w/qbZGBYrF+UpX44LasJgi6CpcUBxmah/dXFDx6uCpeuGAWuaeJ2pRNYVa6J6r4XMK5f2xVajWDqjAb2P8dbBDLfXyqf75CVS1SJIZtbdD8fgBfdSlVqjFIkJyyqxQw2JQZ2mFWqTC+6vaCrVY7FTcVRMoJjO1jwYr1EKFy6jCBsVhUWSHShdLfb8OapH+6o2h8v9QoH7XRX/LOPWeuW+50uVqrxLessjLWL5E8dF0GDRtsaIuQH7q5oB6yw55iTHsqM414FgqfCof/imTPJ4PjqlSvxxTp8OLTBPU6b4KFXuHNapTV37abmaBjkazPmlQm+ixSv8hIX3fV0UO63fdXGLYIcuoA6EPg1vGaAFg+ckGTHeTYclolgj9CR5cZguO2esimL6GnpPlozGbf0pGKI0PNq+Z3f42Z6MORrI7GF3uxSw/vujKz3ie3T7PNKuHQ9lt2Qa01+3+cWnljOf5D1peRPKWrlewAAAAAElFTkSuQmCC"
        />
      </div>
    </div>
  );
};

export default Head;
