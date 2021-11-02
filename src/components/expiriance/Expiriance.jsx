import "./expiriance.scss";

export default function expiriance() {
  const data = [
    {
      id: 1,
      name: "University College Lillebelt UCL",
      title: "BA Web Development",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Managing the User interface of the Unicontrol Application. This includes creating consistent & easy-to-use UI within React, along with designing core features of the application.",
    },
    {
      id: 2,
      name: "Lillebælt Academy of Professional Higher education",
      title: "Multimedia Design and Communication",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Developing new functionality for the property platform and optimize the user experience. ",
      featured: true,
    },
    {
      id: 3,
      name: "University of Sylamany, Iraq",
      title: "Bachelor in Science and IT",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Developing and maintaining UI / UX and Various graphic tasks.",
    },
  ];
  return (
    <div className="expiriance" id="expiriance">
      <h1>Education</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
            <h3>{d.title}</h3>
            <h4>{d.name}</h4>

            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
            {/* <img
                className="user"
                src={d.img}
                alt=""
              /> */}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

