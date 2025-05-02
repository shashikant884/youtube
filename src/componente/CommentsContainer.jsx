const CommentList = ({ name, text }) => {
  return (
    <div className="flex ">
      <div className="mx-5">
        <img
          className="w-12 h-12"
          alt="user_icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
      <p className="font-bold">{name}</p>
      <p>{text}</p>
    </div>
  );
};

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Shasikant",
      text: "i have taken this , in depth video explanation , good notes for each topic , project is top notch. aur kya chahiye.",
      replies: [],
    },
    {
      name: "Shasikant",
      text: "i have taken this , in depth video explanation , good notes for each topic , project is top notch. aur kya chahiye.",
      replies: [],
    },
    {
      name: "Shasikant",
      text: "i have taken this , in depth video explanation , good notes for each topic , project is top notch. aur kya chahiye.",
      replies: [],
    },
  ];

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments </h1>
      {commentsData.map((comments, index) => (
        <CommentList key={index} name={comments.name} text={comments.text} />
      ))}
    </div>
  );
};

export default CommentsContainer;
