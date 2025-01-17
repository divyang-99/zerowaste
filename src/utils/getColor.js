// // This function returns the color based on the selected parameter, current layer and the value of that parameter

// // Zustand imports
// import { useStore } from "../store/store.js";

// export default function getColor(value) {
//   // get the selected parameter from the store to determine the color scale
//   const selectedParameter = useStore.getState().selectedParameter;
//   const currentLayer = useStore.getState().currentLayer;
//   const selectedColorPalette = useStore.getState().selectedColorPalette;

//   // define the color scale for each parameter
//   // total waste
//   const magma = [
//     "#000004",
//     "#140e36",
//     "#3b0f70",
//     "#641a80",
//     "#8c2981",
//     "#b73779",
//     "#de4968",
//     "#f66e5d",
//     "#fe9444",
//     "#ffb62b",
//     "#ffdc27",
//     "#f6f64e",
//   ];

//   // dry waste
//   const viridis = [
//     "#440154",
//     "#482878",
//     "#3e4989",
//     "#31688e",
//     "#26828e",
//     "#1f9e89",
//     "#35b779",
//     "#6ece58",
//     "#b5de2b",
//     "#fde725",
//   ];

//   // wet waste
//   const turbo = [
//     "#301a1e",
//     "#7a2f5e",
//     "#bf518a",
//     "#e87f8f",
//     "#ffcc6e",
//     "#ffd55b",
//     "#ffed18",
//     "#f8f90a",
//     "#e1f82e",
//     "#f7f7f7"
//   ];

//   // population
//   const inferno = [
//     "#000004",
//     "#160b39",
//     "#420a68",
//     "#6a176e",
//     "#932667",
//     "#bc3754",
//     "#dd513a",
//     "#f37819",
//     "#fca50a",
//     "#f6d746",
//     "#fcffa4",
//   ];

//   // weight
//   const plasma = [
//     "#0d0887",
//     "#3a02b1",
//     "#6302a1",
//     "#8b0498",
//     "#b40486",
//     "#d6608d",
//     "#e8819e",
//     "#f9a8b6",
//     "#fbc6d2",
//     "#feebe2",
//     "#fff7f3",
//   ];

//   // define some variables

//   // get the value range of the selected parameter
//   let valueRange;

//   // get the color scale of the selected parameter
//   let colorScale;

//   // function to assign the value range and color scale based on the selected parameter and current layer
//   function assignRangesAndColorScale(selectedParameter, params) {
//     if(params.hasOwnProperty(selectedParameter)) {
//       valueRange = params[selectedParameter].slice(0, 2);
//       colorScale = params[selectedParameter][2];
//     } else {
//       throw new Error(`Invalid parameter: ${selectedParameter}`);
//     }
//   }

//   // switch cases
//   switch (currentLayer) {
//     case "ward":
//       assignRangesAndColorScale(selectedParameter, {
//         "population": [18000, 180000, inferno],
//         "dry_waste": [12000, 120000, viridis],
//         "wet_waste": [18000, 180000, turbo],
//         "total_waste": [24000, 240000, magma],
//         "weight": [1, 10, plasma]
//       });
//       break;
//     case "prabhag":
//       assignRangesAndColorScale(selectedParameter, {
//         "population": [1800, 18000, inferno],
//         "dry_waste": [1200, 12000, viridis],
//         "wet_waste": [1800, 18000, turbo],
//         "total_waste": [2400, 24000, magma],
//         "weight": [1, 10, plasma]
//       });
//       break;
//     case "region":
//       assignRangesAndColorScale(selectedParameter, {
//         "population": [180, 1800, inferno],
//         "dry_waste": [120, 1200, viridis],
//         "wet_waste": [180, 1800, turbo],
//         "total_waste": [240, 2400, magma],
//         "weight": [1, 10, plasma]
//       });
//       break;
//     case "building":
//       assignRangesAndColorScale(selectedParameter, {
//         "population": [18, 180, inferno],
//         "dry_waste": [12, 120, viridis],
//         "wet_waste": [18, 180, turbo],
//         "total_waste": [24, 240, magma],
//         "weight": [1, 10, plasma]
//       });
//       break;
//     default:
//       throw new Error(`Invalid layer: ${currentLayer}`);
//   }

//   // get the relative value based on the value range
//   let relativeValue = (value - valueRange[0]) / (valueRange[1] - valueRange[0]);
//   relativeValue = Math.max(0, Math.min(1, relativeValue)); // clamp between 0 and 1

//   // get the color index based on the relative value
//   let colorIndex = Math.floor(relativeValue * colorScale.length);

//   // return the color
//   return colorScale[colorIndex];
// }

import { useStore } from "../store/store.js";

export default function getColor(value) {
    // get the required state values from the Zustand store
    const selectedParameter = useStore((state) => state.selectedParameter);
    const currentLayer = useStore((state) => state.currentLayer);
    const selectedColorPalette = useStore.getState().selectedColorPalette;

    // Define color palettes as an object
    const colorPalettes = {
        Magma: [
          "#000004",
          "#140e36",
          "#3b0f70",
          "#641a80",
          "#8c2981",
          "#b73779",
          "#de4968",
          "#f66e5d",
          "#fe9444",
          "#ffb62b",
          "#ffdc27",
          "#f6f64e",
        ],
        Viridis: [
          "#440154",
          "#482878",
          "#3e4989",
          "#31688e",
          "#26828e",
          "#1f9e89",
          "#35b779",
          "#6ece58",
          "#b5de2b",
          "#fde725",
        ],
        // Add other color palettes as needed
        Turbo: [
          "#301a1e",
          "#7a2f5e",
          "#bf518a",
          "#e87f8f",
          "#ffcc6e",
          "#ffd55b",
          "#ffed18",
          "#f8f90a",
          "#e1f82e",
          "#f7f7f7"
        ],
        Inferno: [
          "#000004",
          "#160b39",
          "#420a68",
          "#6a176e",
          "#932667",
          "#bc3754",
          "#dd513a",
          "#f37819",
          "#fca50a",
          "#f6d746",
          "#fcffa4",
        ],
        Plasma: [
          "#0d0887",
          "#3a02b1",
          "#6302a1",
          "#8b0498",
          "#b40486",
          "#d6608d",
          "#e8819e",
          "#f9a8b6",
          "#fbc6d2",
          "#feebe2",
          "#fff7f3",
        ]
    };

    // // Ensure the selected color palette exists
    // if (!colorPalettes[selectedColorPalette]) {
    //     throw new Error(`Invalid color palette: ${selectedColorPalette}`);
    // }

    // Retrieve the current color scale based on the selected palette
    const currentColorScale = colorPalettes[selectedColorPalette];

    // Define the value ranges
    const valueRanges = {
        ward: {
            population: [18000, 180000],
            dry_waste: [12000, 120000],
            wet_waste: [18000, 180000],
            total_waste: [24000, 240000],
            weight: [1, 10]
        },
        prabhag: {
            population: [1800, 18000],
            dry_waste: [1200, 12000],
            wet_waste: [1800, 18000],
            total_waste: [2400, 24000],
            weight: [1, 10]
        },
        region: {
            population: [180, 1800],
            dry_waste: [120, 1200],
            wet_waste: [180, 1800],
            total_waste: [240, 2400],
            weight: [1, 10]
        },
        building: {
            population: [18, 180],
            dry_waste: [12, 120],
            wet_waste: [18, 180],
            total_waste: [24, 240],
            weight: [1, 10]
        }
    };

    // Ensure the value ranges exist for the current layer and parameter
    if (!valueRanges[currentLayer] || !valueRanges[currentLayer][selectedParameter]) {
        throw new Error(`Invalid layer-parameter combination: ${currentLayer}-${selectedParameter}`);
    }

    const [minValue, maxValue] = valueRanges[currentLayer][selectedParameter];

    // Compute the relative value based on the range
    let relativeValue = (value - minValue) / (maxValue - minValue);
    relativeValue = Math.max(0, Math.min(1, relativeValue)); // Clamp the value between 0 and 1

    // Determine the appropriate color based on the relative value
    const colorIndex = Math.floor(relativeValue * (currentColorScale.length - 1));

    // Return the corresponding color
    return currentColorScale[colorIndex];
}