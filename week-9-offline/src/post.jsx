function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 20,
        margin: 20,
        borderRadius: 10,
        width: 400,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={image}
          alt="profile"
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            marginRight: 10,
          }}
        />

        <div>
          <div><b>{name}</b></div>
          <div>{subtitle}</div>
          <div>{time}</div>
        </div>
      </div>

      <p>{description}</p>
    </div>
  );
}

export default PostComponent;