"use client";

import React, { useState, KeyboardEvent, useEffect } from "react";
import { fetchWeather, WeatherResponse } from "../api/fetchWeather";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";

const DEFAULT_CITY = "Islamabad";

const HomePage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isOnline, setIsOnline] = useState(true);

  const search = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      if (!navigator.onLine) return; // no fetch if offline

      try {
        const data = await fetchWeather(query);
        setWeather(data);
        setQuery("");
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    }
  };

  // 🌐 Detect online/offline
  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    updateStatus();
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  // ☁️ Load default Islamabad weather when offline
  useEffect(() => {
    if (!isOnline) {
      fetchWeather(DEFAULT_CITY)
        .then((data) => setWeather(data))
        .catch((err) => console.log("Offline fallback error", err));
    }
  }, [isOnline]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        p: 2,
      }}
    >
      {!isOnline && (
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "rgba(255,255,255,0.3)",
            p: 1,
            borderRadius: 2,
            mb: 2,
            textAlign: "center",
            color: "white",
            fontWeight: 500,
          }}
        >
          ⚠️ You are offline. Showing weather for recent searched city. <br />
          Connect to the internet to search other cities.
        </Typography>
      )}

      <TextField
        variant="outlined"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
        disabled={!isOnline}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          width: "100%",
          maxWidth: 300,
          mb: 4,
        }}
        InputProps={{
          sx: { fontSize: "1rem" },
        }}
      />

      {weather && weather.main && (
        <Card
          sx={{
            backgroundColor: "rgba(255,255,255,0.15)",
            color: "white",
            textAlign: "center",
            borderRadius: 3,
            p: 2,
            boxShadow: 3,
            backdropFilter: "blur(10px)",
            minWidth: 280,
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {weather.name} <sup>{weather.sys.country}</sup>
            </Typography>

            <Typography variant="h3" sx={{ my: 2 }}>
              {Math.round(weather.main.temp)}°C
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                sx={{ width: 64, height: 64, backgroundColor: "transparent" }}
              />
              <Typography variant="h6" textTransform="capitalize">
                {weather.weather[0].description}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default HomePage;
