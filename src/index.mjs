import "./styles.css";

const myjson = [
  {
    Car1: {
      Color: "Rose red",
      "Tinted windows": false,
      "Wheels": 4,
      "Roof cargo": null,
      Entertaiment: ["FM Radio", "MP3, MP4 and MKV player", "harman/kardon speakers"],
      Accessories: ["satnav", "cruise control"]
    },
    Car2: {
      Color: "Navy blue",
      "Tinted windows": true,
      "Wheels": 4,
      "Roof cargo": "Thule",
      Entertaiment: ["FM Radio", "Apple CarPlay/Android Auto", "Bowers & Wilkins Preium Sound speakers"],
      Accessories: ["self drive system", "liggage cover"]
    }
  }
];

document.getElementById("app").innerHTML = `
<div id="json">
  <h1>Car properties </h1>
  <table>
    <tr>
      <td><strong>Property</strong></td>
      <td>Car 0</td>
      <td>Car 1</td>
    </tr>
    <tr>
      <td><strong>Color</strong></td>
      <td>${myjson[0].Car1.Color}</td>
      <td>${myjson[0].Car2.Color}</td>
    </tr>
    <tr>
      <td><strong>Tinted windows</strong></td>
      <td>${myjson[0].Car1["Tinted windows"]}</td>
      <td>${myjson[0].Car2["Tinted windows"]}</td>
    </tr>
    <tr>
      <td><strong>Wheels</strong></td>
      <td>${myjson[0].Car1["Wheels"]}</td>
      <td>${myjson[0].Car2["Wheels"]}</td>
    </tr>
    <tr>
      <td><strong>Roof cargo</strong></td>
      <td>${myjson[0].Car1["Roof cargo"]}</td>
      <td>${myjson[0].Car2["Roof cargo"]}</td>
    </tr>
    <tr>
      <td><strong>Entertaiment</strong></td>
      <td>${myjson[0].Car1["Entertaiment"]}</td>
      <td>${myjson[0].Car2["Entertaiment"]}</td>
    </tr>
    <tr>
      <td><strong>Accessories</strong></td>
      <td>${myjson[0].Car1["Accessories"]}</td>
      <td>${myjson[0].Car2["Accessories"]}</td>
    </tr>
  </table>

  
</div>
`;