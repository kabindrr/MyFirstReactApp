export const Profile = ({ nameProp, bioProp }) => {
  //   const { nameProp, bioProp } = props;
  //   console.log(props);
  return (
    <>
      <h1>Hello From React</h1>
      <hr />
      <h3>
        <div>
          Coded by {nameProp} <hr />
          <div>{bioProp}</div>
        </div>
      </h3>
    </>
  );
};

export const UserBio = () => {
  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tempora
      temporibus ab laudantium, reiciendis dolorum ut odio ad corporis
      doloremque, nobis quis enim, fugit nam maxime? Quis hic deserunt
      distinctio.
    </>
  );
};
