import { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUsername } from "../../redux/auth/auth-selectors";
import { authOperations } from "../../redux/auth";
import defaultAvatar from "./default-avatar.svg";
import "./UserMenu.scss";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  // const onLogout = () => {
  //   dispatch(authOperations.logout())
  // }

  const onLogout = useCallback(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  return (
    <div className="usermenu">
      <div className="usermenu-wrapper">
        <img src={defaultAvatar} alt="name" width="32" />
        <span className="usermenu-text">Welcome, {name} </span>
      </div>
      <button type="button" className="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

// const UserMenu = ({ name, avatar, onLogout }) => (
//   <div className="usermenu">
//     <div className="usermenu-wrapper">
//       <img src={avatar} alt="name" width="32" />
//       <span className="usermenu-text">Welcome, {name} </span>
//     </div>
//     <button type="button" className="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );

// const mapStateToProps = (state) => ({
//   name: getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logout,
// };
// // const mapDispatchToProps = dispatch =>({
// //     onLogout: () => dispatch(authOperations.logout()),
// // })

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
