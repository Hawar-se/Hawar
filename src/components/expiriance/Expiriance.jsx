import "./expiriance.scss";

export default function expiriance() {
  const data = [
    {
      id: 1,
      name: "Unicontrol",
      title: "Frontend Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Managing the User interface of the Unicontrol Application. This includes creating consistent & easy-to-use UI within React, along with designing core features of the application.",
    },
    {
      id: 2,
      name: "Intercare",
      title: "Frontend Developer",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Developing new functionality for the property platform and optimize the user experience. ",
      featured: true,
    },
    {
      id: 3,
      name: "24 Hours",
      title: "Graphical Designer",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Developing and maintaining UI / UX and Various graphic tasks.",
    },
  ];
  return (
    <div className="expiriance" id="expiriance">
      <h1>Expiriance</h1>
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

