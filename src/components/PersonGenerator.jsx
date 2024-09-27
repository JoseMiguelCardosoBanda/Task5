import React, { useCallback, useEffect } from "react";
import { faker, Randomizer } from "@faker-js/faker";
import { faker as fakerUSA } from "@faker-js/faker";
import { fakerES_MX as fakerMX } from "@faker-js/faker";
import { fakerIT as fakerI } from "@faker-js/faker";

function PersonGenerator({ errors, region }) {
  let data = [];

  function regionSwitch(r) {
    switch (r) {
      case "MX":
        dataGenMX();
        break;
      case "USA":
        dataGenUSA();
        break;
      case "ITA":
        dataGenITA();
        break;
    }
  }

  function dataGenMX() {
    data = [];
    for (let x = 1; x < 21; x++) {
      let index = x;
      let randomID = faker.string.uuid();
      let name = fakerMX.person.firstName() + " " + fakerMX.person.lastName();
      let fullAdd =
        fakerMX.location.streetAddress({ useFullAddress: true }) +
        ", " +
        fakerMX.location.city() +
        ", " +
        fakerMX.location.state();
      let phone = fakerMX.phone.number({ style: "national" });
      let jsonData = JSON.stringify({
        index: index,
        randomID: randomID,
        name: name,
        fullAdd: fullAdd,
        phone: phone,
      });
      data.push(JSON.parse(jsonData));
    }
    return data;
  }

  function dataGenUSA() {
    data = [];
    for (let y = 1; y < 21; y++) {
      let index = y;
      let randomID = fakerUSA.string.uuid();
      let name = fakerUSA.person.firstName() + " " + fakerUSA.person.lastName();
      let fullAdd =
        fakerUSA.location.streetAddress({ useFullAddress: true }) +
        ", " +
        fakerUSA.location.city() +
        ", " +
        fakerUSA.location.state();
      let phone = fakerUSA.phone.number({ style: "international" });
      let jsonData = JSON.stringify({
        index,
        randomID,
        name,
        fullAdd,
        phone,
      });

      data.push(JSON.parse(jsonData));
    }
    return data;
  }

  function dataGenITA() {
    data = [];
    for (let z = 1; z < 21; z++) {
      let index = z;
      let randomID = fakerI.string.uuid();
      let name =
        fakerI.person.firstName({ useFullAddress: true }) +
        " " +
        fakerI.person.lastName();
      let fullAdd =
        fakerI.location.streetAddress() +
        ", " +
        fakerI.location.city() +
        ", " +
        fakerI.location.state();
      let phone = fakerI.phone.number({ style: "national" });
      let jsonData = JSON.stringify({
        index,
        randomID,
        name,
        fullAdd,
        phone,
      });
      data.push(JSON.parse(jsonData));
    }
    return data;
  }

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      regionSwitch(region);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-fluid">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Random ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {regionSwitch(region)}
          {data.map((e) => (
            <tr key={e.index}>
              <td>{e.index}</td>
              <td>{e.randomID}</td>
              <td>{e.name}</td>
              <td>{e.fullAdd}</td>
              <td>{e.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonGenerator;
