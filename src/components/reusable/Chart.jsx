import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({ rating, size }) => {
  // Function to convert rating to percentage
  const convertToPercentage = (rating) => {
    if (typeof rating === "number") {
      // If rating is a number from 1 to 10, convert it to a percentage out of 100
      return (rating / 5) * 100;
    } else if (typeof rating === "string" && rating.includes("/")) {
      // If rating is a string in the format "x/y", convert it to a percentage
      const parts = rating.split("/");
      const numerator = parseInt(parts[0]);
      const denominator = parseInt(parts[1]);
      return (numerator / denominator) * 100;
    } else {
      // Otherwise, return the rating as it is
      return parseInt(rating);
    }
  };

  const ratingPercentage = convertToPercentage(rating);

  // Function to determine color based on percentage
  const getColor = (percentage) => {
    if (percentage < 25) {
      return "#FF5733"; // Red color
    } else if (percentage >= 25 && percentage < 50) {
      return "#F9C74F"; // Yellow color
    } else {
      return "#2ECC71"; // Green color
    }
  };

  const options = {
    series: [ratingPercentage],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: rating.toString(), // Use rating as label
              formatter: function (w) {
                return "";
              },
            },
          },
        },
      },
      labels: ["Rating"], // Adjust label if needed
      theme: {
        monochrome: {
          enabled: true,
          color: getColor(ratingPercentage), // Dynamically set color based on percentage
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options.options}
          series={options.series}
          type="radialBar"
          height={size}
        />
      </div>
    </div>
  );
};

export default Chart;
