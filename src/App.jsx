import { useState } from "react";
import axios from "axios";
import {
  Card,
  CardFooter,
  CardImage,
  CardTemperature,
  CardTitle,
  Flex,
  Image,
} from "./components/Card/Card";
import Clear from "/image/clear.png";
import Cloud from "/image/cloud.png";
import Drizzle from "/image/drizzle.png";
import Rain from "/image/rain.png";
import Snow from "/image/snow.png";
import Wind from "/image/wind.png";
import Humidity from "/image/humidity.png";
import Search from "/image/search.png";

function App() {
  const [data, setData] = useState({
    name: "",
    main: { temp: 0, humidity: null },
    wind: { speed: null },
  });

  const [icon, setIcon] = useState(Clear);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle");

  const API_KEY = `31c241d2a76e9d1067f848044c37c9f6`;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;

  const getIcon = (weather) => {
    switch (weather) {
      case "Clouds":
        return setIcon(Cloud);
      case "Drizzle":
        return setIcon(Drizzle);
      case "Rain":
        return setIcon(Rain);
      case "Snow":
        return setIcon(Snow);
      case "Wind":
        return setIcon(Wind);
      case "Clear":
        return setIcon(Clear);
    }
  };

  const handleSubmit = () => handleFetchData();

  const handleFetchData = async () => {
    try {
      setStatus("loading");
      const { data } = await axios.get(URL);

      getIcon(data.weather[0].main);
      setData(data);
      return setStatus("success");
    } catch (e) {
      setStatus("error");
      if (!query) return setStatus("customError");
      console.log("Error: ", e.message);
    }
  };

  return (
    <>
      <div className="flex items-center py-6 px-5">
        <h1 className="font-bold text-xl">What❓'s the Weather</h1>
      </div>

      <div className="max-w-sm mx-auto space-y-4 mt-4">
        <Flex items="center" justify="center" colGap="10px" className="w-full">
          <input
            className="py-3 px-6 w-full rounded-full focus:outline-0 text-sm placeholder:text-zinc-400 text-zinc-500 font-medium"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onSelect={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="p-4 bg-white rounded-full outline-0"
          >
            <img src={Search} alt={Search} className="h-4 w-4 object-cover" />
          </button>
        </Flex>

        {status === "loading" && <p>Loading...</p>}
        {status === "customError" && (
          <p className="text-center">
            Please put <strong> City </strong> or <strong>Province</strong>{" "}
            before submitting. Thank you! 😁
          </p>
        )}
        {status === "error" && (
          <p>
            <strong>Sorry No result found for:</strong> {query}
          </p>
        )}
        {status === "success" && (
          <Card>
            <Image src={icon} alt={icon} />
            <CardTemperature>
              {Math.round(data.main.temp)}&#176;c
            </CardTemperature>
            <CardTitle className="mb-10">{data.name}</CardTitle>

            <CardFooter>
              <Flex colGap="8px">
                <CardImage src={Humidity} alt="wind" />
                <Flex direction="column">
                  <p className="leading-3 font-bold mb-1">
                    {data.main.humidity}%
                  </p>
                  <small className="font-semibold text-xs uppercase">
                    Humidity
                  </small>
                </Flex>
              </Flex>
              <Flex gap="8px">
                <CardImage src={Wind} alt="wind" />
                <Flex direction="column">
                  <p className="leading-3 font-bold mb-1">
                    {data.wind.speed} km/h
                  </p>
                  <small className="font-semibold text-xs uppercase">
                    Wind Speed
                  </small>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>
        )}
      </div>
    </>
  );
}

export default App;
