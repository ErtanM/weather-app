![Static Badge](https://img.shields.io/badge/-Refactored-blue)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/highpriesst/weather-app)

# Weather Forecast Application

A simple React application to fetch and display weather data for a given city using the OpenWeatherMap API.

## Features

- Search for weather data by city name.
- Displays current weather conditions including temperature, humidity, wind speed, and more.
- Shows error messages for invalid city names or API issues.

## Prerequisites

- Node.js (>=14.x)
- npm or yarn (for package management)
- An OpenWeatherMap API key

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ertanm/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory of the project with the following content:

   ```env
   VITE_API_KEY=your_openweathermap_api_key
   ```

   Replace `your_openweathermap_api_key` with your actual OpenWeatherMap API key. You can obtain a key by signing up at [OpenWeatherMap](https://openweathermap.org/api).

4. **Start the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application should now be running at `http://localhost:3000` or the port specified in the terminal.

## Usage

1. **Search for Weather Data**

   - Enter a city name in the search bar.
   - Click the "Search" button or press Enter.
   - The weather information for the city will be displayed.

2. **Handling Errors**

   - If an invalid city name is entered, a message will be shown asking to enter a valid city name.
   - Errors from the API or other issues will be displayed appropriately.

## Components

1. **`SearchBar` Component**

   A form that allows users to input a city name and submit the search request.

   - **Props:**
     - `onSubmit` (function): Callback function for form submission.
     - `onChange` (function): Callback function for input field changes.
     - `cityName` (string): Current city name in the input field.
     - `placeholder` (string): Placeholder text for the input field.

2. **`WeatherCard` Component**

   Displays weather information for the selected city.

   - **Props:**
     - `icon` (string): Weather icon code.
     - `degree` (number): Temperature in Celsius.
     - `location` (string): City name.
     - `humidity` (number): Humidity percentage.
     - `windSpeed` (number): Wind speed in meters per second.
     - `country` (string): Country code.
     - `weatherDate` (number): Date and time of the weather data.
     - `visibility` (number): Visibility in meters.

3. **`useWeather` Hook**

   Custom hook for fetching and managing weather data from the OpenWeatherMap API.

   - **Parameters:**
     - `cityName` (string): The city name for which to fetch weather data.
   - **Returns:**
     - `weatherData` (object | null): Weather data for the city.
     - `error` (string | null): Error message, if any.
     - `loading` (boolean): Loading state.

## Contact

For any questions or issues, please reach out to [ertansofia@gmail.com](mailto:ertansofia@gmail.com).
