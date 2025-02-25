import { useState } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
const Profile = ({ user, setUser }) => {
  // eslint-disable-next-line no-unused-vars
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.function,
};

export default Profile;
