import Button from "./Button";
import profileAvatar from "../assets/images/precious-avatar.jpg";

const Card = () => {
  return (
    <div className="card">
      {/* \social-links-profile\src\assets\images\precious-avatar.jpg" */}
      <img src={profileAvatar} alt="Profile avatar" />
      <h2>Amaechi Precious</h2>
      <p className="location">Calabar, Cross River, Nigeria</p>

      <p>"Fullstack developer and avid reader."</p>

      <Button link="https://github.com/precious-c" text="Github" />
      <Button
        link="https://https://www.frontendmentor.io/profile/Precious-c"
        text="Frontend Mentor"
      />
      <Button link="https://www.linkedin.com/in/precious-amaechi-983282217" text="Linkedln" />
      <Button link="https://twitter.com/chinagorom_1" text="X(Twitter)" />
      <Button link="https://instagram.com/mazi_ryder" text={"Instagram"} />
    </div>
  );
};

export default Card;
