import { useEffect, useState } from "react";
import SkillsList from "../skillsList/SkillsList";
import "./skills.scss";
import {
  reactUiframework,
  frontEndframeworks,
  design,
  frontEndlanguage,
} from "../../data";

export default function Skills() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [


    {
      id: "design",
      title: "Design",
    },
    {
      id: "Front End Frameworks",
      title: "Frontend Frameworks",
    },
    {
      id: "frontEndlanguage",
      title: "Frontend Language ",
    },
    {
      id: "reactUiframework ",
      title: "React ui framework ",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "frontEndlanguage":
        setData(frontEndlanguage);
        break;
      case "reactUiframework":
        setData(reactUiframework);
        break;
   
      case "design":
        setData(design);
        break;

        case "frontEndframeworks":
          setData(frontEndframeworks);
          break;
  
      default:
        setData(frontEndframeworks);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <SkillsList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
