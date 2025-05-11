import { Link } from "react-router-dom";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Link to="/WebDev"><Button name="Web Development" /></Link>
      <Button name="Live" />
      <Button name="Sports" />
      <Button name="Cricket" />
      <Button name="Comedy" />
      <Button name="Cooking" />
      <Button name="Computer" />
      <Button name="Motivation" />
      <Button name="Recently uploaded" />
      <Button name="Peogramming" />
    </div>
  );
};

export default ButtonList;
